export interface Thumbnail {
    url: string
    width: number
    height: number
}

export interface Thumbnails {
    default?: Thumbnail
    medium?: Thumbnail
    high?: Thumbnail
    standard?: Thumbnail
    maxres?: Thumbnail
}

export interface VideoResult {
    title: string
    description: string
    video_id: string
    thumbnails: Thumbnails
    url: string
    relevance_score: number
    engagement_score: number;
    channel_id: string;
    channel_subscribers: number;
    like_count: number;
    view_count: number;
}

export interface ProcessResponse {
    keywords: string[]
    videos: VideoResult[]
    queries: string[]
    done: boolean
    error?: string
}

export enum StreamProcessStatus {
    ERROR = 'error',
    FILE_RECEIVED = 'file_received',
    FILE_PROCESSED = 'file_processed',
    EXTRACTING_KEYWORDS = 'extracting_keywords',
    KEYWORDS_EXTRACTED = 'keywords_extracted',
    GENERATING_QUERIES = 'generating_queries',
    QUERIES_GENERATED = 'queries_generated',
    YOUTUBE_SEARCH_STARTED = 'youtube_search_started',
    YOUTUBE_SEARCH_COMPLETED = 'youtube_search_completed',
    PROCESSING_COMPLETE = 'processing_complete'
}

export interface ProcessStreamResponse {
    status: StreamProcessStatus;
    message: string;
    keywords: string[];
    queries: string[];
    videos: VideoResult[];
    filename?: string;
    file_content?: string;
    //[key: string]: any; // Per eventuali proprietà dinamiche da kwargs
}