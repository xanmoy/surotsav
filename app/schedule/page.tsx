import { CalendarDays, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SchedulePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Event Schedule
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Plan your Surotsav experience with our detailed schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="day1" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="day1">Day 1 (Mar 15)</TabsTrigger>
                <TabsTrigger value="day2">Day 2 (Mar 16)</TabsTrigger>
                <TabsTrigger value="day3">Day 3 (Mar 17)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="day1" className="mt-0">
              <div className="space-y-8">
                <TimelineItem
                  time="09:00 AM"
                  title="Opening Ceremony"
                  location="Main Auditorium"
                  description="Welcome address by the Dean and introduction to TechCultura 2024"
                  category="General"
                />
                <TimelineItem
                  time="10:30 AM"
                  title="Hackathon Kickoff"
                  location="Tech Hub"
                  description="48-hour coding challenge begins with team formation and problem statements"
                  category="Tech"
                />
                <TimelineItem
                  time="11:30 AM"
                  title="AI Workshop"
                  location="Seminar Hall A"
                  description="Introduction to machine learning and AI applications by Dr. Sarah Johnson"
                  category="Tech"
                />
                <TimelineItem
                  time="01:00 PM"
                  title="Lunch Break"
                  location="Food Court"
                  description="Networking lunch with sponsors and participants"
                  category="Break"
                />
                <TimelineItem
                  time="02:30 PM"
                  title="Art Exhibition Opening"
                  location="Gallery Space"
                  description="Showcase of student artwork and installations"
                  category="Cultural"
                />
                <TimelineItem
                  time="04:00 PM"
                  title="Gaming Tournament - Round 1"
                  location="Gaming Arena"
                  description="Competitive gaming in popular esports titles"
                  category="Tech"
                />
                <TimelineItem
                  time="06:30 PM"
                  title="Tech Talk: Future of Web3"
                  location="Main Auditorium"
                  description="Panel discussion with industry experts on blockchain and decentralized applications"
                  category="Tech"
                />
                <TimelineItem
                  time="08:00 PM"
                  title="Welcome Night Cultural Show"
                  location="Amphitheater"
                  description="Performances by university dance and music groups"
                  category="Cultural"
                />
              </div>
            </TabsContent>

            <TabsContent value="day2" className="mt-0">
              <div className="space-y-8">
                <TimelineItem
                  time="09:00 AM"
                  title="Startup Pitch Competition"
                  location="Business Center"
                  description="Student entrepreneurs pitch their ideas to investors"
                  category="Tech"
                />
                <TimelineItem
                  time="10:30 AM"
                  title="Classical Dance Workshop"
                  location="Dance Studio"
                  description="Learn traditional dance forms with expert choreographers"
                  category="Cultural"
                />
                <TimelineItem
                  time="12:00 PM"
                  title="Robotics Showcase"
                  location="Engineering Block"
                  description="Demonstration of student-built robots and automation projects"
                  category="Tech"
                />
                <TimelineItem
                  time="01:30 PM"
                  title="Lunch Break"
                  location="Food Court"
                  description="Networking lunch with sponsors and participants"
                  category="Break"
                />
                <TimelineItem
                  time="03:00 PM"
                  title="Battle of Bands"
                  location="Amphitheater"
                  description="Live music competition featuring student bands"
                  category="Cultural"
                />
                <TimelineItem
                  time="05:00 PM"
                  title="Hackathon - Midway Presentations"
                  location="Tech Hub"
                  description="Teams present their progress and receive feedback from mentors"
                  category="Tech"
                />
                <TimelineItem
                  time="07:00 PM"
                  title="Cultural Night"
                  location="Main Auditorium"
                  description="A celebration of diversity through music, dance, and theatrical performances"
                  category="Cultural"
                />
              </div>
            </TabsContent>

            <TabsContent value="day3" className="mt-0">
              <div className="space-y-8">
                <TimelineItem
                  time="09:00 AM"
                  title="Hackathon - Final Sprint"
                  location="Tech Hub"
                  description="Last few hours for teams to complete their projects"
                  category="Tech"
                />
                <TimelineItem
                  time="10:30 AM"
                  title="Robotics Competition"
                  location="Engineering Block"
                  description="Robots compete in various challenges testing speed, precision, and innovation"
                  category="Tech"
                />
                <TimelineItem
                  time="12:00 PM"
                  title="Photography Exhibition"
                  location="Gallery Space"
                  description="Showcase of student photography capturing campus life and culture"
                  category="Cultural"
                />
                <TimelineItem
                  time="01:00 PM"
                  title="Lunch Break"
                  location="Food Court"
                  description="Networking lunch with sponsors and participants"
                  category="Break"
                />
                <TimelineItem
                  time="02:30 PM"
                  title="Hackathon - Final Presentations"
                  location="Main Auditorium"
                  description="Teams present their completed projects to judges and audience"
                  category="Tech"
                />
                <TimelineItem
                  time="04:30 PM"
                  title="Gaming Tournament - Finals"
                  location="Gaming Arena"
                  description="Championship matches to determine the winners"
                  category="Tech"
                />
                <TimelineItem
                  time="06:00 PM"
                  title="Award Ceremony"
                  location="Main Auditorium"
                  description="Recognition of winners from all competitions and events"
                  category="General"
                />
                <TimelineItem
                  time="08:00 PM"
                  title="Closing Concert"
                  location="Amphitheater"
                  description="Farewell celebration with professional artists and DJ"
                  category="Cultural"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

interface TimelineItemProps {
  time: string
  title: string
  location: string
  description: string
  category: "Tech" | "Cultural" | "General" | "Break"
}

function TimelineItem({ time, title, location, description, category }: TimelineItemProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tech":
        return "bg-blue-500"
      case "Cultural":
        return "bg-pink-500"
      case "General":
        return "bg-purple-500"
      case "Break":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge className={getCategoryColor(category)}>{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

