import { motion } from "framer-motion"

type RoadmapTimelineProps = {
  phases: { phase: string; title: string; description: string; track: "now" | "later" }[]
  isRtl: boolean
  nowLabel: string
  laterLabel: string
}

export function RoadmapTimeline({ phases, isRtl, nowLabel, laterLabel }: RoadmapTimelineProps) {
  return (
    <div className={`relative ${isRtl ? "border-r pr-6" : "border-l pl-6"} border-white/20`}>
      {phases.map((p, i) => (
        <motion.div key={p.phase} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="relative mb-3 deck-card p-3">
          <span className={`absolute top-4 h-2.5 w-2.5 rounded-full ${p.track === "later" ? "bg-brand-gold" : "bg-brand-cyan"} ${isRtl ? "-right-[1.72rem]" : "-left-[1.72rem]"}`} />
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs text-brand-muted">{p.phase}</p>
            <span className={`rounded-full px-2 py-0.5 text-[10px] ${p.track === "later" ? "bg-brand-gold/15 text-brand-gold" : "bg-brand-cyan/15 text-brand-cyan"}`}>{p.track === "later" ? laterLabel : nowLabel}</span>
          </div>
          <p className="text-sm font-semibold text-brand-text">{p.title}</p>
          <p className={`mt-1 text-xs text-brand-muted ${isRtl ? "text-right" : "text-left"}`}>{p.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
