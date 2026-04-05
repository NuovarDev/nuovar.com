"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/fixtures"

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Start a new interval
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length)
    }, 5000)

    // Cleanup on unmount or when activeIndex changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeIndex])

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setActiveIndex((current) => (current + 1) % products.length)
    }

    if (isRightSwipe) {
      setActiveIndex((current) => (current - 1 + products.length) % products.length)
    }

    // Reset touch values
    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:mt-20">
      <div className="relative">
        {/* Carousel Container */}
        <div
          className="overflow-hidden rounded-3xl touch-pan-y shadow-xl"
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group relative transition-all duration-300"
              aria-label={`Go to product ${index + 1}`}
            >
              {index === activeIndex ? (
                <div className="h-2 w-8 rounded-full bg-white transition-all duration-300 cursor-pointer" />
              ) : (
                <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300 group-hover:bg-white/60 cursor-pointer" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
