import {Label} from "@/components/ui/label";
import {FileText, Upload} from "lucide-react";
import {Input} from "@/components/ui/input";
import React, {useCallback} from "react";
import {FileUpload2Props} from "@/components/FileUpload-2/index.types";


const FileUpload2: React.FC<FileUpload2Props> = ({selectedFile, setSelectedFile}) => {
    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setSelectedFile(file)
    }, [setSelectedFile]);

    return (
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
    );
}
export default FileUpload2;