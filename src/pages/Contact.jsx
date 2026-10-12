import HeroInner from '../components/HeroInner'

export default function Contact() {
  return (
    <main id="main" className="page">
      <HeroInner title="Get in Touch" subtitle="For enquiries, partnerships, or more information:" />

      <section className="section section-ivory" aria-label="Contact details">
        <div className="container">
          <dl className="contact-rows">
            <div className="contact-row"><dt>Email</dt><dd>[Email]</dd></div>
            <div className="contact-row"><dt>Contact Form</dt><dd>[Form]</dd></div>
            <div className="contact-row"><dt>Social Media</dt><dd>[Links]</dd></div>
          </dl>
        </div>
      </section>
    </main>
  )
}
