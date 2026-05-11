import { motion } from "framer-motion"
import { AlertTriangle, SearchCheck, ShieldAlert } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

export function ReadinessComparisonSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="10" title={content.readiness.title} subtitle={content.readiness.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.readiness.text}
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: isRtl ? 18 : -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38 }}
            className={`deck-card accent-cyan p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
          >
            <div className={`mb-2 inline-flex items-center gap-2 text-xs text-brand-cyan ${isRtl ? "flex-row-reverse" : "tracking-[0.1em] uppercase"}`}>
              <SearchCheck size={14} /> {content.readiness.leftTitle}
            </div>
            <p className={`text-xs text-brand-muted ${isRtl ? "leading-[1.9]" : "leading-relaxed"}`}>{content.readiness.leftSubtitle}</p>
            <div className="mt-3 space-y-2.5">
              {content.readiness.leftItems.map((item: { title: string; text: string }) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-black/20 p-2.5">
                  <p className={`text-sm font-medium text-brand-text ${isRtl ? "leading-[1.8]" : ""}`}>{item.title}</p>
                  <p className={`mt-1 text-xs text-brand-muted ${isRtl ? "leading-[1.85]" : "leading-relaxed"}`}>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: isRtl ? -18 : 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38 }}
            className={`deck-card accent-gold p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
          >
            <div className={`mb-2 inline-flex items-center gap-2 text-xs text-brand-gold ${isRtl ? "flex-row-reverse" : "tracking-[0.1em] uppercase"}`}>
              <AlertTriangle size={14} /> {content.readiness.rightTitle}
            </div>
            <p className={`text-xs text-brand-muted ${isRtl ? "leading-[1.9]" : "leading-relaxed"}`}>{content.readiness.rightSubtitle}</p>
            <div className="mt-3 space-y-2.5">
              {content.readiness.rightItems.map((item: { title: string; text: string }) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-black/20 p-2.5">
                  <p className={`text-sm font-medium text-brand-text ${isRtl ? "leading-[1.8]" : ""}`}>{item.title}</p>
                  <p className={`mt-1 text-xs text-brand-muted ${isRtl ? "leading-[1.85]" : "leading-relaxed"}`}>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.34, delay: 0.12 }}
          className={`deck-card p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className={`mb-2 inline-flex items-center gap-2 text-xs text-brand-cyan ${isRtl ? "flex-row-reverse" : "tracking-[0.1em] uppercase"}`}>
            <ShieldAlert size={14} /> {content.readiness.conclusionTitle}
          </div>
          <p className={`text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.readiness.conclusionText}</p>
        </motion.article>
      </div>
    </SlideFrame>
  )
}
