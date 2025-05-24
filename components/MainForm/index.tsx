import React, {useCallback, useState} from "react";
import {MainFormProps} from "@/components/MainForm/index.types";
import {Card, CardContent} from "@/components/ui/card";
import {ProcessResponse} from "@/lib/types";
import TextInput from "@/components/TextInput";
import FileUpload2 from "@/components/FileUpload-2";
import SubmitButton from "@/components/SubmitButton";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const MainForm: React.FC<MainFormProps> = ({resetFormState, setIsLoading, setResults, setShowResults, results, isLoading}: MainFormProps) => {
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
                alert("Si è verificato un errore durante l'elaborazione. \nForse il server non è raggiungibile?");
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        },
        [textInput, selectedFile, setIsLoading, setShowResults, setResults],
    );
    
    return (
        <div className="flex justify-center mb-8">
            <Card className="w-full max-w-2xl shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-slide-up">
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