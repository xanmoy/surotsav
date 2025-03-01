import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                About Surotsav
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Learn more about our annual tech and cultural festival
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="about" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="about">About</TabsTrigger>
                {/* <TabsTrigger value="history">History</TabsTrigger> */}
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="about" className="mt-0">
              <div className="grid gap-10 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">What is Surotsav?</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Surotsav is our university's flagship annual tech and cultural festival that brings together
                    students, professionals, and enthusiasts from across the country. It's a celebration of innovation,
                    creativity, and diversity.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    The festival features a wide range of events including hackathons, coding competitions, robotics
                    challenges, cultural performances, art exhibitions, music concerts, and much more. It provides a
                    platform for students to showcase their talents, learn new skills, and network with industry
                    professionals.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                        <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xl font-bold">20+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Tech Events</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/20">
                        <Users className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xl font-bold">15+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Cultural Shows</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                        <CalendarDays className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xl font-bold">4</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Days of Fun</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Surotsav Event"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </TabsContent>

            {/* <TabsContent value="history" className="mt-0">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Our Journey</h2>
                  <p className="text-gray-500 dark:text-gray-400 max-w-[800px]">
                    Surotsav started as a small departmental event in 2010 and has grown into one of the largest
                    college festivals in the region. Here's a look at our journey over the years.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 aspect-video overflow-hidden rounded-xl">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Surotsav 2010"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="md:w-2/3 space-y-2">
                      <h3 className="text-2xl font-bold">2010-2015: The Beginning</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Surotsav started as a small technical symposium organized by the Computer Science department.
                        With just 5 events and 200 participants, it was a humble beginning. By 2015, it had expanded to
                        include events from multiple departments and had over 1,000 participants.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="md:w-1/3 aspect-video overflow-hidden rounded-xl">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Surotsav 2018"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="md:w-2/3 space-y-2">
                      <h3 className="text-2xl font-bold">2016-2020: Growth and Expansion</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        This period saw Surotsav transform into a university-wide festival. Cultural events were
                        introduced alongside technical competitions. The festival began attracting participants from
                        other colleges and universities. By 2020, Surotsav had over 30 events and 5,000 participants.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 aspect-video overflow-hidden rounded-xl">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Surotsav 2023"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="md:w-2/3 space-y-2">
                      <h3 className="text-2xl font-bold">2021-Present: National Recognition</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Despite the challenges of the pandemic, Surotsav adapted with virtual events in 2021. As we
                        returned to in-person events, the festival gained national recognition with participants from
                        across the country. Today, Surotsav is known for its innovative events, high-profile
                        speakers, and vibrant cultural performances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent> */}

            <TabsContent value="team" className="mt-0">
              <div className="space-y-8">
                {/* Section Heading */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Meet the Team</h2>
                  <p className="text-gray-500 dark:text-gray-400 max-w-[800px]">
                    Surotsav is organized by a dedicated team of faculty members and students who work tirelessly to make the
                    festival a success. Here are the key members of our organizing committee.
                  </p>
                </div>

                {/* Faculty Team */}
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Surotsav Core Committee</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                      {
                        name: "Dr. Saradindu Panda",
                        role: "Principal",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                      {
                        name: "Anirbit Sengupta",
                        role: "Deputy Registrar",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                      {
                        name: "Aviroop Dewan",
                        role: "Admin",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                      {
                        name: "Sayani Ghosh Saha",
                        role: "Admin",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                      {
                        name: "Debasmita Roy Chowdhury",
                        role: "Dept of BSH",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                      {
                        name: "Dr. Anirban Neogi",
                        role: "HOD of ECE",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                      {
                        name: "Baibaswata Das",
                        role: "Dept of Civil Engineering",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                    ].map((member, index) => (
                      <Card key={`faculty-${index}`} className="overflow-hidden">
                        <div className="aspect-square w-full overflow-hidden">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <CardContent className="p-4 text-center">
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* TechFest Team */}
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Techfest Team</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                      { name: "Anushwa Bhattacharya", role: "Student Head", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Tanmoy Ganguly", role: "Technical Head", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Bhavini Lakhotia", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Sahir Hilal", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Kishan Derasree", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Shruti Mandal", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Novonil Mitra", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Debayan Chakraborty", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Swakshar Mitra", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Sruti Shaw", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Anushka Bhowmick", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Anjishnu Chandra", role: "Techfest Coordinator", image: "/placeholder.svg?height=300&width=300" },
                    ].map((member, index) => (
                      <Card key={`student-${index}`} className="overflow-hidden">
                        <div className="aspect-square w-full overflow-hidden">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <CardContent className="p-4 text-center">
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Cultural Team */}
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Cultural Team</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                      { name: "Monalisha Singha Roy", role: "Mother Surtech", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Abhishek Roy", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Prohit Sil", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Md. Abid Khan", role: "cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Shashwat Sharma", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Jit Biswas", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Shivam Kumar", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Shivam Singh", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                    ].map((member, index) => (
                      <Card key={`student-${index}`} className="overflow-hidden">
                        <div className="aspect-square w-full overflow-hidden">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <CardContent className="p-4 text-center">
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Media Team */}
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Media Team</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                      { name: "Monalisha Singha Roy", role: "Mother Surtech", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Abhishek Roy", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Prohit Sil", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Md. Abid Khan", role: "cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Shashwat Sharma", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Jit Biswas", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Shivam Kumar", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                      { name: "Shivam Singh", role: "Cultural Coordinator", image: "/placeholder.svg?height=300&width=300" },
                    ].map((member, index) => (
                      <Card key={`student-${index}`} className="overflow-hidden">
                        <div className="aspect-square w-full overflow-hidden">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <CardContent className="p-4 text-center">
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Join Our Team Section */}
                <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    We're always looking for enthusiastic students to join our organizing committee. If you're passionate about
                    technology, culture, or event management, we'd love to have you on board!
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Contact us at <span className="text-purple-600 dark:text-purple-400">team@Surotsav.edu</span> to
                    learn more about volunteer opportunities.
                  </p>
                </div>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>
    </div>
  )
}

