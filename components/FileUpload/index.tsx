//Attualmente non utilizzato ma è bello


"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import {FileUploadProps} from "@/components/FileUpload/index.types";


const FileUpload: React.FC<FileUploadProps> = ({ onSubmit, isLoading }: FileUploadProps) => {
    const [file, setFile] = useState<File | null>(null)
    const [dragActive, setDragActive] = useState<boolean>(false)

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()

        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0])
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!file) {
            alert("Per favore, seleziona un file.")
            return
        }

        const formData = new FormData()
        formData.append("file", file)

        await onSubmit(formData)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Carica un file</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} onDragEnter={handleDrag}>
                    <div
                        className={`mb-4 flex h-[160px] flex-col items-center justify-center rounded-md border-2 border-dashed p-6 transition-colors ${
                            dragActive
                                ? "border-primary bg-primary/5"
                                : "border-muted-foreground/25 hover:border-primary/50"
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <input
                            type="file"
                            id="fileInput"
                            onChange={handleChange}
                            accept=".pdf,.jpg,.jpeg,.png,.txt,.docx"
                            className="hidden"
                            disabled={isLoading}
                        />
                        <label htmlFor="fileInput" className="flex cursor-pointer flex-col items-center">
                            <svg
                                className="mb-2 h-10 w-10 text-primary/80"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                            </svg>
                            <span className="text-center text-sm text-muted-foreground">
                {file ? file.name : "Trascina qui il tuo file o clicca per selezionarlo"}
              </span>
                            <span className="mt-1 text-xs text-muted-foreground/80">
                PDF, JPG, PNG, TXT, DOCX
              </span>
                        </label>
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading || !file}
                    >
                        {isLoading ? "Elaborazione..." : "Analizza File"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default FileUpload;