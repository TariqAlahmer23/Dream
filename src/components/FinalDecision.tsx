import { motion } from "framer-motion"
import type { PresentationContent } from "../data/content"

type FinalDecisionProps = {
  content: PresentationContent["finalDecision"]
  isRtl: boolean
}

export function FinalDecision({ content, isRtl }: FinalDecisionProps) {
  return (
    <section id="decision" className="relative px-6 pt-10 pb-20 md:px-10 lg:px-20 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="glass mx-auto max-w-5xl rounded-3xl border-sky-300/50 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_40%),linear-gradient(145deg,rgba(15,23,42,0.78),rgba(15,23,42,0.45))] p-8 md:p-12"
      >
        <p className={`text-xs tracking-[0.22em] text-sky-300 uppercase ${isRtl ? "text-right" : "text-left"}`}>{content.title}</p>

        <div className={`mt-4 flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}>
          <span className="rounded-full border border-sky-300/45 bg-sky-300/15 px-4 py-2 text-xs font-semibold text-sky-100">
            {content.selectedBadge}
          </span>
          <span className="rounded-full border border-amber-300/45 bg-amber-300/12 px-4 py-2 text-xs font-semibold text-amber-100">
            {content.futureBadge}
          </span>
        </div>

        <h2 className={`mt-5 text-3xl leading-tight font-semibold text-slate-100 md:text-5xl ${isRtl ? "text-right" : "text-left"}`}>
          {content.mainStatement}
        </h2>

        <div className={`mt-6 grid gap-4 text-sm md:grid-cols-2 ${isRtl ? "text-right" : "text-left"}`}>
          <div className="rounded-xl border border-slate-600/45 bg-slate-900/45 p-4">
            <p className="text-xs tracking-wide text-slate-400">{content.selectedPathLabel}</p>
            <p className="mt-1 text-lg font-semibold text-sky-100">{content.selectedPathValue}</p>
          </div>
          <div className="rounded-xl border border-slate-600/45 bg-slate-900/45 p-4">
            <p className="text-xs tracking-wide text-slate-400">{content.reasonLabel}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">{content.reason}</p>
          </div>
        </div>

        <p className={`mt-6 text-sm leading-relaxed text-slate-200 ${isRtl ? "text-right" : "text-left"}`}>{content.detailedConclusion}</p>

        <div className="mt-5 rounded-xl border border-amber-300/30 bg-amber-300/10 p-4">
          <p className={`text-xs font-semibold tracking-wide text-amber-200 ${isRtl ? "text-right" : "text-left"}`}>{content.futureLabel}</p>
          <p className={`mt-2 text-sm leading-relaxed text-slate-100 ${isRtl ? "text-right" : "text-left"}`}>{content.futureDirection}</p>
        </div>

        <p className={`mt-6 text-base font-semibold text-sky-100 ${isRtl ? "text-right" : "text-left"}`}>{content.finalLine}</p>

        <div className={`mt-8 flex flex-wrap gap-3 ${isRtl ? "justify-end" : ""}`}>
          <a
            href={content.ctaPrimary.href}
            className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            {content.ctaPrimary.label}
          </a>
          <a
            href={content.ctaSecondary.href}
            className="rounded-full border border-slate-500/70 bg-slate-900/45 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-200"
          >
            {content.ctaSecondary.label}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
