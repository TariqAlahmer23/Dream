import { motion } from "framer-motion"
import { SectionWrapper } from "./SectionWrapper"
import type { PresentationContent } from "../data/content"

type DataAssessmentProps = {
  content: PresentationContent["data"]
  isRtl: boolean
}

export function DataAssessment({ content, isRtl }: DataAssessmentProps) {
  return (
    <SectionWrapper id="data" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} isRtl={isRtl}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {content.stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass rounded-2xl p-5 transition hover:border-sky-300/40"
          >
            <p className="text-xs tracking-[0.18em] text-slate-400 uppercase">{item.label}</p>
            <p className="mt-3 text-lg leading-snug font-semibold text-slate-100">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 max-w-4xl text-sm leading-relaxed text-slate-300">{content.mainExplanation}</p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="glass mt-8 rounded-2xl p-6"
      >
        <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{content.filesTitle}</p>
        <div className="grid gap-3 md:grid-cols-2">
          {content.files.map((file) => (
            <div key={file.name} className="rounded-lg border border-slate-600/45 bg-slate-900/45 px-4 py-3 text-sm text-slate-200">
              {file.name}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-8 grid gap-5 xl:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-sky-300/30 bg-slate-900/45 p-6"
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{content.ragReadyTitle}</p>
          <ul className="space-y-2 text-sm text-slate-200">
            {content.ragReady.map((item) => (
              <li key={item} className={`flex gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <span className="text-sky-300">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-2xl border border-amber-300/30 bg-slate-900/45 p-6"
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-amber-200 uppercase">{content.notTrainingReadyTitle}</p>
          <ul className="space-y-2 text-sm text-slate-200">
            {content.notTrainingReady.map((item) => (
              <li key={item} className={`flex gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <span className="text-amber-200">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="mt-8 rounded-2xl border border-sky-300/40 bg-sky-400/10 p-6"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{content.noteTitle}</p>
        <p className="text-sm font-medium text-slate-100">{content.conclusion}</p>
      </motion.div>
    </SectionWrapper>
  )
}
