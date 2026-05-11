import { motion } from "framer-motion"
import { SectionWrapper } from "./SectionWrapper"
import type { PresentationContent } from "../data/content"

type RoadmapProps = {
  content: PresentationContent["roadmap"]
  isRtl: boolean
}

export function Roadmap({ content, isRtl }: RoadmapProps) {
  return (
    <SectionWrapper id="roadmap" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} isRtl={isRtl}>
      <div className={`mb-5 flex items-center gap-2 ${isRtl ? "justify-end" : ""}`}>
        <span className="rounded-full border border-sky-300/40 bg-sky-300/12 px-3 py-1 text-xs font-semibold text-sky-100">
          {content.nowLabel}
        </span>
        <span className="rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
          {content.laterLabel}
        </span>
      </div>

      <div className={`relative ${isRtl ? "border-r pr-6 md:pr-10" : "border-l pl-6 md:pl-10"} border-sky-300/30`}>
        {content.phases.map((phase, index) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative mb-5"
          >
            <span
              className={`absolute h-3 w-3 rounded-full ${phase.track === "later" ? "bg-amber-200" : "bg-sky-300"} ${isRtl ? "-right-[2.15rem] md:-right-[2.65rem]" : "-left-[2.15rem] md:-left-[2.65rem]"}`}
            />
            <div className="glass rounded-xl p-4">
              <div className={`mb-2 flex items-center ${isRtl ? "flex-row-reverse" : ""} justify-between gap-3`}>
                <p className="text-xs font-semibold tracking-wide text-slate-300">{phase.phase}</p>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${phase.track === "later" ? "border border-amber-300/40 bg-amber-300/12 text-amber-100" : "border border-sky-300/35 bg-sky-300/12 text-sky-100"}`}
                >
                  {phase.track === "later" ? content.laterLabel : content.nowLabel}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-100">{phase.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{phase.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
