"use client";

import { useState } from "react";
import Navbar from "@/components/navbar"
import Banner from "@/components/banner"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    return (
        <>
            {isBannerVisible && <Banner onClose={() => setIsBannerVisible(false)} />}
            <div className="sticky top-0 z-50 transition-all duration-300">
                <Navbar />
            </div>
            <main className={`transition-all duration-300 ${isBannerVisible ? "mt-1" : "mt-0"}`}>
                {children}
            </main>
        </>
    );
}
