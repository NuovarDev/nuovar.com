"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductCarousel } from "@/components/product-carousel"
import { CursorEffect } from "@/components/cursor-effect"
import { Footer } from "@/components/footer"
import { ShaderBackground } from "@/components/shader-background"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ShaderBackground />

      <div className="relative z-10">
        <CursorEffect />
        <Navbar />
        <main className="pt-32 flex flex-col lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:min-h-[calc(100vh-80px)] py-8 lg:py-0">
          <div className="lg:w-1/2">
            <Hero />
          </div>
          <div className="lg:w-1/2">
            <ProductCarousel />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
