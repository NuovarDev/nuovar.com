"use client"

import { useEffect, useState } from "react"

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const contentElement = document.getElementById("content")
    if (!contentElement) return

    const headingElements = contentElement.querySelectorAll("h2, h3")
    const headingData: Heading[] = Array.from(headingElements).map((heading, index) => {
      const id = heading.id || `heading-${index}`
      if (!heading.id) {
        heading.id = id
      }
      return {
        id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      }
    })

    setHeadings(headingData)

    // Set up Intersection Observer to track active heading
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      // Find the heading that's most visible
      const visibleHeadings = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const aRect = a.boundingClientRect
          const bRect = b.boundingClientRect
          // Prefer headings closer to the top of the viewport
          return aRect.top - bRect.top
        })

      if (visibleHeadings.length > 0) {
        const mostVisible = visibleHeadings[0]
        setActiveId(mostVisible.target.id)
      }
    }, observerOptions)

    // Observe all headings
    headingElements.forEach((heading) => {
      observer.observe(heading)
    })

    // Set initial active heading (first one if none are intersecting)
    if (headingElements.length > 0) {
      const firstHeading = headingElements[0] as HTMLElement
      const firstHeadingTop = firstHeading.getBoundingClientRect().top
      if (firstHeadingTop > window.innerHeight * 0.3) {
        setActiveId(firstHeading.id)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Temporarily set active to provide immediate feedback
      setActiveId(id)
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="sticky top-32 hidden lg:block">
      <div className="border-l border-white/20 pl-6">
        <h3 className="mb-4 text-sm font-medium text-white/80 uppercase tracking-wider">Contents</h3>
        <nav className="space-y-2">
          {headings.map((heading) => {
            const isActive = activeId === heading.id
            const isNested = heading.level === 3
            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHeading(heading.id)
                }}
                className={`block text-sm transition-colors ${
                  isNested ? "ml-4" : ""
                } ${
                  isActive
                    ? `text-white font-medium border-l-2 border-white pl-5 ${isNested ? "-ml-6! pl-9" : "-ml-6!"}`
                    : "text-white/60 hover:text-white"
                }`}
              >
                {heading.text}
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

