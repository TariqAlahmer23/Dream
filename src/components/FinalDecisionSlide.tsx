import { SlideFrame } from "./SlideFrame"
import { FinalDecisionLayout } from "./layouts/FinalDecisionLayout"

export function FinalDecisionSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  return (
    <SlideFrame eyebrow="14" title={content.final.title} isRtl={isRtl}>
      <FinalDecisionLayout>
        {content.final.badge || content.final.future ? (
          <div className={`flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}>
            {content.final.badge ? (
              <span className="rounded-full border border-brand-cyan/40 bg-brand-cyan/12 px-4 py-1 text-xs font-semibold text-brand-text">{content.final.badge}</span>
            ) : null}
            {content.final.future ? (
              <span className="rounded-full border border-brand-gold/35 bg-brand-gold/12 px-4 py-1 text-xs font-semibold text-brand-text">{content.final.future}</span>
            ) : null}
          </div>
        ) : null}
        <h3 className={`mt-5 text-[clamp(1.75rem,4.5vw,3.4rem)] font-semibold text-brand-text ${isRtl ? "text-right" : "text-left"}`}>{content.final.statement}</h3>
        {content.final.selected ? (
          <p className={`mt-3 text-sm leading-relaxed text-brand-muted ${isRtl ? "text-right" : "text-left"}`}>{content.final.selected}</p>
        ) : null}
        <p className={`mt-3 text-sm leading-relaxed text-brand-muted ${isRtl ? "text-right" : "text-left"}`}>{content.final.reason}</p>
        <p className={`mt-4 text-base font-semibold text-brand-gold ${isRtl ? "text-right" : "text-left"}`}>{content.final.closing}</p>
        {content.final.cta1 || content.final.cta2 ? (
          <div className={`mt-7 flex flex-wrap gap-3 ${isRtl ? "justify-end" : ""}`}>
            {content.final.cta1 ? (
              <a href="#roadmap" className="rounded-full bg-brand-cyan px-5 py-2 text-sm font-semibold text-slate-950">{content.final.cta1}</a>
            ) : null}
            {content.final.cta2 ? (
              <a href="#roadmap" className="rounded-full border border-white/25 bg-white/5 px-5 py-2 text-sm font-semibold text-brand-text">{content.final.cta2}</a>
            ) : null}
          </div>
        ) : null}
      </FinalDecisionLayout>
    </SlideFrame>
  )
}
