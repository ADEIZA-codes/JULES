import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import TiltCard from './TiltCard'

const menuItems = [
  {
    name: 'Oysters Rockefeller',
    price: '$28',
    description: 'Blue Point oysters, spinach, pernod, hollandaise, herb breadcrumbs.',
    image: 'https://images.unsplash.com/photo-1606731219412-fb38b0cbe5f7?w=600&q=80',
  },
  {
    name: 'Truffle Tagliatelle',
    price: '$42',
    description: 'House-made pasta, parmesan reggiano, shaved black truffle.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
  },
  {
    name: 'Dry-Aged Ribeye',
    price: '$85',
    description: '45-day dry-aged prime beef bone marrow butter, roasted garlic, pomme puree.',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-dark-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <p className="text-accent-gold text-xs font-inter font-light tracking-[0.3em] uppercase mb-4">
            Curated Selection
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-medium">
            Menu Highlights
          </h2>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <TiltCard className="group bg-dark-bg rounded-sm overflow-hidden border border-white/5 hover:border-accent-gold/20 transition-colors duration-500">
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

        <AnimatedSection variant="fadeUp" delay={0.5} className="text-center mt-14">
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border border-accent-gold text-accent-gold text-sm font-inter font-medium tracking-widest uppercase hover:bg-accent-gold hover:text-dark-bg transition-all duration-300"
          >
            View Full Menu
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  )
}
