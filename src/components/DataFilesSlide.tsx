import { motion } from "framer-motion"
import { FileJson2, GitBranch, ShieldCheck } from "lucide-react"
import { SlideFrame } from "./SlideFrame"

export function DataFilesSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="09" title={content.files.title} subtitle={content.files.subtitle} isRtl={isRtl}>
      <div className="space-y-4 md:space-y-5">
        <p className={`max-w-5xl text-[0.95rem] text-brand-muted md:text-[1rem] ${isRtl ? "leading-[1.95] text-right" : "leading-relaxed text-left"}`}>
          {content.files.text}
        </p>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {content.files.items.map((file: string, i: number) => (
            <motion.article
              key={file}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`deck-card p-3.5 ${isRtl ? "text-right" : "text-left"}`}
            >
              <div className={`mb-2 inline-flex items-center gap-2 text-brand-cyan ${isRtl ? "flex-row-reverse" : ""}`}>
                <FileJson2 size={14} />
                <p className="truncate font-mono text-[11px] text-brand-text">{file}</p>
              </div>

              <div className="space-y-1.5 text-xs">
                <p className={`${isRtl ? "leading-[1.8]" : ""}`}><span className="text-brand-muted">{content.files.typeLabel}:</span> <span className="text-brand-text">{content.files.typeValue}</span></p>
                <p className={`${isRtl ? "leading-[1.8]" : ""}`}><span className="text-brand-muted">{content.files.useLabel}:</span> <span className="text-brand-text">{content.files.useValue}</span></p>
                <p className={`${isRtl ? "leading-[1.8]" : ""}`}><span className="text-brand-muted">{content.files.statusLabel}:</span> <span className="text-brand-text">{content.files.statusValue}</span></p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className={`deck-card p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className={`mb-3 inline-flex items-center gap-2 text-xs text-brand-gold ${isRtl ? "flex-row-reverse" : "tracking-[0.1em] uppercase"}`}>
            <GitBranch size={14} /> {content.files.pipelineTitle}
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            {content.files.pipelineSteps.map((step: string, i: number) => (
              <div key={step} className={`rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-brand-text ${isRtl ? "text-right leading-[1.85]" : "text-left"}`}>
                <span className="text-brand-cyan">{i + 1}.</span> {step}
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className={`deck-card accent-cyan p-4 md:p-5 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className={`mb-2 inline-flex items-center gap-2 text-xs text-brand-cyan ${isRtl ? "flex-row-reverse" : "tracking-[0.1em] uppercase"}`}>
            <ShieldCheck size={14} /> {content.files.noteTitle}
          </div>
          <p className={`text-sm text-brand-text ${isRtl ? "leading-[1.95]" : "leading-relaxed"}`}>{content.files.noteText}</p>
        </motion.article>
      </div>
    </SlideFrame>
  )
}
