import type { Language } from "../data/slides"

type LanguageToggleProps = {
  language: Language
  onChange: (lang: Language) => void
  isRtl: boolean
}

export function LanguageToggle({ language, onChange, isRtl }: LanguageToggleProps) {
  return (
    <div className={`fixed top-5 z-50 ${isRtl ? "right-5" : "left-5"}`}>
      <div className="glass-panel flex gap-1 rounded-full p-1">
        {(["en", "ar"] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => onChange(lang)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${language === lang ? "bg-brand-cyan text-slate-950" : "text-brand-muted hover:text-brand-text"}`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
