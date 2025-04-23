"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Slide {
  id: string
  title: string
  description: string
  image: string
  link: string
}

export function FeaturedBanner() {
  const slides: Slide[] = [
    {
      id: "1",
      title: "Fall Festival 2023",
      description: "Join us for the biggest campus event of the season with music, food, and activities",
      image: "/placeholder.svg?height=500&width=1200",
      link: "/events/fall-festival",
    },
    {
      id: "2",
      title: "New Student Orientation",
      description: "Everything you need to know to start your journey at our university",
      image: "/placeholder.svg?height=500&width=1200",
      link: "/events/orientation",
    },
    {
      id: "3",
      title: "Join a Campus Club",
      description: "Explore over 50 student organizations and find your community",
      image: "/placeholder.svg?height=500&width=1200",
      link: "/clubs",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden h-[400px] md:h-[500px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{slide.title}</h1>
                <p className="text-white/90 text-lg md:text-xl">{slide.description}</p>
                <Button size="lg" asChild>
                  <Link href={slide.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-black/20 h-10 w-10 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-black/20 h-10 w-10 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors",
              index === currentIndex ? "bg-white" : "bg-white/50",
            )}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
