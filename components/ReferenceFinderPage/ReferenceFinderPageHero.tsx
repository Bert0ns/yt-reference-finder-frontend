import type React from "react"
import { Video, Sparkles, Search } from "lucide-react"

const ReferenceFinderPageHero: React.FC = () => {
    return (
        <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                    <Video className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Reference Finder
                </h1>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Paste your study notes or upload a document to discover relevant YouTube videos that enhance your learning
                experience
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-blue-500" />
                    <span>AI-Powered Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span>Smart Filtering</span>
                </div>
                <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-green-500" />
                    <span>Quality Results</span>
                </div>
            </div>
        </div>
    )
}
export default ReferenceFinderPageHero;
