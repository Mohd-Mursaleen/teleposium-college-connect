import Link from "next/link"
import { Calendar, Clock, MapPin, Share2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  // In a real app, you would fetch event data based on the ID
  const eventId = params.id

  // Sample event data
  const events = [
    {
      id: "1",
      title: "Freshman Orientation",
      date: "Aug 28, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "Student Center",
      category: "Orientation",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "Welcome to campus! Join us for a comprehensive orientation program designed to help new students navigate campus resources, meet fellow classmates, and prepare for academic success. The day includes campus tours, information sessions, and social activities.",
      organizer: "Student Affairs Office",
      attendees: 245,
    },
    {
      id: "2",
      title: "Career Fair",
      date: "Sep 15, 2023",
      time: "10:00 AM - 3:00 PM",
      location: "Engineering Building",
      category: "Career",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "Connect with over 50 employers from various industries looking to hire students and recent graduates. Bring your resume and dress professionally. This is a great opportunity to explore internship and job opportunities, network with industry professionals, and practice your interview skills.",
      organizer: "Career Services",
      attendees: 320,
    },
    {
      id: "3",
      title: "Hackathon 2023",
      date: "Oct 5-7, 2023",
      time: "48 Hours",
      location: "Computer Science Building",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "Join us for 48 hours of coding, innovation, and fun! Work in teams to develop creative solutions to real-world problems. Prizes will be awarded for the most innovative, impactful, and technically impressive projects. All skill levels are welcome.",
      organizer: "Computer Science Department",
      attendees: 175,
    },
    {
      id: "4",
      title: "Fall Concert",
      date: "Oct 20, 2023",
      time: "7:00 PM - 11:00 PM",
      location: "Campus Stadium",
      category: "Entertainment",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "Get ready for an unforgettable night of music featuring popular artists and campus bands. Food vendors and merchandise will be available. Don't miss the biggest campus event of the fall semester!",
      organizer: "Student Activities Board",
      attendees: 1200,
    },
    {
      id: "5",
      title: "Alumni Networking",
      date: "Nov 10, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Business School Atrium",
      category: "Networking",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "Connect with successful alumni from various industries and learn about their career journeys. This is a valuable opportunity to build your professional network, get career advice, and explore potential mentorship opportunities.",
      organizer: "Alumni Association",
      attendees: 150,
    },
    {
      id: "6",
      title: "Winter Formal",
      date: "Dec 8, 2023",
      time: "8:00 PM - 12:00 AM",
      location: "Grand Ballroom",
      category: "Social",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "Celebrate the end of the semester at our elegant Winter Formal. Enjoy a night of dancing, refreshments, and photo opportunities with friends. Semi-formal attire is required. Tickets must be purchased in advance.",
      organizer: "Student Government",
      attendees: 500,
    },
  ]

  const event = events.find((e) => e.id === eventId) || events[0]

  return (
    <main className="flex-1">
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 z-20 container py-6">
          <Badge className="mb-3">{event.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{event.title}</h1>
          <div className="flex flex-wrap gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      <AnimatedSection className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background rounded-lg border p-6">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-muted-foreground">{event.description}</p>

              <Separator className="my-6" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Organizer</h3>
                  <p>{event.organizer}</p>
                </div>
                <div>
                  <h3 className="font-medium">Date and Time</h3>
                  <p>
                    {event.date}, {event.time}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p>{event.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg border p-6">
              <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-muted-foreground w-24 flex-shrink-0">{event.time.split("-")[0]}</div>
                  <div>
                    <h3 className="font-medium">Check-in & Welcome</h3>
                    <p className="text-sm text-muted-foreground">Registration and welcome materials</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-muted-foreground w-24 flex-shrink-0">10:00 AM</div>
                  <div>
                    <h3 className="font-medium">Main Session</h3>
                    <p className="text-sm text-muted-foreground">Keynote presentation and announcements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-muted-foreground w-24 flex-shrink-0">12:00 PM</div>
                  <div>
                    <h3 className="font-medium">Lunch Break</h3>
                    <p className="text-sm text-muted-foreground">Networking lunch provided</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-muted-foreground w-24 flex-shrink-0">1:30 PM</div>
                  <div>
                    <h3 className="font-medium">Breakout Sessions</h3>
                    <p className="text-sm text-muted-foreground">Choose from multiple topic-focused groups</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-muted-foreground w-24 flex-shrink-0">3:30 PM</div>
                  <div>
                    <h3 className="font-medium">Closing Remarks</h3>
                    <p className="text-sm text-muted-foreground">Final announcements and next steps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-lg border p-6 sticky top-20">
              <Button className="w-full mb-4" size="lg">
                Register for Event
              </Button>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>{event.attendees} attending</span>
                </div>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <h3 className="font-medium">Similar Events</h3>

                <div className="space-y-3">
                  {events
                    .filter((e) => e.id !== eventId)
                    .slice(0, 3)
                    .map((similarEvent) => (
                      <Link href={`/events/${similarEvent.id}`} key={similarEvent.id} className="flex gap-3 group">
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt={similarEvent.title}
                          className="w-14 h-14 rounded-md object-cover flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {similarEvent.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{similarEvent.date}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
