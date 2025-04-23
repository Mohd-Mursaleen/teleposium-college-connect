"use client"

import { Button } from "@/components/ui/button"
import { useWelcomePopup } from "@/components/welcome-popup-provider"
import { Image } from "lucide-react"

interface ShowPopupButtonProps {
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function ShowPopupButton({ 
  variant = "outline", 
  size = "default",
  className
}: ShowPopupButtonProps) {
  const { resetFirstVisit, showPopup } = useWelcomePopup()
  
  const handleClick = () => {
    // Use resetFirstVisit to simulate a first visit, or showPopup to just show it once
    showPopup()
  }
  
  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={handleClick}
      className={className}
    >
      <Image className="mr-2 h-4 w-4" />
      Show Welcome Message
    </Button>
  )
} 