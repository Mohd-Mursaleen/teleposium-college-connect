import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FeaturedBanner } from "@/components/featured-banner"
import { EventCard } from "@/components/event-card"
import { AnimatedSection } from "@/components/animated-section"

export default function HomePage() {
  return (
    <main className="flex-1">
      <AnimatedSection>
        <FeaturedBanner />
      </AnimatedSection>

      <AnimatedSection className="container py-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
            <p className="text-muted-foreground">Discover what's happening on campus</p>
          </div>
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative w-full md:w-[260px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search events..." className="w-full pl-8" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/events/1" className="block group">
            <EventCard
              title="Freshman Orientation"
              date="Aug 28, 2023"
              time="9:00 AM - 4:00 PM"
              location="Student Center"
              category="Orientation"
              image="/placeholder.svg?height=200&width=400"
            />
          </Link>
          <Link href="/events/2" className="block group">
            <EventCard
              title="Career Fair"
              date="Sep 15, 2023"
              time="10:00 AM - 3:00 PM"
              location="Engineering Building"
              category="Career"
              image="/placeholder.svg?height=200&width=400"
            />
          </Link>
          <Link href="/events/3" className="block group">
            <EventCard
              title="Hackathon 2023"
              date="Oct 5-7, 2023"
              time="48 Hours"
              location="Computer Science Building"
              category="Technology"
              image="/placeholder.svg?height=200&width=400"
            />
          </Link>
          <Link href="/events/4" className="block group">
            <EventCard
              title="Fall Concert"
              date="Oct 20, 2023"
              time="7:00 PM - 11:00 PM"
              location="Campus Stadium"
              category="Entertainment"
              image="/placeholder.svg?height=200&width=400"
            />
          </Link>
          <Link href="/events/5" className="block group">
            <EventCard
              title="Alumni Networking"
              date="Nov 10, 2023"
              time="6:00 PM - 8:00 PM"
              location="Business School Atrium"
              category="Networking"
              image="/placeholder.svg?height=200&width=400"
            />
          </Link>
          <Link href="/events/6" className="block group">
            <EventCard
              title="Winter Formal"
              date="Dec 8, 2023"
              time="8:00 PM - 12:00 AM"
              location="Grand Ballroom"
              category="Social"
              image="/placeholder.svg?height=200&width=400"
            />
          </Link>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-12 space-y-6 bg-muted/50 rounded-lg my-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Campus Clubs</h2>
          <p className="text-muted-foreground mt-2">Find your community and pursue your passions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Link href="/clubs/robotics" className="block group">
            <div className="bg-background rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Robotics Club"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">Technology</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl">Robotics Club</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Build and program robots for competitions and research projects
                </p>
              </div>
            </div>
          </Link>

          <Link href="/clubs/debate" className="block group">
            <div className="bg-background rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Debate Club"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">Academic</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl">Debate Club</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Develop public speaking skills and compete in debate tournaments
                </p>
              </div>
            </div>
          </Link>

          <Link href="/clubs/photography" className="block group">
            <div className="bg-background rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Photography Club"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">Arts</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl">Photography Club</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Learn photography techniques and showcase your work in exhibitions
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-center mt-6">
          <Button variant="outline" size="lg">
            Explore All Clubs
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-12 my-8">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground mt-2">
              Subscribe to our newsletter to get the latest campus news and event updates
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <Input placeholder="Enter your email" className="min-w-[240px]" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
