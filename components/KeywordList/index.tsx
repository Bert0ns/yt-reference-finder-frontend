"use client"
import { Badge } from "@/components/ui/badge"
import {KeywordsListProps} from "@/components/KeywordList/index.types";
import React from "react";


const KeywordsList: React.FC<KeywordsListProps> = ({ keywords }: KeywordsListProps) => {
    return (
        <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
                <Badge key={index} variant="keyword" className="px-3 py-1">
                    {keyword}
                </Badge>
            ))}
        </div>
    )
}
export default KeywordsList;