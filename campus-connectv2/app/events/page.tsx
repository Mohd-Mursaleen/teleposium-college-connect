import { Search, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventCard } from "@/components/event-card"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

export default function EventsPage() {
  // Sample events data
  const events = [
    {
      id: "1",
      title: "Freshman Orientation",
      date: "Aug 28, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "Student Center",
      category: "Orientation",
      image: "https://i.pinimg.com/736x/f6/50/30/f65030ce74fbd260f46f20a107e8c8c6.jpg?height=200&width=400",
    },
    {
      id: "2",
      title: "Career Fair",
      date: "Sep 15, 2023",
      time: "10:00 AM - 3:00 PM",
      location: "Engineering Building",
      category: "Career",
      image: "https://i.pinimg.com/736x/fe/29/73/fe297327e9e27b7813ee6c8c20f002f8.jpg?height=200&width=400",
    },
    {
      id: "3",
      title: "Hackathon 2023",
      date: "Oct 5-7, 2023",
      time: "48 Hours",
      location: "Computer Science Building",
      category: "Technology",
      image: "https://www.sirmvit.edu/wp-content/uploads/2025/03/Hackathon-poster.jpg?height=200&width=400",
    },
    {
      id: "4",
      title: "Fall Concert",
      date: "Oct 20, 2023",
      time: "7:00 PM - 11:00 PM",
      location: "Campus Stadium",
      category: "Entertainment",
      image: "https://i.pinimg.com/736x/53/3d/b3/533db3a193581bd0f59330724f4409c5.jpg?height=200&width=400",
    },
    {
      id: "5",
      title: "Alumni Networking",
      date: "Nov 10, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Business School Atrium",
      category: "Networking",
      image: "https://i.pinimg.com/736x/16/1e/09/161e0928a295bc26d55b8bc1ab7af812.jpg?height=200&width=400",
    },
    {
      id: "6",
      title: "Winter Formal",
      date: "Dec 8, 2023",
      time: "8:00 PM - 12:00 AM",
      location: "Grand Ballroom",
      category: "Social",
      image: "https://i.pinimg.com/736x/3c/f1/af/3cf1af729102d69d47858e21f30a09e5.jpg?height=200&width=400",
    },
    {
      id: "7",
      title: "Research Symposium",
      date: "Nov 3, 2023",
      time: "1:00 PM - 5:00 PM",
      location: "Science Center",
      category: "Academic",
      image: "https://i.pinimg.com/736x/c2/7a/88/c27a8807b3a666252d32c4ceb55b5489.jpg?height=200&width=400",
    },
    {
      id: "8",
      title: "International Food Festival",
      date: "Oct 12, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "Campus Quad",
      category: "Cultural",
      image: "https://i.pinimg.com/736x/bf/fd/42/bffd425b99ab1c06194e6897ec79b864.jpg?height=200&width=400",
    },
    {
      id: "9",
      title: "Basketball Tournament",
      date: "Nov 18-19, 2023",
      time: "All Day",
      location: "Sports Complex",
      category: "Sports",
      image: "https://i.pinimg.com/736x/4c/d9/80/4cd980e46f93f6a3a1b992459318b2f3.jpg?height=200&width=400",
    },
  ]

  // Categories for filtering
  const categories = [
    "All",
    "Academic",
    "Career",
    "Cultural",
    "Entertainment",
    "Networking",
    "Orientation",
    "Social",
    "Sports",
    "Technology",
  ]

  return (
    <main className="flex-1">
      <div className="bg-muted/50">
        <AnimatedSection className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Campus Events</h1>
            <p className="text-muted-foreground text-lg">
              Discover and participate in a wide range of events happening across campus
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative w-full md:w-[260px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search events..." className="w-full pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Calendar
            </Button>
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

        <Tabs defaultValue="upcoming" className="w-full mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="this-week">This Week</TabsTrigger>
            <TabsTrigger value="this-month">This Month</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Link href={`/events/${event.id}`} key={event.id} className="block group">
                  <EventCard
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    category={event.category}
                    image={event.image}
                  />
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="this-week" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.slice(0, 3).map((event) => (
                <Link href={`/events/${event.id}`} key={event.id} className="block group">
                  <EventCard
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    category={event.category}
                    image={event.image}
                  />
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="this-month" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.slice(3, 9).map((event) => (
                <Link href={`/events/${event.id}`} key={event.id} className="block group">
                  <EventCard
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    category={event.category}
                    image={event.image}
                  />
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-12 my-8">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Host Your Own Event</h2>
            <p className="text-muted-foreground mb-6">
              Student organizations and departments can submit events to be featured on the campus calendar.
            </p>
            <Button size="lg">Submit an Event</Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
