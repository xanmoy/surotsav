import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Surotsav 2025 | College Fest",
  description:
    "Join us for Surotsav 2025 featuring Mobmania, Manthan, Udaan, and Tarang - an unforgettable celebration of talent and innovation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'