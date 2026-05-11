import { motion } from "framer-motion"
import { SectionWrapper } from "./SectionWrapper"
import type { PresentationContent } from "../data/content"

type ProblemSectionProps = {
  content: PresentationContent["problem"]
  isRtl: boolean
}

export function ProblemSection({ content, isRtl }: ProblemSectionProps) {
  return (
    <SectionWrapper id="problem" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} isRtl={isRtl}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {content.cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-sky-300/45"
          >
            <h3 className="text-xl font-semibold text-slate-100">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
