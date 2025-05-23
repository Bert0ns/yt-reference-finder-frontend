"use client"
import React, { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {TextInputProps} from "@/components/TextInput/index.types";


const TextInput: React.FC<TextInputProps> = ({ onSubmit, isLoading }: TextInputProps) => {
    const [text, setText] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!text.trim()) {
            alert("Per favore, inserisci del testo.")
            return
        }

        const formData = new FormData()
        formData.append("text", text)

        await onSubmit(formData)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Inserisci i tuoi appunti</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Textarea
                        className="mb-4 min-h-[160px]"
                        placeholder="Incolla qui i tuoi appunti di studio..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        disabled={isLoading}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? "Elaborazione..." : "Analizza Appunti"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default TextInput;