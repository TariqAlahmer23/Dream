import type { Language } from "../data/slides"

type LanguageToggleProps = {
  language: Language
  onChange: (lang: Language) => void
  isRtl: boolean
}

export function LanguageToggle({ language, onChange, isRtl }: LanguageToggleProps) {
  return (
    <div className={`${isRtl ? "text-right" : "text-left"}`}>
      <div className="glass-panel flex gap-1 rounded-full p-1">
        {(["en", "ar"] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => onChange(lang)}
            className={`min-h-11 rounded-full px-3 py-2 text-xs font-semibold transition ${language === lang ? "bg-brand-cyan text-slate-950" : "text-brand-muted hover:text-brand-text"}`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
