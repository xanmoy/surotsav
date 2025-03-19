"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Banner({ onClose }: { onClose: () => void }) {
    const [showBanner1, setShowBanner1] = useState(true);
    const [showBanner2, setShowBanner2] = useState(true);
    const [bannerHeight, setBannerHeight] = useState(0);

    useEffect(() => {
        const updateBannerHeight = () => {
            const banners = document.querySelectorAll(".banner");
            let totalHeight = 0;
            banners.forEach((banner) => {
                totalHeight += banner.clientHeight;
            });
            setBannerHeight(totalHeight);
        };

        updateBannerHeight();
        window.addEventListener("resize", updateBannerHeight);

        return () => window.removeEventListener("resize", updateBannerHeight);
    }, [showBanner1, showBanner2]);

    useEffect(() => {
        if (!showBanner1 && !showBanner2) {
            onClose(); // Notify parent that banners are closed
        }
    }, [showBanner1, showBanner2, onClose]);

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-[100]">
                {showBanner1 && (
                    <div className="banner w-full hover:text-gray-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 flex items-center justify-between sm:justify-start lg:justify-center">
                        <a href="https://drive.google.com/file/d/1fuq1pp8DivWegrMAiExqszpSdTclNnA7/view?usp=sharing">
                            <span className="text-sm md:text-base text-left lg:text-center">🚀 Manthan 2025, the annual tech fest, is set for March 19-20, 2025! 🎉</span>
                        </a>
                        <Button className="text-white bg-transparent hover:bg-pink-700 lg:absolute lg:right-4" onClick={() => setShowBanner1(false)}>
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                )}
                {showBanner2 && (
                    <div className="banner w-full hover:text-gray-300 bg-blue-600 text-white py-2 px-4 flex items-center justify-between sm:justify-start lg:justify-center">
                        <a href="https://drive.google.com/file/d/1FytlZfxRJH_dfnOlxSlK62S8185JJdR4/view?usp=sharing">
                            <span className="text-sm md:text-base text-left lg:text-center">📢 Important Notice: 'Udaan' and 'Tarang' fests are postponed to April 2nd & 3rd due to heavy rainfall. 🎟️</span>
                        </a>
                        <Button className="text-white bg-transparent hover:bg-blue-700 lg:absolute lg:right-4" onClick={() => setShowBanner2(false)}>
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                )}
            </div>
            <div style={{ height: bannerHeight }} /> {/* Push content down by banner height */}
        </>
    );
}
