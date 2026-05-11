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
import { DecisionMatrixSlide } from "./DecisionMatrixSlide"
import { ArchitectureSlide } from "./ArchitectureSlide"
import { RoadmapSlide } from "./RoadmapSlide"
import { FinalDecisionSlide } from "./FinalDecisionSlide"
import { LanguageToggle } from "./LanguageToggle"
import { NavigationControls } from "./NavigationControls"
import { ProgressBar } from "./ProgressBar"

export function SlideDeck() {
  const [language, setLanguage] = useState<Language>("en")
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const reduceMotion = useReducedMotion()

  const content = deckContent[language]
  const isRtl = content.dir === "rtl"

  const slides = useMemo(
    () => [
      <CoverSlide content={content} isRtl={isRtl} index={0} total={15} onStart={() => setCurrent(1)} />,
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
      <DecisionMatrixSlide content={content} isRtl={isRtl} />,
      <ArchitectureSlide content={content} isRtl={isRtl} />,
      <RoadmapSlide content={content} isRtl={isRtl} />,
      <FinalDecisionSlide content={content} isRtl={isRtl} />,
    ],
    [content, isRtl],
  )

  const total = slides.length
  const toneClass = current % 3 === 0 ? "tone-cyan" : current % 3 === 1 ? "tone-gold" : "tone-neutral"
  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : c))
  const next = () => setCurrent((c) => (c < total - 1 ? c + 1 : c))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") (isRtl ? prev : next)()
      if (e.key === "ArrowLeft") (isRtl ? next : prev)()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isRtl])

  useEffect(() => {
    document.documentElement.dir = content.dir
    document.documentElement.lang = language
  }, [language, content.dir])

  return (
    <div
      className={`relative h-[100dvh] overflow-hidden touch-pan-y ${toneClass} ${isRtl ? "text-right" : "text-left"}`}
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0].clientX
      }}
      onTouchEnd={(e) => {
        const delta = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(delta) > 50) {
          if (delta < 0) (isRtl ? prev : next)()
          else (isRtl ? next : prev)()
        }
      }}
    >
      <ProgressBar current={current} total={total} />
      <LanguageToggle language={language} onChange={setLanguage} isRtl={isRtl} />

      <div dir="ltr" className="fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-brand-muted">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${language}-${current}`}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.35, ease: "easeOut" }}
          className="h-full"
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
