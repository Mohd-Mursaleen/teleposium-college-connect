"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface Slide {
  id: string
  title: string
  description: string
  image: string
}

interface CollegeBannerProps {
  slides: Slide[]
  autoplay?: boolean
  interval?: number
  height?: string
}

export function CollegeBanner({ 
  slides, 
  autoplay = true, 
  interval = 5000,
  height = "h-[500px]"
}: CollegeBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [slides.length, isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }, [slides.length, isAnimating])

  useEffect(() => {
    if (!autoplay) return

    const autoplayInterval = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(autoplayInterval)
  }, [autoplay, interval, nextSlide])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0
    })
  }

  return (
    <div className={cn("relative overflow-hidden", height)}>
      <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0"
          onAnimationStart={() => setIsAnimating(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10" />
          <img 
            src={slides[currentIndex].image} 
            alt={slides[currentIndex].title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="max-w-2xl space-y-4"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{slides[currentIndex].title}</h1>
                <p className="text-white/90 text-lg md:text-xl">{slides[currentIndex].description}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-black/20 h-12 w-12 rounded-full"
        onClick={prevSlide}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-black/20 h-12 w-12 rounded-full"
        onClick={nextSlide}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            )}
            onClick={() => {
              if (isAnimating) return
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
} 