import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

export default function TiltCard({ children, className = '', options = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const defaultOptions = {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
      perspective: 1000,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      ...options,
    }

    VanillaTilt.init(el, defaultOptions)

    return () => {
      if (el.vanillaTilt) el.vanillaTilt.destroy()
    }
  }, [options])

  return (
    <div ref={ref} className={`tilt-card ${className}`} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  )
}
