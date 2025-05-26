export interface VideoResult {
    id: string
    title: string
    description: string
    thumbnail: string
    url: string
    relevance_score: number
}

export interface ProcessResponse {
    keywords: string[]
    videos: VideoResult[]
    queries: string[]
    error?: string
}