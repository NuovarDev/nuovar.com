import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { CursorEffect } from "@/components/cursor-effect"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ShaderBackground } from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { company, products } from "@/lib/fixtures"

export const metadata: Metadata = {
  title: `${company.name} | Products`,
  description: "Explore Nuovar's product portfolio, from infrastructure tooling to developer-focused SaaS products.",
  alternates: {
    canonical: "https://www.nuovar.com/products",
  },
  openGraph: {
    title: `${company.name} | Products`,
    description: "Explore Nuovar's product portfolio, from infrastructure tooling to developer-focused SaaS products.",
    type: "website",
    url: "https://www.nuovar.com/products",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Products`,
    description: "Explore Nuovar's product portfolio, from infrastructure tooling to developer-focused SaaS products.",
  },
}

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ShaderBackground />

      <div className="relative z-10">
        <CursorEffect />
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 pb-20 pt-28">
          <section className="mb-12">
            <div>
              <h1 className="text-5xl font-light tracking-[-0.04em] text-white sm:text-6xl">
                Products
              </h1>
              <p className="mt-6 text-base leading-7 font-extralight text-white/82 sm:text-lg">
                {company.name} ships focused software for infrastructure, developer workflows, and support systems.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            {products.map((product, index) => (
              <article
                key={product.id}
                className="group relative overflow-hidden rounded-4xl border border-white/12 bg-white/8 px-5 py-6 shadow-[0_24px_120px_rgba(4,8,20,0.32)] backdrop-blur-md transition-colors duration-300 hover:bg-white/10 sm:px-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),transparent_45%,rgba(255,255,255,0.03))]" />
                <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                  <div>
                    {product.tags.length > 0 && (
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap justify-end gap-2">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-amber-200/25 bg-amber-100/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="max-w-3xl">
                      <h2 className="text-3xl font-light tracking-[-0.03em] text-white">{product.name}</h2>
                      <p className="mt-3 text-base leading-7 font-extralight text-white/78">{product.subtitle}</p>
                      <p className="mt-4 text-sm leading-7 text-white/62">{product.longDescription}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 lg:w-[220px] lg:flex-col lg:items-stretch">
                    <Button asChild className="border border-white/15 bg-white text-slate-950 hover:bg-white/88">
                      <Link href={`/products/${product.id}`}>
                        View Details
                        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                      </Link>
                    </Button>
                    {product.productUrl && (
                      <Button
                        variant="outline"
                        asChild
                        className="border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                      >
                        <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
                          Visit Site
                          <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
