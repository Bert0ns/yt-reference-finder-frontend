import { type NextRequest, NextResponse } from "next/server"

// Mock data for demonstration
const mockKeywords = [
    "machine learning",
    "algoritmi",
    "reti neurali",
    "deep learning",
    "intelligenza artificiale",
    "python",
    "tensorflow",
    "data science",
]

const mockVideos = [
    {
        video_id: "1",
        title: "Introduzione al Machine Learning - Corso Completo",
        description:
            "Un corso completo che copre tutti i fondamenti del machine learning, dagli algoritmi di base alle reti neurali avanzate. Perfetto per principianti e studenti universitari.",
        thumbnails: {
            default: {
                url: "/placeholder.svg?height=200&width=300",
                width: 300,
                height: 200,
            },
            medium: {
                url: "/placeholder.svg?height=240&width=426",
                width: 426,
                height: 240,
            },
            high: {
                url: "/placeholder.svg?height=360&width=640",
                width: 640,
                height: 360,
            },
        },
        url: "https://youtube.com/watch?v=example1",
        relevance_score: 0.95,
        engagement_score: 0.92,
        channel_id: "channel-1",
        channel_subscribers: 125000,
        like_count: 5200,
        view_count: 210000,
    },
    {
        video_id: "2",
        title: "Algoritmi di Deep Learning Spiegati Semplicemente",
        description:
            "Una spiegazione chiara e dettagliata degli algoritmi di deep learning più importanti, con esempi pratici e implementazioni in Python.",
        thumbnails: {
            default: {
                url: "/placeholder.svg?height=200&width=300",
                width: 300,
                height: 200,
            },
            medium: {
                url: "/placeholder.svg?height=240&width=426",
                width: 426,
                height: 240,
            },
            high: {
                url: "/placeholder.svg?height=360&width=640",
                width: 640,
                height: 360,
            },
        },
        url: "https://youtube.com/watch?v=example2",
        relevance_score: 0.88,
        engagement_score: 0.84,
        channel_id: "channel-2",
        channel_subscribers: 98000,
        like_count: 4100,
        view_count: 165000,
    },
    {
        video_id: "3",
        title: "Reti Neurali: Teoria e Pratica",
        description:
            "Scopri come funzionano le reti neurali artificiali, dalla teoria matematica alle applicazioni pratiche nel mondo reale.",
        thumbnails: {
            default: {
                url: "/placeholder.svg?height=200&width=300",
                width: 300,
                height: 200,
            },
            medium: {
                url: "/placeholder.svg?height=240&width=426",
                width: 426,
                height: 240,
            },
            high: {
                url: "/placeholder.svg?height=360&width=640",
                width: 640,
                height: 360,
            },
        },
        url: "https://youtube.com/watch?v=example3",
        relevance_score: 0.82,
        engagement_score: 0.78,
        channel_id: "channel-3",
        channel_subscribers: 67000,
        like_count: 3200,
        view_count: 142000,
    },
    {
        video_id: "4",
        title: "Python per Data Science - Tutorial Avanzato",
        description:
            "Impara ad utilizzare Python per la data science con librerie come NumPy, Pandas, Matplotlib e Scikit-learn.",
        thumbnails: {
            default: {
                url: "/placeholder.svg?height=200&width=300",
                width: 300,
                height: 200,
            },
            medium: {
                url: "/placeholder.svg?height=240&width=426",
                width: 426,
                height: 240,
            },
            high: {
                url: "/placeholder.svg?height=360&width=640",
                width: 640,
                height: 360,
            },
        },
        url: "https://youtube.com/watch?v=example4",
        relevance_score: 0.76,
        engagement_score: 0.71,
        channel_id: "channel-4",
        channel_subscribers: 45000,
        like_count: 2100,
        view_count: 98000,
    },
]

const mockQueries = [
    "introduzione machine learning",
    "deep learning tutorial italiano",
    "reti neurali spiegazione semplice",
    "python data science corso",
]

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const text = formData.get("text") as string
        const file = formData.get("file") as File

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 2000))

        if (!text && !file) {
            return NextResponse.json({ error: "Nessun contenuto fornito" }, { status: 400 })
        }

        // In a real implementation, you would:
        // 1. Extract text from uploaded files (PDF, images with OCR, etc.)
        // 2. Process the text to extract keywords using NLP
        // 3. Search YouTube API for relevant videos
        // 4. Calculate relevance scores

        // For now, return mock data
        const selectedKeywords = mockKeywords.slice(0, Math.floor(Math.random() * 4) + 3)
        const selectedVideos = mockVideos.slice(0, Math.floor(Math.random() * 2) + 3)

        const selectedQueries = mockQueries.slice(0, Math.floor(Math.random() * 3) + 2)

        return NextResponse.json({
            keywords: selectedKeywords,
            queries: selectedQueries,
            videos: selectedVideos,
            done: true,
        })
    } catch (error) {
        console.error("Error processing request:", error)
        return NextResponse.json({ error: "Errore interno del server" }, { status: 500 })
    }
}
