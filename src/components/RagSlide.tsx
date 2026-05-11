import { motion } from "framer-motion"
import { Brain, CheckCheck, Database, FileInput, FileSearch2, ShieldCheck, Sparkles, UserRoundPen } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

const nodeIcons = [UserRoundPen, Brain, FileSearch2, Database, FileSearch2, Sparkles, ShieldCheck]

export function RagSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="05" title={content.rag.title} subtitle={content.rag.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.rag.text}
        </p>

        <div className={`grid gap-3 md:grid-cols-2 xl:grid-cols-4 ${isRtl ? "xl:[direction:rtl]" : ""}`}>
          {content.rag.pipeline.map((node: { title: string; text: string }, i: number) => {
            const Icon = nodeIcons[i] ?? FileInput
            return (
              <motion.article
                key={node.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.34, delay: i * 0.06 }}
                className={`deck-card relative p-3.5 md:p-4 ${isRtl ? "text-right" : "text-left"}`}
              >
                <div className={`mb-2 flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brand-cyan">
                    <Icon size={15} />
                  </div>
                  <p className="text-xs text-brand-gold">{isRtl ? `مرحلة 0${i + 1}` : `Stage 0${i + 1}`}</p>
                </div>
                <h3 className={`text-sm font-semibold text-brand-text ${isRtl ? "leading-[1.8]" : ""}`}>{node.title}</h3>
                <p className={`mt-1.5 text-xs text-brand-muted ${isRtl ? "leading-[1.85]" : "leading-relaxed"}`}>{node.text}</p>

                {i < content.rag.pipeline.length - 1 ? (
                  <div
                    className={`pointer-events-none absolute top-1/2 hidden h-px w-5 -translate-y-1/2 bg-gradient-to-r from-brand-cyan/70 to-brand-gold/55 xl:block ${
                      isRtl ? "-left-2" : "-right-2"
                    }`}
                  />
                ) : null}
              </motion.article>
            )
          })}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: isRtl ? 16 : -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className={`deck-card accent-cyan p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
          >
            <h3 className={`text-sm font-semibold text-brand-cyan ${isRtl ? "leading-[1.8]" : "tracking-[0.08em] uppercase"}`}>{content.rag.strengthsTitle}</h3>
            <ul className="mt-3 space-y-1.5">
              {content.rag.strengths.map((point: string) => (
                <li key={point} className={`flex items-start gap-2 text-sm text-brand-text/95 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <CheckCheck size={14} className="mt-0.5 shrink-0 text-brand-cyan" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: isRtl ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className={`deck-card accent-gold p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
          >
            <h3 className={`text-sm font-semibold text-brand-gold ${isRtl ? "leading-[1.8]" : "tracking-[0.08em] uppercase"}`}>{content.rag.limitationsTitle}</h3>
            <ul className="mt-3 space-y-1.5">
              {content.rag.limitations.map((point: string) => (
                <li key={point} className={`flex items-start gap-2 text-sm text-brand-text/95 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <CheckCheck size={14} className="mt-0.5 shrink-0 text-brand-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </SlideFrame>
  )
}
