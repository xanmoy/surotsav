import type { ReactNode } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EventCardProps {
  title: string
  description: string
  category: string
  date: string
  image: string
  icon: ReactNode
  url: string
}

export default function EventCard({ title, description, category, date, image, icon, url }: EventCardProps) {
  // const linkHref = url || `/events/${title.toLowerCase().replace(/\s+/g, "-")}`


  return (
    // <Link href={linkHref}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          <div className="flex justify-between items-center">
            <Badge
              variant={
                category === "Tech"
                  ? "default"
                  : category === "Cultural"
                    ? "secondary"
                    : category === "Freshers"
                      ? "outline"
                      : "default"
              }
              className={
                category === "Tech"
                  ? "bg-blue-500"
                  : category === "Cultural"
                    ? "bg-pink-500"
                    : category === "Freshers"
                      ? "bg-green-500"
                      : category === "Flashmob"
                        ? "bg-purple-500"
                        : "bg-gray-500"
              }
            >
              <div className="flex items-center gap-1">
                {icon}
                {category}
              </div>
            </Badge>
            <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
          </div>
          <h3 className="text-xl font-bold mt-2">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link href={url} className="text-sm font-medium text-purple-600 dark:text-purple-400" target="_blank">Register Now →</Link>
        </CardFooter>
      </Card>
    // </Link>
  )
}
