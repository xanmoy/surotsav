import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Mic } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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
                <Link href="/register?event=tarang">
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
                  <span>University Cultural Center</span>
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

      {/* Performances Section */}
      <section id="performances" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
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

          <Tabs defaultValue="music" className="w-full mt-8">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="dance">Dance</TabsTrigger>
                <TabsTrigger value="theater">Theater</TabsTrigger>
                <TabsTrigger value="art">Art</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="music" className="mt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                    <Mic className="h-12 w-12 text-pink-600" />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-center">
                      <Badge className="bg-pink-500">Vocal</Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">10:00 AM</span>
                    </div>
                    <CardTitle className="text-xl mt-2">Classical Vocal Competition</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-500 dark:text-gray-400">
                      Showcase your classical vocal skills in this prestigious competition. Open to solo performers and duets.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}