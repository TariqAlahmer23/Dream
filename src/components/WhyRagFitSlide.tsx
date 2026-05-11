import { motion } from "framer-motion"
import { BookText, CheckCircle2, Cpu, Database, Rocket } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

const logicIcons = [Database, BookText, Cpu, CheckCircle2]
const cardIcons = [Database, BookText, BookText, Cpu, Rocket]

export function WhyRagFitSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  const fit = content.ragFit

  return (
    <SlideFrame eyebrow="06" title={fit.title} subtitle={fit.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {fit.text}
        </p>

        <div className={`grid gap-2 rounded-2xl border border-white/15 bg-white/[0.04] p-3 md:grid-cols-4 md:p-4 ${isRtl ? "md:[direction:rtl]" : ""}`}>
          {fit.logic.map((block: { title: string; text: string }, i: number) => {
            const Icon = logicIcons[i] ?? Database
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.32, delay: i * 0.08 }}
                className={`relative rounded-xl border border-white/10 bg-black/20 p-3 ${isRtl ? "text-right" : "text-left"}`}
              >
                <div className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brand-cyan ${isRtl ? "ml-auto" : ""}`}>
                  <Icon size={15} />
                </div>
                <h3 className={`text-sm font-semibold text-brand-text ${isRtl ? "leading-[1.8]" : ""}`}>{block.title}</h3>
                <p className={`mt-1.5 text-xs text-brand-muted ${isRtl ? "leading-[1.85]" : "leading-relaxed"}`}>{block.text}</p>
                {i < fit.logic.length - 1 ? (
                  <div className={`pointer-events-none absolute top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-brand-cyan/70 to-brand-gold/55 md:block ${isRtl ? "-left-2" : "-right-2"}`} />
                ) : null}
              </motion.div>
            )
          })}
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {fit.cards.map((card: { title: string; text: string }, i: number) => {
            const Icon = cardIcons[i] ?? BookText
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.34, delay: 0.18 + i * 0.06 }}
                className={`deck-card p-4 md:p-5 ${i % 2 === 0 ? "accent-cyan" : "accent-gold"} ${isRtl ? "text-right" : "text-left"}`}
              >
                <div className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 ${i % 2 === 0 ? "text-brand-cyan" : "text-brand-gold"} ${isRtl ? "ml-auto" : ""}`}>
                  <Icon size={15} />
                </div>
                <h3 className={`text-sm font-semibold text-brand-text ${isRtl ? "leading-[1.85]" : ""}`}>{card.title}</h3>
                <p className={`mt-1.5 text-xs text-brand-muted ${isRtl ? "leading-[1.9]" : "leading-relaxed"}`}>{card.text}</p>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.34, delay: 0.2 }}
          className={`rounded-2xl border border-white/15 bg-white/[0.045] p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <p className={`text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{fit.takeaway}</p>
        </motion.div>
      </div>
    </SlideFrame>
  )
}
