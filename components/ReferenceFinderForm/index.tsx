import React, {useCallback, useState} from "react";
import {MainFormProps} from "@/components/ReferenceFinderForm/index.types";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {ProcessResponse, ProcessStreamResponse, StreamProcessStatus} from "@/lib/types";
import TextInput from "@/components/TextInput";
import FileUpload from "@/components/FileUpload";
import SubmitButton from "@/components/SubmitButton";
import {FileText, Upload} from "lucide-react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const MainForm: React.FC<MainFormProps> = ({
    resetFormState,
    setIsLoading,
    setResults,
    setShowResults,
    results,
    isLoading
}: MainFormProps) => {
    const [textInput, setTextInput] = useState("")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    
    const resetForm = () => {
        setTextInput("");
        setSelectedFile(null);
        resetFormState();
        // Reset file input
        const fileInput = document.getElementById("fileInput") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
    }

    /*
    // Gestisce l'invio del modulo senza streaming
    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault()
            if (!textInput.trim() && !selectedFile) {
                alert("Inserisci del testo o carica un file");
                return;
            }

            setIsLoading(true);
            setShowResults(false);

            const formData = new FormData()
            if (textInput.trim()) {
                formData.append("text", textInput)
            }
            if (selectedFile) {
                formData.append("file", selectedFile)
            }
            formData.append("response_as_stream", "false");

            try {
                const response: Response = await fetch(`${apiUrl}/process`, {
                    method: "POST",
                    body: formData,
                });

                const data: ProcessResponse = await response.json();
                if (data.error) {
                    alert(data.error)
                    console.error("Error from API:", data.error);
                    return;
                }

                setResults(data);
                setTimeout(() => setShowResults(true), 300);
            } catch (error) {
                alert("An error occurred during processing. \nMaybe the server is not reachable?");
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        },
        [textInput, selectedFile, setIsLoading, setShowResults, setResults],
    );
     */

    const handleSubmitWithStream = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            if (!textInput.trim() && !selectedFile) {
                alert("Inserisci del testo o carica un file");
                return;
            }

            setIsLoading(true);
            setShowResults(false);

            const formData = new FormData();
            if (textInput.trim()) {
                formData.append("text", textInput);
            }
            if (selectedFile) {
                formData.append("file", selectedFile);
            }
            formData.append("response_as_stream", "true");

            try {
                const response = await fetch(`${apiUrl}/process`, {
                    method: "POST",
                    body: formData,
                });

                if (!response.body) {
                    throw new Error("ReadableStream non supportato");
                }

                // Inizializza i risultati
                const initialResults: ProcessResponse = {
                    keywords: [],
                    queries: [],
                    videos: [],
                    done: false
                };
                setResults(initialResults);
                setShowResults(true);

                // Leggi lo stream
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let buffer = "";

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    buffer += decoder.decode(value, { stream: true });

                    // Elabora le righe complete nel buffer
                    const lines = buffer.split("\n");
                    buffer = lines.pop() || "";

                    for (const line of lines) {
                        if (line.trim() === "") continue;

                        try {
                            const data: ProcessStreamResponse = JSON.parse(line);

                            setResults(prevResults => {
                                const updatedResults: ProcessResponse = {
                                    keywords: data.keywords?.length ? data.keywords : prevResults.keywords,
                                    queries: data.queries?.length ? data.queries : prevResults.queries,
                                    videos: [
                                        ...prevResults.videos,
                                        ...((data.videos || []).filter(v => !prevResults.videos.some(prev => prev.video_id === v.video_id)))
                                    ],
                                    done: data.status === StreamProcessStatus.PROCESSING_COMPLETE,
                                    error: data.status === StreamProcessStatus.ERROR ? data.message : prevResults.error
                                };

                                return updatedResults;
                            });

                            if (data.status === StreamProcessStatus.KEYWORDS_EXTRACTED) {
                                setShowResults(true);
                            }
                        } catch (e) {
                            console.error("Errore nell'analisi dei dati stream:", e);
                        }
                    }
                }

                // Elabora eventuali dati rimanenti
                if (buffer.trim()) {
                    try {
                        const data: ProcessStreamResponse = JSON.parse(buffer);
                        setResults((prevResults: ProcessResponse) => ({
                            keywords: data.keywords?.length ? data.keywords : prevResults.keywords,
                            queries: data.queries?.length ? data.queries : prevResults.queries,
                            videos: [
                                ...prevResults.videos,
                                ...((data.videos || []).filter(v => !prevResults.videos.some(prev => prev.video_id === v.video_id)))
                            ],
                            done: data.status === StreamProcessStatus.PROCESSING_COMPLETE || prevResults.done,
                            error: data.status === StreamProcessStatus.ERROR ? data.message : prevResults.error
                        }));
                    } catch (e) {
                        console.error("Errore nell'analisi del buffer finale:", e);
                    }
                }
            } catch (error) {
                alert("An error occurred during processing. \nMaybe the server is not reachable?");
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        },
        [textInput, selectedFile, setIsLoading, setShowResults, setResults],
    );
    
    return (
        <div className="flex justify-center mb-12">
            <Card className="w-full max-w-4xl shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-slide-up">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-center gap-4 text-center">
                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">Text Input</span>
                        </div>
                        <div className="text-gray-400">or</div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                            <Upload className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-purple-700">File Upload</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-8">
                    <form onSubmit={handleSubmitWithStream} className="space-y-6">
                        <TextInput setTextInput={setTextInput} textInput={textInput} />
                        <FileUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
                        <SubmitButton results={results} isLoading={isLoading} resetForm={resetForm} />
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default MainForm;