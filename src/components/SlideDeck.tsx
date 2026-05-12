import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { deckContent, type Language } from "../data/slides"
import { CoverSlide } from "./CoverSlide"
import { ProductIdeaSlide } from "./ProductIdeaSlide"
import { ChallengeSlide } from "./ChallengeSlide"
import { TrustPrincipleSlide } from "./TrustPrincipleSlide"
import { PathsSlide } from "./PathsSlide"
import { RagSlide } from "./RagSlide"
import { WhyRagFitSlide } from "./WhyRagFitSlide"
import { CustomModelSlide } from "./CustomModelSlide"
import { DatasetSlide } from "./DatasetSlide"
import { DataFilesSlide } from "./DataFilesSlide"
import { ReadinessComparisonSlide } from "./ReadinessComparisonSlide"
import { FinalDecisionSlide } from "./FinalDecisionSlide"
import { LanguageToggle } from "./LanguageToggle"
import { NavigationControls } from "./NavigationControls"
import { ProgressBar } from "./ProgressBar"

export function SlideDeck() {
  const [language, setLanguage] = useState<Language>("en")
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const deckRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const content = deckContent[language]
  const isRtl = content.dir === "rtl"

  const slides = useMemo(
    () => [
      <CoverSlide content={content} isRtl={isRtl} index={0} total={12} onStart={() => setCurrent(1)} />,
      <ProductIdeaSlide content={content} isRtl={isRtl} />,
      <ChallengeSlide content={content} isRtl={isRtl} />,
      <TrustPrincipleSlide content={content} isRtl={isRtl} />,
      <PathsSlide content={content} isRtl={isRtl} />,
      <RagSlide content={content} isRtl={isRtl} />,
      <WhyRagFitSlide content={content} isRtl={isRtl} />,
      <CustomModelSlide content={content} isRtl={isRtl} />,
      <DatasetSlide content={content} isRtl={isRtl} />,
      <DataFilesSlide content={content} isRtl={isRtl} />,
      <ReadinessComparisonSlide content={content} isRtl={isRtl} />,
      <FinalDecisionSlide content={content} isRtl={isRtl} />,
    ],
    [content, isRtl],
  )

  const total = slides.length
  const toneClass = current % 3 === 0 ? "tone-cyan" : current % 3 === 1 ? "tone-gold" : "tone-neutral"
  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : c))
  const next = () => setCurrent((c) => (c < total - 1 ? c + 1 : c))

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)
    updateIsMobile()
    mediaQuery.addEventListener("change", updateIsMobile)
    return () => mediaQuery.removeEventListener("change", updateIsMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") (isRtl ? prev : next)()
      if (e.key === "ArrowLeft") (isRtl ? next : prev)()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMobile, isRtl])

  useEffect(() => {
    document.documentElement.dir = content.dir
    document.documentElement.lang = language
  }, [language, content.dir])

  useEffect(() => {
    deckRef.current?.scrollTo({ top: 0, behavior: "auto" })
  }, [current, language])

  return (
    <div
      ref={deckRef}
      className={`deck-scroll relative min-h-[100dvh] overflow-x-hidden overflow-y-auto touch-pan-y ${toneClass} ${isRtl ? "text-right" : "text-left"}`}
    >
      <ProgressBar current={current} total={total} />
      <div className="fixed left-0 right-0 top-0 z-50 px-3 pt-[max(0.5rem,env(safe-area-inset-top))] md:px-6">
        <div className={`mx-auto flex w-full max-w-7xl items-center justify-between ${isRtl ? "flex-row-reverse" : ""}`}>
          <LanguageToggle language={language} onChange={setLanguage} isRtl={isRtl} />
          <div dir="ltr" className="rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs text-brand-muted">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${language}-${current}`}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.35, ease: "easeOut" }}
          className="min-h-full"
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      <NavigationControls
        current={current}
        total={total}
        onPrev={prev}
        onNext={next}
        onGoTo={setCurrent}
        labels={{ prev: content.prev, next: content.next }}
        isRtl={isRtl}
      />
    </div>
  )
}
