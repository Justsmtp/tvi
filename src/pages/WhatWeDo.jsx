import { Link } from 'react-router-dom'
import HeroInner from '../components/HeroInner'
import Photo from '../components/Photo'

const areas = [
  'Faith & Identity',
  'Financial Empowerment',
  'Family & Relationships',
  'Career & Enterprise',
  'Leadership & Personal Development',
]

export default function WhatWeDo() {
  return (
    <main id="main" className="page">
      <HeroInner title="What We Do" />

      <section className="section section-ivory" aria-labelledby="approach-h">
        <div className="container">
          <div className="split">
            <div>
              <h2 id="approach-h" className="section-title">Our Approach</h2>
              <p className="lead" style={{ fontSize: '1.3rem', color: 'var(--green-primary)', marginBottom: '1.5rem' }}>
                We take a holistic approach to development because true growth is not one dimensional.
              </p>
              <div className="prose">
                <p>Through practical programmes, transformative workshops, and strategic partnerships, we help people move from uncertainty to clarity, from limitation to leadership.</p>
              </div>
            </div>
            <div className="photo-frame" style={{ aspectRatio: '4 / 3' }}>
              <Photo name="youngteens1" alt="Five young adults walking together down a city street past a brick building" position="center 40%" sizes="(max-width: 1024px) 100vw, 560px" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="areas-h">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <h2 id="areas-h" className="section-title">We equip individuals across five key areas</h2>
              <div className="photo-frame" style={{ aspectRatio: '4 / 3', marginTop: '2rem' }}>
                <Photo name="youngteens2" alt="A group of young people laughing and taking a selfie together at a gathering" position="center 35%" sizes="(max-width: 1024px) 100vw, 560px" />
              </div>
            </div>
            <div>
              <ol className="areas-list">
                {areas.map((a, i) => (
                  <li key={a}>
                    <div className="area-row">
                      <span className="area-num">0{i + 1}</span>
                      <span className="area-name">{a}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-2"><Link to="/events" className="btn btn-gold">Join a Programme</Link></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
