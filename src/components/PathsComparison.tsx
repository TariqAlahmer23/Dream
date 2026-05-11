import { motion } from "framer-motion"
import { SectionWrapper } from "./SectionWrapper"
import type { PresentationContent } from "../data/content"

type PathsComparisonProps = {
  content: PresentationContent["paths"]
  isRtl: boolean
}

export function PathsComparison({ content, isRtl }: PathsComparisonProps) {
  const labels = isRtl
    ? {
        howItWorks: "آلية العمل",
        strengths: "نقاط القوة",
        weaknesses: "نقاط الضعف",
        bestUse: "أفضل استخدام",
      }
    : {
        howItWorks: "How It Works",
        strengths: "Strengths",
        weaknesses: "Weaknesses",
        bestUse: "Best Use",
      }

  return (
    <SectionWrapper id="paths" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} isRtl={isRtl}>
      <div className="grid gap-5 lg:grid-cols-2">
        {content.items.map((path, index) => (
          <motion.article
            key={path.title}
            initial={{ opacity: 0, x: index === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`glass rounded-2xl p-7 transition hover:-translate-y-1 ${path.highlight ? "border-sky-300/55" : "border-slate-500/35"}`}
          >
            <div className={`mb-5 flex items-center ${isRtl ? "flex-row-reverse" : ""} justify-between`}>
              <div className={isRtl ? "text-right" : "text-left"}>
                {path.label && <p className="mb-1 text-xs tracking-[0.2em] text-sky-300 uppercase">{path.label}</p>}
                <h3 className="text-2xl font-semibold text-slate-100">{path.title}</h3>
              </div>
              {path.highlight && (
                <span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold tracking-wide text-sky-200 uppercase">
                  {content.selectedBadge}
                </span>
              )}
            </div>
            <p className="text-sm text-slate-300">{path.summary}</p>

            {path.highlight && path.shortDefinition && path.howItWorks && path.strengths && path.weaknesses && path.bestUse ? (
              <div className="mt-5 space-y-5">
                <p className="text-sm leading-relaxed text-slate-200">{path.shortDefinition}</p>

                <div className="grid gap-5 xl:grid-cols-2">
                  <div className="rounded-xl border border-slate-600/40 bg-slate-900/45 p-4">
                    <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{labels.howItWorks}</p>
                    <ol className="space-y-2 text-sm text-slate-200">
                      {path.howItWorks.map((step, stepIndex) => (
                        <li key={step} className={`flex gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                          <span className="text-sky-300">{stepIndex + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-sky-300/25 bg-slate-900/45 p-4">
                      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{labels.strengths}</p>
                      <div className={`flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}>
                        {path.strengths.map((item) => (
                          <span key={item} className="rounded-full border border-sky-300/35 bg-sky-300/10 px-3 py-1 text-xs text-sky-100">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-amber-300/25 bg-slate-900/45 p-4">
                      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-amber-200 uppercase">{labels.weaknesses}</p>
                      <ul className="space-y-2 text-sm text-slate-200">
                        {path.weaknesses.map((item) => (
                          <li key={item} className={`flex gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                            <span className="text-amber-200">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-600/40 bg-slate-900/45 p-4">
                  <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">{labels.bestUse}</p>
                  <p className="text-sm text-slate-100">{path.bestUse}</p>
                </div>
              </div>
            ) : path.shortDefinition && path.strengths && path.weaknesses && path.bestUse ? (
              <div className="mt-5 space-y-5">
                <div className={`flex items-center ${isRtl ? "flex-row-reverse" : ""} justify-between`}>
                  {path.verdictLabel && (
                    <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200">
                      {path.verdictLabel}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-slate-200">{path.shortDefinition}</p>

                {path.distinctionTitle && path.distinctionLevels && (
                  <div className="rounded-xl border border-slate-600/40 bg-slate-900/45 p-4">
                    <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">{path.distinctionTitle}</p>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {path.distinctionLevels.map((item) => (
                        <li key={item} className={`flex gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                          <span className="text-amber-200">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid gap-4 xl:grid-cols-2">
                  <div className="rounded-xl border border-sky-300/20 bg-slate-900/45 p-4">
                    <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{labels.strengths}</p>
                    <div className={`flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}>
                      {path.strengths.map((item) => (
                        <span key={item} className="rounded-full border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs text-sky-100">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-rose-300/25 bg-slate-900/45 p-4">
                    <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-rose-200 uppercase">{labels.weaknesses}</p>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {path.weaknesses.map((item) => (
                        <li key={item} className={`flex gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                          <span className="text-rose-200">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-300/25 bg-slate-900/45 p-4">
                  <p className="text-sm font-semibold text-amber-100">{path.bestUse}</p>
                </div>
              </div>
            ) : (
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {path.points.map((point) => (
                  <li key={point} className={`flex gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
