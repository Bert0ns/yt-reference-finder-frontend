"use client"
import { Button } from "@/components/ui/button"
import { Search, RotateCcw, Sparkles } from "lucide-react"
import type React from "react"
import type { SubmitButtonProps } from "@/components/SubmitButton/index.types"

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, results, resetForm }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
                type="submit"
                disabled={isLoading}
                size="lg"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                {isLoading ? (
                    <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3" />
                        Analyzing Content...
                    </>
                ) : (
                    <>
                        <Search className="w-5 h-5 mr-3" />
                        Find Relevant Videos
                        <Sparkles className="w-4 h-4 ml-2" />
                    </>
                )}
            </Button>

            {(results || isLoading) && (
                <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    disabled={isLoading}
                    size="lg"
                    className="px-8 py-6 rounded-xl border-gray-300 hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                </Button>
            )}
        </div>
    )
};
export default SubmitButton;