import Link from "next/link"
import type { Metadata } from "next"
import { CursorEffect } from "@/components/cursor-effect"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ShaderBackground } from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/fixtures"

export const metadata: Metadata = {
  title: `${company.name} | 404`,
  description: "The page you were looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ShaderBackground />

      <div className="relative z-10">
        <CursorEffect />
        <Navbar />

        <main id="main-content" className="mx-auto flex min-h-[calc(100vh-96px)] max-w-6xl flex-col justify-center px-6 pb-16 pt-28">
          <div>
            <section>
              <div className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
                Error 404
              </div>
              <h1 className="mt-6 text-6xl font-light tracking-[-0.06em] text-white sm:text-7xl">
                Page Not Found
              </h1>
              <p className="mt-6 text-lg leading-8 font-extralight text-white/80">
                The page you are looking for does not exist. Go back or use the links below to navigate the site.
                <br />
                If you think this is a mistake, please contact us at <a className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80" href="mailto:hello@nuovar.com">hello@nuovar.com</a>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="border border-white/15 bg-white text-slate-950 hover:bg-white/88">
                  <Link href="/products">See Products</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                >
                  <Link href="/">Go Home</Link>
                </Button>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
