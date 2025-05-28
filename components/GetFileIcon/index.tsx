import React from "react";
import {File as FileIcon} from "lucide-react";
import {GetFileIconProps} from "@/components/GetFileIcon/index.types";

const GetFileIcon: React.FC<GetFileIconProps> = ({fileName}) => {
    const extension = fileName.split(".").pop()?.toLowerCase()

    switch (extension) {
        case "pdf":
            return (
                <div className="p-2 bg-red-100 rounded-lg">
                    <FileIcon className="w-5 h-5 text-red-600" />
                </div>
            )
        case "doc":
        case "docx":
            return (
                <div className="p-2 bg-blue-100 rounded-lg">
                    <FileIcon className="w-5 h-5 text-blue-600" />
                </div>
            )
        case "txt":
            return (
                <div className="p-2 bg-gray-100 rounded-lg">
                    <FileIcon className="w-5 h-5 text-gray-600" />
                </div>
            )
        case "xls":
        case "xlsx":
        case "csv":
            return (
                <div className="p-2 bg-green-100 rounded-lg">
                    <FileIcon className="w-5 h-5 text-green-600" />
                </div>
            )
        default:
            return (
                <div className="p-2 bg-purple-100 rounded-lg">
                    <FileIcon className="w-5 h-5 text-purple-600" />
                </div>
            )
    }
}
export default GetFileIcon;
