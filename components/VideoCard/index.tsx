"use client"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import React from "react";
import {VideoCardProps} from "@/components/VideoCard/index.types";


const VideoCard: React.FC<VideoCardProps> = ({ video }: VideoCardProps) => {
    // Funzione per troncare la descrizione
    const truncateDescription = (text: string, maxLength: number = 120) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + "..."
    }

    // Calcola la percentuale di rilevanza
    const relevancePercentage = Math.round(video.relevance_score * 100)

    // Determina il tipo di badge in base alla rilevanza
    const getBadgeVariant = (score: number) => {
        if (score >= 80) return "high"
        if (score >= 60) return "medium"
        return "low"
    }

    return (
        <Card className="overflow-hidden transition-shadow hover:shadow-md">
            <div className="relative h-48 w-full">
                <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform hover:scale-105"
                />
                <div className="absolute bottom-2 right-2">
                    <Badge variant={getBadgeVariant(relevancePercentage) as any}>
                        {relevancePercentage}% rilevante
                    </Badge>
                </div>
            </div>

            <CardContent className="pt-4">
                <h3 className="line-clamp-2 mb-2 font-bold text-lg">
                    {video.title}
                </h3>
                <p className="line-clamp-3 text-sm text-muted-foreground">
                    {truncateDescription(video.description)}
                </p>
            </CardContent>

            <CardFooter>
                <Button
                    variant="youtube"
                    className="flex items-center"
                    asChild
                >
                    <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </svg>
                        Guarda Video
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}
export default VideoCard;