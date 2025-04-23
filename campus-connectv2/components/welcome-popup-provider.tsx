"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { WelcomePopup } from "@/components/welcome-popup"

interface WelcomePopupContextType {
  showPopup: () => void
  hidePopup: () => void
  isPopupVisible: boolean
  resetFirstVisit: () => void
}

const WelcomePopupContext = createContext<WelcomePopupContextType | undefined>(undefined)

export function useWelcomePopup() {
  const context = useContext(WelcomePopupContext)
  if (context === undefined) {
    throw new Error("useWelcomePopup must be used within a WelcomePopupProvider")
  }
  return context
}

interface WelcomePopupProviderProps {
  children: ReactNode
  imageUrl: string
  linkUrl?: string
  autoCloseAfter?: number
  showOnFirstVisit?: boolean
}

export function WelcomePopupProvider({ 
  children, 
  imageUrl,
  linkUrl,
  autoCloseAfter,
  showOnFirstVisit = true
}: WelcomePopupProviderProps) {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  
  // Show popup on first load with SSR-safety
  useEffect(() => {
    // Check local storage only when component is mounted (client-side)
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore') === 'true'
    
    if (showOnFirstVisit && !hasVisitedBefore) {
      setIsPopupVisible(true)
      localStorage.setItem('hasVisitedBefore', 'true')
    }
  }, [showOnFirstVisit])
  
  const showPopup = () => setIsPopupVisible(true)
  const hidePopup = () => setIsPopupVisible(false)
  const resetFirstVisit = () => {
    localStorage.removeItem('hasVisitedBefore')
    setIsPopupVisible(true)
  }
  
  return (
    <WelcomePopupContext.Provider value={{ 
      showPopup, 
      hidePopup, 
      isPopupVisible,
      resetFirstVisit
    }}>
      {children}
      <WelcomePopup 
        imageUrl={imageUrl}
        linkUrl={linkUrl}
        autoCloseAfter={autoCloseAfter}
        isOpen={isPopupVisible}
        onClose={hidePopup}
      />
    </WelcomePopupContext.Provider>
  )
} 