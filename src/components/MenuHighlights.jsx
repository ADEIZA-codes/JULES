import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import TiltCard from './TiltCard'

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

const menuItems = [
  {
    name: 'Oysters Rockefeller',
    price: '$28',
    description: 'Blue Point oysters, spinach, pernod, hollandaise, herb breadcrumbs.',
    image: 'https://images.unsplash.com/photo-1606731219412-fb38b0cbe5f7?w=600&q=80',
    category: 'Starters',
  },
  {
    name: 'Burrata Caprese',
    price: '$22',
    description: 'Heirloom tomatoes, fresh burrata, aged balsamic, basil oil.',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&q=80',
    category: 'Starters',
  },
  {
    name: 'Tuna Tartare',
    price: '$26',
    description: 'Yellowfin tuna, avocado mousse, crispy wonton, sesame ginger dressing.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80',
    category: 'Starters',
  },
  {
    name: 'Truffle Tagliatelle',
    price: '$42',
    description: 'House-made pasta, parmesan reggiano, shaved black truffle.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
    category: 'Mains',
  },
  {
    name: 'Dry-Aged Ribeye',
    price: '$85',
    description: '45-day dry-aged prime beef, bone marrow butter, roasted garlic, pomme puree.',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
    category: 'Mains',
  },
  {
    name: 'Pan-Seared Halibut',
    price: '$52',
    description: 'Wild halibut, saffron risotto, broccolini, lemon beurre blanc.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a0?w=600&q=80',
    category: 'Mains',
  },
  {
    name: 'Chocolate Fondant',
    price: '$18',
    description: 'Dark Valrhona chocolate, molten center, vanilla bean ice cream.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
    category: 'Desserts',
  },
  {
    name: 'Creme Brulee',
    price: '$16',
    description: 'Classic Madagascar vanilla, caramelized sugar crust, fresh berries.',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80',
    category: 'Desserts',
  },
  {
    name: 'Signature Old Fashioned',
    price: '$22',
    description: 'Woodford Reserve bourbon, demerara, angostura, flamed orange peel.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80',
    category: 'Drinks',
  },
  {
    name: 'Midnight in Paris',
    price: '$20',
    description: 'Grey Goose vodka, crme de violette, champagne, lemon twist.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80',
    category: 'Drinks',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
}

export default function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-24 md:py-32 bg-dark-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <p className="text-accent-gold text-xs font-inter font-light tracking-[0.3em] uppercase mb-4">
            Curated Selection
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-medium">
            Menu Highlights
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1} className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 bg-dark-bg rounded-sm p-1 border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-inter font-medium tracking-widest uppercase transition-all duration-300 rounded-sm ${
                  activeCategory === cat
                    ? 'bg-accent-gold text-dark-bg'
                    : 'text-text-muted hover:text-text-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((item) => (
              <motion.div key={item.name} variants={itemVariants} layout>
                <TiltCard className="group bg-dark-bg rounded-sm overflow-hidden border border-white/5 hover:border-accent-gold/20 transition-colors duration-500 h-full">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="font-playfair text-xl font-medium">{item.name}</h3>
                      <span className="text-accent-gold font-inter font-semibold text-lg">{item.price}</span>
                    </div>
                    <p className="text-text-muted font-inter font-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection variant="fadeUp" delay={0.3} className="text-center mt-14">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-accent-gold text-accent-gold text-sm font-inter font-medium tracking-widest uppercase hover:bg-accent-gold hover:text-dark-bg transition-all duration-300"
          >
            View Full Menu
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  )
}
