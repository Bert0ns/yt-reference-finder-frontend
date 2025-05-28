import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import Image from "next/image";

const LandingPageHeroSection = () => {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Find the{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                perfect YouTube videos
                            </span>{" "}for your research
                    </h1>
                    <p className="text-lg text-gray-600">
                        Reference Finder analyzes your text, extracts key concepts, and finds the most relevant
                        YouTube videos to
                        enhance your understanding.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                            <Link href="/reference-finder">
                                Get Started <ArrowRight className="ml-2 h-5 w-5"/>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="py-6 px-8 rounded-xl border-gray-300 hover:bg-gray-50 transition-all duration-200"
                        >
                            <Link href="/public#how-it-works">Learn More</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <div
                        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
                    <Image
                        src="/placeholder.svg?height=500&width=600"
                        alt="Reference Finder in action"
                        width={600}
                        height={500}
                        className="rounded-2xl shadow-2xl border border-gray-100"
                    />
                </div>
            </div>
        </section>
    )
}
export default LandingPageHeroSection;