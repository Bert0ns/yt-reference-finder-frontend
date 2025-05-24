"use client"
import type React from "react"
import {useCallback, useState} from "react"
import LoadingSpinner from "@/components/LoadingSpinner"
import ResultsSection from "@/components/ResultsSection"
import {ProcessResponse} from "@/lib/types"
import MainPageHero from "@/components/MainPageHero";
import MainForm from "@/components/MainForm";


export default function StudyTubePage() {
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState<ProcessResponse | null>(null)
    const [showResults, setShowResults] = useState(false)

    const resetForm = useCallback(() => {
        setResults(null)
        setShowResults(false)
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <MainPageHero />

                {/* Main Form */}
                <MainForm resetFormState={resetForm}
                          setIsLoading={setIsLoading}
                          setShowResults={setShowResults}
                          setResults={setResults}
                          results={results}
                          isLoading={isLoading} />

                {/* Loading State */}
                {isLoading && <LoadingSpinner/>}

                {/* Results */}
                {results && showResults && !isLoading && <ResultsSection keywords={results.keywords} videos={results.videos}/>}
            </div>
        </div>
    )
}