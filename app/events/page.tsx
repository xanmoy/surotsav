"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Zap, Users, Mic, Code, Gamepad2, PenTool } from "lucide-react"
import EventCard from "@/components/event-card"
import { events } from "@/data/events"


export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    return matchesSearch && event.category.toLowerCase() === activeTab.toLowerCase()
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Events & Activities
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Discover all the exciting events happening at Surotsav 2025
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="w-full bg-white/10 pl-8 text-white placeholder:text-white/70 focus:ring-2 focus:ring-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="all">All Events</TabsTrigger>
                <TabsTrigger value="Tech">Tech</TabsTrigger>
                {/* <TabsTrigger value="Cultural">Cultural</TabsTrigger> */}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    category={event.category}
                    date={event.date}
                    image={event.image}
                    icon={event.icon}
                    url={event.url}
                  />
                ))}
              </div>
              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium">No events found</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search criteria</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="Tech" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    category={event.category}
                    date={event.date}
                    image={event.image}
                    icon={event.icon}
                    url={event.url}
                  />
                ))}
              </div>
              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium">No tech events found</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search criteria</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="Cultural" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    category={event.category}
                    date={event.date}
                    image={event.image}
                    icon={event.icon}
                    url={event.url}
                  />
                ))}
              </div>
              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium">No cultural events found</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search criteria</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

