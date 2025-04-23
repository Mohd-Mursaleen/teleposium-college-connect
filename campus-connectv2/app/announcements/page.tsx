import { Search, Bell, Filter, Pin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function AnnouncementsPage() {
  // Sample announcements data
  const announcements = [
    {
      id: "1",
      title: "Campus Closure Due to Weather",
      content:
        "Due to the expected severe weather conditions, all classes and campus activities will be canceled tomorrow. Essential personnel should report as scheduled. Updates will be provided through the emergency notification system.",
      date: "Oct 15, 2023",
      time: "4:30 PM",
      category: "Emergency",
      author: "Campus Safety Office",
      pinned: true,
    },
    {
      id: "2",
      title: "Spring Registration Opens Next Week",
      content:
        "Registration for Spring semester courses will open next Monday at 8:00 AM. Students should check their registration time slots and prepare their course selections in advance. Academic advisors are available for consultation.",
      date: "Oct 12, 2023",
      time: "10:15 AM",
      category: "Academic",
      author: "Registrar's Office",
      pinned: true,
    },
    {
      id: "3",
      title: "Library Extended Hours for Finals Week",
      content:
        "The main campus library will extend its hours during finals week, staying open 24/7 from December 10-16. Additional study spaces will be available, and the coffee shop will have extended hours as well.",
      date: "Oct 10, 2023",
      time: "2:45 PM",
      category: "Facilities",
      author: "Library Services",
      pinned: false,
    },
    {
      id: "4",
      title: "New Mental Health Resources Available",
      content:
        "The Counseling Center has expanded its services to include virtual appointments and a 24/7 crisis hotline. Students can now schedule appointments online through the student portal.",
      date: "Oct 8, 2023",
      time: "11:30 AM",
      category: "Health",
      author: "Student Wellness Center",
      pinned: false,
    },
    {
      id: "5",
      title: "Campus Wi-Fi Maintenance Scheduled",
      content:
        "IT Services will be performing maintenance on the campus Wi-Fi network this Saturday from 2:00 AM to 6:00 AM. Internet service may be intermittent during this time. We apologize for any inconvenience.",
      date: "Oct 5, 2023",
      time: "9:00 AM",
      category: "IT",
      author: "Information Technology",
      pinned: false,
    },
    {
      id: "6",
      title: "New Dining Options Coming to Student Center",
      content:
        "We're excited to announce that three new dining options will be opening in the Student Center next month: a sushi bar, a Mediterranean grill, and a smoothie shop. Grand opening celebrations will be announced soon.",
      date: "Oct 3, 2023",
      time: "1:15 PM",
      category: "Dining",
      author: "Campus Dining Services",
      pinned: false,
    },
    {
      id: "7",
      title: "Scholarship Application Deadline Extended",
      content:
        "The deadline for applying to the Presidential Merit Scholarship has been extended to November 15. Eligible students are encouraged to submit their applications through the financial aid portal.",
      date: "Oct 1, 2023",
      time: "3:45 PM",
      category: "Financial",
      author: "Financial Aid Office",
      pinned: false,
    },
  ]

  // Categories for filtering
  const categories = ["All", "Academic", "Dining", "Emergency", "Facilities", "Financial", "Health", "IT"]

  return (
    <main className="flex-1">
      <div className="bg-muted/50">
        <AnimatedSection className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Campus Announcements</h1>
            <p className="text-muted-foreground text-lg">
              Stay informed with the latest news and updates from across campus
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative w-full md:w-[260px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search announcements..." className="w-full pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
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

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pinned">Pinned</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="space-y-6">
              {announcements.map((announcement) => (
                <AnnouncementCard key={announcement.id} announcement={announcement} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pinned" className="mt-6">
            <div className="space-y-6">
              {announcements
                .filter((a) => a.pinned)
                .map((announcement) => (
                  <AnnouncementCard key={announcement.id} announcement={announcement} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="recent" className="mt-6">
            <div className="space-y-6">
              {announcements.slice(0, 5).map((announcement) => (
                <AnnouncementCard key={announcement.id} announcement={announcement} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            Load More Announcements
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-12 my-8">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Notifications</h2>
            <p className="text-muted-foreground mb-6">
              Get important campus announcements delivered directly to your email or phone.
            </p>
            <Button size="lg">
              <Bell className="h-4 w-4 mr-2" />
              Subscribe Now
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

interface AnnouncementCardProps {
  announcement: {
    id: string
    title: string
    content: string
    date: string
    time: string
    category: string
    author: string
    pinned: boolean
  }
}

function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  return (
    <Link href={`/announcements/${announcement.id}`} className="block group">
      <div className="bg-background rounded-lg border p-6 transition-all duration-200 hover:shadow-md">
        <div className="flex justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={announcement.category === "Emergency" ? "destructive" : "default"}>
                {announcement.category}
              </Badge>
              {announcement.pinned && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Pin className="h-3 w-3 mr-1" />
                  Pinned
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{announcement.title}</h3>
          </div>
          <div className="text-sm text-muted-foreground text-right whitespace-nowrap">
            <div>{announcement.date}</div>
            <div>{announcement.time}</div>
          </div>
        </div>
        <p className="mt-3 text-muted-foreground line-clamp-2">{announcement.content}</p>
        <Separator className="my-4" />
        <div className="flex justify-between items-center">
          <div className="text-sm">From: {announcement.author}</div>
          <div className="text-sm text-primary font-medium group-hover:underline">Read more</div>
        </div>
      </div>
    </Link>
  )
}
