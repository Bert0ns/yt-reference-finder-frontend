import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Video, Search } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
                        Reference Finder
                    </h1>
                    <p className="mt-4 text-xl text-gray-700 max-w-2xl animate-fade-in-up">
                        Trova i migliori video educativi partendo da qualsiasi testo
                    </p>
                    <Link href="/reference-finder" className="mt-8 animate-bounce-subtle">
                        <Button className="px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all">
                            Inizia ora <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>

                {/* Cosa fa il progetto */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="animate-fade-in-left">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 h-full">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Cosa fa Reference Finder?</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Reference Finder è uno strumento innovativo che analizza qualsiasi testo inserito e identifica i concetti chiave.
                            </p>
                            <p className="text-lg text-gray-600">
                                Utilizzando algoritmi avanzati, trova e seleziona i migliori video educativi correlati agli argomenti identificati,
                                offrendoti risorse didattiche personalizzate in pochi secondi.
                            </p>
                            <div className="flex gap-4 mt-8">
                                <div className="flex items-center text-blue-600">
                                    <BookOpen className="h-6 w-6 mr-2" />
                                    <span>Analisi del testo</span>
                                </div>
                                <div className="flex items-center text-purple-600">
                                    <Video className="h-6 w-6 mr-2" />
                                    <span>Video educativi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl h-64 shadow-lg animate-pulse-slow"></div>
                </div>

                {/* Come usare il sito */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Come utilizzare Reference Finder</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md transition-transform hover:scale-105">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Inserisci il testo</h3>
                            <p className="text-gray-600">
                                Incolla qualsiasi testo di cui desideri trovare riferimenti e video educativi correlati.
                            </p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md transition-transform hover:scale-105">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-purple-600 font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Avvia la ricerca</h3>
                            <p className="text-gray-600">
                                Clicca sul pulsante per elaborare il testo e attendere mentre vengono analizzati i concetti principali.
                            </p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md transition-transform hover:scale-105">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-indigo-600 font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Esplora i risultati</h3>
                            <p className="text-gray-600">
                                Visualizza e accedi ai video educativi consigliati, organizzati in base alla rilevanza.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 animate-fade-in">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Pronto a trovare i migliori riferimenti educativi?</h2>
                    <Link href="/reference-finder">
                        <Button className="px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all">
                            <Search className="mr-2 h-5 w-5" /> Vai a Reference Finder
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}