import { motion } from "framer-motion"

type ProgressBarProps = { current: number; total: number }

export function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-gold to-brand-cyan"
        animate={{ width: `${((current + 1) / total) * 100}%` }}
        transition={{ duration: 0.4 }}
      />
    </div>
  )
}
