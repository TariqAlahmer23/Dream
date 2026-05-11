import { motion } from "framer-motion"

export function PyramidDiagram({ levels }: { levels: string[] }) {
  return (
    <div className="mx-auto grid w-full max-w-lg gap-2">
      {levels.map((l, i) => (
        <motion.div
          key={l}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="deck-card accent-gold text-center"
          style={{ padding: "10px", marginInline: `${i * 12}px` }}
        >
          <p className="text-sm text-brand-text">{l}</p>
        </motion.div>
      ))}
    </div>
  )
}
