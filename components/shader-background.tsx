"use client"

import { GrainOverlay } from "@/components/grain-overlay"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { useRef, useEffect, useState } from "react"

const SHADER_COLORS = {
  swirl: {
    colorA: "#4998bf",
    colorB: "#076564",
  },
  chromaFlow: {
    baseColor: "#4998bf",
    upColor: "#4998bf",
    downColor: "#5eb3d1",
    leftColor: "#076564",
    rightColor: "#04403f",
  },
  fallbackGradient: "from-cyan-600 via-teal-700 to-teal-900",
}

export function ShaderBackground() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)

    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    const handleError = (event: ErrorEvent) => {
      if (event.message?.includes("WebGPU") || event.message?.includes("Device Lost")) {
        console.warn("WebGPU error detected, falling back to gradient background")
        setHasError(true)
      }
    }

    window.addEventListener("error", handleError)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
      window.removeEventListener("error", handleError)
      mediaQuery.removeEventListener("change", updatePreference)
    }
  }, [])

  return (
    <>
      <GrainOverlay />

      {hasError || prefersReducedMotion ? (
        <div className={`fixed inset-0 z-0 bg-linear-to-br ${SHADER_COLORS.fallbackGradient} ${prefersReducedMotion ? "" : "animate-gradient"}`} />
      ) : (
        <div
          ref={shaderContainerRef}
          className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{
            contain: "layout style paint",
            willChange: "auto",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            perspective: 1000,
            WebkitPerspective: 1000,
            backgroundColor: "#076564",
          }}
        >
          <Shader className="h-full w-full">
            <Swirl
              colorA={SHADER_COLORS.swirl.colorA}
              colorB={SHADER_COLORS.swirl.colorB}
              speed={0.8}
              detail={0.8}
              blend={50}
              coarseX={40}
              coarseY={40}
              mediumX={40}
              mediumY={40}
              fineX={40}
              fineY={40}
            />
            <ChromaFlow
              baseColor={SHADER_COLORS.chromaFlow.baseColor}
              upColor={SHADER_COLORS.chromaFlow.upColor}
              downColor={SHADER_COLORS.chromaFlow.downColor}
              leftColor={SHADER_COLORS.chromaFlow.leftColor}
              rightColor={SHADER_COLORS.chromaFlow.rightColor}
              intensity={0.9}
              radius={1.8}
              momentum={25}
              maskType="alpha"
              opacity={0.97}
            />
          </Shader>
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,193,119,0.06),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(130,196,255,0.2),transparent_24%),linear-gradient(180deg,rgba(8,10,16,0.08),rgba(8,10,16,0.62))]" />
    </>
  )
}
