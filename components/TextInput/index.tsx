"use client"
import { Label } from "@/components/ui/label"
import { FileText } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import type React from "react"
import type { TextInputProps } from "@/components/TextInput/index.types"

const TextInput: React.FC<TextInputProps> = ({ setTextInput, textInput }) => {
    return (
        <div className="space-y-4">
            <Label htmlFor="textInput" className="text-lg font-semibold text-gray-700 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-600" />
                </div>
                Paste your study notes or research text here:
            </Label>
            <Textarea
                id="textInput"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Enter your study notes, research papers, lecture content, or any educational material you'd like to find related videos for..."
                className="min-h-[200px] resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 text-base leading-relaxed p-4 rounded-xl"
            />
            <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                The more detailed your text, the better video recommendations you&#39;ll receive
            </p>
        </div>
    )
};
export default TextInput;