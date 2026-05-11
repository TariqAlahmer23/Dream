import { motion } from "framer-motion"
import { Brain, BookOpenText, FileSearch, PenLine, Sparkles, UserPen } from "lucide-react"
import { SlideFrame } from "./SlideFrame"
import { CoverLayout } from "./layouts/CoverLayout"

export function CoverSlide({ content, isRtl, index, total, onStart }: { content: any; isRtl: boolean; index: number; total: number; onStart: () => void }) {
  const flowIcons = [UserPen, Brain, FileSearch, PenLine, BookOpenText]

  return (
    <SlideFrame title={content.cover.title} subtitle={content.cover.subtitle} isRtl={isRtl}>
      <CoverLayout>
        <motion.div
          className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-brand-cyan/18 blur-3xl"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-brand-gold/16 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />

        <div className="relative flex h-full flex-col gap-4 pb-2 pt-6 md:gap-6 md:pb-4 md:pt-10">
          <div className={isRtl ? "text-right" : "text-left"}>
            <p className="max-w-3xl text-[0.98rem] leading-7 text-brand-muted md:text-lg">{content.cover.supporting}</p>
          </div>

          <div className="relative rounded-3xl border border-white/15 bg-white/[0.04] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] md:p-6">
            <div className={`grid gap-3 md:grid-cols-5 ${isRtl ? "md:[direction:rtl]" : ""}`}>
              {content.coverFlow.map((step: string, stepIndex: number) => {
                const Icon = flowIcons[stepIndex] ?? Sparkles
                return (
                  <motion.div
                    key={step}
                    className="relative"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.12 * (stepIndex + 1) }}
                  >
                    <div className={`h-full rounded-2xl border border-white/10 bg-black/20 p-3 ${isRtl ? "text-right" : "text-left"}`}>
                      <div className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brand-cyan ${isRtl ? "mr-0 ml-auto" : ""}`}>
                        <Icon size={16} />
                      </div>
                      <p className="text-sm leading-6 text-brand-text/95 md:text-[0.92rem]">{step}</p>
                    </div>

                    {stepIndex < content.coverFlow.length - 1 ? (
                      <div
                        className={`pointer-events-none absolute top-1/2 hidden h-px w-5 -translate-y-1/2 bg-gradient-to-r from-brand-cyan/50 to-brand-gold/35 md:block ${
                          isRtl ? "-left-3" : "-right-3"
                        }`}
                      />
                    ) : null}
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="mt-auto flex items-end justify-between gap-4 pb-1">
            <button onClick={onStart} className="rounded-full bg-brand-cyan px-5 py-3 text-sm font-semibold text-slate-950 md:px-6">
              {content.cover.action}
            </button>
            <p dir="ltr" className="text-sm text-brand-muted">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>
      </CoverLayout>
    </SlideFrame>
  )
}
