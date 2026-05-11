import type { ReactNode } from "react"

export function FinalDecisionLayout({ children }: { children: ReactNode }) {
  return <div className="deck-card accent-cyan p-6 md:p-10 shadow-[0_0_80px_rgba(71,199,244,0.16)]">{children}</div>
}
