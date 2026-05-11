import { motion } from "framer-motion"
import { SectionWrapper } from "./SectionWrapper"
import type { PresentationContent } from "../data/content"

type ArchitectureFlowProps = {
  content: PresentationContent["architecture"]
  isRtl: boolean
}

export function ArchitectureFlow({ content, isRtl }: ArchitectureFlowProps) {
  const nodeMarks = ["IN", "PR", "SRC", "RET", "LLM", "SAFE", "OUT"]

  return (
    <SectionWrapper id="architecture" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} isRtl={isRtl}>
      <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{content.flowTitle}</p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
        {content.flow.map((node, index) => (
          <motion.div
            key={node.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.09 }}
            className="relative rounded-2xl border border-sky-300/25 bg-slate-900/45 p-4"
          >
            <div className={`mb-3 flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-300/40 bg-sky-300/12 text-[10px] font-bold tracking-wide text-sky-100">
                {nodeMarks[index] ?? "N"}
              </span>
              <p className="text-sm font-semibold text-slate-100">{node.title}</p>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">{node.description}</p>
            {index < content.flow.length - 1 && (
              <div
                className={`pointer-events-none absolute top-1/2 hidden h-px w-8 bg-sky-300/40 xl:block ${isRtl ? "-left-4" : "-right-4"}`}
              />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="mt-8"
      >
        <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{content.stackTitle}</p>
        <div className={`flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}>
          {content.stack.map((item) => (
            <span key={item} className="rounded-full border border-slate-500/45 bg-slate-900/50 px-4 py-2 text-xs text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
