import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import MenuHighlights from './components/MenuHighlights'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MenuHighlights />
        <Gallery />
        <Testimonial />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}
