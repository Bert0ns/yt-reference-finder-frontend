import {Label} from "@/components/ui/label";
import {FileText} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import React from "react";
import {TextInputProps} from "@/components/TextInput/index.types";

const TextInput: React.FC<TextInputProps> = ({setTextInput, textInput}) => {
    return (
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
    )
}
export default TextInput;