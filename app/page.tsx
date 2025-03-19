import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Users, Zap, Music, Sparkles } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import EventCard from "@/components/event-card"
import SpeakerCard from "@/components/speaker-card"
import SponsorSection from "@/components/sponsor-section"
import HeroSection from "@/components/hero"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
        <HeroSection />
      {/* Featured Events Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                Featured Events
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover What Awaits You</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From flashmobs to tech competitions, cultural performances to freshers' welcome - we have it all!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
            <EventCard
              title="Mobmania"
              description="Exciting flashmob event to kick off Surotsav 2025"
              category="Flashmob"
              date="March 18"
              image="https://res.cloudinary.com/dg6vdv82c/image/upload/v1741632409/mobmania_hch9xw.jpg"
              icon={<Users className="h-6 w-6" />}
              url="/mobmania"
              className="p-6 min-h-[280px]" // Increase size
            />
            <EventCard
              title="Manthan"
              description="Tech fest featuring hackathons, coding competitions & more"
              category="Tech"
              date="March 19-20"
              image="https://res.cloudinary.com/dg6vdv82c/image/upload/v1741632410/manthan_egu0hn.jpg"
              icon={<Zap className="h-6 w-6" />}
              url="/manthan"
              className="p-6 min-h-[280px]"
            />
            <EventCard
              title="Udaan"
              description="Freshers' welcome celebration with fun activities"
              category="Freshers"
              date="March 20"
              image="https://res.cloudinary.com/dg6vdv82c/image/upload/v1741632572/udaan-min_iivqfb.jpg"
              icon={<Sparkles className="h-6 w-6" />}
              url="/udaan"
              className="p-6 min-h-[280px]"
            />
            <EventCard
              title="Tarang"
              description="Cultural fest showcasing music, dance & theatrical performances"
              category="Cultural"
              date="March 21"
              image="https://res.cloudinary.com/dg6vdv82c/image/upload/v1741632573/tarang-min_m0lovx.jpg"
              icon={<Music className="h-6 w-6" />}
              url="/tarang"
              className="p-6 min-h-[280px]"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/events">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Speakers/Performers Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-pink-100 dark:bg-pink-900/30 px-3 py-1 text-sm text-pink-700 dark:text-pink-300">
                Special Guests
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Speakers & Performers</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Industry experts and talented artists who will make Surotsav 2025 unforgettable.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <SpeakerCard
              name="Dr. Sarah Johnson"
              role="AI Researcher, TechCorp"
              image="/placeholder.svg?height=300&width=300"
            />
            <SpeakerCard name="Alex Rivera" role="Music Producer & DJ" image="/placeholder.svg?height=300&width=300" />
            <SpeakerCard name="Priya Mehta" role="Startup Founder" image="/placeholder.svg?height=300&width=300" />
            <SpeakerCard name="Michael Chen" role="Classical Dancer" image="/placeholder.svg?height=300&width=300" />
          </div>
        </div>
      </section> */}
      
      {/* Sponsors Section */}
      <SponsorSection />

      {/* Developer Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-indigo-100 dark:bg-indigo-600/30 px-3 py-1 text-sm text-indigo-700 dark:text-indigo-300">
                Developer Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet the Developer Team
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get to know the talented developers behind our project.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-5xl mt-8 gap-8">
            <div className="max-w-[250px] w-full">
              <SpeakerCard
                name="Tanmoy Ganguly"
                role="Full Stack Developer"
                image="https://www.xanmoy.in/_next/image?url=%2Fganguly.jpg&w=256&q=95"
                company="Google Developer Groups"
              />
            </div>
            <div className="max-w-[250px] w-full">
              <SpeakerCard
                name="Anushwa Bhattacharya"
                role="Frontend Developer"
                image="https://res.cloudinary.com/dg6vdv82c/image/upload/v1741632963/Anushwa_cciyol.jpg"
                company="Cloud Native Hooghly"
              />
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Join the Excitement?
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Register now to participate in Mobmania, Manthan, Udaan, and Tarang events.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/events">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

