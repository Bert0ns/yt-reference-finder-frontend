"use client"
import type React from "react"
import {useCallback, useState} from "react"
import {FileText, Search, Upload, Video} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Textarea} from "@/components/ui/textarea"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import LoadingSpinner from "@/components/LoadingSpinner"
import ResultsSection from "@/components/ResultsSection"

interface VideoResult {
    id: string
    title: string
    description: string
    thumbnail: string
    url: string
    relevance_score: number
}

interface ProcessResponse {
    keywords: string[]
    videos: VideoResult[]
    error?: string
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

export default function StudyTubePage() {
    const [textInput, setTextInput] = useState("")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState<ProcessResponse | null>(null)
    const [showResults, setShowResults] = useState(false)

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setSelectedFile(file)
    }, [])

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault()

            if (!textInput.trim() && !selectedFile) {
                alert("Inserisci del testo o carica un file")
                return
            }

            setIsLoading(true)
            setShowResults(false)

            try {
                const formData = new FormData()
                if (textInput.trim()) {
                    formData.append("text", textInput)
                }
                if (selectedFile) {
                    formData.append("file", selectedFile)
                }
                console.log()

                const response = await fetch(`${apiUrl}/process`, {
                    method: "POST",
                    body: formData,
                })

                const data: ProcessResponse = await response.json()

                if (data.error) {
                    alert(data.error)
                    return
                }

                setResults(data)
                setTimeout(() => setShowResults(true), 500)
            } catch (error) {
                alert("Si è verificato un errore durante l'elaborazione")
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        },
        [textInput, selectedFile],
    )

    const resetForm = useCallback(() => {
        setTextInput("")
        setSelectedFile(null)
        setResults(null)
        setShowResults(false)
        // Reset file input
        const fileInput = document.getElementById("fileInput") as HTMLInputElement
        if (fileInput) fileInput.value = ""
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                            <Video className="w-8 h-8 text-white"/>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            StudyTube
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Carica i tuoi appunti di studio e trova video YouTube rilevanti per approfondire i tuoi
                        argomenti
                    </p>
                </div>

                {/* Main Form */}
                <div className="flex justify-center mb-8">
                    <Card className="w-full max-w-2xl shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-slide-up">
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Text Input */}
                                <div className="space-y-2">
                                    <Label htmlFor="textInput"
                                           className="text-base font-semibold text-gray-700 flex items-center gap-2">
                                        <FileText className="w-4 h-4"/>
                                        Incolla i tuoi appunti qui:
                                    </Label>
                                    <Textarea
                                        id="textInput"
                                        value={textInput}
                                        onChange={(e) => setTextInput(e.target.value)}
                                        placeholder="Inserisci qui i tuoi appunti di studio..."
                                        className="min-h-[150px] resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                                    />
                                </div>

                                {/* File Upload */}
                                <div className="space-y-2">
                                    <Label htmlFor="fileInput"
                                           className="text-base font-semibold text-gray-700 flex items-center gap-2">
                                        <Upload className="w-4 h-4"/>
                                        Oppure carica un file:
                                    </Label>
                                    <Input
                                        id="fileInput"
                                        type="file"
                                        onChange={handleFileChange}
                                        accept=".pdf,.jpg,.jpeg,.png,.txt"
                                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 h-11 file:py-2 file:mr-4 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 flex items-center justify-center"
                                    />
                                    <p className="text-sm text-gray-500">Formati supportati: PDF, JPG, PNG, TXT</p>
                                    {selectedFile && (
                                        <div
                                            className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg animate-fade-in">
                                            <FileText className="w-4 h-4 text-blue-600"/>
                                            <span
                                                className="text-sm text-blue-700 font-medium">{selectedFile.name}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="flex gap-3">
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div
                                                    className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"/>
                                                Analisi in corso...
                                            </>
                                        ) : (
                                            <>
                                                <Search className="w-4 h-4 mr-2"/>
                                                Analizza e Trova Video
                                            </>
                                        )}
                                    </Button>

                                    {(results || isLoading) && (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={resetForm}
                                            disabled={isLoading}
                                            className="px-6 py-3 rounded-xl border-gray-300 hover:bg-gray-50 transition-all duration-200"
                                        >
                                            Reset
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Loading State */}
                {isLoading && <LoadingSpinner/>}

                {/* Results */}
                {results && showResults && !isLoading && <ResultsSection keywords={results.keywords} videos={results.videos}/>}
            </div>
        </div>
    )
}