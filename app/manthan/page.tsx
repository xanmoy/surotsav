import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Zap, Code, Cpu, Brain, Rocket, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ManthanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-800 to-cyan-700">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  MANTHAN 2025
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  The premier tech fest of Surotsav 2025. Two days of innovation, coding, and technological marvels.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register?event=manthan">
                  <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                    Register Now
                  </Button>
                </Link>
                <Link href="#events">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Events
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-200">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>March 19-20, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Tech Building, University Campus</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Manthan Tech Fest"
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
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
                About Manthan
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What is Manthan?</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                Manthan, which means "churning of ideas" in Sanskrit, is the flagship technical festival of Surotsav
                2025. It brings together tech enthusiasts, coders, innovators, and creative minds for two days of
                intense competition, learning, and fun.
              </p>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                From hackathons to coding competitions, robotics challenges to tech talks by industry experts, Manthan
                offers a diverse range of events that cater to various interests and skill levels in the tech domain.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/register?event=manthan">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">Register for Events</Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Coding Competition"
                    className="aspect-[3/4] object-cover w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Robotics Challenge"
                    className="aspect-[4/3] object-cover w-full"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="Hackathon"
                  className="aspect-[3/4] object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
                Tech Events
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Manthan Events</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the exciting tech events at Manthan 2025
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Code className="h-12 w-12 text-blue-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-500">Coding</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">March 19</span>
                </div>
                <CardTitle className="text-xl mt-2">CodeWars</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  A competitive programming contest where participants solve algorithmic challenges against the clock.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>10:00 AM - 1:00 PM</span>
                  </div>
                  <Link href="/manthan/codewars" className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Details →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Cpu className="h-12 w-12 text-blue-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-500">Hardware</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">March 19-20</span>
                </div>
                <CardTitle className="text-xl mt-2">Hackathon</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  A 24-hour coding marathon where teams build innovative solutions to real-world problems.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Starts: Mar 19, 2:00 PM</span>
                  </div>
                  <Link href="/manthan/hackathon" className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Details →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Brain className="h-12 w-12 text-blue-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-500">AI</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">March 20</span>
                </div>
                <CardTitle className="text-xl mt-2">AI Challenge</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  Develop AI models to solve specific challenges in computer vision, NLP, or predictive analytics.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <Link href="/manthan/ai-challenge" className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Details →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Rocket className="h-12 w-12 text-blue-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-500">Robotics</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">March 20</span>
                </div>
                <CardTitle className="text-xl mt-2">RoboRace</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  Design and race robots through an obstacle course in this exciting robotics competition.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>11:00 AM - 3:00 PM</span>
                  </div>
                  <Link href="/manthan/roborace" className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Details →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Zap className="h-12 w-12 text-blue-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-500">Design</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">March 19</span>
                </div>
                <CardTitle className="text-xl mt-2">UI/UX Battle</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  Showcase your design skills by creating intuitive and visually appealing user interfaces.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>2:00 PM - 6:00 PM</span>
                  </div>
                  <Link href="/manthan/uiux-battle" className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Details →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Cpu className="h-12 w-12 text-blue-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-blue-500">IoT</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">March 20</span>
                </div>
                <CardTitle className="text-xl mt-2">IoT Workshop</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  Learn to build Internet of Things devices with hands-on guidance from industry experts.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>10:00 AM - 1:00 PM</span>
                  </div>
                  <Link href="/manthan/iot-workshop" className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Details →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/manthan/all-events">
              <Button
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
                Tech Talks
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Speakers</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn from industry experts and thought leaders
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Dr. Sarah Johnson"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">AI Researcher, TechCorp</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  "The Future of AI: Opportunities and Challenges"
                  <br />
                  March 19, 3:00 PM | Main Auditorium
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Raj Patel"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Raj Patel</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">CTO, InnovateTech</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  "Building Scalable Systems for the Modern Web"
                  <br />
                  March 20, 11:00 AM | Seminar Hall
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Lisa Chen"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Lisa Chen</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cybersecurity Expert</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  "Securing the Digital Frontier: Cybersecurity in 2025"
                  <br />
                  March 19, 5:00 PM | Tech Hall
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Showcase Your Tech Skills?
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Manthan 2025 and be part of the most exciting tech fest of the year!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register?event=manthan">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Organizers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

