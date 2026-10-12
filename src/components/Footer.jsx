import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/tvilogs-192.jpg" alt="The Vanguard Initiative logo" width="72" height="72" loading="lazy" style={{ height: 72, width: 72, borderRadius: 10, boxShadow: '0 6px 18px -6px rgba(0,0,0,0.6)' }} />
            <div className="name">The Vanguard Initiative</div>
            <p className="tag">Raising Pioneers, Not Participants</p>
            <p className="line">Empowering people where it matters</p>
          </div>

          <div className="footer-col">


            <p>

              
            </p>
            
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/what-we-do">What We Do</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
          </div>

          
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} The Vanguard Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
