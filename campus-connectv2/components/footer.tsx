import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row py-10 gap-8">
        <div className="md:w-1/3">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">
              Campus<span className="text-primary">Connect</span>
            </span>
          </Link>
          <p className="mt-3 text-muted-foreground">
            Your one-stop portal for campus events, clubs, and announcements. Stay connected with everything happening
            on campus.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 md:flex-1">
          <div className="space-y-3">
            <h3 className="font-medium">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-muted-foreground hover:text-foreground transition-colors">
                  Announcements
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Campus Map
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Student Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">123 University Ave</li>
              <li className="text-muted-foreground">Campus City, ST 12345</li>
              <li>
                <Link
                  href="mailto:info@campusconnect.edu"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@campusconnect.edu
                </Link>
              </li>
              <li>
                <Link href="tel:+11234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                  (123) 456-7890
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Campus Connect. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
