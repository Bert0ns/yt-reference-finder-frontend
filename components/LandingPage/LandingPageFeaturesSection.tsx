import {Card, CardContent} from "@/components/ui/card";
import {Brain, FileText, Filter, Search, Sparkles, Youtube} from "lucide-react";

const LandingPageFeaturesSection = () => {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our intelligent system makes finding relevant educational content easier than ever
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                    className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <div className="p-3 bg-blue-100 rounded-xl w-fit">
                            <FileText className="w-6 h-6 text-blue-600"/>
                        </div>
                        <h3 className="text-xl font-bold">Smart Text Analysis</h3>
                        <p className="text-gray-600">
                            Our system extracts key concepts and topics from your text, understanding the context of
                            your research.
                        </p>
                    </CardContent>
                </Card>

                <Card
                    className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <div className="p-3 bg-purple-100 rounded-xl w-fit">
                            <Brain className="w-6 h-6 text-purple-600"/>
                        </div>
                        <h3 className="text-xl font-bold">AI-Powered Queries</h3>
                        <p className="text-gray-600">
                            Ollama AI formulates intelligent search queries to find the most relevant YouTube
                            content.
                        </p>
                    </CardContent>
                </Card>

                <Card
                    className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <div className="p-3 bg-green-100 rounded-xl w-fit">
                            <Filter className="w-6 h-6 text-green-600"/>
                        </div>
                        <h3 className="text-xl font-bold">Smart Filtering</h3>
                        <p className="text-gray-600">
                            Results are filtered and ranked based on relevance, quality, and engagement metrics.
                        </p>
                    </CardContent>
                </Card>

                <Card
                    className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <div className="p-3 bg-yellow-100 rounded-xl w-fit">
                            <Youtube className="w-6 h-6 text-yellow-600"/>
                        </div>
                        <h3 className="text-xl font-bold">YouTube Integration</h3>
                        <p className="text-gray-600">
                            Direct access to YouTube&#39;s vast library of educational content with seamless
                            integration.
                        </p>
                    </CardContent>
                </Card>

                <Card
                    className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <div className="p-3 bg-red-100 rounded-xl w-fit">
                            <Sparkles className="w-6 h-6 text-red-600"/>
                        </div>
                        <h3 className="text-xl font-bold">Engagement Scoring</h3>
                        <p className="text-gray-600">
                            Videos are scored based on quality and relevance to help you find the best content
                            quickly.
                        </p>
                    </CardContent>
                </Card>

                <Card
                    className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <div className="p-3 bg-indigo-100 rounded-xl w-fit">
                            <Search className="w-6 h-6 text-indigo-600"/>
                        </div>
                        <h3 className="text-xl font-bold">Transparent Results</h3>
                        <p className="text-gray-600">
                            See the keywords and queries used to find your videos, helping you understand the
                            recommendation
                            process.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
export default LandingPageFeaturesSection;