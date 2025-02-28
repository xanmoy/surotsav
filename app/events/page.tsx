"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Zap, Users, Mic, Code, Gamepad2, PenTool } from "lucide-react"
import EventCard from "@/components/event-card"

// Sample event data
const events = [
  {
    id: 1,
    title: "Hackathon 2024",
    description: "48-hour coding challenge to build innovative solutions",
    category: "Tech",
    subcategory: "Coding",
    date: "March 15",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Code className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Cultural Night",
    description: "A celebration of diversity through music and dance",
    category: "Cultural",
    subcategory: "Performance",
    date: "March 16",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Robotics Competition",
    description: "Showcase your engineering skills with robots",
    category: "Tech",
    subcategory: "Engineering",
    date: "March 17",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Battle of Bands",
    description: "Compete with your band and show your musical talent",
    category: "Cultural",
    subcategory: "Music",
    date: "March 16",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Mic className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "Gaming Tournament",
    description: "Compete in popular esports titles for amazing prizes",
    category: "Tech",
    subcategory: "Gaming",
    date: "March 15-17",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "Art Exhibition",
    description: "Showcase of student artwork and installations",
    category: "Cultural",
    subcategory: "Art",
    date: "March 15-17",
    image: "/placeholder.svg?height=400&width=600",
    icon: <PenTool className="h-5 w-5" />,
  },
]

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
                Discover all the exciting events happening at TechCultura 2024
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
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">All Events</TabsTrigger>
                <TabsTrigger value="Tech">Tech</TabsTrigger>
                <TabsTrigger value="Cultural">Cultural</TabsTrigger>
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

