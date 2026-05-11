import { motion } from "framer-motion"
import { SectionWrapper } from "./SectionWrapper"
import type { PresentationContent } from "../data/content"

type WhyRagProps = {
  content: PresentationContent["whyRag"]
  isRtl: boolean
}

export function WhyRag({ content, isRtl }: WhyRagProps) {
  return (
    <SectionWrapper id="why-rag" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} isRtl={isRtl}>
      <div className="glass rounded-2xl p-6 md:p-8">
        <div className={`mb-6 flex flex-col gap-3 md:flex-row ${isRtl ? "md:flex-row-reverse" : ""} md:items-start md:justify-between`}>
          <p className="text-sm leading-relaxed text-slate-300">{content.mainExplanation}</p>
          <span className="shrink-0 rounded-full border border-sky-300/45 bg-sky-300/15 px-4 py-2 text-xs font-semibold tracking-wide text-sky-100">
            {content.selectedBadge}
          </span>
        </div>

        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase">{content.matrixTitle}</p>
        <div className="space-y-3">
          {content.matrix.map((row, index) => (
            <motion.div
              key={row.criterion}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="grid gap-3 rounded-xl border border-slate-600/45 bg-slate-900/45 p-4 md:grid-cols-[1.4fr_1fr_1fr]"
            >
              <p className="text-sm font-semibold text-slate-100">{row.criterion}</p>
              <div className="rounded-lg border border-sky-300/35 bg-sky-300/12 px-3 py-2 text-sm font-medium text-sky-100">
                <span className="text-[11px] text-sky-200/90">RAG + LLM</span>
                <p className="mt-1">{row.rag}</p>
              </div>
              <div className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-sm font-medium text-amber-100">
                <span className="text-[11px] text-amber-100/90">{isRtl ? "النموذج المخصص" : "Custom Model"}</span>
                <p className="mt-1">{row.custom}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-6 rounded-xl border border-sky-300/40 bg-sky-300/12 p-5"
        >
          <p className="text-sm font-semibold text-slate-100">{content.conclusion}</p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
