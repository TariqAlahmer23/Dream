import { ChevronLeft, ChevronRight } from "lucide-react"

type NavigationControlsProps = {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
  labels: { prev: string; next: string }
  isRtl: boolean
}

export function NavigationControls({ current, total, onPrev, onNext, onGoTo, labels, isRtl }: NavigationControlsProps) {
  const atStart = current === 0
  const atEnd = current === total - 1
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft
  const NextIcon = isRtl ? ChevronLeft : ChevronRight

  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-50 flex w-[min(96vw,980px)] -translate-x-1/2 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-black/50 px-2 py-2 backdrop-blur-xl shadow-[0_16px_28px_rgba(0,0,0,0.35)] md:px-3">
      <button onClick={onPrev} disabled={atStart} className="chip-btn min-h-11 disabled:opacity-40">
        <PrevIcon size={14} /> {labels.prev}
      </button>
      <div className="mx-1 flex max-w-[44vw] items-center gap-1.5 overflow-x-auto py-1 md:max-w-[55vw]">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className={`h-2.5 w-2.5 shrink-0 rounded-full transition ${i === current ? "bg-brand-cyan shadow-[0_0_10px_rgba(71,199,244,0.8)]" : "bg-white/25 hover:bg-white/50"}`}
          />
        ))}
      </div>
      <button onClick={onNext} disabled={atEnd} className="chip-btn min-h-11 disabled:opacity-40">
        {labels.next} <NextIcon size={14} />
      </button>
    </div>
  )
}
