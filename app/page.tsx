"use client"
import { useState } from "react"
import {ProcessResponse} from "@/lib/types";
import Navbar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import FileUpload from "@/components/FileUpload";
import ResultsSection from "@/components/ResultsSection";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : "http://localhost:5000";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [results, setResults] = useState<ProcessResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${apiUrl}/process`, {
        method: "POST",
        body: formData,
      })

      const data: ProcessResponse = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setResults(data)
      }
    } catch (err) {
      setError("Si è verificato un errore durante l'elaborazione della richiesta.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <>
        <Navbar />

        <main className="container flex-1 py-10">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-primary mb-3">StudyTube</h1>
              <p className="text-lg text-muted-foreground">
                Carica i tuoi appunti di studio e trova video YouTube rilevanti
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <TextInput onSubmit={handleSubmit} isLoading={isLoading} />
              <FileUpload onSubmit={handleSubmit} isLoading={isLoading} />
            </div>

            {isLoading && (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-primary"></div>
                  <p className="mt-4 font-medium text-primary">Analisi in corso, attendi per favore...</p>
                </div>
            )}

            {error && (
                <div className="mb-8 rounded-md border-l-4 border-destructive bg-destructive/10 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-destructive" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-destructive">{error}</p>
                    </div>
                  </div>
                </div>
            )}

            {results && !isLoading && (
                <ResultsSection results={results} />
            )}
          </div>
        </main>

        <footer className="bg-primary text-primary-foreground py-6 mt-20">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} StudyTube - Uno strumento di apprendimento potenziato dall&#39;AI</p>
          </div>
        </footer>
      </>
  )
}