import { useEffect, useRef, useState, useCallback } from "react";

const CARDS = [
  {
    id: "oaks",
    name: "Oaks Wedding",
    tag: "Brand & Website",
    wide: true,
    scrollEnd: "-91.6667%",
    images: [
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869609/OAKS-1_we2nv8.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869608/OAKS-2_ijlj3w.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869609/OAKS-3_emoelu.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869609/OAKS-4_bprcwx.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869609/OAKS-5_fg1fke.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869699/OAKS-6_udkhyl.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869699/OAKS-7_k5i9cy.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869706/OAKS-8_qxvhl9.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869706/OAKS-9_j59jo3.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869707/OAKS-10_nddti5.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869707/OAKS-12_xe0vyw.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_900/v1774869707/OAKS-13_ib3psp.webp",
    ],
  },
  {
    id: "eloise",
    name: "Eloise Wed Stories",
    tag: "Website Design",
    wide: false,
    scrollEnd: "-83.3333%",
    images: [
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869840/ELOISE-1_uao7cg.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869840/ELOISE-2_oqeuqg.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869840/ELOISE-3_flz69i.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869840/ELOISE-4_srflix.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869841/ELOISE-5_dc9imd.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869844/ELOISE-6_wzav4c.webp",
    ],
  },
  {
    id: "noir",
    name: "Noir Vows",
    tag: "Brand & Website",
    wide: false,
    scrollEnd: "-87.5%",
    images: [
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869974/NOIR-1_s943am.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869974/NOIR-2_brfpwa.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869973/NOIR-3_xwymmp.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869980/NOIR-4_bpyua3.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869979/NOIR-5_qp7v2x.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869979/NOIR-6_cwxtmx.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869975/NOIR-7_f5crbs.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774869974/NOIR-8_yh5jrp.webp",
    ],
  },
  {
    id: "nocturne",
    name: "Nocturne Vale",
    tag: "Photography Studio",
    wide: false,
    scrollEnd: "-85.7143%",
    images: [
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605004/NOCTRUN-0_n1wf50.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605042/NOCTRUN-1_vwr2bc.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605063/NOCTRUN-2_lwo68e.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605064/NOCTRUN-3_a9bdqt.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605065/NOCTRUN-4_qj11vc.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605065/NOCTRUN-5_p8sgvt.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605066/NOCTRUN-6_hoyfay.webp",
    ],
  },
  {
    id: "truetales",
    name: "True Tales",
    tag: "Wedding Videography",
    wide: false,
    scrollEnd: "-83.3333%",
    images: [
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605220/TRUE-O_inmxek.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605220/TRUE-1_it7gvm.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605221/TRUE-2_l2wvdm.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605222/TRUE-3_inps8k.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605223/TRUE-4_uaitq8.webp",
      "https://res.cloudinary.com/dznfeewmc/image/upload/q_80,f_webp,w_720/v1774605225/TRUE-5_nkclab.webp",
    ],
  },
];

function usePreloadAll() {
  useEffect(() => {
    CARDS.forEach(card => {
      card.images.forEach(src => {
        if (document.querySelector(`link[href="${src}"]`)) return;
        const l = Object.assign(document.createElement("link"), {
          rel: "preload", as: "image", href: src,
        });
        l.setAttribute("fetchpriority", "high");
        document.head.appendChild(l);
      });
    });
  }, []);
}

