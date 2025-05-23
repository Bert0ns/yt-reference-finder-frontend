import { NextRequest, NextResponse } from "next/server"
import {ProcessResponse} from "@/lib/types";


export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const text = formData.get("text") as string | null
        const file = formData.get("file") as File | null

        if (!text && !file) {
            return NextResponse.json<ProcessResponse>({
                error: "Nessun testo o file fornito",
                keywords: [],
                queries: [],
                videos: []
            }, { status: 400 })
        }

        // Simulazione di una richiesta al backend Python
        // In produzione, qui chiameresti il backend effettivo

        // Aggiungi un ritardo artificiale per simulare l'elaborazione
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Dati di esempio
        const mockResponse: ProcessResponse = {
            keywords: ["intelligenza artificiale", "machine learning", "deep learning", "reti neurali", "algoritmi"],
            queries: ["lezione intelligenza artificiale spiegazione", "tutorial machine learning", "reti neurali semplici"],
            videos: [
                {
                    title: "Introduzione all'Intelligenza Artificiale",
                    description: "In questo video introduttivo parleremo dei concetti base dell'intelligenza artificiale e delle sue applicazioni nel mondo moderno.",
                    thumbnail: "https://i.ytimg.com/vi/mJeNghZXtMo/hqdefault.jpg",
                    video_id: "mJeNghZXtMo",
                    url: "https://www.youtube.com/watch?v=mJeNghZXtMo",
                    relevance_score: 0.95
                },
                {
                    title: "Machine Learning Spiegato Semplice",
                    description: "Una spiegazione chiara e concisa di come funziona il machine learning e perché è importante nella tecnologia moderna.",
                    thumbnail: "https://i.ytimg.com/vi/f_uwKZIAeM0/hqdefault.jpg",
                    video_id: "f_uwKZIAeM0",
                    url: "https://www.youtube.com/watch?v=f_uwKZIAeM0",
                    relevance_score: 0.89
                },
                {
                    title: "Le Reti Neurali: Come Funzionano?",
                    description: "Questo video esplora il funzionamento delle reti neurali artificiali, la base del deep learning moderno.",
                    thumbnail: "https://i.ytimg.com/vi/aircAruvnKk/hqdefault.jpg",
                    video_id: "aircAruvnKk",
                    url: "https://www.youtube.com/watch?v=aircAruvnKk",
                    relevance_score: 0.82
                },
                {
                    title: "Deep Learning: Dalle Basi alle Applicazioni",
                    description: "Un'esplorazione completa del deep learning, dalle fondamenta teoriche alle applicazioni pratiche nel mondo reale.",
                    thumbnail: "https://i.ytimg.com/vi/0VH1Lim8gL8/hqdefault.jpg",
                    video_id: "0VH1Lim8gL8",
                    url: "https://www.youtube.com/watch?v=0VH1Lim8gL8",
                    relevance_score: 0.75
                }
            ]
        }

        return NextResponse.json<ProcessResponse>(mockResponse)
    } catch (error) {
        console.error("Errore durante l'elaborazione:", error)
        return NextResponse.json<ProcessResponse>({
            error: "Si è verificato un errore durante l'elaborazione della richiesta",
            keywords: [],
            queries: [],
            videos: []
        }, { status: 500 })
    }
}