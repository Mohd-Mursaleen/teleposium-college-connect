import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WelcomePopupProvider } from "@/components/welcome-popup-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Campus Connect Portal",
  description: "Stay connected with campus events, clubs, and announcements",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <WelcomePopupProvider 
            imageUrl="https://www.sirmvit.edu/wp-content/uploads/2025/04/home-popup-2.png"
            linkUrl="/about"
            autoCloseAfter={30000} // Close after 30 seconds
            showOnFirstVisit={true}
          >
            <div className="flex min-h-screen flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </WelcomePopupProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
