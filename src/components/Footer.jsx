import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const footerLinks = [
  { label: 'Press', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
]

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="font-playfair text-2xl font-bold tracking-wider text-text-light hover:text-accent-gold transition-colors"
            >
              JULES
            </a>

            <div className="flex items-center gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-muted font-inter text-sm font-light tracking-wider hover:text-accent-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-text-muted hover:text-accent-gold transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-text-dim font-inter text-xs font-light tracking-wider">
              &copy; {new Date().getFullYear()} Jules Restaurant NYC. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
