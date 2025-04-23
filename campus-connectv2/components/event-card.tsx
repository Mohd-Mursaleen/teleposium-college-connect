import { Calendar, Clock, MapPin, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  category: string
  image: string
  description?: string
  className?: string
}

export function EventCard({ 
  title, 
  date, 
  time, 
  location, 
  category, 
  image, 
  description,
  className 
}: EventCardProps) {
  return (
    <div
      className={cn(
        "bg-background rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-md",
        className,
      )}
    >
      <div className="aspect-video relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 z-20">
          <Badge>{category}</Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{title}</h3>
        <div className="mt-3 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {description && (
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
