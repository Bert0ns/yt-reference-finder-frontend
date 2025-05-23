import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {ResultsSectionProps} from "@/components/ResultsSection/index.types";
import VideoCard from "@/components/VideoCard";
import KeywordsList from "@/components/KeywordList";
import React from "react";


const ResultsSection: React.FC<ResultsSectionProps> = ({ results }: ResultsSectionProps) => {
    return (
        <div className="space-y-10">
            <Card>
                <CardHeader>
                    <CardTitle>Parole chiave identificate</CardTitle>
                </CardHeader>
                <CardContent>
                    <KeywordsList keywords={results.keywords} />
                </CardContent>
            </Card>

            <div>
                <h2 className="mb-6 text-2xl font-semibold">Video consigliati</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {results.videos.map((video) => (
                        <VideoCard key={video.video_id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ResultsSection;