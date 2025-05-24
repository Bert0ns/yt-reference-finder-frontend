import { Sparkles, Video } from "lucide-react"
import React from "react";

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
            <div className="relative mb-6">
                {/* Outer rotating ring */}
                <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>

                {/* Inner icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="w-8 h-8 text-blue-600 animate-pulse" />
                </div>

                {/* Floating sparkles */}
                <div className="absolute -top-2 -right-2 animate-bounce delay-100">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                </div>
                <div className="absolute -bottom-2 -left-2 animate-bounce delay-300">
                    <Sparkles className="w-3 h-3 text-blue-500" />
                </div>
            </div>

            <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-700">Analisi in corso</h3>
                <p className="text-gray-500 animate-pulse">
                    Stiamo elaborando i tuoi appunti e cercando i video più rilevanti...
                </p>
            </div>

            {/* Progress dots */}
            <div className="flex space-x-2 mt-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
            </div>
        </div>
    )
}
export default LoadingSpinner;