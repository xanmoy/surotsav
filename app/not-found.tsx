"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

export default function NotFoundPage() {
    // Generate 30 random stars
    const stars = Array.from({ length: 30 }).map((_, i) => ({
        size: Math.random() * 3 + 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 1,
    }));

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden text-gray-200">
            <div className="relative z-10 text-center">
                <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    404
                </h1>
                <p className="mt-4 text-xl text-gray-300">Oops! The page you are looking for does not exist.</p>
                <Link href="/">
                    <Button size="lg" className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Go Back Home
                    </Button>
                </Link>
            </div>

            {/* Floating stars animation */}
            {stars.map((star, index) => (
                <Star key={index} size={star.size} x={star.x} y={star.y} delay={star.delay} />
            ))}

            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 pointer-events-none"></div>
        </div>
    );
}
