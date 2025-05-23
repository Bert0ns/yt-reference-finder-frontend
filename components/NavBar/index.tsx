"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <header className="bg-primary text-primary-foreground shadow-md">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <svg
                        className="h-8 w-8 text-primary-foreground/80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                    <span className="text-xl font-bold">StudyTube</span>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                        Home
                    </Link>
                    <Link
                        href="#come-funziona"
                        className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                        Come Funziona
                    </Link>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="text-primary"
                    >
                        Inizia
                    </Button>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;