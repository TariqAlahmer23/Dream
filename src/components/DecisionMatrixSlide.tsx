import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

export function DecisionMatrixSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="11" title={content.matrix.title} subtitle={content.matrix.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.matrix.text}
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {content.matrix.rows.map((row: { criterion: string; rag: string; ragText: string; custom: string; customText: string }, i: number) => (
            <motion.article
              key={row.criterion}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: i * 0.06 }}
              className={`deck-card p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
            >
              <h3 className={`text-sm font-semibold text-brand-text ${isRtl ? "leading-[1.8]" : ""}`}>{row.criterion}</h3>

              <div className="mt-2 space-y-2">
                <div className="rounded-lg border border-brand-cyan/30 bg-brand-cyan/10 p-2.5">
                  <div className={`mb-1 flex items-center justify-between gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <p className="text-xs text-brand-muted">RAG + LLM</p>
                    <span className="rounded-full border border-brand-cyan/40 bg-brand-cyan/15 px-2 py-0.5 text-[11px] text-brand-text">{row.rag}</span>
                  </div>
                  <p className={`text-xs text-brand-text ${isRtl ? "leading-[1.85]" : "leading-relaxed"}`}>{row.ragText}</p>
                </div>

                <div className="rounded-lg border border-brand-gold/30 bg-brand-gold/10 p-2.5">
                  <div className={`mb-1 flex items-center justify-between gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <p className="text-xs text-brand-muted">{isRtl ? "نموذج مخصص" : "Custom Model"}</p>
                    <span className="rounded-full border border-brand-gold/40 bg-brand-gold/15 px-2 py-0.5 text-[11px] text-brand-text">{row.custom}</span>
                  </div>
                  <p className={`text-xs text-brand-text ${isRtl ? "leading-[1.85]" : "leading-relaxed"}`}>{row.customText}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className={`deck-card accent-cyan p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className={`mb-2 inline-flex items-center gap-2 rounded-full border border-brand-cyan/40 bg-brand-cyan/15 px-3 py-1 text-xs text-brand-text ${isRtl ? "flex-row-reverse" : ""}`}>
            <CheckCircle2 size={14} className="text-brand-cyan" />
            {content.matrix.selectedBadge}
          </div>
          <div className={`inline-flex items-start gap-2 text-sm text-brand-text/95 ${isRtl ? "flex-row-reverse" : ""}`}>
            <AlertTriangle size={14} className="mt-1 shrink-0 text-brand-gold" />
            <p className={isRtl ? "leading-[1.95]" : "leading-relaxed"}>{content.matrix.note}</p>
          </div>
        </motion.article>
      </div>
    </SlideFrame>
  )
}
