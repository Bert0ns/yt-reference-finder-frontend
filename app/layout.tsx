import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {Inter} from "next/font/google";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import {websiteConfigs} from "@/website.config";

export const metadata: Metadata = {
    title: websiteConfigs.title,
    description: websiteConfigs.description,
}

const inter = Inter({subsets: ["latin"]})


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>
            <MainHeader />
            {children}
            <MainFooter />
        </body>
        </html>
    );
}
