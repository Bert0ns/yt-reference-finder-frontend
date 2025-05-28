import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent} from "@/components/ui/card";
import {CheckCircle} from "lucide-react";

const LandingPageHowItWorksSection = () => {
    return (
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
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
export default LandingPageHowItWorksSection;