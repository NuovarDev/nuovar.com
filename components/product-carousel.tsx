"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Pause, Play } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/fixtures"

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)

    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPaused, prefersReducedMotion])

  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
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
          onFocusCapture={() => setIsPaused(true)}
          onMouseEnter={() => setIsPaused(true)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="w-full shrink-0"
                aria-hidden={index !== activeIndex}
                inert={index !== activeIndex ? true : undefined}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3" role="group" aria-label="Product carousel controls">
          <div className="flex items-center gap-2" aria-label="Choose a product">
          {products.map((product, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setActiveIndex(index)
                setIsPaused(true)
              }}
              className="group relative rounded-full p-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`Show ${product.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              {index === activeIndex ? (
                <div className="h-2 w-8 rounded-full bg-white transition-all duration-300 cursor-pointer" />
              ) : (
                <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300 group-hover:bg-white/60 cursor-pointer" />
              )}
            </button>
          ))}
          </div>
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            disabled={prefersReducedMotion}
            className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={prefersReducedMotion ? "Carousel autoplay is disabled because reduced motion is enabled" : isPaused ? "Play carousel" : "Pause carousel"}
            title={prefersReducedMotion ? "Autoplay is disabled because reduced motion is enabled" : isPaused ? "Play carousel" : "Pause carousel"}
          >
            {isPaused || prefersReducedMotion ? <Play className="size-3.5" aria-hidden="true" /> : <Pause className="size-3.5" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </section>
  )
}
