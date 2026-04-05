"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface ImageLightboxProps {
  images: string[]
  alt: string
  initialIndex?: number
  children: React.ReactNode
}

export function ImageLightbox({
  images,
  alt,
  initialIndex = 0,
  children,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handleOpen = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const handlePrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Keyboard navigation
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, images.length])

  return (
    <>
      <div
        onClick={() => handleOpen(initialIndex)}
        className="cursor-pointer transition-opacity hover:opacity-90"
      >
        {children}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-7xl p-0 [&>button]:hidden border-none">
          <VisuallyHidden>
            <DialogTitle>Image</DialogTitle>
          </VisuallyHidden>
          <div className="relative flex h-[90vh] items-center justify-center bg-black">
            {/* Close Button */}
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70 cursor-pointer"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 z-10 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70 cursor-pointer"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-16 z-10 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70 cursor-pointer"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Image */}
            <div className="relative h-full w-full">
              <Image
                src={images[currentIndex]}
                alt={`${alt} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
