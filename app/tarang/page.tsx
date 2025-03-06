import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Mic } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/events"
import React from "react";

export default function TarangPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-800 to-rose-700">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  TARANG 2025
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  The cultural extravaganza of Surotsav 2025. A celebration of music, dance, art, and theatrical performances.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://forms.gle/4XhpYATDFnBtnKEg6">
                  <Button size="lg" className="bg-white text-pink-800 hover:bg-gray-100">
                    Register Now
                  </Button>
                </Link>
                <Link href="#performances">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Performances
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-200">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>March 21, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Surtech Campus</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tarang Cultural Fest"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-rose-100 dark:bg-rose-900/30 px-3 py-1 text-sm text-rose-700 dark:text-rose-300">
                About Tarang
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What is Tarang?</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Tarang is a vibrant cultural fest that celebrates art, music, dance, and drama. It brings together students from diverse backgrounds to showcase their talents, compete, and enjoy performances, workshops, and fun activities. It’s a time to express creativity, bond with peers, and celebrate student life!              </p>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              arang is an energetic cultural fest that unites freshers and seniors in a celebration of creativity and fun. With activities, talent showcases, and interactive sessions, it’s a perfect opportunity for freshers to shine while seniors help them connect and feel welcome in the university community.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/register?event=Tarang">
                  <Button className="bg-rose-600 text-white hover:bg-rose-700">Join the Celebration</Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Freshers Welcome"
                    className="aspect-[3/4] object-cover w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Talent Show"
                    className="aspect-[4/3] object-cover w-full"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="Freshers Group"
                  className="aspect-[3/4] object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performances Section */}
      {/* <section id="performances" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-pink-100 dark:bg-pink-900/30 px-3 py-1 text-sm text-pink-700 dark:text-pink-300">
                Performances
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tarang Performances</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the exciting cultural performances at Tarang 2025
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {events
              .filter((event) => event.category === "Cultural") // Show only cultural events
              .map((event) => (
                <Card key={event.title} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                    {React.cloneElement(event.icon, { className: "h-5 w-5 text-blue-600" })}
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-center">
                      <Badge className="bg-blue-500">{event.subcategory}</Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
                    </div>
                    <CardTitle className="text-xl mt-2">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-500 dark:text-gray-400">{event.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <Link href={event.url} className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Register Now →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}