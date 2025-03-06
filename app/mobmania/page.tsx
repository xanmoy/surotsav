import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Users, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MobmaniaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-800 to-indigo-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  MOBMANIA 2025
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Kick off Surotsav 2025 with an electrifying flashmob experience that will set the stage for an
                  unforgettable fest.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://forms.gle/4XhpYATDFnBtnKEg6">
                  <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
                    Join the Flashmob
                  </Button>
                </Link>
                <Link href="#schedule">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Schedule
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-200">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>March 18, 2025</span>
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
                  src="/images/fest.jpeg?height=600&width=800"
                  alt="Mobmania Flashmob"
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
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                About Mobmania
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What is Mobmania?</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                Mobmania is the exciting flashmob event that kicks off Surotsav 2025. It's a synchronized dance
                performance where hundreds of students come together to create an unforgettable spectacle.
              </p>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                The flashmob will take place at the University Main Quad, surprising onlookers and building excitement
                for the upcoming fest events. Whether you're a seasoned dancer or just looking to have fun, Mobmania
                welcomes participants of all skill levels.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="https://forms.gle/4XhpYATDFnBtnKEg6">
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">Register to Participate</Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/images/11.jpeg?height=600&width=800&quality=100"
                    alt="Mobmania Rehearsal"
                    className="aspect-[3/4] object-cover w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/images/4.jpeg?height=600&width=800&quality=100"
                    alt="Mobmania Performance"
                    className="aspect-[4/3] object-cover w-full"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/images/10.jpeg?height=600&width=800&quality=100"
                  alt="Mobmania Group"
                  className="aspect-[3/4] object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                Event Schedule
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mobmania Timeline</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From rehearsals to the final performance, here's what to expect
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-10 space-y-8">
            <div className="relative">
              <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800"></div>

              <div className="relative flex items-start gap-6 pb-12">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-purple-600 text-white shadow-sm">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Registration Deadline</h3>
                  <p className="text-gray-500 dark:text-gray-400">March 10, 2025 - Last day to register for Mobmania</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>11:59 PM</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-6 pb-12">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-purple-600 text-white shadow-sm">
                  <Users className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Rehearsal Sessions</h3>
                  <p className="text-gray-500 dark:text-gray-400">March 12-17, 2025 - Daily practice sessions</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>11:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Room No 121, 122</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-6 pb-12">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-purple-600 text-white shadow-sm">
                  <Users className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Dress Rehearsal</h3>
                  <p className="text-gray-500 dark:text-gray-400">March 17, 2025 - Final practice with costumes</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>11:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Surtech Campus</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-purple-600 text-white shadow-sm">
                  <Users className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Mobmania Performance</h3>
                  <p className="text-gray-500 dark:text-gray-400">March 18, 2025 - The main event</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>2:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Surtech campus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to know about Mobmania
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-8 grid gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Do I need dance experience to participate?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    No prior dance experience is required! We welcome participants of all skill levels. Our
                    choreographers will teach you everything you need to know during the rehearsal sessions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">What should I wear for the performance?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Participants will be provided with a Mobmania t-shirt. Please wear comfortable black pants/jeans and
                    sneakers for the performance. Detailed costume information will be shared during rehearsals.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Do I need to attend all rehearsals?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    While we encourage attending all rehearsals to learn the choreography properly, we understand that
                    you might have other commitments. We recommend attending at least 3 rehearsal sessions and the final
                    dress rehearsal is mandatory.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Can I watch the flashmob if I'm not participating?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The flashmob will take place in the University Main Quad, which is open to everyone. Come and cheer
                    for your friends and enjoy the performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join Mobmania?</h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of the most exciting flashmob event that kicks off Surotsav 2025!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="https://forms.gle/4XhpYATDFnBtnKEg6">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
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

