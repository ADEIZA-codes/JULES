import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[300] bg-dark-bg flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-wider text-text-light mb-4">
              JULES
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-px bg-accent-gold/40" />
              <p className="text-accent-gold text-[10px] font-inter font-light tracking-[0.4em] uppercase">
                Est. 2024
              </p>
              <div className="w-8 h-px bg-accent-gold/40" />
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }}
            className="w-48 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent origin-center"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
