import type { ReactNode } from "react"
import { motion } from "framer-motion"

type SectionWrapperProps = {
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  isRtl: boolean
  children: ReactNode
}

export function SectionWrapper({ id, eyebrow, title, subtitle, isRtl, children }: SectionWrapperProps) {
  return (
    <section id={id} className="relative section-glow px-6 py-18 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`mx-auto w-full max-w-6xl ${isRtl ? "text-right" : "text-left"}`}
      >
        {(eyebrow || title || subtitle) && (
          <header className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className={`mb-4 text-xs font-semibold text-sky-300 ${isRtl ? "" : "tracking-[0.24em] uppercase"}`}>{eyebrow}</p>
            )}
            <h2 className="text-3xl leading-tight font-semibold text-slate-100 md:text-5xl">{title}</h2>
            {subtitle && <p className="mt-4 text-base text-slate-300 md:text-lg">{subtitle}</p>}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  )
}
