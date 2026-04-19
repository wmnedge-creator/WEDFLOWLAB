import { useEffect } from "react";
import SiteNav from "@/components/WedflowLab/SiteNav";

const PHOTO_URL =
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=698,fit=crop/Aq2WJBPZvwFJDqGW/johnnn-JyB2CfrpVLxcEM3t.jpg";

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700&family=Montserrat:wght@300;400;500;600&display=swap');

    .ab-hero {
      min-height: 72vh;
      background: #0a0806;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      text-align: center;
      padding: clamp(7rem,14vw,12rem) clamp(2rem,8vw,8rem) clamp(5rem,10vw,8rem);
      position: relative; overflow: hidden;
    }
    .ab-hero::before {
      content: '';
      position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 80% 60% at 50% 50%,
        rgba(196,18,48,0.07) 0%, transparent 70%);
    }
    .ab-hero-eyebrow {
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(0.48rem, 1vw, 0.58rem);
      letter-spacing: 0.48em;
      text-transform: uppercase;
      color: #C41230;
      margin-bottom: 1.8rem;
      position: relative;
    }
    .ab-hero-h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(3rem, 9vw, 7.5rem);
      font-weight: 900;
      color: #FAFAF8;
      line-height: 1.04;
      letter-spacing: -0.01em;
      position: relative;
    }
    .ab-hero-h1 em {
      font-style: italic;
      color: rgba(250,250,248,0.4);
    }
    .ab-hero-sub {
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(0.7rem, 1.4vw, 0.85rem);
      line-height: 2;
      color: rgba(250,250,248,0.45);
      max-width: 480px;
      margin: 2rem auto 0;
      position: relative;
    }

    .ab-founder {
      background: #FAFAF8;
      padding: clamp(5rem,10vw,9rem) clamp(2rem,6vw,6rem);
    }
    .ab-founder-grid {
      display: grid;
      grid-template-columns: 1fr 1.05fr;
      gap: clamp(4rem,8vw,8rem);
      align-items: start;
      max-width: 1160px;
      margin: 0 auto;
    }
    .ab-photo-col { position: relative; }
    .ab-photo-frame { position: relative; }
    .ab-photo-frame::before {
      content: '';
      position: absolute;
      top: 20px; left: -20px;
      right: 20px; bottom: -20px;
      border: 1px solid rgba(109,5,4,0.2);
      pointer-events: none;
    }
    .ab-photo {
      width: 100%;
      aspect-ratio: 4/5;
      object-fit: cover;
      object-position: center top;
      filter: contrast(1.04) saturate(0.95);
    }
    .ab-photo-badge {
      position: absolute;
      bottom: -16px; right: -16px;
      background: #0a0806;
      padding: 1.2rem 1.6rem;
      text-align: center;
    }
    .ab-photo-badge-num {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      font-weight: 800;
      color: #C41230;
      line-height: 1;
    }
    .ab-photo-badge-label {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.48rem;
      letter-spacing: 0.3em;
      color: rgba(250,250,248,0.5);
      text-transform: uppercase;
      margin-top: 0.2rem;
    }
    .ab-text-col { padding-top: 0.5rem; }
    .ab-section-label {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.54rem;
      letter-spacing: 0.42em;
      text-transform: uppercase;
      color: #C41230;
      margin-bottom: 1.4rem;
    }
    .ab-name-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 800;
      color: #0a0806;
      line-height: 1.1;
      margin-bottom: 0.4rem;
    }
    .ab-role-title {
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(0.62rem, 1.1vw, 0.72rem);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 2.4rem;
    }
    .ab-body {
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(0.78rem, 1.3vw, 0.9rem);
      line-height: 2.15;
      color: #555;
      margin-bottom: 1.6rem;
    }
    .ab-body strong {
      color: #0a0806;
      font-weight: 600;
    }

    .ab-quote {
      background: #0a0806;
      padding: clamp(5rem,10vw,8rem) clamp(2rem,8vw,10rem);
      text-align: center;
    }
    .ab-quote-mark {
      font-family: 'Playfair Display', serif;
      font-size: 5rem;
      color: #C41230;
      opacity: 0.35;
      line-height: 0.6;
      margin-bottom: 1.5rem;
    }
    .ab-quote-text {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.6rem, 4.5vw, 3.2rem);
      font-weight: 700;
      font-style: italic;
      color: #FAFAF8;
      line-height: 1.35;
      max-width: 780px;
      margin: 0 auto 1.8rem;
    }
    .ab-quote-attr {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.56rem;
      letter-spacing: 0.35em;
      color: rgba(250,250,248,0.35);
      text-transform: uppercase;
    }

    .ab-insight {
      background: #F4F1ED;
      padding: clamp(5rem,10vw,9rem) clamp(2rem,6vw,6rem);
    }
    .ab-insight-inner {
      max-width: 820px;
      margin: 0 auto;
      text-align: center;
    }
    .ab-insight-h {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4.5vw, 3.2rem);
      font-weight: 800;
      color: #0a0806;
      line-height: 1.25;
      letter-spacing: -0.005em;
      margin: 0 auto;
      max-width: 18ch;
    }
    .ab-insight-h em {
      font-style: italic;
      color: #6D0504;
    }
    .ab-insight-h::after {
      content: '';
      display: block;
      width: 48px;
      height: 1px;
      background: #C41230;
      margin: 2rem auto 0;
      opacity: 0.6;
    }
    .ab-truths {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2.5rem;
    }
    .ab-truth {
      display: flex;
      gap: 1.8rem;
      align-items: flex-start;
    }
    .ab-truth-num {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      font-weight: 900;
      color: rgba(196,18,48,0.12);
      line-height: 1;
      flex-shrink: 0;
      width: 2.5rem;
    }
    .ab-truth-text {
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(0.78rem, 1.3vw, 0.88rem);
      line-height: 2;
      color: #555;
    }
    .ab-truth-text strong { color: #0a0806; font-weight: 600; }

    .ab-vm {
      background: #FAFAF8;
      padding: clamp(5rem,10vw,9rem) clamp(2rem,6vw,6rem);
    }
    .ab-vm-header {
      text-align: center;
      margin-bottom: clamp(4rem,8vw,6rem);
    }
    .ab-vm-header-h {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 800;
      color: #0a0806;
      line-height: 1.1;
    }
    .ab-vm-header-h em { font-style: italic; color: #6D0504; }
    .ab-vm-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2px;
      max-width: 760px;
      margin: 0 auto;
    }
    .ab-vm-card {
      padding: clamp(3rem,6vw,5rem) clamp(2.5rem,5vw,4rem);
      background: #0a0806;
      position: relative;
    }
    .ab-vm-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: #C41230;
    }
    .ab-vm-label {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.52rem;
      letter-spacing: 0.42em;
      text-transform: uppercase;
      color: #C41230;
      margin-bottom: 1rem;
    }
    .ab-vm-h {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.4rem, 2.8vw, 2rem);
      font-weight: 800;
      line-height: 1.18;
      margin-bottom: 1.8rem;
      color: #FAFAF8;
    }
    .ab-vm-body {
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(0.72rem, 1.2vw, 0.84rem);
      line-height: 2.1;
      margin-bottom: 2rem;
      color: rgba(250,250,248,0.65);
    }
    .ab-vm-pillars {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
    }
    .ab-vm-pillar {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(0.65rem, 1.1vw, 0.76rem);
      font-weight: 500;
    }
    .ab-vm-pillar { color: rgba(250,250,248,0.75); }
    .ab-vm-pillar::before {
      content: '';
      display: block; flex-shrink: 0;
      width: 20px; height: 1px;
      background: #C41230;
    }

    .ab-cta {
      background: #C41230;
      padding: clamp(5rem,10vw,8rem) clamp(2rem,8vw,8rem);
      text-align: center;
      position: relative; overflow: hidden;
    }
    .ab-cta::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 80% 70% at 50% 50%,
        rgba(255,255,255,0.05) 0%, transparent 70%);
    }
    .ab-cta-h {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 5.5vw, 4rem);
      font-weight: 900;
      font-style: italic;
      color: #FAFAF8;
      line-height: 1.12;
      max-width: 680px;
      margin: 0 auto 1.5rem;
      position: relative;
    }
    .ab-cta-sub {
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(0.7rem, 1.3vw, 0.82rem);
      line-height: 2;
      color: rgba(250,250,248,0.65);
      max-width: 460px;
      margin: 0 auto 3rem;
      position: relative;
    }
    .ab-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.9rem;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.62rem;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: #C41230;
      background: #FAFAF8;
      padding: 1.1rem 2.8rem;
      text-decoration: none;
      border: 1px solid #FAFAF8;
      transition: background 0.25s, color 0.25s;
      position: relative;
      cursor: pointer;
    }
    .ab-cta-btn:hover {
      background: transparent;
      color: #FAFAF8;
    }

    .reveal {
      opacity: 0; transform: translateY(24px);
      transition: opacity 0.75s ease, transform 0.75s ease;
    }
    .reveal.in { opacity: 1; transform: translateY(0); }
    .reveal.d1 { transition-delay: 0.1s; }
    .reveal.d2 { transition-delay: 0.2s; }
    .reveal.d3 { transition-delay: 0.3s; }

    @media (max-width: 900px) {
      .ab-founder-grid { grid-template-columns: 1fr; gap: 3rem; }
      .ab-photo-frame::before { display: none; }
      .ab-photo-badge { right: 0; bottom: 0; }
      .ab-vm-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 560px) {
      .ab-truth { gap: 1.2rem; }
      .ab-truth-num { font-size: 1.8rem; width: 2rem; }
    }
  `}</style>
);

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

export default function AboutPage() {
  useReveal();

  return (
    <>
      <Styles />
      <SiteNav external />

      {/* HERO */}
      <section className="ab-hero">
        <p className="ab-hero-eyebrow reveal">The Story Behind the Studio</p>
        <h1 className="ab-hero-h1 reveal d1">
          Built by Someone<br />
          Who Felt the<br />
          <em>Same Gap You Did.</em>
        </h1>
        <p className="ab-hero-sub reveal d2">
          WedflowLab didn't start with a business plan. It started with a real problem, a decade of sales experience, and the refusal to accept that talent should ever lose to presentation.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="ab-founder">
        <div className="ab-founder-grid">
          <div className="ab-photo-col">
            <div className="ab-photo-frame reveal">
              <img src={PHOTO_URL} alt="Uday John — Founder of WedflowLab" className="ab-photo" />
            </div>
          </div>

          <div className="ab-text-col">
            <p className="ab-section-label reveal">The Founder</p>
            <h2 className="ab-name-title reveal d1">Uday John</h2>
            <p className="ab-role-title reveal d1">
              Founder &amp; Creative Director — WedflowLab
            </p>

            <p className="ab-body reveal d2">
              I've always been someone who builds things. That instinct took me to Fashion Design first — but the deeper I went, the more I realised my real strength wasn't just in making things look good. It was in understanding <strong>why people say yes</strong>.
            </p>

            <p className="ab-body reveal d2">
              I went on to work across more than five different sales environments — and the one that changed everything was <strong>Real Estate</strong>. Nothing sharpens your understanding of human psychology faster than standing in front of someone making the biggest financial decision of their life. That world taught me something I couldn't unlearn:
            </p>

            <p className="ab-body reveal d2">
              Over the years, I studied sales frameworks, consumer psychology, and what actually moves people from <strong>interested</strong> to <strong>committed</strong>. Then, while helping a few wedding companies with their websites, I found the same painful pattern playing out at scale.
            </p>

            <p className="ab-body reveal d2">
              Gifted photographers. Exceptional videographers. Planners with years of craft behind them — all of them quietly losing enquiries not because of their work, but because online, they looked <strong>indistinguishable from everyone else</strong>.
            </p>

            <p className="ab-body reveal d2">
              That gap is what WedflowLab was built to close. Not as an agency. More like a trusted person in your corner who happens to understand both the creative world and the commercial one — and won't stop until your digital presence reflects exactly how good you actually are.
            </p>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="ab-quote">
        <p className="ab-quote-mark reveal">"</p>
        <p className="ab-quote-text reveal d1">
          People don't choose the best service. They choose the one that makes them feel safe choosing.
        </p>
        <p className="ab-quote-attr reveal d2">— The principle that built WedflowLab</p>
      </section>

      {/* THE INSIGHT */}
      <section className="ab-insight">
        <div className="ab-insight-inner">
          <p className="ab-section-label reveal">What I Saw That I Couldn't Unsee</p>
          <h2 className="ab-insight-h reveal d1">
            The wedding industry is full of<br />
            <em>exceptional talent losing to average presentation.</em>
          </h2>

        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="ab-vm">
        <div className="ab-vm-header">
          <p className="ab-section-label reveal">
            Where We Stand &amp; Where We're Going
          </p>
          <h2 className="ab-vm-header-h reveal d1">
            The Standard We Hold.<br />
            <em>The Work That Proves It.</em>
          </h2>
        </div>

        <div className="ab-vm-grid">
          {/* MISSION — dark card */}
          <div className="ab-vm-card reveal d1">
            <p className="ab-vm-label">The Mission</p>
            <h3 className="ab-vm-h">
              To Build the System That<br />
              Closes Clients Before You Do.
            </h3>
            <p className="ab-vm-body">
              WedflowLab's mission is to hand every wedding professional a digital presence so well-engineered that the client arrives pre-sold. Not interested — decided. We do this by combining conversion psychology with premium design, so that your website doesn't just reflect how good you are — it makes that quality undeniably clear the moment someone lands on it.
            </p>
            <p className="ab-vm-body">
              Every website we build is designed to do three things without you lifting a finger: establish authority, eliminate comparison, and create the feeling that you are the only logical choice.
            </p>
            <div className="ab-vm-pillars">
              {[
                "Premium design rooted in conversion psychology",
                "Built specifically for the wedding industry",
                "Removes the client from comparison mode",
                "Works harder than any sales conversation",
                "Delivered with care — never with a template mindset",
              ].map(p => (
                <p key={p} className="ab-vm-pillar">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta">
        <h2 className="ab-cta-h reveal">
          "You deserve to be chosen.<br />
          Let's make it impossible for them not to."
        </h2>
        <p className="ab-cta-sub reveal d1">
          If any of this resonated — if you recognised yourself somewhere in this story — then we're already on the same page. Let's talk.
        </p>
        <a href="#" className="ab-cta-btn reveal d2" onClick={openCalendly}>
          Start a Conversation
        </a>
      </section>
    </>
  );
}
