import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { BBH_Sans_Bartle } from "next/font/google"

const bbhSansBartle = BBH_Sans_Bartle({ subsets: ["latin"], weight: "400" })

export function Navbar() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-950 shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-transparent backdrop-blur-sm" aria-label="Primary navigation">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <span className={`text-xl sm:text-2xl font-semibold text-white ${bbhSansBartle.className}`}>Nuovar</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" asChild className="text-white hover:bg-white/10">
            <Link href="/products">
              <span className="font-light">Products</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="text-white hover:bg-white/10">
            <Link href="/about">
              <span className="font-light">About</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-white hover:bg-white/10">
            <a href="https://github.com/NuovarDev" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" strokeWidth={1.25} />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button asChild className="bg-white/10 text-white hover:bg-white/20 border border-white/20">
            <a href="mailto:hello@nuovar.com">
              <Mail className="h-4 w-4" strokeWidth={1.25} />
              <span className="hidden sm:block font-light">Contact</span>
            </a>
          </Button>
        </div>
      </div>
      </nav>
    </>
  )
}
