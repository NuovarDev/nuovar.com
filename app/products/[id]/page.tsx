import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CursorEffect } from "@/components/cursor-effect"
import { ShaderBackground } from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { products, techStackLinks, company } from "@/lib/fixtures"
import { ImageLightbox } from "@/components/image-lightbox"
import type { Metadata } from "next"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return {
      title: `${company.name}`,
    }
  }

  return {
    title: `${product.name} by ${company.name}`,
    description: product.longDescription || product.subtitle,
    alternates: {
      canonical: `https://www.nuovar.com/products/${product.id}`,
    },
    openGraph: {
      title: `${product.name} by ${company.name}`,
      description: product.longDescription || product.subtitle,
      type: "website",
      url: `https://www.nuovar.com/products/${product.id}`,
      images: product.image ? [product.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} by ${company.name}`,
      description: product.longDescription || product.subtitle,
      images: product.image ? [product.image] : undefined,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      <ShaderBackground />

      <div className="relative z-10">
        <CursorEffect />
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 pb-20 pt-24">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8 text-white hover:text-white/80 hover:bg-white/10">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              <span className="font-light">Back to Home</span>
            </Link>
          </Button>

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-light text-white md:text-5xl gap-2 flex items-center">
              {product.name}
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 px-3 sm:px-4 py-1 sm:py-2 text-base sm:text-lg text-white">
                {tag}
                </span>
              ))}
            </h1>
            <p className="text-xl text-white font-extralight">{product.subtitle}</p>
            {(product.productUrl || product.demoUrl || product.githubUrl) && (
              <div className="mt-6 flex gap-3">
                {product.productUrl && (
                  <Button asChild className="bg-white/10 text-white hover:bg-white/20 border border-white/20">
                    <a href={product.productUrl + "?utm_source=nuovar.com&utm_medium=referral"}>
                      <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                      <span className="font-normal">View Product</span>
                    </a>
                  </Button>
                )}
                {product.demoUrl && (
                  <Button asChild className="bg-white/10 text-white hover:bg-white/20 border border-white/20">
                    <a href={product.demoUrl}>
                      <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                      <span className="font-normal">View Demo</span>
                    </a>
                  </Button>
                )}
                {product.githubUrl && (
                  <Button
                    variant="outline"
                    asChild
                    className="bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  >
                    <a href={product.githubUrl}>
                      <Github className="h-4 w-4" strokeWidth={1.5} />
                      <span className="font-normal">View Source</span>
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Main Image */}
          <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-medium text-white">About</h2>
            <p className="text-lg leading-relaxed text-white font-extralight">{product.longDescription}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-medium text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                  <a
                    key={tech}
                    href={techStackLinks[tech as keyof typeof techStackLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 sm:mb-0"
                  >
                    <span className="rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 px-4 py-2 text-sm font-light text-white">
                    {tech}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-medium text-white">Key Features</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span className="text-white font-extralight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshots */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-medium text-white">Screenshots</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {product.screenshots.map((screenshot, index) => (
                <ImageLightbox
                  key={index}
                  images={product.screenshots}
                  alt={`${product.name} screenshot`}
                  initialIndex={index}
                >
                  <div className="overflow-hidden rounded-sm shadow-lg transition-transform hover:scale-[1.02]">
                    <Image
                      src={screenshot}
                      alt={`${product.name} screenshot ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </ImageLightbox>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
