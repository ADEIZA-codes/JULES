import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import AnimatedSection from './AnimatedSection'

const timeSlots = [
  '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM',
]

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: 2,
    occasion: '',
    notes: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClasses =
    'w-full bg-dark-bg-light border border-white/10 px-4 py-3 text-text-light font-inter text-sm font-light placeholder:text-text-dim focus:outline-none focus:border-accent-gold/50 transition-colors duration-300 rounded-none'

  return (
    <section id="reservation" className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/90 to-dark-bg" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <p className="text-accent-gold text-xs font-inter font-light tracking-[0.3em] uppercase mb-4">
            Reservations
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Join Us
          </h2>
          <p className="text-text-muted font-inter font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Reservations are highly recommended. We accept bookings up to 30 days in advance.
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <HiCheck className="text-dark-bg" size={32} />
                  </motion.div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-medium mb-4">
                    Reservation Confirmed
                  </h3>
                  <p className="text-text-muted font-inter font-light text-sm leading-relaxed mb-8">
                    Thank you, {form.name}. We've sent a confirmation to {form.email}.
                    <br />
                    See you on {form.date} at {form.time}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', phone: '', date: '', time: '', partySize: 2, occasion: '', notes: '' })
                    }}
                    className="px-8 py-3 border border-accent-gold text-accent-gold text-sm font-inter font-medium tracking-widest uppercase hover:bg-accent-gold hover:text-dark-bg transition-all duration-300"
                  >
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                    <select
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      className={`${inputClasses} ${!form.occasion ? 'text-text-dim' : 'text-text-light'}`}
                    >
                      <option value="">Occasion (Optional)</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="date-night">Date Night</option>
                      <option value="business">Business Dinner</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                      className={`${inputClasses} ${!form.date ? 'text-text-dim' : 'text-text-light'}`}
                    />
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} ${!form.time ? 'text-text-dim' : 'text-text-light'}`}
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    <select
                      name="partySize"
                      value={form.partySize}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {partySizes.map((size) => (
                        <option key={size} value={size}>
                          {size} {size === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    name="notes"
                    placeholder="Special requests or dietary requirements (Optional)"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputClasses} resize-none`}
                  />

                  <div className="text-center pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-12 py-4 bg-accent-gold text-dark-bg font-inter font-semibold text-sm tracking-widest uppercase hover:bg-accent-gold-light transition-colors duration-300 w-full md:w-auto"
                    >
                      Reserve a Table
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.4} className="mt-20">
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
