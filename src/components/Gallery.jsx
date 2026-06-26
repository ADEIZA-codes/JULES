import AnimatedSection from './AnimatedSection'
import TiltCard from './TiltCard'

export default function Gallery() {
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
          <AnimatedSection variant="fadeLeft" className="row-span-2">
            <TiltCard className="h-full">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80"
                alt="Craft cocktail at Jules"
                className="w-full h-full min-h-[300px] md:min-h-[500px] object-cover rounded-sm"
                loading="lazy"
              />
            </TiltCard>
          </AnimatedSection>

          <AnimatedSection variant="fadeRight" delay={0.1}>
            <TiltCard>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Plated fine dining dish"
                className="w-full h-[240px] md:h-[240px] object-cover rounded-sm"
                loading="lazy"
              />
            </TiltCard>
          </AnimatedSection>

          <AnimatedSection variant="fadeRight" delay={0.2}>
            <TiltCard>
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                alt="Restaurant interior ambiance"
                className="w-full h-[240px] md:h-[240px] object-cover rounded-sm"
                loading="lazy"
              />
            </TiltCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
