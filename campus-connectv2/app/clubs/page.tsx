import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

export default function ClubsPage() {
  // Real clubs data based on the file
  const clubs = [
    {
      id: "leo-club",
      name: "LEO Club",
      category: "Literary",
      image: "https://i.pinimg.com/736x/2c/2c/70/2c2c70244f4b4e32d132160f2d3a641f.jpg?height=200&width=400",
      description: "Let's Express Ourselves - A literary club established in 2004 that enhances students' communication skills through debates, group discussions, mock interviews, and resume building.",
      members: 45,
      meetingTime: "Fridays, 4:00 PM",
      location: "Main Building, Room 205",
      events: ["Literati (Annual Literary Fest)"]
    },
    {
      id: "gap",
      name: "GAP Theatre Group",
      category: "Cultural",
      image: "https://i.pinimg.com/736x/cc/3e/f8/cc3ef8dab49d3474651b1d40518cfd81.jpg?height=200&width=400",
      description: "Getting Across to People - The official theatre group that performs various forms of theatre including one-act plays, skits, mimes, and street plays.",
      members: 32,
      meetingTime: "Thursdays, 5:30 PM",
      location: "Cultural Center, Theatre Hall",
      events: ["Annual Productions at Professional Theatres"]
    },
    {
      id: "susamskriti",
      name: "Susamskriti Cultural Forum",
      category: "Cultural",
      image: "https://i.pinimg.com/736x/67/17/15/671715479fb96d225b29402e1d70c3a8.jpg?height=200&width=400",
      description: "This forum organizes cultural events and festivals, promoting rich heritage and traditions among students.",
      members: 60,
      meetingTime: "Mondays, 4:30 PM",
      location: "Cultural Center, Meeting Room",
      events: ["Traditional Day Celebration", "Cultural Fest"]
    },
    {
      id: "kalakriti",
      name: "Robotics Club",
      category: "Arts",
      image: "https://i.pinimg.com/736x/79/30/cc/7930cc649ef405d61e4aabeca8259509.jpg?height=200&width=400",
      description: "A club dedicated to drawing and visual arts, providing a platform for students to showcase their artistic talents.",
      members: 28,
      meetingTime: "Wednesdays, 3:00 PM",
      location: "Arts Center, Studio 101",
      events: ["Annual Art Exhibition"]
    },
   
    {
      id: "mvit-quillz",
      name: "MVIT Quillz",
      category: "Quiz",
      image: "https://i.pinimg.com/736x/80/d8/90/80d8908255bdf15879d6ce90c4debb0d.jpg?height=200&width=400",
      description: "The quiz club formed in 2015 that conducts quizzes during college fests and participates in national-level competitions.",
      members: 22,
      meetingTime: "Fridays, 2:00 PM",
      location: "Library, Discussion Room",
      events: ["TATA Crucible", "Nobel Memorial Quiz", "College Quiz Events"]
    },
    
 
    {
      id: "debate-club",
      name: "Sir MVIT Debate Club",
      category: "Literary",
      image: "https://i.pinimg.com/736x/ba/40/53/ba4053983ac41d17112a498f819987af.jpg?height=200&width=400",
      description: "Encourages students to participate in debates, enhancing their critical thinking and public speaking abilities.",
      members: 25,
      meetingTime: "Tuesdays, 3:30 PM",
      location: "Humanities Building, Room 105",
      events: ["Intercollegiate Debate Competitions", "Model UN"]
    },
  ]

  // Categories for filtering - updated with real categories
  const categories = ["All", "Literary", "Cultural", "Arts", "Media", "Quiz", "Social Outreach", "Environmental"]

  return (
    <main className="flex-1">
      <div className="bg-muted/50">
        <AnimatedSection className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Student Clubs & Organizations</h1>
            <p className="text-muted-foreground text-lg">
              Find your community and pursue your passions through diverse student-led clubs at Sir MVIT
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
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{club.description}</p>
                  <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                    <span>{club.members} members</span>
                    <span>{club.meetingTime.split(',')[0]}</span>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join a Club Today</h2>
            <p className="text-muted-foreground mb-6">
              Enhance your college experience, develop skills, and build lasting friendships by joining one of our many student organizations.
            </p>
            <Button size="lg">Contact Student Affairs</Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
