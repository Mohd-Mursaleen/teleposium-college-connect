"use client"

import { useState, useEffect } from "react"
import { X, Info, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WelcomePopupProps {
  imageUrl: string
  onClose: () => void
  isOpen: boolean
  linkUrl?: string
  autoCloseAfter?: number // in milliseconds
}

export function WelcomePopup({ 
  imageUrl, 
  onClose, 
  isOpen, 
  linkUrl,
  autoCloseAfter
}: WelcomePopupProps) {
  // Auto-close functionality
  useEffect(() => {
    if (isOpen && autoCloseAfter) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseAfter)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen, autoCloseAfter, onClose])

  const handleImageClick = () => {
    if (linkUrl) {
      window.open(linkUrl, '_blank')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              className="relative bg-background rounded-xl border-4 border-white shadow-2xl max-w-[1024px] w-full mx-auto"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300 
              }}
            >
              {/* Top close button bar */}
              <div className="absolute top-3 right-3 z-20">
                <Button 
                  variant="destructive"
                  size="sm"
                  className="font-medium px-3 hover:bg-destructive/90 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                  }}
                >
                  <X className="h-4 w-4 mr-1.5" />
                  Close
                </Button>
              </div>
              
              <div 
                className={cn(
                  "relative overflow-hidden",
                  linkUrl && "cursor-pointer"
                )}
                onClick={(e) => {
                  e.stopPropagation()
                  if (linkUrl) handleImageClick()
                }}
              >
                <img 
                  src={imageUrl} 
                  alt="Welcome Popup"
                  className="w-full h-auto object-contain max-h-[80vh]"
                />
                
                {/* Bottom info bar */}
                {linkUrl && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center">
                    <motion.div 
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-white text-sm flex items-center px-4 py-2 bg-primary rounded-full shadow-lg"
                    >
                      <Info className="h-4 w-4 mr-2" />
                      <span>Click image for more information</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
} 