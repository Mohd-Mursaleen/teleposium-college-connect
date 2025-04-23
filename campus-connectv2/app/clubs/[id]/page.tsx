import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"

interface ClubPageProps {
  params: {
    id: string
  }
}

export default function ClubPage({ params }: ClubPageProps) {
  // In a real app, you would fetch club data based on the ID
  const clubId = params.id

  // Sample clubs data
  const clubs = [
    {
      id: "robotics",
      name: "Robotics Club",
      category: "Technology",
      image: "https://i.pinimg.com/736x/79/30/cc/7930cc649ef405d61e4aabeca8259509.jpg?height=400&width=800",
      description:
        "The Robotics Club is dedicated to designing, building, and programming robots for various competitions and research projects. Members gain hands-on experience with mechanical engineering, electronics, and programming. The club participates in regional and national robotics competitions and hosts workshops for beginners.",
      members: 42,
      meetingTime: "Tuesdays, 6:00 PM",
      location: "Engineering Building, Room 305",
      president: "Alex Johnson",
      email: "robotics@campus.edu",
      founded: "2015",
      upcomingEvents: [
        {
          title: "Robotics Workshop",
          date: "Oct 12, 2023",
          time: "4:00 PM - 6:00 PM",
          location: "Engineering Lab",
        },
        {
          title: "Regional Robotics Competition",
          date: "Nov 18-19, 2023",
          time: "All Day",
          location: "Convention Center",
        },
      ],
    },
    {
      id: "debate",
      name: "Debate Club",
      category: "Academic",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "The Debate Club focuses on developing public speaking, critical thinking, and argumentation skills. Members participate in parliamentary and policy debate formats, discussing current events and philosophical topics. The club competes in intercollegiate tournaments and hosts public debates on campus.",
      members: 28,
      meetingTime: "Wednesdays, 5:00 PM",
      location: "Humanities Building, Room 210",
      president: "Maya Patel",
      email: "debate@campus.edu",
      founded: "2008",
      upcomingEvents: [
        {
          title: "Public Speaking Workshop",
          date: "Sep 28, 2023",
          time: "5:00 PM - 7:00 PM",
          location: "Humanities Building",
        },
        {
          title: "Intercollegiate Debate Tournament",
          date: "Oct 21-22, 2023",
          time: "All Day",
          location: "State University",
        },
      ],
    },
    {
      id: "photography",
      name: "Photography Club",
      category: "Arts",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "The Photography Club brings together students passionate about visual storytelling through photography. Members learn various photography techniques, editing skills, and artistic composition. The club organizes photo walks, workshops, and exhibitions to showcase student work.",
      members: 35,
      meetingTime: "Thursdays, 4:30 PM",
      location: "Arts Center, Room 120",
      president: "Jordan Lee",
      email: "photography@campus.edu",
      founded: "2012",
      upcomingEvents: [
        {
          title: "Night Photography Workshop",
          date: "Oct 5, 2023",
          time: "7:00 PM - 9:00 PM",
          location: "Campus Quad",
        },
        {
          title: "Fall Photo Exhibition",
          date: "Nov 10, 2023",
          time: "6:00 PM - 8:00 PM",
          location: "Student Gallery",
        },
      ],
    },
    {
      id: "chess",
      name: "Chess Club",
      category: "Games",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "The Chess Club welcomes players of all skill levels, from beginners to advanced. Members meet weekly to play casual games, learn strategies, and prepare for tournaments. The club hosts regular internal competitions and participates in intercollegiate chess matches.",
      members: 20,
      meetingTime: "Fridays, 3:00 PM",
      location: "Student Center, Game Room",
      president: "David Chen",
      email: "chess@campus.edu",
      founded: "2010",
      upcomingEvents: [
        {
          title: "Beginners Chess Workshop",
          date: "Sep 29, 2023",
          time: "3:00 PM - 5:00 PM",
          location: "Student Center",
        },
        {
          title: "Speed Chess Tournament",
          date: "Oct 27, 2023",
          time: "4:00 PM - 8:00 PM",
          location: "Game Room",
        },
      ],
    },
    {
      id: "environmental",
      name: "Environmental Action",
      category: "Activism",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "Environmental Action is dedicated to promoting sustainability and environmental awareness on campus and in the local community. The group organizes clean-up events, educational workshops, and advocacy campaigns. Members work on initiatives such as recycling programs, community gardens, and renewable energy projects.",
      members: 50,
      meetingTime: "Mondays, 5:30 PM",
      location: "Science Building, Room 150",
      president: "Emma Rodriguez",
      email: "environmental@campus.edu",
      founded: "2014",
      upcomingEvents: [
        {
          title: "Campus Clean-Up Day",
          date: "Oct 7, 2023",
          time: "10:00 AM - 1:00 PM",
          location: "Meet at Quad",
        },
        {
          title: "Sustainability Workshop",
          date: "Oct 19, 2023",
          time: "5:30 PM - 7:30 PM",
          location: "Science Building",
        },
      ],
    },
  ]

  const club = clubs.find((c) => c.id === clubId) || clubs[0]

  return (
    <main className="flex-1">
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 z-20 container py-6">
          <Badge className="mb-3">{club.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{club.name}</h1>
          <div className="flex flex-wrap gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{club.members} members</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{club.meetingTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{club.location}</span>
            </div>
          </div>
        </div>
      </div>

      <AnimatedSection className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="space-y-6 mt-6">
                <div className="bg-background rounded-lg border p-6">
                  <h2 className="text-2xl font-bold mb-4">About This Club</h2>
                  <p className="text-muted-foreground">{club.description}</p>

                  <Separator className="my-6" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">President</h3>
                        <p>{club.president}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p>{club.email}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Founded</h3>
                        <p>{club.founded}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Meeting Time</h3>
                        <p>{club.meetingTime}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p>{club.location}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Members</h3>
                        <p>{club.members} active members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-6 mt-6">
                <div className="bg-background rounded-lg border p-6">
                  <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>

                  <div className="space-y-6">
                    {club.upcomingEvents.map((event, index) => (
                      <div key={index} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                        <div className="md:w-24 h-24 bg-muted rounded-md flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                          <Calendar className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 mt-2 text-muted-foreground">
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
                        <div className="flex justify-center md:justify-end items-center mt-4 md:mt-0">
                          <Button>Register</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-6 mt-6">
                <div className="bg-background rounded-lg border p-6">
                  <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="aspect-square rounded-md overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=300&width=300&text=Gallery+${item}`}
                          alt={`Gallery image ${item}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-lg border p-6 sticky top-20">
              <Button className="w-full mb-4" size="lg">
                Join This Club
              </Button>

              <Separator className="my-4" />

              <div className="space-y-4">
                <h3 className="font-medium">Similar Clubs</h3>

                <div className="space-y-3">
                  {clubs
                    .filter((c) => c.id !== clubId)
                    .slice(0, 3)
                    .map((similarClub) => (
                      <Link href={`/clubs/${similarClub.id}`} key={similarClub.id} className="flex gap-3 group">
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt={similarClub.name}
                          className="w-14 h-14 rounded-md object-cover flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">{similarClub.name}</h4>
                          <p className="text-xs text-muted-foreground">{similarClub.category}</p>
                        </div>
                      </Link>
                    ))}
                </div>

                <div className="pt-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/clubs">View All Clubs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
