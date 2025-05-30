"use client";
import { Video, Menu, Github, Home, Search, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {useState} from "react";

const MainHeader = () => {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md">
          <Video className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Reference Finder
        </span>
      </Link>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="w-6 h-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-72">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Reference Finder
              </span>
            </SheetTitle>
          </SheetHeader>
          <nav className="py-6 flex flex-col gap-2 mt-4">
            <Link href="/" onClick={() => setSheetOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link href="/reference-finder" onClick={() => setSheetOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">
              <Search className="w-5 h-5" />
              <span>Reference Finder</span>
            </Link>

            <div className="h-px bg-gray-200 my-4"></div>

            <Link
                href="https://github.com/Bert0ns/yt-reference-finder-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto" />
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MainHeader;