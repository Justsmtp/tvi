import HeroInner from '../components/HeroInner'
import Photo from '../components/Photo'
import './Events.css'

const programmes = [
  'Financial Fitness',
  'Career Acceleration',
  'Faith & Identity',
  'Family & Relationships',
  'Leadership Development',
]

const gallery = [
  { name: 'team', feature: true, alt: 'A group of people seated and talking in a bright, modern lounge space', position: 'center 55%' },
  { name: 'naie', alt: 'A group of smiling young people taking a selfie together', position: '55% 35%' },
  { name: 'jaa',  alt: 'Silhouettes of people standing together on a hilltop at sunset', position: '50% 38%' },
  { name: 'llo',  alt: 'People working together on laptops around a wooden table', position: 'center 40%' },
  { name: 'group', alt: 'A facilitator presenting to a seated audience in a training room', position: 'center 60%' },
]

export default function Events() {
  return (
    <main id="main" className="page">
      <HeroInner title="Events" />

      <section className="section section-ivory" aria-labelledby="upcoming-h">
        <div className="container">
          <div className="container-sm" style={{ padding: 0, margin: 0, maxWidth: 760 }}>
            <h2 id="upcoming-h" className="section-title">Upcoming Events</h2>
            <p className="lead">Workshops, seminars, and empowerment sessions designed to equip and inspire.</p>
          </div>

          <div className="programme-head">
          
          </div>
          <ol className="emerge-grid">
            {programmes.map((p, i) => (
              <li key={p} className="emerge-item">
                <span className="n">0{i + 1}</span>
                <span className="emerge-name">{p}</span>
                <span className="soon-tag">Coming soon</span>
              </li>
            ))}
          </ol>
          <p className="programme-close">Each programme is designed to move individuals from where they are to where they are meant to be.</p>
        </div>
      </section>

      <section className="section section-white" aria-label="Photo gallery">
        <div className="container">
          <ul className="gallery" style={{ listStyle: 'none' }}>
            {gallery.map(g => (
              <li key={g.name} className={'gallery-item' + (g.feature ? ' feature' : '')}>
                <Photo name={g.name} alt={g.alt} position={g.position} sizes={g.feature ? '(max-width: 768px) 100vw, 600px' : '(max-width: 768px) 50vw, 300px'} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-ivory" aria-labelledby="past-h">
        <div className="container-sm">
          <h2 id="past-h" className="section-title">Past Events</h2>
          <p className="lead" style={{ marginBottom: '2rem' }}>A look at the impact we’ve made so far.</p>
          <div className="placeholder-panel">[Past Events]</div>
        </div>
      </section>
    </main>
  )
}
