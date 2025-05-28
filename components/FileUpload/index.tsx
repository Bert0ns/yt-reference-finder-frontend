"use client"
import React, { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Upload, X, Check, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {FileUploadProps} from "@/components/FileUpload/index.types";
import GetFileIcon from "@/components/GetFileIcon";


const FileUpload: React.FC<FileUploadProps> = ({ selectedFile, setSelectedFile }) => {
    const [dragActive, setDragActive] = useState(false);
    const [fileError, setFileError] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const allowedFileTypes = [
        "application/pdf",
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    const MAX_FILE_SIZE = 10*1024*1024;

    // Simulate upload progress when a file is selected
    React.useEffect(() => {
        if (selectedFile) {
            setUploadProgress(0)
            const interval = setInterval(() => {
                setUploadProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval)
                        return 100
                    }
                    return prev + 10
                })
            }, 100)
            return () => clearInterval(interval)
        }
    }, [selectedFile])

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    }

    const handleFile = (file: File) => {
        setFileError(null);

        if (!allowedFileTypes.includes(file.type)) {
            setFileError("Please upload a PDF, TXT, DOC, or DOCX");
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setFileError(`File size must be less than ${MAX_FILE_SIZE/1000000}MB`);
            return;
        }

        setSelectedFile(file);
    }

    const removeFile = () => {
        setSelectedFile(null);
        setFileError(null);
        setUploadProgress(0);
    }

    return (
        <div className="space-y-4">
            <Label htmlFor="fileInput" className="text-lg font-semibold text-gray-700 flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                    <Upload className="w-5 h-5 text-purple-600" />
                </div>
                Or upload a document:
            </Label>

            {!selectedFile ? (
                <div
                    className={`border-2 border-dashed rounded-xl p-8 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer ${
                        dragActive
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-300 hover:border-purple-400 hover:bg-purple-50/50"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("fileInput")?.click()}
                >
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleChange}
                        className="hidden"
                        accept=".pdf,.txt,.doc,.docx,.txt,.md,.png,.jpg,.jpeg"
                    />

                    <div className="p-4 bg-purple-100 rounded-full mb-4">
                        <Upload className="w-8 h-8 text-purple-600" />
                    </div>

                    <p className="text-center text-gray-600 mb-2">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-gray-500 text-center">PDF, TXT, DOC, DOCX, TXT, MD, PNG, JPG, JPEG (Max {Math.floor(MAX_FILE_SIZE/1000000)}MB each)</p>
                </div>
            ) : (
                <Card className="p-4 border-0 bg-white shadow-md">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <GetFileIcon fileName={selectedFile.name}/>
                            <div>
                                <p className="font-medium text-gray-800 truncate max-w-[200px] sm:max-w-[300px]">{selectedFile.name}</p>
                                <p className="text-sm text-gray-500">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                            </div>
                        </div>

                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={removeFile}
                            className="rounded-full hover:bg-red-50 hover:text-red-500"
                        >
                            <X className="w-5 h-5" />
                            <span className="sr-only">Remove file</span>
                        </Button>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-500">Upload complete</span>
                            <span className="text-xs font-medium text-gray-700">{uploadProgress}%</span>
                        </div>
                        <Progress value={uploadProgress} className="h-1.5" />
                    </div>

                    {uploadProgress === 100 && (
                        <div className="flex items-center gap-2 mt-3 text-green-600 text-sm">
                            <Check className="w-4 h-4" />
                            <span>File ready for analysis</span>
                        </div>
                    )}
                </Card>
            )}

            {fileError && (
                <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{fileError}</span>
                </div>
            )}

            <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Upload a document to analyze its content and find relevant videos
            </p>
        </div>
    )
}
export default FileUpload;