import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const LandingPageFAQSection = () => {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24 bg-white/50 rounded-3xl my-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Find answers to common questions about Reference Finder
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="border-2 border-blue-200 rounded-lg bg-white shadow-sm">
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

                    <AccordionItem value="item-2" className="border-2 border-blue-200 rounded-lg bg-white shadow-sm">
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

                    <AccordionItem value="item-3" className="border-2 border-blue-200 rounded-lg bg-white shadow-sm">
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

                    <AccordionItem value="item-4" className="border-2 border-blue-200 rounded-lg bg-white shadow-sm">
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

                    <AccordionItem value="item-5" className="border-2 border-blue-200 rounded-lg bg-white shadow-sm">
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
    )
}
export default LandingPageFAQSection;