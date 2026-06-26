import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Testimonial() {
  return (
    <section className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-bg" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection variant="scaleUp" duration={0.8}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent-gold text-6xl md:text-7xl font-playfair leading-none mb-8"
          >
            &ldquo;
          </motion.div>

          <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-10 italic">
            &ldquo;Jules isn't just a restaurant; it's a beautifully{' '}
            <span className="text-accent-gold not-italic">orchestrated secret.</span> The ambiance is intoxicating, and the{' '}
            <span className="text-accent-gold not-italic">food</span> is nothing short of a{' '}
            <span className="text-accent-gold not-italic">revelation.</span>&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-accent-gold/40" />
            <p className="text-text-muted font-inter text-sm tracking-widest uppercase font-light">
              The New York Times
            </p>
            <div className="w-12 h-px bg-accent-gold/40" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
