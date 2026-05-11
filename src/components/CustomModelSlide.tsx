import { motion } from "framer-motion"
import { CheckCircle2, CloudCog, Cpu, Database, Tags, TestTubeDiagonal } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

const lifecycleIcons = [Database, Tags, Cpu, TestTubeDiagonal, CloudCog]

export function CustomModelSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="08" title={content.custom.title} subtitle={content.custom.subtitle} isRtl={isRtl}>
      <div className="space-y-4">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.custom.text}
        </p>

        <div className="deck-card p-3 md:p-4">
          <div className={`grid gap-2 md:grid-cols-5 ${isRtl ? "md:grid-flow-dense" : ""}`}>
            {content.custom.lifecycle.map((step: string, i: number) => {
              const Icon = lifecycleIcons[i] ?? Database
              return (
                <motion.article
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: i * 0.07 }}
                  className={`relative rounded-2xl border border-white/12 bg-white/[0.03] p-3 ${isRtl ? "text-right" : "text-left"}`}
                >
                  <div className={`mb-1 inline-flex items-center gap-1.5 text-[11px] text-brand-muted ${isRtl ? "flex-row-reverse" : ""}`}>
                    <Icon size={12} className="text-brand-cyan" />
                    {isRtl ? `??????? ${i + 1}` : `Step ${i + 1}`}
                  </div>
                  <h3 className="text-sm font-semibold text-brand-text">{step}</h3>
                  {i < content.custom.lifecycle.length - 1 && (
                    <span className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-brand-muted/60 ${isRtl ? "-left-2.5" : "-right-2.5"}`}>
                      {isRtl ? "?" : "?"}
                    </span>
                  )}
                </motion.article>
              )
            })}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {content.custom.cards.map((card: { title: string; text: string; bullets: string[] }, i: number) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 + 0.1 }}
              className={`deck-card p-4 md:p-5 ${i === 2 ? "accent-cyan" : i === 4 ? "accent-gold" : ""} ${isRtl ? "text-right" : "text-left"}`}
            >
              <h3 className={`text-sm font-semibold text-brand-text ${isRtl ? "leading-[1.85]" : ""}`}>{card.title}</h3>
              <p className={`mt-2 text-xs text-brand-muted ${isRtl ? "leading-[1.9]" : "leading-relaxed"}`}>{card.text}</p>
              <ul className="mt-3 space-y-1.5">
                {card.bullets.map((bullet: string) => (
                  <li key={bullet} className={`flex items-start gap-2 text-xs text-brand-text/95 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-brand-gold" />
                    <span className={isRtl ? "leading-[1.8]" : "leading-relaxed"}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.34, delay: 0.24 }}
          className={`deck-card accent-gold p-4 md:p-5 mb-2 ${isRtl ? "text-right" : "text-left"}`}
        >
          <h3 className="text-sm font-semibold text-brand-text">{content.custom.summaryTitle}</h3>
          <p className={`mt-2 text-sm text-brand-text/95 ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.custom.summaryText}</p>
        </motion.article>
      </div>
    </SlideFrame>
  )
}
