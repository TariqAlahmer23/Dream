import { motion } from "framer-motion"
import { BookOpenText, CheckCircle2, Database, FileText, Hash, ListTree } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

const metricIcons = [BookOpenText, FileText, Hash, ListTree]

export function DatasetSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="08" title={content.dataset.title} subtitle={content.dataset.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.dataset.text}
        </p>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {content.dataset.metrics.map((metric: { title: string; description: string }, i: number) => {
            const Icon = metricIcons[i] ?? Database
            return (
              <motion.article
                key={metric.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.34, delay: i * 0.06 }}
                className={`deck-card p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
              >
                <div className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brand-cyan ${isRtl ? "ml-auto" : ""}`}>
                  <Icon size={15} />
                </div>
                <h3 className={`text-sm font-semibold text-brand-text ${isRtl ? "leading-[1.85]" : ""}`}>{metric.title}</h3>
                <p className={`mt-1.5 text-xs text-brand-muted ${isRtl ? "leading-[1.9]" : "leading-relaxed"}`}>{metric.description}</p>
              </motion.article>
            )
          })}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: isRtl ? 14 : -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className={`deck-card p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
          >
            <div className={`mb-2 inline-flex items-center gap-2 text-xs text-brand-gold ${isRtl ? "flex-row-reverse" : "tracking-[0.1em] uppercase"}`}>
              <Database size={14} /> {content.dataset.interpretationTitle}
            </div>
            <p className={`text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.dataset.interpretationText}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: isRtl ? -14 : 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36, delay: 0.08 }}
            className={`deck-card accent-cyan p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
          >
            <div className={`mb-2 inline-flex items-center gap-2 text-xs text-brand-cyan ${isRtl ? "flex-row-reverse" : "tracking-[0.1em] uppercase"}`}>
              <CheckCircle2 size={14} /> {content.dataset.decisionTitle}
            </div>
            <p className={`text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.dataset.decisionText}</p>
          </motion.article>
        </div>
      </div>
    </SlideFrame>
  )
}
