import { useEffect } from "react";

const R = "#C41230";

const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,400;1,600;1,700&family=Montserrat:wght@300;400;500;600&display=swap');

    .tr-section {
      background: #0a0806;
      padding: clamp(7rem,14vw,12rem) clamp(1.8rem,7vw,7rem) clamp(7rem,12vw,11rem);
      position: relative; overflow: hidden;
    }
    .tr-section::before {
      content:''; position:absolute; inset:0; pointer-events:none;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      opacity:0.028;
    }

    .tr-inner {
      max-width:820px; margin:0 auto;
      position:relative; z-index:1;
      text-align:center;
    }

    .tr-eyebrow {
      font-family:'Montserrat',sans-serif;
      font-size:clamp(.5rem,1vw,.6rem);
      letter-spacing:.42em; text-transform:uppercase;
      color:${R};
      margin-bottom:clamp(3rem,6vw,5rem);
    }

    .tr-line {
      margin-bottom:clamp(2.5rem,5vw,4.5rem);
      opacity:0; transform:translateY(22px);
      transition:opacity .75s ease, transform .75s ease;
      will-change:opacity,transform;
    }
    .tr-line.visible { opacity:1; transform:translateY(0); }
    .tr-line.pulse   { animation:trPulse .6s ease forwards; }
    @keyframes trPulse {
      0%  {transform:scale(1) translateY(0)}
      40% {transform:scale(1.018) translateY(0)}
      100%{transform:scale(1) translateY(0)}
    }

    .tr-h1 {
      font-family:'Playfair Display',serif;
      font-size:clamp(2.4rem,6.5vw,5.2rem);
      font-weight:900; line-height:1.07;
      color:#FAFAF8; letter-spacing:-.01em;
    }
    .tr-sub {
      font-family:'Playfair Display',serif;
      font-size:clamp(1.25rem,3vw,2rem);
      font-weight:600; font-style:italic;
      color:rgba(250,250,248,.72); line-height:1.4;
    }
    .tr-body {
      font-family:'Montserrat',sans-serif;
      font-size:clamp(.85rem,1.5vw,1.05rem);
      line-height:1.85; color:rgba(250,250,248,.52);
      letter-spacing:.01em;
    }
    .tr-em {
      font-family:'Playfair Display',serif;
      font-size:clamp(1.1rem,2.4vw,1.65rem);
      font-weight:700; color:rgba(250,250,248,.88); line-height:1.45;
    }
    .tr-pivot {
      font-family:'Montserrat',sans-serif;
      font-size:clamp(.85rem,1.5vw,1rem);
      color:rgba(250,250,248,.4); letter-spacing:.08em; font-style:italic;
    }
    .tr-closing {
      font-family:'Playfair Display',serif;
      font-size:clamp(1.8rem,5.5vw,4rem);
      font-weight:900; color:#FAFAF8; line-height:1.12; letter-spacing:-.01em;
    }

    .tr-rule      { display:flex; align-items:center; gap:1.2rem; margin-bottom:clamp(3.5rem,7vw,6rem); }
    .tr-rule-line { flex:1; height:1px; background:linear-gradient(to right,transparent,rgba(196,18,48,.35),transparent); }
    .tr-rule-dot  { width:5px; height:5px; border-radius:50%; background:${R}; flex-shrink:0; }
    .tr-spacer    { margin-top:clamp(3rem,8vw,7rem); }

    /* Mobile spacing tweak only — alignment stays centered */
    @media(max-width:640px){
      .tr-line { margin-bottom:clamp(2rem,5vw,3.5rem); }
    }
  `}</style>
);

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        (e.target as HTMLElement).classList.add("visible");
        if ((e.target as HTMLElement).dataset.pulse) setTimeout(() => (e.target as HTMLElement).classList.add("pulse"), 120);
        obs.unobserve(e.target);
      }),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".tr-line").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function TheRealitySection() {
  useScrollReveal();
  return (
    <>
      <Styles />
      <section id="problem" className="tr-section">
        <div className="tr-inner">

          <p className="tr-eyebrow">The Reality</p>

          <div className="tr-line">
            <h2 className="tr-h1">
              You're not getting ignored.<br />
              You're getting compared —<br />
              and <span style={{ color: R }}>replaced.</span>
            </h2>
          </div>

          <div className="tr-line">
            <p className="tr-sub">
              Most wedding brands don't lose because of quality.<br />
              They lose because they feel replaceable online.
            </p>
          </div>

          <div className="tr-line"><p className="tr-body">Instagram used to be enough.</p></div>
          <div className="tr-line"><p className="tr-body">Now it's a crowded room full of talent that looks just as good as yours.</p></div>
          <div className="tr-line"><p className="tr-body">It doesn't just showcase your work — it places you next to 20 others doing the same thing.</p></div>

          <div className="tr-line" data-pulse="1">
            <p className="tr-em">One swipe. And you're <span style={{ color: R }}>replaced.</span></p>
          </div>

          <div className="tr-line" data-pulse="1">
            <p className="tr-em">You're not just losing new clients.<br />You're losing referrals who should have already trusted you.</p>
          </div>

          <div className="tr-line">
            <p className="tr-body">You're not losing because your work isn't good enough. You're losing because your online presence doesn't make people feel safe choosing you.</p>
          </div>

          <div className="tr-line tr-spacer">
            <div className="tr-rule">
              <div className="tr-rule-line" />
              <div className="tr-rule-dot" />
              <div className="tr-rule-line" />
            </div>
          </div>

          <div className="tr-line"><p className="tr-pivot">So the real question is —</p></div>

          <div className="tr-line">
            <p className="tr-closing">
              How do you stop being compared…<br />
              and start being <span style={{ color: R }}>chosen?</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
