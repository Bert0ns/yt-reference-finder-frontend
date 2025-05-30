"use client";
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {ExternalLink, Star, Clock, MessageCircleQuestion} from "lucide-react"
import {ResultsSectionProps} from "@/components/ResultsSection/index.types";
import Image from "next/image";
import React, {forwardRef, useState} from "react";
import {VideoResult} from "@/lib/types";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";


const ResultsSection = forwardRef<HTMLDivElement, ResultsSectionProps>(
    ({ keywords, videos, queries }: ResultsSectionProps, ref) => {
        const [activeTab, setActiveTab] = useState("videos")

        // Calculate statistics
        const totalVideos = videos.length;
        const averageScore = videos.length > 0 ? videos.reduce((sum, video) => sum + video.engagement_score, 0) / videos.length : 0;

        return (
            <div ref={ref} className="space-y-8 animate-slide-up">
                {/* Results Summary Card */}
                <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <CardContent className="p-4">
                        <h2 className="text-2xl font-bold mb-2">Analysis Results</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2">
                                <div className="text-2xl font-bold">{keywords.length}</div>
                                <div className="text-sm text-white/80">Keywords Identified</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2">
                                <div className="text-2xl font-bold">{totalVideos}</div>
                                <div className="text-sm text-white/80">Videos Found</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2">
                                <div className="text-2xl font-bold">{(averageScore * 100).toFixed(1)}%</div>
                                <div className="text-sm text-white/80">Average Relevance</div>
                            </div>
                        </div>

                        {/*
                        <div className="flex justify-end gap-2 mt-0">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                            <Bookmark className="w-4 h-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Save results</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        */}
                    </CardContent>
                </Card>

                {/* Tabs for different result types */}
                <Tabs defaultValue="videos" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-3 mb-8">
                        <TabsTrigger value="keywords" className="text-base">
                            Keywords
                        </TabsTrigger>
                        <TabsTrigger value="queries" className="text-base">
                            Search Queries
                        </TabsTrigger>
                        <TabsTrigger value="videos" className="text-base">
                            Videos
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="videos" className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-green-500" />
                            Recommended Videos
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {videos.map((video: VideoResult, index: number) => (
                                <Card
                                    key={`video-${video.id}-${index}`}
                                    className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-0 bg-white/80 backdrop-blur-sm animate-slide-up overflow-hidden"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={video.thumbnail || "/placeholder.svg?height=300&width=500"}
                                            alt={video.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                            width={500}
                                            height={300}
                                        />
                                        <div className="absolute top-3 right-3">
                                            <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-lg">
                                                {(video.engagement_score * 100).toFixed(1)}%
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-6">
                                        <h5 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                                            {video.title}
                                        </h5>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>

                                        <Button
                                            asChild
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                                        >
                                            <a
                                                href={video.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Watch Video
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="keywords" className="space-y-6">
                        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Keywords Identified
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {keywords.map((keyword, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="px-4 py-2 text-base font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 hover:from-blue-200 hover:to-purple-200 transition-all duration-200 animate-fade-in"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {keyword}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="queries" className="space-y-6">
                        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <MessageCircleQuestion className="w-5 h-5 text-yellow-500" />
                                    Search Queries Used
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {queries.map((query, index) => (
                                        <Badge
                                            key={index}
                                            variant="default"
                                            className="px-4 py-2 text-base font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 hover:from-blue-200 hover:to-purple-200 transition-all duration-200 animate-fade-in"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {query}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        )
    },
);
ResultsSection.displayName = "ResultsSection";
export default ResultsSection;