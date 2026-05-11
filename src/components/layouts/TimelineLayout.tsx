import type { ReactNode } from "react"

export function TimelineLayout({ children }: { children: ReactNode }) {
  return <div className="deck-card p-4 md:p-6">{children}</div>
}
