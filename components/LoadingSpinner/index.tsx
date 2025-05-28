import {Brain, Search, Sparkles, Video} from "lucide-react"
import React, {forwardRef} from "react";

const LoadingSpinnerV2 = forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <div ref={ref} className="flex flex-col items-center justify-center py-16 animate-fade-in">
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
})
LoadingSpinnerV2.displayName = "LoadingSpinnerV2"
export { LoadingSpinnerV2 };


const LoadingSpinner = forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <div ref={ref} className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <div className="relative mb-8">
                {/* Outer rotating ring */}
                <div className="w-24 h-24 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 border-r-purple-600"></div>

                {/* Inner icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="w-10 h-10 text-blue-600 animate-pulse" />
                </div>

                {/* Floating sparkles */}
                <div className="absolute -top-3 -right-3 animate-bounce delay-100">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                </div>
                <div className="absolute -bottom-3 -left-3 animate-bounce delay-300">
                    <Brain className="w-4 h-4 text-blue-500" />
                </div>
                <div className="absolute top-0 -left-4 animate-bounce delay-500">
                    <Search className="w-3 h-3 text-green-500" />
                </div>
            </div>

            <div className="text-center space-y-4 max-w-md">
                <h3 className="text-2xl font-bold text-gray-800">Analyzing Your Content</h3>
                <p className="text-gray-600 leading-relaxed">
                    Our AI is processing your text, extracting key concepts, and searching for the most relevant educational
                    videos...
                </p>
            </div>

            {/* Progress steps */}
            <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-full">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-blue-700">Extracting Keywords</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-orange-100 rounded-full">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-orange-700">Extracting Keywords</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-purple-100 rounded-full">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                    <span className="text-sm font-medium text-purple-700">Searching Videos</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-400"></div>
                    <span className="text-sm font-medium text-green-700">Filtering Results</span>
                </div>
            </div>
        </div>
    )
});
LoadingSpinner.displayName = "LoadingSpinner";
export default LoadingSpinner;