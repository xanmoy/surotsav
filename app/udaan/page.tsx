import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Sparkles, Users, Award, PartyPopper, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UdaanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-800 to-emerald-700">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  UDAAN 2025
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  The freshers' welcome celebration of Surotsav 2025. A day of fun, games, and new beginnings.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://forms.gle/4XhpYATDFnBtnKEg6">
                  <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                    Register Now
                  </Button>
                </Link>
                <Link href="#activities">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Activities
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-200">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>March 20, 2025</span>
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
                  alt="Udaan Freshers Event"
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
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-700 dark:text-green-300">
                About Udaan
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What is Udaan?</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                Udaan, which means "flight" in Hindi, is the freshers' welcome celebration of Surotsav 2025. It's a day
                dedicated to welcoming new students to the university and helping them integrate into campus life.
              </p>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                The event features a variety of fun activities, games, talent showcases, and interactive sessions
                designed to break the ice and foster new friendships. It's the perfect opportunity for freshers to
                showcase their talents and for seniors to welcome them into the university family.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/register?event=udaan">
                  <Button className="bg-green-600 text-white hover:bg-green-700">Join the Celebration</Button>
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

      {/* Activities Section */}
      <section id="activities" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-700 dark:text-green-300">
                Activities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Udaan Activities</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Exciting activities planned for freshers at Udaan 2025
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-green-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-green-500">Performance</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">10:00 AM</span>
                </div>
                <CardTitle className="text-xl mt-2">Cultural Performance</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  Freshers get to showcase their talents in singing, dancing, acting, and more.
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-4">
                  <MapPin className="h-4 w-4" />
                  <span>Main Stage, Surtech</span>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-green-500">Interactive</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">1:00 PM</span>
                </div>
                <CardTitle className="text-xl mt-2">Ice Breakers</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  Fun games and activities designed to help freshers get to know each other and their seniors.
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-4">
                  <MapPin className="h-4 w-4" />
                  <span>University Lawn</span>
                </div>
              </CardContent>
            </Card> */}

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Award className="h-12 w-12 text-green-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-green-500">Contest</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">3:00 PM</span>
                </div>
                <CardTitle className="text-xl mt-2">Mr. & Ms. Fresher</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  A fun contest to crown Mr. and Ms. Fresher based on talent, personality, and creativity.
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-4">
                  <MapPin className="h-4 w-4" />
                  <span>Main Stage, Amphitheater</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <PartyPopper className="h-12 w-12 text-green-600" />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Badge className="bg-green-500">Social</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">5:00 PM</span>
                </div>
                <CardTitle className="text-xl mt-2">DJ Night</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  End the day with music, dance, and celebration at the freshers' DJ night.
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-4">
                  <MapPin className="h-4 w-4" />
                  <span>University Amphitheater</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-700 dark:text-green-300">
                Schedule
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Event Timeline</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Detailed schedule for Udaan 2025
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-10 space-y-8">
            <div className="relative">
              <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-800"></div>

              <div className="relative flex items-start gap-6 pb-12">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-sm">
                  <Clock className="h-5 w-5" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Registration & Welcome</h3>
                  <p className="text-gray-500 dark:text-gray-400">9:00 AM - 10:00 AM</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check-in, collect your welcome kit, and enjoy refreshments
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>University Amphitheater Entrance</span>
                  </div>
                </div>
              </div>

              {/* <div className="relative flex items-start gap-6 pb-12">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-sm">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Inaugural Ceremony</h3>
                  <p className="text-gray-500 dark:text-gray-400">10:00 AM - 10:30 AM</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Welcome address by the Dean and introduction to university life
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Main Stage, Amphitheater</span>
                  </div>
                </div>
              </div> */}

              <div className="relative flex items-start gap-6 pb-12">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-sm">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Cultural Performance</h3>
                  <p className="text-gray-500 dark:text-gray-400">2:00 PM - 6:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Freshers showcase their talents in various categories
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Main Stage, Surtech</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-6 pb-12">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-sm">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Lunch Break</h3>
                  <p className="text-gray-500 dark:text-gray-400">1:00 PM - 2:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400">Enjoy lunch and network with fellow students</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Food Court</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-6 pb-12">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-sm">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Mr. & Ms. Fresher Contest</h3>
                  <p className="text-gray-500 dark:text-gray-400">3:00 PM - 5:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400">Competition to crown Mr. and Ms. Fresher 2025</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Main Stage, Surtech Campus</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-sm">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">DJ Night</h3>
                  <p className="text-gray-500 dark:text-gray-400">5:00 PM - 7:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400">End the day with music, dance, and celebration</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Surtech Campus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Begin Your College Journey?
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Udaan 2025 and make unforgettable memories at the start of your university life!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="https://forms.gle/4XhpYATDFnBtnKEg6">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
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

