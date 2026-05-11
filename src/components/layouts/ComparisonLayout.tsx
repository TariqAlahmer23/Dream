import type { ReactNode } from "react"

export function ComparisonLayout({ left, right }: { left: ReactNode; right: ReactNode }) {
  return <div className="grid gap-4 lg:grid-cols-2">{left}{right}</div>
}
