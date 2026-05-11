import { motion } from "framer-motion"
import { BookOpenText, Braces, Brain, Database, Layers3, MonitorSmartphone, SearchCode, ShieldCheck, Sparkles } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

const nodeIcons = [MonitorSmartphone, Braces, Brain, Layers3, SearchCode, Database, Sparkles, ShieldCheck]

export function ArchitectureSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="12" title={content.architecture.title} subtitle={content.architecture.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.architecture.text}
        </p>

        <div className={`grid gap-3 md:grid-cols-3 ${isRtl ? "md:[direction:rtl]" : ""}`}>
          {content.architecture.nodes.map((node: { title: string; text: string }, i: number) => {
            const Icon = nodeIcons[i] ?? BookOpenText
            return (
              <motion.article
                key={node.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.33, delay: i * 0.06 }}
                className={`deck-card relative p-3.5 md:p-4 ${isRtl ? "text-right" : "text-left"}`}
              >
                <div className={`mb-2 flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brand-cyan">
                    <Icon size={15} />
                  </div>
                  <p className="text-xs text-brand-gold">{isRtl ? `عقدة 0${i + 1}` : `Node 0${i + 1}`}</p>
                </div>
                <h3 className={`text-sm font-semibold text-brand-text ${isRtl ? "leading-[1.8]" : ""}`}>{node.title}</h3>
                <p className={`mt-1.5 text-xs text-brand-muted ${isRtl ? "leading-[1.85]" : "leading-relaxed"}`}>{node.text}</p>
                {i < content.architecture.nodes.length - 1 ? (
                  <div className={`pointer-events-none absolute top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-brand-cyan/70 to-brand-gold/55 md:block ${isRtl ? "-left-2" : "-right-2"}`} />
                ) : null}
              </motion.article>
            )
          })}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.33, delay: 0.16 }}
          className={`deck-card accent-cyan p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className={`mb-2 inline-flex items-center gap-2 text-xs text-brand-cyan ${isRtl ? "flex-row-reverse" : "tracking-[0.1em] uppercase"}`}>
            <ShieldCheck size={14} /> {content.architecture.output.title}
          </div>
          <p className={`text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.architecture.output.text}</p>
        </motion.article>

        <div className={`flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}>
          {content.architecture.stack.map((s: string) => (
            <span key={s} className="deck-card px-3 py-1.5 text-xs text-brand-muted">
              {s}
            </span>
          ))}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.33, delay: 0.2 }}
          className={`deck-card p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <p className={`text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.architecture.takeaway}</p>
        </motion.article>
      </div>
    </SlideFrame>
  )
}
