import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/90 font-light">
            &copy; {new Date().getFullYear()} Nuovar LLC. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-white/90 font-light">
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
