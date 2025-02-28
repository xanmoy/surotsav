"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/countdown-timer";

// Function to generate animated stars
const Star = ({ size, x, y, delay }: { size: number; x: number; y: number; delay: number }) => (
    <motion.div
        initial={{ opacity: 0.3, scale: 0.7 }}
        animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.7, 1.2, 0.7],
            x: ["-2px", "2px", "-2px"],
            y: ["-2px", "2px", "-2px"],
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay, ease: "easeInOut" }}
        className="absolute bg-white rounded-full"
        style={{
            width: size,
            height: size,
            top: `${y}%`,
            left: `${x}%`,
            filter: "drop-shadow(0px 0px 6px white)",
        }}
    />
);

export default function HeroSection() {
    // Generate 50 random stars
    const stars = Array.from({ length: 50 }).map((_, i) => ({
        size: Math.random() * 3 + 3, // Increased size range
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 1, // Reduced delay for faster effect
    }));

    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                                SUROTSAV 2025
                            </h1>
                            <p className="max-w-[600px] text-gray-200 md:text-xl">
                                The ultimate college fest experience featuring Mobmania, Manthan, Udaan, and Tarang. Join us for an unforgettable celebration of talent and innovation.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/events">
                                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                    Explore Events
                                </Button>
                            </Link>
                            {/* <Link href="/events">
                                <Button size="lg" variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-800">
                                    Explore Events
                                </Button>
                            </Link> */}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-1">
                                <CalendarDays className="h-4 w-4" />
                                <span>March 18-21, 2025</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span className="text-gray-500 dark:text-gray-400">
                                    540 Dum Dum Road
                                    
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-gray-300 text-lg font-semibold tracking-wide uppercase">COUNTDOWN</h2>
                        <CountdownTimer targetDate="2025-03-18T09:00:00" />
                    </div>
                </div>
            </div>

            {/* Floating stars animation */}
            {stars.map((star, index) => (
                <Star key={index} size={star.size} x={star.x} y={star.y} delay={star.delay} />
            ))}

            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 pointer-events-none"></div>
        </section>
    );
}
