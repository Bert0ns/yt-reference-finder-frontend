export interface Video {
    title: string;
    description: string;
    thumbnail: string;
    video_id: string;
    url: string;
    relevance_score: number;
}

export interface ProcessResponse {
    keywords: string[];
    queries: string[];
    videos: Video[];
    error?: string;
}