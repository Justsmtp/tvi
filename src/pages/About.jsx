import HeroInner from '../components/HeroInner'
import Photo from '../components/Photo'

const audience = [
  'Young adults seeking direction and purpose',
  'Individuals looking to enter meaningful employment',
  'Professionals aiming to grow and scale their careers',
  'Those who desire personal and leadership development',
  'People from disadvantaged or underrepresented backgrounds',
]

const values = [
  { title: 'Leadership', desc: 'We don’t just encourage participation—we develop leaders who take responsibility and shape their environments.' },
  { title: 'Excellence', desc: 'We uphold high standards in everything we do, ensuring that those we serve are equipped to operate at the highest level.' },
  { title: 'Impact',     desc: 'Our focus is long-term transformation—creating change that extends beyond individuals into families and communities.' },
]

export default function About() {
  return (
    <main id="main" className="page">
      <HeroInner title="About Us" />

      {/* OUR STORY */}
      <section className="section section-white" aria-labelledby="story-h">
        <div className="container-sm story">
          <h2 id="story-h" className="section-title">Our Story</h2>
          <div className="wide-photo" style={{ marginBottom: '2.5rem' }}>
            <Photo name="young" alt="Four friends with their arms around each other, watching the sun set over distant hills" position="center 55%" sizes="(max-width: 900px) 100vw, 820px" />
          </div>
          <p className="beat">Growing up, I was always searching for who I was.</p>
          <p>On the outside, I came from a good home loving parents, amazing siblings, and a strong foundation. But internally, there was a void. A deep sense of not fully knowing my identity or where I belonged. And because of that, I found myself looking for acceptance in places that could never truly give it.</p>
          <p>I got involved with the wrong crowd not because I was looking for trouble, but because I was looking for a place to fit in.</p>
          <p>That search led me down a path of poor decisions, which eventually resulted in my arrest and facing some very serious criminal charges. It was one of the most defining moments of my life. Not because of the situation itself, but because it forced me to confront the reality of where my life was heading.</p>
          <p className="beat">And in that moment, something shifted.</p>
          <p>I realised that one of the biggest reasons I found myself in those situations was not just my choices but what I had surrounded myself with. Environment matters. Influence matters. Identity matters.</p>
          <p>There are many people today who feel that same void I once felt. They’re searching for meaning, for purpose, for belonging. Some try to find it in their work, others in relationships, and unfortunately, many in the wrong environments or communities.</p>
          <p>I understand that journey because I’ve lived it.</p>
          <p>Mark Twain once said, “The two most important days in your life are the day you are born and the day you find out why.”</p>
          <p>I am grateful because I found my “why.”</p>
          <p>And now, I have committed my life to helping others find theirs.</p>
          <p>Out of this journey, I began equipping myself not just for my own growth, but to serve others. I went on to create youth-focused initiatives, including Leaders in Training (LIT) a programme designed for young people aged 13–18. Through mentoring, retreats, character development, and hands-on projects, we helped young people understand what it truly means to lead.</p>
          <p>I also launched StayLIT, focused on university students helping them stay grounded, focused, and connected to purpose during a critical stage of life.</p>
          <p>These initiatives were not just programmes they were platforms of transformation. And their impact continues to be felt in the lives of those who went through them.</p>
          <p className="beat">The Vanguard Initiative is the natural evolution of that work.</p>
          <p>It is built from real experiences, real lessons, and a real desire to see people not just succeed but lead.</p>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="section section-ivory" aria-label="Vision and mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card dark">
              <h2>Vision Statement</h2>
              <p>To build a generation of individuals particularly from underrepresented communities who are equipped, empowered, and positioned at the forefront of influence across faith, finance, family, and career.</p>
            </div>
            <div className="vm-card light">
              <h2>Mission Statement</h2>
              <p>The Vanguard Initiative exists to equip individuals with the tools, knowledge, and confidence to excel in every area of life through transformative programmes, practical workshops, and strategic partnerships that drive long-term personal and community advancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section section-white" aria-labelledby="serve-h">
        <div className="container">
          <div className="split split-wide-left" style={{ alignItems: 'start' }}>
            <div>
              <h2 id="serve-h" className="section-title">Who We Serve</h2>
              <p className="lead" style={{ marginBottom: '1.5rem' }}>We are committed to serving:</p>
              <ul className="tick-list">
                {audience.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div className="vm-card dark" style={{ minHeight: 0 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: '1.4rem', lineHeight: 1.55, color: 'var(--white)' }}>
                We exist for those who know there is more but need the right environment, guidance, and structure to step into it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-ivory" aria-labelledby="values-h">
        <div className="container">
          <div className="center-text" style={{ marginBottom: '3rem' }}>
            <h2 id="values-h" className="section-title">Our Values</h2>
          </div>
          <div className="value-grid">
            {values.map(v => (
              <div className="value" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}
      <section className="section section-green" id="founders-message" aria-labelledby="fm-h">
        <div className="container-sm">
          <h2 id="fm-h" className="section-title" style={{ textAlign: "center" }}>Founder’s Message</h2>
          <div className="founder-message">
            <p className="beat">I didn’t start The Vanguard Initiative from theory I started it from experience.</p>
            <p>I know what it feels like to search for identity. To look for acceptance in the wrong places. To make decisions that could have defined the rest of your life. And I also know what it feels like to be given another chance and to make that chance count.</p>
            <p>This initiative is deeply personal to me.</p>
            <p>It represents everything I wish I had access to at certain stages of my life guidance, structure, exposure, and the right voices speaking into my future.</p>
            <p>But more importantly, it represents what I now know is possible when someone is equipped properly.</p>
            <p>I believe that many people are not lacking potential they are lacking the right environment, the right information, and the right belief system.</p>
            <p>When those things align, everything changes.</p>
            <p>The Vanguard Initiative is here to create that alignment.</p>
            <p>This is not just about helping people get by it’s about helping them rise, lead, and take ownership of their future.</p>
            <p className="beat">My commitment is simple:<br />To build people.<br />To equip leaders.<br />To raise pioneers.</p>
            <p>And I look forward to seeing what your journey becomes.</p>
            <div className="signature">Yemi Adesanya</div>
          </div>
        </div>
      </section>
    </main>
  )
}
