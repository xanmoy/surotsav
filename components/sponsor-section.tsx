import { Card, CardContent } from "@/components/ui/card"

export default function SponsorSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
              Our Sponsors
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proudly Supported By</h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These amazing organizations make TechCultura possible.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center mt-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="bg-white dark:bg-gray-800 border-0 shadow-none">
              <CardContent className="flex items-center justify-center p-6">
                <img src={`/placeholder.svg?height=80&width=120`} alt={`Sponsor ${i}`} className="max-h-12 w-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

