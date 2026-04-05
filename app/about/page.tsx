import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CursorEffect } from "@/components/cursor-effect"
import { ShaderBackground } from "@/components/shader-background"
import { company } from "@/lib/fixtures"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${company.name} - About`,
  description: company.about.split("\n").join(" ").trim() || company.description,
  alternates: {
    canonical: "https://www.nuovar.com/about",
  },
  openGraph: {
    title: `${company.name} | About`,
    description: company.about.split("\n").join(" ").trim() || company.description,
    type: "website",
    url: "https://www.nuovar.com/about",
  },
  twitter: {
    card: "summary",
    title: `${company.name} | About`,
    description: company.about.split("\n").join(" ").trim() || company.description,
  },
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <ShaderBackground />

      <div className="relative z-10">
        <CursorEffect />
        <Navbar />
        <main className="mx-auto max-w-4xl px-6 pb-20 pt-32">
          <h1 className="mb-8 text-4xl font-medium text-white md:text-5xl">
            About {company.name}
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-white font-extralight">
            <p>
              {company.about.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <div className="mt-12">
              <h2 className="mb-4 text-2xl font-medium text-white">What We Do</h2>
              <ul className="space-y-3">
                {company.bulletPoints.map((point, index) => (
                  <li className="flex items-start gap-3" key={index}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="mb-4 text-2xl font-medium text-white">Contact</h2>
              <p>
                Want to get in touch? Send us an email at{" "}
                <a href={`mailto:${company.email}`} className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80">
                  {company.email}
                </a>
                .
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
