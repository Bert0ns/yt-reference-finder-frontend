"use client"
import LandingPageHeroSection from "@/components/LandingPage/LandingPageHeroSection";
import LandingPageFeaturesSection from "@/components/LandingPage/LandingPageFeaturesSection";
import LandingPageHowItWorksSection from "@/components/LandingPage/LandingPageHowItWorksSection";
import LandingPageUseCasesSection from "@/components/LandingPage/LandingPageUseCasesSection";
import LandingPageFAQSection from "@/components/LandingPage/LandingPageFAQSection";
import LandingPageCTASection from "@/components/LandingPage/LandingPageCTASection";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <LandingPageHeroSection />
            <LandingPageFeaturesSection />
            <LandingPageHowItWorksSection />
            <LandingPageUseCasesSection />
            <LandingPageFAQSection />
            <LandingPageCTASection />
        </div>
    )
}
