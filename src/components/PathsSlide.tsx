import { motion } from "framer-motion"
import { BrainCircuit, CheckCheck, DatabaseZap, GitCompareArrows, Sparkles } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

export function PathsSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="04" title={content.paths.title} subtitle={content.paths.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.paths.text}
        </p>

        <div className="relative grid gap-3 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42 }}
            className={`deck-card accent-cyan p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
          >
            <div className={`mb-3 flex items-start justify-between gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div>
                <p className="text-xs tracking-[0.15em] text-brand-cyan uppercase">Path 01</p>
                <h3 className={`mt-1 text-[1.1rem] font-semibold text-brand-text ${isRtl ? "leading-[1.75]" : ""}`}>{content.paths.path1.title}</h3>
              </div>
              {content.paths.path1.badge ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.2 }}
                  className="rounded-full border border-brand-cyan/40 bg-brand-cyan/15 px-2.5 py-1 text-[11px] font-medium text-brand-text"
                >
                  {content.paths.path1.badge}
                </motion.span>
              ) : null}
            </div>

            <div className={`mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-xs text-brand-muted ${isRtl ? "flex-row-reverse" : ""}`}>
              <DatabaseZap size={13} className="text-brand-cyan" />
              {content.paths.path1.label}
            </div>

            <p className={`text-sm text-brand-muted ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.paths.path1.text}</p>
            <ul className="mt-3 space-y-1.5">
              {content.paths.path1.details.map((point: string) => (
                <li key={point} className={`flex items-start gap-2 text-sm text-brand-text/95 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <CheckCheck size={14} className="mt-0.5 shrink-0 text-brand-cyan" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: isRtl ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42 }}
            className={`deck-card accent-gold p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
          >
            <div className={`mb-3 flex items-start justify-between gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div>
                <p className="text-xs tracking-[0.15em] text-brand-gold uppercase">Path 02</p>
                <h3 className={`mt-1 text-[1.1rem] font-semibold text-brand-text ${isRtl ? "leading-[1.75]" : ""}`}>{content.paths.path2.title}</h3>
              </div>
              {content.paths.path2.badge ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.25 }}
                  className="rounded-full border border-brand-gold/40 bg-brand-gold/15 px-2.5 py-1 text-[11px] font-medium text-brand-text"
                >
                  {content.paths.path2.badge}
                </motion.span>
              ) : null}
            </div>

            <div className={`mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-xs text-brand-muted ${isRtl ? "flex-row-reverse" : ""}`}>
              <BrainCircuit size={13} className="text-brand-gold" />
              {content.paths.path2.label}
            </div>

            <p className={`text-sm text-brand-muted ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.paths.path2.text}</p>
            <ul className="mt-3 space-y-1.5">
              {content.paths.path2.details.map((point: string) => (
                <li key={point} className={`flex items-start gap-2 text-sm text-brand-text/95 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <CheckCheck size={14} className="mt-0.5 shrink-0 text-brand-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        {content.paths.divider ? (
          <div className={`rounded-xl border border-white/12 bg-black/20 px-3 py-2 text-xs text-brand-muted ${isRtl ? "text-right" : "text-left"}`}>
            <div className={`inline-flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <GitCompareArrows size={14} className="text-brand-cyan" />
              <span>{content.paths.divider}</span>
            </div>
          </div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.34, delay: 0.15 }}
          className={`rounded-2xl border border-white/15 bg-white/[0.045] p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className={`inline-flex items-center gap-2 text-xs text-brand-cyan ${isRtl ? "flex-row-reverse" : "tracking-[0.15em] uppercase"}`}>
            <Sparkles size={14} /> {isRtl ? "ملاحظة القرار" : "Decision note"}
          </div>
          <p className={`mt-2 text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.paths.decision}</p>
        </motion.div>
      </div>
    </SlideFrame>
  )
}
