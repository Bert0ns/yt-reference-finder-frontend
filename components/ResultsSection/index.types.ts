export interface VideoResult {
    id: string
    title: string
    description: string
    thumbnail: string
    url: string
    relevance_score: number
}

export interface ResultsSectionProps {
    keywords: string[]
    videos: VideoResult[]
}