import React, {useCallback, useState} from "react";
import {MainFormProps} from "@/components/ReferenceFinderForm/index.types";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {ProcessResponse} from "@/lib/types";
import TextInput from "@/components/TextInput";
import FileUpload2 from "@/components/FileUpload-2";
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
                alert("An error occurred during processing. \\nMaybe the server is not reachable?");
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
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <TextInput setTextInput={setTextInput} textInput={textInput} />
                        <FileUpload2 selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
                        <SubmitButton results={results} isLoading={isLoading} resetForm={resetForm} />
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default MainForm;