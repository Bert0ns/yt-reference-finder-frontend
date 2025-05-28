import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {Inter} from "next/font/google";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export const metadata: Metadata = {
    title: "StudyTube - Trova Video per i tuoi Appunti",
    description: "Analizza i tuoi appunti di studio e trova video YouTube pertinenti",
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
