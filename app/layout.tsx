import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Noto_Sans_Marchen as BBH_Sans_Bartle } from "next/font/google"
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css"
import { company } from "@/lib/fixtures"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({ subsets: ["latin"] })
const _bbhSansBartle = BBH_Sans_Bartle({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuovar.com"),
  title: `${company.name} - ${company.tagline}`,
  description: company.description,
  keywords: ["developer tools", "SaaS", "web applications", "infrastructure", "developer productivity"],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.nuovar.com",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${company.name} - ${company.tagline}`,
    description: company.description,
    type: "website",
    siteName: company.name,
    url: "https://www.nuovar.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} - ${company.tagline}`,
    description: company.description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-245REQ5KQF" />
      </body>
    </html>
  )
}
