import React from "react";
import {Video} from "lucide-react";


const MainPageHero: React.FC = () => {
    return (
        <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                    <Video className="w-8 h-8 text-white"/>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    StudyTube
                </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Carica i tuoi appunti di studio e trova video YouTube rilevanti per approfondire i tuoi
                argomenti
            </p>
        </div>
    )
}
export default MainPageHero;