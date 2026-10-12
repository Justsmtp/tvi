export default function HeroInner({ eyebrow, title, subtitle }) {
  return (
    <section className="hero-inner">
      <div className="container">
        <div className="hero-inner-content">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
