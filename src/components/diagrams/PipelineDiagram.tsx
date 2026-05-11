import { motion } from "framer-motion"

type PipelineDiagramProps = { steps: string[]; isRtl: boolean }

export function PipelineDiagram({ steps, isRtl }: PipelineDiagramProps) {
  return (
    <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="deck-card relative p-3"
        >
          <p className="text-[10px] text-brand-gold">0{i + 1}</p>
          <p className={`mt-1 text-sm font-medium text-brand-text ${isRtl ? "text-right" : "text-left"}`}>{step}</p>
          {i < steps.length - 1 && (
            <svg className="pointer-events-none absolute -right-4 top-1/2 hidden text-brand-cyan xl:block" width="22" height="10" viewBox="0 0 22 10">
              <path d="M1 5H19" stroke="currentColor" strokeWidth="1.2" />
              <path d="M15 1L20 5L15 9" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}
