"use client"
import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ArrowRight, CheckCircle, Video} from "lucide-react"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import LandingPageHeroSection from "@/components/LandingPageHeroSection";
import LandingPageFeaturesSection from "@/components/LandingPageFeaturesSection";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <LandingPageHeroSection />
            <LandingPageFeaturesSection />
            {/* How It Works Section */}
            <section id="how-it-works" className="container mx-auto px-4 py-16 md:py-24 bg-white/50 rounded-3xl my-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Reference Finder simplifies the process of finding relevant educational videos in just a few
                        steps
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Tabs defaultValue="step1" className="w-full">
                        <TabsList className="grid grid-cols-4 mb-8">
                            <TabsTrigger value="step1">Step 1</TabsTrigger>
                            <TabsTrigger value="step2">Step 2</TabsTrigger>
                            <TabsTrigger value="step3">Step 3</TabsTrigger>
                            <TabsTrigger value="step4">Step 4</TabsTrigger>
                        </TabsList>
                        <TabsContent value="step1" className="border-0 p-0">
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6 md:p-8">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">Paste Your Text</h3>
                                            <p className="text-gray-600 mb-4">
                                                Start by pasting your research text, notes, or any content you want to
                                                find videos for into the
                                                text area.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Works with lecture notes</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Research papers</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Study materials</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-xl">
                                            <Image
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="Paste your text"
                                                width={300}
                                                height={200}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="step2" className="border-0 p-0">
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6 md:p-8">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">AI Analysis</h3>
                                            <p className="text-gray-600 mb-4">
                                                Our system analyzes your text, extracting key concepts and generating
                                                optimized search queries.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Keyword extraction</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Topic identification</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Query formulation</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-xl">
                                            <Image
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="AI Analysis"
                                                width={300}
                                                height={200}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="step3" className="border-0 p-0">
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6 md:p-8">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">YouTube Search</h3>
                                            <p className="text-gray-600 mb-4">
                                                The system searches YouTube using the generated queries to find relevant
                                                educational videos.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Multiple search queries</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Comprehensive results</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Educational content focus</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-xl">
                                            <Image
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="YouTube Search"
                                                width={300}
                                                height={200}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="step4" className="border-0 p-0">
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6 md:p-8">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">View Results</h3>
                                            <p className="text-gray-600 mb-4">
                                                Browse through the filtered and ranked video results, with direct links
                                                to watch on YouTube.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Engagement scores</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Video previews</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5"/>
                                                    <span>Direct YouTube links</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-xl">
                                            <Image
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="View Results"
                                                width={300}
                                                height={200}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Reference Finder helps a wide range of users enhance their learning and research
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-bold">Students</h3>
                            <p className="text-gray-600">
                                Find supplementary video materials for your lecture notes and textbook readings to
                                enhance your
                                understanding.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-bold">Researchers</h3>
                            <p className="text-gray-600">
                                Discover video explanations and discussions related to academic papers and research
                                topics.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-bold">Educators</h3>
                            <p className="text-gray-600">
                                Find relevant videos to supplement your teaching materials and provide additional
                                resources for
                                students.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-bold">Self-Learners</h3>
                            <p className="text-gray-600">
                                Enhance your self-study materials with video explanations that clarify complex concepts.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-bold">Content Creators</h3>
                            <p className="text-gray-600">
                                Research topics for your content by finding relevant videos that cover similar subjects.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-bold">Professionals</h3>
                            <p className="text-gray-600">
                                Find video resources related to professional documents, reports, and industry papers.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-4 py-16 md:py-24 bg-white/50 rounded-3xl my-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about Reference Finder
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1" className="border rounded-lg bg-white shadow-sm">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <span className="text-left font-medium">How does Reference Finder work?</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                                Reference Finder uses AI to analyze your text, extract key concepts, and generate
                                optimized search
                                queries. It then searches YouTube for relevant videos, filters the results based on
                                quality and
                                relevance, and presents them to you with engagement scores and direct links.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border rounded-lg bg-white shadow-sm">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <span className="text-left font-medium">What types of text can I analyze?</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                                You can analyze any text-based content, including lecture notes, research papers,
                                articles, book
                                chapters, study materials, and more. The system works best with educational and
                                informational content.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border rounded-lg bg-white shadow-sm">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <span className="text-left font-medium">How are videos ranked and scored?</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                                Videos are ranked based on a combination of relevance to your text, video quality
                                metrics, engagement
                                statistics, and educational value. The engagement score represents how well the video
                                matches your
                                content needs.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="border rounded-lg bg-white shadow-sm">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <span
                                    className="text-left font-medium">Is there a limit to how much text I can analyze?</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                                While there is no strict character limit, the system works best with focused content.
                                For very long
                                documents, consider breaking them into smaller, topic-focused sections for more precise
                                video
                                recommendations.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="border rounded-lg bg-white shadow-sm">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <span className="text-left font-medium">Can I save or share my results?</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                                Currently, you can access the direct YouTube links to save videos to your YouTube
                                account or share them
                                individually. We&#39;re working on features to save and share entire result sets in
                                future updates.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Perfect Video References?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Start enhancing your learning experience with AI-powered video recommendations
                    </p>
                    <Button
                        asChild
                        size="lg"
                        variant="secondary"
                        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                        <Link href="/app">
                            Try Reference Finder Now <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="container mx-auto px-4 py-12 border-t border-gray-200">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                                <Video className="w-4 h-4 text-white"/>
                            </div>
                            <span
                                className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Reference Finder
              </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            AI-powered YouTube video recommendations for your educational content
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/features"
                                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing"
                                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/roadmap"
                                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                    Roadmap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/docs"
                                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/api"
                                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                    API
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides"
                                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                    Guides
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about"
                                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact"
                                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy"
                                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Reference Finder. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
