import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Photo from './Photo'
import './HeroSlider.css'

const slides = [
  { id: 'youngteens3', name: 'youngteens3', alt: 'A group of five smiling young people posing together outdoors by the sea', position: 'center 30%' },
  { id: 'teamwork', name: 'team-hands', alt: 'A group of people with hands joined together in the centre, wearing colourful knitwear', position: 'center 45%' },
  { id: 'young', name: 'young', alt: 'Four friends with their arms around each other, watching the sun set over distant hills', position: 'center 55%' },
  { id: 'team', name: 'team', alt: 'A group of people gathered for a discussion in a bright, modern open space', position: 'center 55%' },
  { id: 'tees', name: 'tees', alt: 'A group of people gathered for a discussion in a bright, modern open space', position: 'center 55%' },
  { id: 'brand' }, // logo slide
]

const INTERVAL = 7000

export default function HeroSlider() {
  const reduceMotion = typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const [index, setIndex] = useState(0)
  const [hidden, setHidden] = useState(false)
  const touchX = useRef(null)
  const count = slides.length

  const go = useCallback(i => setIndex(((i % count) + count) % count), [count])

  // Pause only while the browser tab is hidden, then resume automatically.
  useEffect(() => {
    const onVis = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  // Autoplay continues while hovering or focusing the hero.
  useEffect(() => {
    if (hidden || reduceMotion) return
    const timer = window.setTimeout(() => go(index + 1), INTERVAL)
    return () => window.clearTimeout(timer)
  }, [index, hidden, reduceMotion, go])

  const onKeyDown = e => {
    if (e.key === 'ArrowLeft') go(index - 1)
    if (e.key === 'ArrowRight') go(index + 1)
  }

  const onTouchStart = e => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = e => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1))
    touchX.current = null
  }

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="The Vanguard Initiative highlights"
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={'hero-slide' + (i === index ? ' active' : '') + (s.name ? '' : ' brand')}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${count}`}
          aria-hidden={i !== index}
        >
          {s.name
            ? <Photo name={s.name} alt={i === index ? s.alt : ''} sizes="100vw" eager={i === 0} position={s.position} />
            : <div className="hero-brand-mark"><img src="/tvilogs-640.jpg" alt="" width="640" height="640" /></div>}
        </div>
      ))}

      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-copy">
          <h1>Raising <em>Pioneers,</em> Not Participants</h1>
          <p className="hero-sub">Equipping individuals to lead the way across faith, finance, family, and career.</p>
          <div className="hero-ctas">
            <Link to="/events" className="btn btn-gold">Join a Programme</Link>
            <Link to="/contact" className="btn btn-outline-white">Partner With Us</Link>
            <Link to="/donate" className="btn btn-outline-white">Support the Vision</Link>
          </div>
        </div>
      </div>

      <div className="hero-controls">
        <div className="container hero-controls-inner">
          <div className="hero-dots" role="group" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button key={s.id} type="button" className="hero-dot"
                aria-label={`Go to slide ${i + 1} of ${count}`}
                aria-current={i === index} onClick={() => go(i)}>
                <span />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sr-only" aria-live="off"
        style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
        Slide {index + 1} of {count}
      </div>
    </section>
  )
}