"use client"
import React, {useEffect} from "react"
import {useCallback, useState} from "react"
import LoadingSpinner from "@/components/LoadingSpinner"
import ResultsSection from "@/components/ResultsSection"
import {ProcessResponse} from "@/lib/types"
import MainPageHero from "../../components/ReferenceFinderPage/MainPageHero";
import MainForm from "../../components/ReferenceFinderPage/MainForm";


export default function StudyTubePage() {
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState<ProcessResponse | null>(null)
    const [showResults, setShowResults] = useState(false)

    const loadingSpinnerRef = React.useRef<HTMLDivElement>(null);
    const resultSectionRef = React.useRef<HTMLDivElement>(null);

    const resetForm = useCallback(() => {
        setResults(null)
        setShowResults(false)
    }, []);

    useEffect(() => {
        if(isLoading && loadingSpinnerRef.current) {
            loadingSpinnerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if(!isLoading && !!results && resultSectionRef.current) {
            resultSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isLoading, results]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <MainPageHero />

                <MainForm resetFormState={resetForm}
                          setIsLoading={setIsLoading}
                          setShowResults={setShowResults}
                          setResults={setResults}
                          results={results}
                          isLoading={isLoading} />

                {isLoading && <LoadingSpinner ref={loadingSpinnerRef}/>}

                {results && showResults && !isLoading && <ResultsSection ref={resultSectionRef}
                                                                         keywords={results.keywords}
                                                                         videos={results.videos}
                                                                         queries={results.queries}/>}
            </div>
        </div>
    )
}