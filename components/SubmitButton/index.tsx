import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import React from "react";

const SubmitButton: React.FC<SubmitButtonProps> = ({isLoading, results, resetForm}) => {
    return (
        <div className="flex gap-3">
            <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                {isLoading ? (
                    <>
                        <div
                            className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"/>
                        Analisi in corso...
                    </>
                ) : (
                    <>
                        <Search className="w-4 h-4 mr-2"/>
                        Analizza e Trova Video
                    </>
                )}
            </Button>

            {(results || isLoading) && (
                <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    disabled={isLoading}
                    className="px-6 py-3 rounded-xl border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                    Reset
                </Button>
            )}
        </div>
    )
}
export default SubmitButton;