import type { ReactNode } from "react"

export function DiagramLayout({ children }: { children: ReactNode }) {
  return <div className="grid h-full gap-5 lg:grid-cols-2">{children}</div>
}