const Styles = () => (
  <style>{`
    .ws-section {
      background: #111;
      padding: clamp(4.5rem,9vw,8rem) clamp(1.5rem,5vw,5rem);
    }
    .ws-eyebrow {
      font-family: 'Montserrat',sans-serif;
      font-size: 0.56rem; letter-spacing: 0.4em;
      text-transform: uppercase; color: #C41230; margin-bottom: 1.1rem;
    }
    .ws-heading {
      font-family: 'Playfair Display',serif;
      font-size: clamp(1.9rem,4.5vw,3.6rem);
      font-weight: 800; line-height: 1.12; color: #FAFAF8; margin-bottom: 1rem;
    }
    .ws-heading em { font-style:italic; color:rgba(255,255,255,.35); }
    .ws-sub {
      font-family: 'Montserrat',sans-serif;
      font-size: 0.7rem; line-height: 2;
      color: rgba(255,255,255,.35); max-width: 500px; margin-bottom: 3.5rem;
    }
    .ws-grid {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 1.2rem;
    }
    .ws-card {
      position: relative; overflow: hidden;
      background: #1a1a1a; cursor: pointer;
      aspect-ratio: 16/9;
      contain: strict;
    }
    .ws-card.wide { grid-column: 1/-1; aspect-ratio: 21/9; }
    .ws-strip-wrap {
      position: absolute; inset: 0; overflow: hidden;
    }
    .ws-strip {
      display: flex; flex-direction: column; width: 100%;
      will-change: transform;
      transform: translateY(0) translateZ(0);
    }
    .ws-strip.running {
      animation-name: wsScroll;
      animation-duration: 11s;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      animation-play-state: running;
    }
    @keyframes wsScroll {
      from { transform: translateY(0) translateZ(0); }
      to   { transform: translateY(var(--scroll-end)) translateZ(0); }
    }
    .ws-strip img {
      flex-shrink: 0; width: 100%;
      object-fit: cover; object-position: center top;
      display: block;
      image-rendering: -webkit-optimize-contrast;
    }
    .ws-card.wide .ws-strip img { aspect-ratio: 21/9; }
    .ws-card:not(.wide) .ws-strip img { aspect-ratio: 16/9; }
    .ws-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,.78) 0%, transparent 55%);
      z-index: 2; opacity: 0; transition: opacity .35s ease;
    }
    .ws-card:hover .ws-overlay,
    .ws-card.playing .ws-overlay { opacity: 1; }
    @media (hover:none) {
      .ws-overlay { opacity: .45; }
      .ws-meta    { opacity: 1 !important; transform: translateY(0) !important; }
    }
    .ws-card::after {
      content:''; position:absolute; inset:0; z-index:3;
      background: repeating-linear-gradient(
        to bottom,transparent,transparent 2px,
        rgba(0,0,0,.07) 2px,rgba(0,0,0,.07) 4px
      );
      pointer-events:none; opacity:0; transition:opacity .3s;
    }
    .ws-card:hover::after,
    .ws-card.playing::after { opacity:1; }
    .ws-bezel {
      position:absolute; inset:0; z-index:4; pointer-events:none;
      border:1px solid rgba(255,255,255,.05);
    }
    .ws-meta {
      position:absolute; bottom:0; left:0; right:0;
      padding:1.4rem 1.8rem; z-index:5;
      opacity:0; transform:translateY(8px);
      transition:opacity .35s ease, transform .35s ease;
    }
    .ws-card:hover .ws-meta,
    .ws-card.playing .ws-meta { opacity:1; transform:translateY(0); }
    .ws-tag {
      font-family:'Montserrat',sans-serif;
      font-size:.5rem; letter-spacing:.25em;
      color:#C41230; text-transform:uppercase;
    }
    .ws-name {
      font-family:'Playfair Display',serif;
      font-size:1.1rem; color:#fff; font-style:italic;
    }
    @media (max-width:768px) {
      .ws-grid { grid-template-columns:1fr; }
      .ws-card.wide { aspect-ratio:16/9; }
      .ws-card.wide .ws-strip img { aspect-ratio:16/9; }
    }
  `}</style>
);

interface ScrollCardProps {
  id: string;
  name: string;
  tag: string;
  wide: boolean;
  scrollEnd: string;
  images: string[];
  onActivate: (id: string) => void;
  isActive: boolean;
}

function ScrollCard({ id, name, tag, wide, scrollEnd, images, onActivate, isActive }: ScrollCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;
    strip.classList.remove("running");
    void strip.offsetHeight;
    strip.classList.add("running");
  }, []);

  const resetToStart = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;
    strip.classList.remove("running");
    void strip.offsetHeight;
    // Strip returns to translateY(0) since .running is removed and base style is translateY(0)
  }, []);

  // When this card becomes inactive (another card was activated), reset to first image
  useEffect(() => {
    if (!isActive) {
      resetToStart();
      cardRef.current?.classList.remove("playing");
    }
  }, [isActive, resetToStart]);

  // Desktop: hover triggers activation
  const onEnter = useCallback(() => {
    onActivate(id);
    startAnimation();
  }, [id, onActivate, startAnimation]);

  // Mobile: tap triggers activation
  const onTap = useCallback(() => {
    if (window.matchMedia("(hover:hover)").matches) return;
    onActivate(id);
    cardRef.current?.classList.add("playing");
    startAnimation();
  }, [id, onActivate, startAnimation]);

  // Mobile: IntersectionObserver for auto-play (only if no other card is active via tap)
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(hover:hover)").matches) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActivate(id);
          card.classList.add("playing");
          startAnimation();
        } else {
          card.classList.remove("playing");
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(card);
    return () => obs.disconnect();
  }, [id, onActivate, startAnimation]);

  return (
    <div
      ref={cardRef}
      className={`ws-card${wide ? " wide" : ""}`}
      onMouseEnter={onEnter}
      onClick={onTap}
    >
      <div className="ws-strip-wrap">
        <div
          ref={stripRef}
          className="ws-strip"
          style={{ "--scroll-end": scrollEnd } as React.CSSProperties}
        >
          {images.map((src, i) => (
            <img
              key={`${id}-${i}`}
              src={src}
              alt={`${name} ${i + 1}`}
              loading="eager"
            />
          ))}
        </div>
      </div>
      <div className="ws-overlay" />
      <div className="ws-bezel" />
      <div className="ws-meta">
        <p className="ws-tag">{tag}</p>
        <p className="ws-name">{name}</p>
      </div>
    </div>
  );
}

export default function WorkSection() {
  usePreloadAll();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleActivate = useCallback((id: string) => {
    setActiveCard(id);
  }, []);

  return (
    <section id="work" className="ws-section">
      <Styles />
      <p className="ws-eyebrow rv">The Work</p>
      <h2 className="ws-heading rv d1">
        Client websites that<br />
        <em>speak for themselves</em>
      </h2>
      <p className="ws-sub rv d2">
        Hover each card to explore. Every project is custom-built — no templates, ever.
      </p>
      <div className="ws-grid">
        {CARDS.map(card => (
          <ScrollCard
            key={card.id}
            {...card}
            onActivate={handleActivate}
            isActive={activeCard === card.id}
          />
        ))}
      </div>
    </section>
  );
}
