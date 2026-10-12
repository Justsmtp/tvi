import HeroInner from '../components/HeroInner'
import Photo from '../components/Photo'

export default function Donate() {
  return (
    <main id="main" className="page">
      <HeroInner title="Support the Vision" />

      <section className="section section-ivory" aria-label="How your support helps">
        <div className="container">
          <div className="split">
            <div>
              <p className="lead" style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Your support helps us:</p>
              <ul className="tick-list" style={{ fontSize: '1.15rem' }}>
                <li>Deliver life-changing programmes</li>
                <li>Reach underserved communities</li>
                <li>Build future leaders</li>
              </ul>
              <p className="pull-quote pull-quote-light pull-quote-line" style={{ margin: '2.5rem 0', fontSize: 'clamp(1.25rem,2.6vw,1.7rem)' }}>
                Every contribution goes towards creating lasting impact.
              </p>
              <div className="placeholder-panel">[Donation Link]</div>
            </div>
            <div className="photo-frame" style={{ aspectRatio: '4 / 5', maxHeight: 560 }}>
              <Photo name="donation" alt="Cupped hands holding coins and a small paper note that reads “Make a change”" position="48% center" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
