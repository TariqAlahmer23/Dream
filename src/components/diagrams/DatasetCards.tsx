export function DatasetCards({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="deck-card p-4">
          <p className="text-xs text-brand-muted">{s.label}</p>
          <p className="mt-1 text-2xl font-semibold text-brand-text">{s.value}</p>
        </div>
      ))}
    </div>
  )
}
