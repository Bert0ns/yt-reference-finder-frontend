"use client"
import React, {useEffect} from "react"
import {useCallback, useState} from "react"
import LoadingSpinner from "@/components/LoadingSpinner"
import ResultsSection from "@/components/ResultsSection"
import {ProcessResponse} from "@/lib/types"
import ReferenceFinderForm from "@/components/ReferenceFinderForm";
import ReferenceFinderPageHero from "@/components/ReferenceFinderPage/ReferenceFinderPageHero";
import {ResultsSectionRefHandle} from "@/components/ResultsSection/index.types";

export default function ReferenceFinderPage() {
    const [isLoading, setIsLoading] = useState(false)
    const initialResults = useCallback<() => ProcessResponse>(() => ({
        keywords: [],
        videos: [],
        queries: [],
        done: false,
        error: undefined
    }), []);
    const [results, setResults] = useState<ProcessResponse>(initialResults)
    const [showResults, setShowResults] = useState(false)

    const loadingSpinnerRef = React.useRef<HTMLDivElement>(null);
    const resultSectionRef = React.useRef<ResultsSectionRefHandle>(null);

    const resetForm = useCallback(() => {
        setResults(initialResults)
        setShowResults(false)
    }, [initialResults]);

    useEffect(() => {
        if(isLoading && loadingSpinnerRef.current && results.keywords.length === 0) {
            loadingSpinnerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if(showResults && resultSectionRef.current && results.keywords.length !== 0 && results.queries.length === 0 && results.videos.length === 0) {
            resultSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            resultSectionRef.current.setActiveTab('keywords');
        }
        else if(showResults && resultSectionRef.current && results.keywords.length !== 0 && results.queries.length !== 0 && results.videos.length === 0) {
            resultSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            resultSectionRef.current.setActiveTab('queries');
        }
        else if(showResults && resultSectionRef.current && results.keywords.length !== 0 && results.queries.length !== 0 && results.videos.length !== 0) {
            resultSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            resultSectionRef.current.setActiveTab('videos');
        }
    }, [isLoading, results, showResults]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <ReferenceFinderPageHero />

                <ReferenceFinderForm resetFormState={resetForm}
                          setIsLoading={setIsLoading}
                          setShowResults={setShowResults}
                          setResults={setResults}
                          results={results}
                          isLoading={isLoading} />

                {isLoading && <LoadingSpinner ref={loadingSpinnerRef}/>}

                {showResults && (
                    <ResultsSection ref={resultSectionRef}
                                    keywords={results.keywords}
                                    videos={results.videos}
                                    queries={results.queries}
                                    done={results.done}
                    />
                )}
            </div>
        </div>
    )
}