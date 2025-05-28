import {Video} from "lucide-react";

const MainFooter = () => {
    return (
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

                {/*
                <div>
                    <h4 className="font-semibold mb-4">Product</h4>
                    <ul className="space-y-2">
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
                */}
                {/*
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
                */}

                {/*
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
                */}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Reference Finder.</p>
            </div>
        </footer>
    )
}
export default MainFooter;