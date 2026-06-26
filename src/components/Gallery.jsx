import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import AnimatedSection from './AnimatedSection'
import TiltCard from './TiltCard'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80',
    alt: 'Craft cocktail at Jules',
    caption: 'Signature Old Fashioned',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    alt: 'Plated fine dining dish',
    caption: 'Pan-Seared Duck Breast',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    alt: 'Restaurant interior ambiance',
    caption: 'The Main Dining Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80',
    alt: 'Dry-aged steak',
    caption: 'Dry-Aged Ribeye',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&q=80',
    alt: 'Dessert presentation',
    caption: 'Chocolate Fondant',
  },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const handlePrev = () => {
    if (selected === null) return
    setSelected(selected === 0 ? galleryImages.length - 1 : selected - 1)
  }

  const handleNext = () => {
    if (selected === null) return
    setSelected(selected === galleryImages.length - 1 ? 0 : selected + 1)
  }

  return (
    <section id="gallery" className="py-24 md:py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <p className="text-accent-gold text-xs font-inter font-light tracking-[0.3em] uppercase mb-4">
            The Ambiance
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-medium">
            A Feast for the Senses
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <AnimatedSection variant="fadeLeft" className="md:row-span-2">
            <TiltCard className="h-full cursor-pointer" options={{ max: 8 }}>
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full min-h-[300px] md:min-h-[500px] object-cover rounded-sm transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
                onClick={() => setSelected(0)}
              />
            </TiltCard>
          </AnimatedSection>

          {galleryImages.slice(1, 3).map((img, i) => (
            <AnimatedSection key={img.src} variant="fadeRight" delay={i * 0.1}>
              <TiltCard className="cursor-pointer" options={{ max: 8 }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[240px] object-cover rounded-sm transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                  onClick={() => setSelected(i + 1)}
                />
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection variant="fadeUp" delay={0.3} className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelected(0)}
            className="px-8 py-3 border border-accent-gold text-accent-gold text-sm font-inter font-medium tracking-widest uppercase hover:bg-accent-gold hover:text-dark-bg transition-all duration-300"
          >
            View All Photos
          </motion.button>
        </AnimatedSection>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-dark-bg/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-text-muted hover:text-text-light transition-colors z-10"
              aria-label="Close"
            >
              <HiX size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handlePrev() }}
              className="absolute left-4 md:left-8 text-text-muted hover:text-accent-gold transition-colors z-10"
              aria-label="Previous"
            >
              <HiOutlineChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext() }}
              className="absolute right-4 md:right-8 text-text-muted hover:text-accent-gold transition-colors z-10"
              aria-label="Next"
            >
              <HiOutlineChevronRight size={40} />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] px-12"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selected].src}
                alt={galleryImages[selected].alt}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
              />
              <p className="text-center text-text-muted font-inter text-sm font-light mt-4 tracking-wide">
                {galleryImages[selected].caption}
              </p>
              <p className="text-center text-text-dim font-inter text-xs mt-2">
                {selected + 1} / {galleryImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
