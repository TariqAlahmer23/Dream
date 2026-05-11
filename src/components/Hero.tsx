import { motion } from "framer-motion"
import type { PresentationContent } from "../data/content"

type HeroProps = {
  content: PresentationContent["hero"]
  isRtl: boolean
}

export function Hero({ content, isRtl }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-20 pb-16 md:px-10 lg:px-20 lg:pt-28 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={isRtl ? "text-right" : "text-left"}
        >
          <p className={`mb-6 text-xs font-semibold text-sky-300 ${isRtl ? "" : "tracking-[0.28em] uppercase"}`}>{content.eyebrow}</p>
          <h1 className="text-4xl leading-tight font-semibold text-slate-50 md:text-6xl">{content.title}</h1>
          <p className={`mt-6 text-base text-slate-300 md:text-lg ${isRtl ? "mr-auto max-w-xl" : "max-w-xl"}`}>{content.subtitle}</p>
          <p className={`mt-4 text-sm leading-relaxed text-slate-400 md:text-base ${isRtl ? "mr-auto max-w-xl" : "max-w-xl"}`}>
            {content.supportingLine}
          </p>
          <div className={`mt-10 flex flex-wrap gap-4 ${isRtl ? "justify-end" : ""}`}>
            <a
              href={content.primaryCta.href}
              className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              {content.primaryCta.label}
            </a>
            <a
              href={content.secondaryCta.href}
              className="rounded-full border border-slate-500/70 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-200"
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="glass relative aspect-square rounded-[2rem] p-6">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.35),transparent_45%),radial-gradient(circle_at_70%_75%,rgba(56,189,248,0.28),transparent_40%)]" />
            <div className="relative h-full rounded-[1.5rem] border border-slate-500/25 bg-slate-950/35" />
            <motion.div
              animate={{ y: [0, -12, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-14 left-12 h-20 w-20 rounded-full bg-sky-400/30 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-10 bottom-10 h-28 w-28 rounded-full border border-sky-200/40"
            />
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-x-10 bottom-14 rounded-xl border border-sky-200/20 bg-slate-900/70 p-4 text-sm text-slate-200"
            >
              "{content.visualQuote}"
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
