import { motion } from "framer-motion"
import { BookOpenText, CheckCheck, FileSearch2, Layers3, ShieldCheck } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

const icons = [BookOpenText, Layers3, FileSearch2]

export function TrustPrincipleSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="03" title={content.trust.title} subtitle={content.trust.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.trust.text}
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          {content.trust.cards.map((card: { title: string; text: string; points: string[] }, i: number) => {
            const Icon = icons[i] ?? BookOpenText
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: i * 0.08 }}
                className={`deck-card p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
              >
                <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brand-gold ${isRtl ? "ml-auto" : ""}`}>
                  <Icon size={17} />
                </div>
                <h3 className={`text-[1rem] font-semibold text-brand-text ${isRtl ? "leading-[1.8]" : ""}`}>{card.title}</h3>
                <p className={`mt-2 text-sm text-brand-muted ${isRtl ? "leading-[1.92]" : "leading-relaxed"}`}>{card.text}</p>
                <ul className="mt-3 space-y-1.5">
                  {card.points.map((point) => (
                    <li key={point} className={`flex items-start gap-2 text-sm text-brand-text/95 ${isRtl ? "flex-row-reverse" : ""}`}>
                      <CheckCheck size={14} className="mt-0.5 shrink-0 text-brand-cyan" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>

        <div className={`grid gap-2 rounded-2xl border border-white/15 bg-white/[0.04] p-3.5 md:grid-cols-5 md:p-4 ${isRtl ? "md:[direction:rtl]" : ""}`}>
          {content.trust.flow.map((step: string, i: number) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="relative rounded-xl border border-white/10 bg-black/20 p-2.5"
            >
              <p className={`text-xs text-brand-gold ${isRtl ? "text-right" : "text-left"}`}>{isRtl ? `مرحلة 0${i + 1}` : `Stage 0${i + 1}`}</p>
              <p className={`mt-1 text-sm text-brand-text ${isRtl ? "text-right" : "text-left"}`}>{step}</p>
              {i < content.trust.flow.length - 1 ? (
                <div className={`pointer-events-none absolute top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-brand-cyan/70 to-brand-gold/55 md:block ${isRtl ? "-left-2" : "-right-2"}`} />
              ) : null}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.34, delay: 0.14 }}
          className={`rounded-2xl border border-white/15 bg-white/[0.045] p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className={`inline-flex items-center gap-2 text-xs text-brand-cyan ${isRtl ? "flex-row-reverse" : "tracking-[0.15em] uppercase"}`}>
            <ShieldCheck size={14} /> {isRtl ? "الخلاصة" : "Takeaway"}
          </div>
          <p className={`mt-2 text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.trust.takeaway}</p>
        </motion.div>
      </div>
    </SlideFrame>
  )
}
