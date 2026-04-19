import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { cl } from "./cloudinary"; // kept for HeroSlides
import Logo from "./Logo";
import Intro from "./Intro";
import HeroSlides from "./HeroSlides";
import WorkSection from "./WorkSection";
import ServicesSection from "./ServicesSection";
import TheRealitySection from "./TheRealitySection";
import { useReveal } from "./useReveal";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const openCalendly = (e: React.MouseEvent) => {
  e.preventDefault();
  window.Calendly?.initPopupWidget({ url: "https://calendly.com/wmnedge/wedflowlab" });
};




const marqueeWords = [
  "Wedding Photographers", "Videographers", "Wedding Planners",
  "Decorators", "Luxury Venues", "Bridal Studios",
  "Wedding Photographers", "Videographers", "Wedding Planners",
  "Decorators", "Luxury Venues", "Bridal Studios",
];

export default function WedflowLab() {
  const initialHash = typeof window !== "undefined" ? window.location.hash : "";
  const [intro, setIntro] = useState(!initialHash);
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);

  useReveal();

  useEffect(() => {
    const fn = () => setNav(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // When arriving with a hash (e.g. from /about), scroll to the target section
  // once the intro is skipped and the DOM is ready.
  useEffect(() => {
    if (intro) return;
    const hash = window.location.hash;
    if (!hash) return;
    const tryScroll = (attempt = 0) => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempt < 20) {
        setTimeout(() => tryScroll(attempt + 1), 100);
      }
    };
    tryScroll();
  }, [intro]);

  return (
    <>
      {intro && <Intro onDone={() => setIntro(false)} />}

      {/* Mobile menu */}
      <div className={`mobile-menu ${menu ? "open" : ""}`}>
        <button className="mobile-menu-close" onClick={() => setMenu(false)}>✕</button>
        {[["#problem", "Problem"], ["#work", "Our Work"], ["#process", "Process"], ["#testimonials", "Clients"]].map(([h, l]) => (
          <a key={h} href={h} onClick={() => setMenu(false)}>{l}</a>
        ))}
        <Link to="/about" onClick={() => setMenu(false)}>About</Link>
        <a href="#" onClick={(e) => { setMenu(false); openCalendly(e); }} style={{ color: "#6D0504" }}>Book a Call</a>
      </div>

      {/* NAV */}
      <nav className={`wfl-nav ${nav ? "scrolled" : ""}`}>
        <a href="#" className="nav-brand">
          <span className="nav-brand-text">Wed<em>Flow</em>Lab</span>
          <Logo size={42} />
        </a>
        <ul className="nav-links">
          {[["#problem", "Problem"], ["#work", "Work"], ["#process", "Process"], ["#testimonials", "Clients"]].map(([h, l]) => (
            <li key={h}><a href={h}>{l}</a></li>
          ))}
          <li><Link to="/about">About</Link></li>
        </ul>
        <a href="#" className="nav-cta" onClick={openCalendly}>Book a Free Call</a>
        <button className="hamburger" onClick={() => setMenu(true)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <HeroSlides />
        <div className="hero-content">
          <p className="hero-eyebrow">Wedding Industry · Premium Web Design Studio</p>
          <h1 className="hero-title">
            Your Best <em>Salesperson</em><br />
            Works 24/7.<br />
            It's Your <em>Website.</em>
          </h1>
          <p className="hero-sub">
            A client decides in 5 seconds whether to trust you — or scroll away.
            Instagram makes them admire you. A premium website makes them <strong>choose</strong> you.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-primary">See Our Work</a>
            <a href="#" className="btn-ghost" onClick={openCalendly}>Book a Free Call</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-bar" />
          <span>Scroll</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {marqueeWords.map((w, i) => (
            <span key={i} className="marquee-item">{w}</span>
          ))}
        </div>
      </div>

      {/* THE REALITY */}
      <TheRealitySection />

      {/* SERVICES */}
      <ServicesSection />

      {/* PORTFOLIO */}
      <WorkSection />

      {/* WHY */}
      <section className="sec why-section">
        <div className="why-inner">
          <h2 className="why-quote rv">
            "A website is not an expense.<br />It's your closing argument."
          </h2>
          <p className="why-sub rv d1">
            Every rupee you invest in a premium website is a sales conversation that runs 24/7 — building trust, establishing authority, and quietly pre-qualifying every inquiry so you're only talking to people who already want to book you.
          </p>
          <div className="why-pills rv d2">
            {["Authority", "Trust", "Conversion", "Bookings", "Premium Positioning"].map(p => (
              <span key={p} className="why-pill">{p}</span>
            ))}
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section id="testimonials" className="sec testimonials-section">
        <div className="testimonials-header">
          <p className="sec-label rv">Client Stories</p>
          <h2 className="sec-heading rv d1">
            What happens when<br /><em>your website actually works</em>
          </h2>
        </div>
        <div className="testimonials-grid">
          {[
            { q: "My inquiry rate tripled in 60 days. Clients arrive pre-sold on my pricing. The website WedflowLab built doesn't just look premium — it acts premium.", n: "Priya Kapoor", r: "Wedding Photographer · Mumbai" },
            { q: "I spent six years justifying my packages on Instagram. One website. One conversation. The client had already decided before they hit send on their inquiry.", n: "Arjun Mehta", r: "Wedding Videographer · Delhi" },
            { q: "They didn't design a website. They created a brand world. My competitors still look like free templates. That distinction is worth every rupee.", n: "Sanya Rodrigues", r: "Wedding Planner · Goa" },
          ].map((t, i) => (
            <div key={i} className={`testimonial-card rv d${i + 1}`}>
              <div className="stars">★★★★★</div>
              <p className="testimonial-quote">"{t.q}"</p>
              <div className="testimonial-author">
                <p className="testimonial-name">{t.n}</p>
                <p className="testimonial-role">{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="sec final-cta">
        <div className="final-cta-inner">
          <p className="final-cta-eye rv">Your Next Client Is Already Searching</p>
          <h2 className="final-cta-heading rv d1">
            What will they find<br />when they <em>Google you?</em>
          </h2>
          <p className="final-cta-sub rv d2">
            Your next client is on Google right now. If your website doesn't immediately communicate trust, authority, and premium quality — they've already moved to the next name on the list.
          </p>
          <div className="final-cta-actions rv d3">
            <a href="#" className="btn-primary" onClick={openCalendly}>Book a Free 20-Min Call</a>
            <a href="#work" className="btn-ghost">See Our Work First</a>
          </div>
          <p className="final-cta-note rv d3">No commitment. No pitch decks. Just an honest conversation about your brand.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="wfl-footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <Logo size={35} />
              <span> Wed<em>Flow</em>Lab</span>
            </div>
            <p className="footer-desc">Premium digital presences for India's finest wedding professionals. Every website is a conversion environment — not just a portfolio.</p>
          </div>
          <div>
            <h4 className="footer-col-title">Studio</h4>
            <ul className="footer-links">
              {["Our Work", "Services", "Process", "About"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">We Serve</h4>
            <ul className="footer-links">
              {["Photographers", "Videographers", "Planners", "Decorators", "Venues"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-links">
              <li><a href="https://www.instagram.com/wed_flow_lab?igsh=eGluajhnZXY0eXh2" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="mailto:wedflowlab@wf.com">wedflowlab@wf.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">© 2025 WedflowLab · All Rights Reserved</span>
          <Logo size={28} />
          <span className="footer-copyright">wedflowlab.com</span>
        </div>
      </footer>
    </>
  );
}
