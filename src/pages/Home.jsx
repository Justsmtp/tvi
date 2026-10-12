import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import Photo from '../components/Photo'

const areas = [
  'Faith & Identity',
  'Financial Empowerment',
  'Family & Relationships',
  'Career & Enterprise',
  'Leadership & Personal Development',
]

const involve = [
  { title: 'Join a Programme',   desc: 'Take part in one of our structured development programmes.', to: '/events' },
  { title: 'Partner With Us',    desc: 'Collaborate with us as an organisation, expert, or institution.', to: '/contact' },
  { title: 'Sponsor an Initiative', desc: 'Help us expand our reach and impact more communities.', to: '/contact' },
]

export default function Home() {
  return (
    <main id="main" className="page">
      <HeroSlider />

      {/* ── INTRO ─────────────────────────────── */}
      <section className="section section-ivory" aria-labelledby="intro-title">
        <div className="container">
          <div className="split split-wide-left">
            <div>
              <h2 id="intro-title" className="section-title" style={{ fontSize: 'clamp(2.2rem,4.6vw,3.4rem)' }}>Empowering people where it matters</h2>
              <div className="prose">
                <p>The Vanguard Initiative is a leadership and empowerment charity committed to developing individuals particularly young adults from underrepresented and disadvantaged backgrounds into confident, capable, and purpose-driven leaders.</p>
                <p>We believe that everyone carries potential, but not everyone is given the tools, exposure, or environment to fully realise it. That’s where we come in.</p>
                <p>Through practical programmes, transformative workshops, and strategic partnerships, we help people move from uncertainty to clarity, from limitation to leadership.</p>
              </div>
            </div>
            <div className="photo-frame" style={{ aspectRatio: '4 / 5', maxHeight: 560 }}>
              <Photo name="naie" alt="A group of smiling young people taking a selfie together outdoors" position="52% center" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO (single section) ───────── */}
      <section className="section section-deep" aria-labelledby="what-title">
        <div className="container">
          <div className="split" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 id="what-title" className="section-title">We equip individuals across five key areas</h2>
              <div className="photo-frame" style={{ aspectRatio: '4 / 3', margin: '2rem 0' }}>
                <Photo name="youngteens1" alt="Five young adults walking together down a city street past a brick building" position="center 40%" sizes="(max-width: 1024px) 100vw, 560px" />
              </div>
              <Link to="/what-we-do" className="text-link on-dark">What We Do <span aria-hidden="true">→</span></Link>
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

      {/* ── STORY ─────────────────────────────── */}
      <section className="section section-ivory" aria-labelledby="story-title">
        <div className="container">
          <div className="split split-founder" style={{ alignItems: 'start' }}>
            <div>
              <span className="eyebrow">About Us</span>
              <h2 id="story-title" className="section-title">Our Story</h2>
              <div className="mt-2"><Link to="/about" className="btn btn-green">Read Our Story</Link></div>
            </div>
            <div className="founder-message">
              <p className="beat">Mark Twain once said, “The two most important days in your life are the day you are born and the day you find out why.”</p>
              <p>I am grateful because I found my “why.”</p>
              <p>And now, I have committed my life to helping others find theirs.</p>
              <p>The Vanguard Initiative is the natural evolution of that work.</p>
              <p>It is built from real experiences, real lessons, and a real desire to see people not just succeed but lead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ───────────────────────────── */}
      <section className="section section-green" aria-labelledby="founder-title">
        <div className="container">
          <div className="split split-founder">
            <div className="photo-frame portrait-frame" style={{ aspectRatio: '4 / 5' }}>
              <Photo name="founder-seated" widths={[800, 1111]} alt="The founder seated casually on a chair, wearing an olive jacket and trousers with white trainers" position="center" sizes="(max-width: 1024px) 80vw, 420px" />
            </div>
            <div>
              <span className="eyebrow">Founder’s Message</span>
              <h2 id="founder-title" className="sr-only">Founder’s Message</h2>
              <p className="pull-quote" style={{ marginBottom: '1.5rem' }}>
                I didn’t start The Vanguard Initiative from theory I started it from experience.
              </p>
              <p className="lead" style={{ marginBottom: '0.5rem' }}>My commitment is To build people. To equip leaders. To raise pioneers.</p>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--gold-light)', fontSize: '1.15rem', marginTop: '1.25rem' }}>Yemi Adesanya</p>
              <div className="mt-2"><Link to="/about#founders-message" className="btn btn-outline-white">Read the Founder’s Message</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ──────────────────────── */}
      <section className="section section-white" aria-labelledby="involve-title">
        <div className="container">
          <div className="center-text" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Get Involved</span>
            <h2 id="involve-title" className="section-title">Be Part of the Movement</h2>
            <p className="lead" style={{ margin: '0 auto' }}>There are multiple ways to get involved:</p>
          </div>
          <div className="path-grid">
            {involve.map(item => (
              <div className="path" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to={item.to} className="text-link">{item.title} <span aria-hidden="true">→</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ────────────────────── */}
      <section className="section section-deep cta-band" aria-labelledby="cta-title">
        <div className="container-sm">
          <span className="eyebrow">Donate</span>
          <h2 id="cta-title" className="section-title">Support the Vision</h2>
          <p className="lead" style={{ margin: '0 auto' }}>Every contribution goes towards creating lasting impact.</p>
          <div className="btn-row">
            <Link to="/donate" className="btn btn-gold">Support the Vision</Link>
            <Link to="/events" className="btn btn-outline-white">Join a Programme</Link>
            <Link to="/contact" className="btn btn-outline-white">Partner With Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}