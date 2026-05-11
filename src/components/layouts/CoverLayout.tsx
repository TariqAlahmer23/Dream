import type { ReactNode } from "react"

export function CoverLayout({ children }: { children: ReactNode }) {
  return <div className="deck-card relative h-full overflow-hidden p-6 md:p-10">{children}</div>
}
