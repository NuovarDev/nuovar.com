import { company } from "@/lib/fixtures"
import { Noto_Serif_Display } from "next/font/google"

const _notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"], weight: "400", style: ["italic", "normal"] })

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-12 lg:mt-20">
      <div className="space-y-6">
        <h1 className="text-balance text-4xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-white">
          <span className={`italic ${_notoSerifDisplay.className}`}>Practical</span> tools for <span className={`italic ${_notoSerifDisplay.className}`}>modern</span> developers and teams
        </h1>
        <p className="max-w-2xl text-pretty text-lg text-white font-extralight leading-relaxed md:text-xl">
          {company.description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
