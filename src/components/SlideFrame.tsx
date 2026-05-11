import type { ReactNode } from "react"
import { motion } from "framer-motion"

type SlideFrameProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  isRtl: boolean
  children: ReactNode
}

export function SlideFrame({ eyebrow, title, subtitle, isRtl, children }: SlideFrameProps) {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-7xl flex-col px-4 pb-[calc(104px+env(safe-area-inset-bottom))] pt-[calc(76px+env(safe-area-inset-top))] md:px-10 md:pb-24 md:pt-9 lg:px-14">
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={isRtl ? "text-right" : "text-left"}
      >
        {eyebrow && <p className={`text-xs text-brand-cyan/85 ${isRtl ? "" : "tracking-[0.2em] uppercase"}`}>{eyebrow}</p>}
        <h2 className={`mt-2 text-[clamp(1.65rem,4.6vw,3.2rem)] font-semibold text-brand-text ${isRtl ? "leading-[1.5]" : "leading-[1.2]"}`}>{title}</h2>
        {subtitle && <p className={`mt-3 max-w-4xl text-[clamp(0.9rem,2vw,1.05rem)] text-brand-muted ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{subtitle}</p>}
      </motion.header>
      <div className="mt-5 pb-2 md:mt-6">{children}</div>
    </section>
  )
}
