import { motion } from "framer-motion"

type DecisionMatrixProps = {
  rows: { criterion: string; rag: string; custom: string }[]
  isRtl: boolean
}

export function DecisionMatrix({ rows, isRtl }: DecisionMatrixProps) {
  return (
    <div className="space-y-2">
      {rows.map((row, i) => (
        <motion.div key={row.criterion} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="grid gap-2 deck-card p-3 md:grid-cols-[1.3fr_1fr_1fr]">
          <p className={`text-sm font-medium text-brand-text ${isRtl ? "text-right" : "text-left"}`}>{row.criterion}</p>
          <p className="rounded-lg border border-brand-cyan/35 bg-brand-cyan/10 px-2 py-1 text-xs text-brand-text">{row.rag}</p>
          <p className="rounded-lg border border-brand-gold/35 bg-brand-gold/10 px-2 py-1 text-xs text-brand-text">{row.custom}</p>
        </motion.div>
      ))}
    </div>
  )
}
