"use client";
import {Video} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";


const MainHeader = () => {
    const [showTryNowButton, setShowTryNowButton] = useState(false);

    useEffect(() => {
        if(typeof window !== "undefined" && window.location.pathname === "/reference-finder") {
            setShowTryNowButton(false);
        }
        else {
            setShowTryNowButton(true);
        }
    }, []);

    return (
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md">
                    <Video className="w-5 h-5 text-white"/>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Reference Finder
                </span>
            </div>
            <div className="flex items-center gap-4">
                {/*<Link href="/docs" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Docs
                </Link>*/}
                {showTryNowButton && (
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        <Link href="/reference-finder">Try Now</Link>
                    </Button>
                )}
            </div>
        </header>
    )
}
export default MainHeader;