import { Card, CardContent } from "@/components/ui/card"

interface SpeakerCardProps {
  name: string
  role: string
  image: string
}

export default function SpeakerCard({ name, role, image }: SpeakerCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </CardContent>
    </Card>
  )
}

