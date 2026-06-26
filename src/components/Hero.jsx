import { motion } from 'framer-motion'

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/70 via-dark-bg/40 to-dark-bg" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-accent-gold text-sm font-inter font-light tracking-[0.3em] uppercase mb-6"
        >
          East Village, NYC
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-10"
        >
          An Intimate
          <br />
          <span className="italic">New York</span> Experience
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll('#reservation')}
          className="px-10 py-4 bg-accent-gold text-dark-bg font-inter font-semibold text-sm tracking-widest uppercase hover:bg-accent-gold-light transition-colors duration-300"
        >
          Reserve a Table
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-text-muted/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2.5 bg-accent-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
