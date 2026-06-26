import AnimatedSection from './AnimatedSection'
import TiltCard from './TiltCard'

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection variant="fadeLeft" duration={0.8}>
            <TiltCard className="rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Jules restaurant interior"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </TiltCard>
          </AnimatedSection>

          <AnimatedSection variant="fadeRight" duration={0.8} delay={0.2}>
            <div>
              <p className="text-accent-gold text-xs font-inter font-light tracking-[0.3em] uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                Where culinary art meets <span className="italic">midnight romance.</span>
              </h2>
              <p className="text-text-muted font-inter font-light leading-relaxed mb-6">
                Tucked away in the heart of the East Village, JULES is for those seeking more than just a meal. We believe dining should be an immersive experience — a delicate dance of flavors, ambiance, and connection.
              </p>
              <p className="text-text-muted font-inter font-light leading-relaxed mb-10">
                Our menu is a modern homage to classic European techniques, reimagined with the finest seasonal ingredients New York has to offer. Under the glow of candlelight, every dish tells a story of passion and precision.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce39078c1f96?w=100&q=80"
                    alt="Executive Chef"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-text-light text-sm font-inter font-medium">Chef Laurent Moreau</p>
                  <p className="text-text-dim text-xs font-inter font-light tracking-wider uppercase">Executive Chef</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
