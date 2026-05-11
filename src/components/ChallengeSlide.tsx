import { motion } from "framer-motion"
import { AlertTriangle, BookOpenText, Brain, CheckCheck, Layers3, ShieldAlert } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

const icons = [BookOpenText, Brain, Layers3, ShieldAlert]

export function ChallengeSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="02" title={content.sensitive.title} subtitle={content.sensitive.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.sensitive.text}
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {content.sensitive.cards.map((card: { title: string; text: string; points: string[] }, i: number) => {
            const Icon = icons[i] ?? AlertTriangle
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
                <p className={`mt-2 text-sm text-brand-muted ${isRtl ? "leading-[1.9]" : "leading-relaxed"}`}>{card.text}</p>

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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.34, delay: 0.14 }}
          className={`rounded-2xl border border-white/15 bg-white/[0.045] p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className={`inline-flex items-center gap-2 text-xs text-brand-cyan ${isRtl ? "flex-row-reverse" : "tracking-[0.15em] uppercase"}`}>
            <ShieldAlert size={14} /> {isRtl ? "الخلاصة" : "Takeaway"}
          </div>
          <p className={`mt-2 text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.sensitive.takeaway}</p>
        </motion.div>
      </div>
    </SlideFrame>
  )
}
