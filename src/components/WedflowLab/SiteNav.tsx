import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

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

interface SiteNavProps {
  /** When true, in-page anchor links (#problem, #work...) point at the homepage instead. */
  external?: boolean;
}

export default function SiteNav({ external = false }: SiteNavProps) {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const fn = () => setNav(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkFor = (hash: string) => (external ? `/${hash}` : hash);

  const items: Array<[string, string]> = [
    ["#problem", "Problem"],
    ["#work", "Work"],
    ["#process", "Process"],
    ["#testimonials", "Clients"],
  ];

  return (
    <>
      {/* Mobile menu */}
      <div className={`mobile-menu ${menu ? "open" : ""}`}>
        <button className="mobile-menu-close" onClick={() => setMenu(false)}>✕</button>
        {items.map(([h, l]) => (
          <a key={h} href={linkFor(h)} onClick={() => setMenu(false)}>{l}</a>
        ))}
        <Link to="/about" onClick={() => setMenu(false)}>About</Link>
        <a href="#" onClick={(e) => { setMenu(false); openCalendly(e); }} style={{ color: "#6D0504" }}>Book a Call</a>
      </div>

      {/* NAV */}
      <nav className={`wfl-nav ${nav ? "scrolled" : ""}`}>
        <Link to="/" className="nav-brand">
          <span className="nav-brand-text">Wed<em>Flow</em>Lab</span>
          <Logo size={42} />
        </Link>
        <ul className="nav-links">
          {items.map(([h, l]) => (
            <li key={h}><a href={linkFor(h)}>{l}</a></li>
          ))}
          <li><Link to="/about">About</Link></li>
        </ul>
        <a href="#" className="nav-cta" onClick={openCalendly}>Book a Free Call</a>
        <button className="hamburger" onClick={() => setMenu(true)}>
          <span /><span /><span />
        </button>
      </nav>
    </>
  );
}
