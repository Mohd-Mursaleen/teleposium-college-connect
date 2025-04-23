import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

export default function ClubsPage() {
  // Sample clubs data
  const clubs = [
    {
      id: "robotics",
      name: "Robotics Club",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=400",
      description: "Build and program robots for competitions and research projects",
      members: 42,
      meetingTime: "Tuesdays, 6:00 PM",
      location: "Engineering Building, Room 305",
    },
    {
      id: "debate",
      name: "Debate Club",
      category: "Academic",
      image: "/placeholder.svg?height=200&width=400",
      description: "Develop public speaking skills and compete in debate tournaments",
      members: 28,
      meetingTime: "Wednesdays, 5:00 PM",
      location: "Humanities Building, Room 210",
    },
    {
      id: "photography",
      name: "Photography Club",
      category: "Arts",
      image: "/placeholder.svg?height=200&width=400",
      description: "Learn photography techniques and showcase your work in exhibitions",
      members: 35,
      meetingTime: "Thursdays, 4:30 PM",
      location: "Arts Center, Room 120",
    },
    {
      id: "chess",
      name: "Chess Club",
      category: "Games",
      image: "/placeholder.svg?height=200&width=400",
      description: "Play chess with fellow enthusiasts and participate in tournaments",
      members: 20,
      meetingTime: "Fridays, 3:00 PM",
      location: "Student Center, Game Room",
    },
    {
      id: "environmental",
      name: "Environmental Action",
      category: "Activism",
      image: "/placeholder.svg?height=200&width=400",
      description: "Work on sustainability initiatives and environmental awareness campaigns",
      members: 50,
      meetingTime: "Mondays, 5:30 PM",
      location: "Science Building, Room 150",
    },
  ]

  // Categories for filtering
  const categories = ["All", "Technology", "Academic", "Arts", "Sports", "Games", "Activism", "Cultural"]

  return (
    <main className="flex-1">
      <div className="bg-muted/50">
        <AnimatedSection className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Campus Clubs</h1>
            <p className="text-muted-foreground text-lg">
              Discover and join student organizations that match your interests and passions
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative w-full md:w-[260px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search clubs..." className="w-full pl-8" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <div className="w-full md:w-auto overflow-auto">
            <div className="flex gap-2 min-w-max">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Link href={`/clubs/${club.id}`} key={club.id} className="block group">
              <div className="bg-background rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={club.image || "/placeholder.svg"}
                    alt={club.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      {club.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{club.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{club.description}</p>
                  <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                    <span>{club.members} members</span>
                    <span>{club.meetingTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-12 my-8">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Own Club</h2>
            <p className="text-muted-foreground mb-6">
              Have a passion that's not represented? Create a new student organization and build your community.
            </p>
            <Button size="lg">Learn How to Start a Club</Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
