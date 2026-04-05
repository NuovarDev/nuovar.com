"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id: string
    name: string
    subtitle: string
    image: string
    longDescription?: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="relative aspect-4/3 w-full cursor-pointer overflow-hidden shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
        </div>

        <div
          className="absolute inset-x-0 bottom-0 bg-linear-to-t from-gray-800/75 via-gray-800/50 via-55% to-transparent p-6 transition-all duration-500"
          style={{
            paddingTop: isHovered ? "6rem" : "5rem",
            paddingBottom: isHovered ? "2rem" : "1.5rem",
          }}
        >
          {/* Progressive blur overlay */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: isHovered ? "blur(6px)" : "blur(0px)",
              WebkitBackdropFilter: isHovered ? "blur(6px)" : "blur(0px)",
              maskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
              transition: "backdrop-filter 0.5s ease, -webkit-backdrop-filter 0.5s ease",
            }}
          />
          <div className="relative z-10">
            <h3 className="mb-2 text-3xl text-white font-medium">{product.name}</h3>
            <p className="text-sm leading-relaxed text-white font-medium">{product.subtitle}</p>

            <div
              className={`mt-3 overflow-hidden transition-all duration-500 ${
                isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
            <p className="text-sm leading-relaxed text-white">
              {product.longDescription || "Click to learn more about this product and explore its features."}
            </p>
          </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
