import {Card, CardContent} from "@/components/ui/card";

const LandingPageUseCasesSection = () => {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Reference Finder helps a wide range of users enhance their learning and research
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-2 border-pink-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold">Students</h3>
                        <p className="text-gray-600">
                            Find supplementary video materials for your lecture notes and textbook readings to
                            enhance your
                            understanding.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-blue-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold">Researchers</h3>
                        <p className="text-gray-600">
                            Discover video explanations and discussions related to academic papers and research
                            topics.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold">Educators</h3>
                        <p className="text-gray-600">
                            Find relevant videos to supplement your teaching materials and provide additional
                            resources for
                            students.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-yellow-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold">Self-Learners</h3>
                        <p className="text-gray-600">
                            Enhance your self-study materials with video explanations that clarify complex concepts.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-purple-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold">Content Creators</h3>
                        <p className="text-gray-600">
                            Research topics for your content by finding relevant videos that cover similar subjects.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-orange-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold">Professionals</h3>
                        <p className="text-gray-600">
                            Find video resources related to professional documents, reports, and industry papers.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
export default LandingPageUseCasesSection;