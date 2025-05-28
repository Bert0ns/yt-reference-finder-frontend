import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const LandingPageCTASection = () => {
    return (
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
                    <Link href="/reference-finder">
                        Try Reference Finder Now <ArrowRight className="ml-2 h-5 w-5"/>
                    </Link>
                </Button>
            </div>
        </section>
    )
}
export default LandingPageCTASection;