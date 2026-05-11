import { motion } from "framer-motion"
import { BookMarked, BrainCircuit, CheckCheck, FilePenLine, SearchCode, Sparkles } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

export function ProductIdeaSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  const cardIcons = [FilePenLine, BookMarked, BrainCircuit]

  return (
    <SlideFrame eyebrow="01" title={content.product.title} subtitle={content.product.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.product.text}
        </p>

        <div className={`grid gap-3 md:grid-cols-3 ${isRtl ? "md:[direction:rtl]" : ""}`}>
          {content.product.flow.map((step: string, i: number) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="deck-card relative p-3.5"
            >
              <p className={`text-xs text-brand-gold ${isRtl ? "text-right" : "tracking-[0.16em] uppercase"}`}>{isRtl ? `الخطوة 0${i + 1}` : `Step 0${i + 1}`}</p>
              <p className={`mt-1 text-sm font-medium text-brand-text ${isRtl ? "text-right" : "text-left"}`}>{step}</p>
              {i < content.product.flow.length - 1 ? (
                <div
                  className={`pointer-events-none absolute top-1/2 hidden h-px w-5 -translate-y-1/2 bg-gradient-to-r from-brand-cyan/70 to-brand-gold/55 md:block ${
                    isRtl ? "-left-3" : "-right-3"
                  }`}
                />
              ) : null}
            </motion.div>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {content.product.cards.map((card: { title: string; text: string; points: string[] }, i: number) => {
            const Icon = cardIcons[i] ?? Sparkles
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: i * 0.1 }}
                className={`deck-card flex h-full flex-col p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
              >
                <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brand-cyan ${isRtl ? "ml-auto" : ""}`}>
                  <Icon size={17} />
                </div>
                <h3 className={`text-[1rem] font-semibold text-brand-text ${isRtl ? "leading-[1.8]" : ""}`}>{card.title}</h3>
                <p className={`mt-2 text-sm text-brand-muted ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{card.text}</p>
                <ul className="mt-3 space-y-1.5">
                  {card.points.map((point) => (
                    <li key={point} className={`flex items-start gap-2 text-sm text-brand-text/95 ${isRtl ? "flex-row-reverse" : ""}`}>
                      <CheckCheck size={14} className="mt-0.5 shrink-0 text-brand-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className={`rounded-2xl border border-white/15 bg-white/[0.045] p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className={`inline-flex items-center gap-2 text-xs text-brand-cyan ${isRtl ? "flex-row-reverse" : "tracking-[0.15em] uppercase"}`}>
            <SearchCode size={14} /> {isRtl ? "الخلاصة الاستراتيجية" : "Strategic takeaway"}
          </div>
          <p className={`mt-2 text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.product.takeaway}</p>
        </motion.div>
      </div>
    </SlideFrame>
  )
}
