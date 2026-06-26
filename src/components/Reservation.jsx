import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Reservation() {
  return (
    <section id="reservation" className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/90 to-dark-bg" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection variant="fadeUp">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Join Us
          </h2>
          <p className="text-text-muted font-inter font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Reservations are highly recommended. We accept bookings up to 30 days in advance.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-accent-gold text-dark-bg font-inter font-semibold text-sm tracking-widest uppercase hover:bg-accent-gold-light transition-colors duration-300"
          >
            Find a Table
          </motion.button>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.3} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 border-t border-white/10 pt-12">
            <div className="text-center md:text-left">
              <h3 className="text-text-light font-inter text-sm font-semibold tracking-widest uppercase mb-4">
                Location
              </h3>
              <p className="text-text-muted font-inter font-light text-sm leading-relaxed">
                118 E 1st St
                <br />
                East Village, NYC 10009
              </p>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-text-light font-inter text-sm font-semibold tracking-widest uppercase mb-4">
                Hours
              </h3>
              <p className="text-text-muted font-inter font-light text-sm leading-relaxed">
                Tue - Sun: 5:30 PM - 11:00 PM
                <br />
                Monday: Closed
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
