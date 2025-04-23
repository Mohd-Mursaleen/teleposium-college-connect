import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Bell, Pin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"

interface AnnouncementPageProps {
  params: {
    id: string
  }
}

export default function AnnouncementPage({ params }: AnnouncementPageProps) {
  // In a real app, you would fetch announcement data based on the ID
  const announcementId = params.id

  // Sample announcements data
  const announcements = [
    {
      id: "1",
      title: "Campus Closure Due to Weather",
      content: `<p>Due to the expected severe weather conditions, all classes and campus activities will be canceled tomorrow. Essential personnel should report as scheduled. Updates will be provided through the emergency notification system.</p>
      <p>The National Weather Service has issued a severe weather warning for our area, with potential for heavy snow and ice accumulation. Campus Safety has determined that conditions will not be safe for travel or campus operations.</p>
      <p>During this closure:</p>
      <ul>
        <li>All classes are canceled, including online sessions</li>
        <li>Administrative offices will be closed</li>
        <li>The Student Center will maintain limited hours (10 AM - 2 PM) for residential students</li>
        <li>Dining services will operate on a modified schedule</li>
        <li>Campus shuttle service will be suspended</li>
      </ul>
      <p>Students living in residence halls should follow instructions from Residential Life staff. Essential services including campus security, facilities management for emergency repairs, and dining services for residential students will continue to operate.</p>
      <p>Please monitor your email and the campus emergency notification system for updates on when normal operations will resume.</p>`,
      date: "Oct 15, 2023",
      time: "4:30 PM",
      category: "Emergency",
      author: "Campus Safety Office",
      authorTitle: "Director of Campus Safety",
      pinned: true,
      relatedLinks: [
        { title: "Emergency Procedures", url: "#" },
        { title: "Weather Updates", url: "#" },
        { title: "Campus Map", url: "#" },
      ],
    },
    {
      id: "2",
      title: "Spring Registration Opens Next Week",
      content: `<p>Registration for Spring semester courses will open next Monday at 8:00 AM. Students should check their registration time slots and prepare their course selections in advance. Academic advisors are available for consultation.</p>
      <p>Registration will proceed according to the following schedule:</p>
      <ul>
        <li>Seniors (90+ credits): Monday, 8:00 AM</li>
        <li>Juniors (60-89 credits): Tuesday, 8:00 AM</li>
        <li>Sophomores (30-59 credits): Wednesday, 8:00 AM</li>
        <li>Freshmen (0-29 credits): Thursday, 8:00 AM</li>
      </ul>
      <p>Before registration opens:</p>
      <ul>
        <li>Meet with your academic advisor to review your degree progress</li>
        <li>Clear any registration holds (financial, academic, etc.)</li>
        <li>Prepare a list of primary courses and alternatives</li>
        <li>Review the updated course catalog and schedule of classes</li>
      </ul>
      <p>The Registrar's Office will hold registration assistance sessions in the Student Center on Monday through Thursday from 9:00 AM to 4:00 PM. Technical support will also be available by phone or email.</p>
      <p>If you have any questions about registration, please contact the Registrar's Office.</p>`,
      date: "Oct 12, 2023",
      time: "10:15 AM",
      category: "Academic",
      author: "Registrar's Office",
      authorTitle: "University Registrar",
      pinned: true,
      relatedLinks: [
        { title: "Course Catalog", url: "#" },
        { title: "Degree Requirements", url: "#" },
        { title: "Academic Calendar", url: "#" },
      ],
    },
  ]

  const announcement = announcements.find((a) => a.id === announcementId) || announcements[0]

  // Get related announcements (excluding current one)
  const relatedAnnouncements = announcements.filter((a) => a.id !== announcementId)

  return (
    <main className="flex-1">
      <div className="bg-muted/50">
        <AnimatedSection className="container py-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/announcements">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Announcements
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={announcement.category === "Emergency" ? "destructive" : "default"} className="px-3 py-1">
                {announcement.category}
              </Badge>
              {announcement.pinned && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Pin className="h-4 w-4 mr-1" />
                  Pinned Announcement
                </div>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{announcement.title}</h1>
            <div className="flex flex-wrap gap-4 mt-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{announcement.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{announcement.time}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background rounded-lg border p-6">
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: announcement.content }}
              />

              <Separator className="my-6" />

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Published by</div>
                  <div>
                    <span className="font-medium">{announcement.author}</span>
                    {announcement.authorTitle && (
                      <span className="text-muted-foreground"> — {announcement.authorTitle}</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm">
                    <Bell className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-lg border p-6 sticky top-20">
              {announcement.relatedLinks && announcement.relatedLinks.length > 0 && (
                <>
                  <h3 className="font-medium mb-3">Related Resources</h3>
                  <ul className="space-y-2">
                    {announcement.relatedLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.url} className="text-primary hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-4" />
                </>
              )}

              <h3 className="font-medium mb-3">Recent Announcements</h3>
              <div className="space-y-4">
                {relatedAnnouncements.slice(0, 3).map((relatedAnnouncement) => (
                  <Link
                    href={`/announcements/${relatedAnnouncement.id}`}
                    key={relatedAnnouncement.id}
                    className="block group"
                  >
                    <div className="border rounded-md p-3 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="px-2 py-0 text-xs">
                          {relatedAnnouncement.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{relatedAnnouncement.date}</span>
                      </div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {relatedAnnouncement.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/announcements">View All Announcements</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
