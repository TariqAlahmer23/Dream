import { motion } from "framer-motion"

type ArchitectureDiagramProps = { nodes: { title: string; description: string }[]; isRtl: boolean }

export function ArchitectureDiagram({ nodes, isRtl }: ArchitectureDiagramProps) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {nodes.map((n, i) => (
        <motion.div key={n.title} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="deck-card p-3">
          <p className="text-[10px] text-brand-cyan">Node {i + 1}</p>
          <p className="mt-1 text-sm font-semibold text-brand-text">{n.title}</p>
          <p className={`mt-1 text-xs text-brand-muted ${isRtl ? "text-right" : "text-left"}`}>{n.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
