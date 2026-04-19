import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   WEDFLOW LAB — TV WALL INTRO  v7
─────────────────────────────────────────────────────────────────────────────*/

const LOGO_URL =
  "https://res.cloudinary.com/dznfeewmc/image/upload/q_90,f_webp,w_240/v1774520964/wedflow_logo_jqr2vq.png";

if (typeof document !== "undefined") {
  if (!document.querySelector(`link[href="${LOGO_URL}"]`)) {
    const pl = Object.assign(document.createElement("link"), {
      rel: "preload", as: "image", href: LOGO_URL,
    });
    pl.setAttribute("fetchpriority", "high");
    document.head.appendChild(pl);
  }
  document.documentElement.style.background = "#000";
  if (document.body) document.body.style.background = "#000";
}

const CL = (id: string) =>
  `https://res.cloudinary.com/dznfeewmc/video/upload/q_auto,f_auto,br_800k,w_640,vc_auto/${id}`;

const ALL_SRCS = [
  CL("v1774351978/From_Main_Klickpin_CF-_Classic_Understated_Showit_Website_Template_for_Florists_Photographers_-_1NaycrbWZ_dtumxb.mp4"),
  CL("v1774351979/From_Main_Klickpin_CF-_Pinterest_Video_-_1zcFUvOT7_lugadc.mp4"),
  CL("v1774351981/From_Main_Klickpin_CF-_Artful_Understated_Showit_Website_Template_for_Florists_Photographers_-_KCQhzE3wA_pqtjwb.mp4"),
  CL("v1774351986/From_Main_Klickpin_CF-_Pinterest_Video_-_4H1PfSIfk_wht9lg.mp4"),
  CL("v1774351986/From_Main_Klickpin_CF-_Pinterest_Video_-_3IF3vex6N_t4jodn.mp4"),
  CL("v1774351987/From_Main_Klickpin_CF-_Pinterest_Video_-_46EgqtLwY_1_wtmpnx.mp4"),
  CL("v1774351989/From_Main_Klickpin_CF-_Pinterest_Video_-_6xIMSjuzE_otigyr.mp4"),
];

interface CellDef {
  cs: number; ce: number; rs: number; re: number;
  vi: number; dir: number; hero: boolean; bd: number;
}

const D_CELLS: CellDef[] = [
  { cs:1,ce:3, rs:1,re:4, vi:0, dir:-1, hero:true,  bd:0   },
  { cs:3,ce:5, rs:1,re:2, vi:1, dir: 1, hero:false, bd:80  },
  { cs:5,ce:8, rs:1,re:3, vi:2, dir:-1, hero:true,  bd:40  },
  { cs:3,ce:5, rs:2,re:5, vi:3, dir: 1, hero:true,  bd:160 },
  { cs:5,ce:8, rs:3,re:6, vi:4, dir:-1, hero:true,  bd:120 },
  { cs:1,ce:3, rs:4,re:7, vi:5, dir: 1, hero:false, bd:200 },
  { cs:3,ce:5, rs:5,re:7, vi:6, dir:-1, hero:false, bd:240 },
  { cs:5,ce:8, rs:6,re:8, vi:0, dir: 1, hero:false, bd:280 },
  { cs:1,ce:3, rs:7,re:9, vi:1, dir:-1, hero:false, bd:320 },
  { cs:3,ce:5, rs:7,re:9, vi:2, dir: 1, hero:false, bd:360 },
  { cs:5,ce:8, rs:8,re:10,vi:3, dir:-1, hero:false, bd:400 },
  { cs:1,ce:4, rs:9,re:10,vi:4, dir: 1, hero:false, bd:440 },
  { cs:4,ce:8, rs:9,re:10,vi:5, dir:-1, hero:false, bd:480 },
];

const M_CELLS: CellDef[] = [
  { cs:1,ce:2, rs:1,re:3, vi:0, dir:-1, hero:true,  bd:0   },
  { cs:2,ce:4, rs:1,re:2, vi:1, dir: 1, hero:true,  bd:60  },
  { cs:2,ce:3, rs:2,re:4, vi:2, dir:-1, hero:true,  bd:120 },
  { cs:3,ce:4, rs:2,re:4, vi:3, dir: 1, hero:true,  bd:80  },
  { cs:1,ce:3, rs:3,re:5, vi:4, dir: 1, hero:false, bd:180 },
  { cs:3,ce:4, rs:4,re:6, vi:5, dir:-1, hero:false, bd:240 },
  { cs:1,ce:2, rs:5,re:7, vi:6, dir:-1, hero:false, bd:300 },
  { cs:2,ce:4, rs:5,re:6, vi:0, dir: 1, hero:false, bd:200 },
  { cs:2,ce:3, rs:6,re:8, vi:1, dir:-1, hero:false, bd:360 },
  { cs:3,ce:4, rs:6,re:8, vi:2, dir: 1, hero:false, bd:420 },
  { cs:1,ce:2, rs:7,re:9, vi:3, dir: 1, hero:false, bd:480 },
  { cs:2,ce:4, rs:8,re:9, vi:4, dir:-1, hero:false, bd:440 },
];

const Styles = () => (
  <style>{`
    html, body { background: #000 !important; margin: 0; padding: 0; }

    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Montserrat:wght@300;400;500&display=swap');

    @keyframes tvUp   { from{transform:translateY(0) translateZ(0)}    to{transform:translateY(-50%) translateZ(0)} }
    @keyframes tvDown { from{transform:translateY(-50%) translateZ(0)} to{transform:translateY(0) translateZ(0)}    }
    @keyframes screenCut   { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fullBlackout { from { opacity: 0; } to { opacity: 1; } }
    @keyframes introExit   { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }
    @keyframes tvBlink     { 50% { opacity: 0; } }

    @keyframes brandFade {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes wordGlow {
      0%   { text-shadow: 0 0 20px rgba(255,255,255,0.0), 0 0 40px rgba(255,255,255,0.0); }
      35%  { text-shadow: 0 0 18px rgba(255,255,255,0.55), 0 0 40px rgba(255,255,255,0.22), 0 0 80px rgba(255,255,255,0.08); }
      100% { text-shadow: 0 0 0px rgba(255,255,255,0.0), 0 0 0px rgba(255,255,255,0.0); }
    }
    @keyframes underlineDraw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes logoDrift { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes taglineFade { from { opacity: 0; } to { opacity: 1; } }

    #wfl-i {
      position: fixed; inset: 0; z-index: 9999;
      background: #000; overflow: hidden;
    }
    #wfl-i.exit { animation: introExit 0.8s ease forwards; pointer-events: none; }

    .tvg-d {
      position: absolute; inset: 0; display: grid;
      grid-template-columns: repeat(7,1fr);
      grid-template-rows: repeat(9,1fr);
      gap: 3px; background: #060504;
    }
    .tvg-m {
      display: none; position: absolute; inset: 0;
      grid-template-columns: repeat(3,1fr);
      grid-template-rows: repeat(8,1fr);
      gap: 3px; background: #060504;
    }
    @media(max-width: 680px) {
      .tvg-d { display: none !important; }
      .tvg-m { display: grid !important; }
    }

    .tvc {
      position: relative; overflow: hidden;
      background: linear-gradient(145deg, #1e1a16, #0c0a08);
      box-shadow: inset 1px 1px 0 rgba(255,255,255,.04), inset -1px -1px 0 rgba(0,0,0,.7);
    }
    .tvc-i {
      position: absolute; inset: 9px 9px 16px 9px;
      overflow: hidden; background: #050403; border-radius: 4px;
    }
    .tvc.lg .tvc-i { inset: 13px 13px 22px 13px; }
    .tvc.sm .tvc-i { inset: 5px 5px 9px 5px; border-radius: 3px; }
    .tvc-i::before {
      content: ''; position: absolute; inset: 0; z-index: 4; pointer-events: none;
      border-radius: inherit;
      box-shadow: inset 0 0 35px rgba(0,0,0,.65), inset 0 0 8px rgba(0,0,0,.4);
    }
    .tvc-i::after {
      content: ''; position: absolute; inset: 0; z-index: 5; pointer-events: none;
      border-radius: inherit;
      background: linear-gradient(140deg, rgba(255,255,255,.06) 0%, transparent 38%, rgba(0,0,0,.06) 100%);
    }
    .tvc-s {
      position: absolute; inset: 0; z-index: 3; pointer-events: none;
      background: repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,.11) 2px, rgba(0,0,0,.11) 4px);
    }
    .tvc-w {
      position: absolute; inset: 0; width: 100%; height: 200%;
      will-change: transform; transform: translateZ(0);
    }
    .tvc-w.up { animation: tvUp 22s linear infinite; }
    .tvc-w.dn { animation: tvDown 22s linear infinite; }
    .tvc-v { width: 100%; height: 100%; object-fit: cover; display: block; }
    .tvc-ph {
      position: absolute; inset: 0; z-index: 2;
      background: radial-gradient(ellipse at center, #181208, #050302);
    }
    .tvc-blackout {
      position: absolute; inset: 0; z-index: 6;
      background: #000; opacity: 0; pointer-events: none; border-radius: inherit;
    }
    .tvc.blackout .tvc-blackout { animation: screenCut 0.06s ease forwards; }
    .tvc-led {
      position: absolute; bottom: 5px; right: 8px; z-index: 7;
      width: 4px; height: 4px; border-radius: 50%;
      background: rgba(196,18,48,.8); box-shadow: 0 0 4px rgba(196,18,48,.5);
    }
    .tvc-vnt {
      position: absolute; bottom: 5px; left: 10px; right: 18px; height: 5px; z-index: 7;
      background: repeating-linear-gradient(90deg, rgba(0,0,0,.9) 0, rgba(0,0,0,.9) 3px, rgba(255,255,255,.04) 3px, rgba(255,255,255,.04) 5px);
      border-radius: 1px;
    }
    .tvc-knb {
      position: absolute; right: 5px; top: 50%; transform: translateY(-50%); z-index: 7;
      width: 7px; height: 7px; border-radius: 50%;
      background: radial-gradient(circle at 33% 33%, #3a3530, #161210);
    }

    #full-veil {
      position: absolute; inset: 0; z-index: 20;
      background: #000; opacity: 0; pointer-events: none;
    }
    #full-veil.fading { animation: fullBlackout 0.8s ease forwards; }

    .tvg-vig {
      position: absolute; inset: 0; z-index: 5; pointer-events: none;
      background: radial-gradient(ellipse 110% 110% at 50% 50%, transparent 42%, rgba(0,0,0,.48) 100%);
    }

    #wfl-brand {
      position: absolute; inset: 0; z-index: 30;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: clamp(0.9rem, 2vw, 1.4rem);
      background: #000;
      opacity: 0; pointer-events: none;
      transition: opacity 0.9s ease;
    }
    #wfl-brand.on { opacity: 1; }

    .tvb-wm {
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      font-size: clamp(2.6rem, 9.5vw, 7.5rem);
      color: #FAFAF8;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      animation: brandFade 0.6s ease both;
    }
    .tvb-wm .r { color: #C41230; }
    .tvb-cur {
      display: inline-block;
      width: clamp(2px, 0.45vw, 4px);
      height: 0.72em;
      background: #C41230;
      margin-left: 4px;
      vertical-align: middle;
      animation: tvBlink 0.75s step-end infinite;
    }
    .tvb-wm.glowing {
      animation: brandFade 0.6s ease both, wordGlow 0.55s ease forwards;
    }

    .tvb-reveal {
      display: flex; flex-direction: column;
      align-items: center;
      gap: clamp(0.9rem, 2vw, 1.4rem);
      width: 100%;
    }
    .tvb-underline {
      width: clamp(200px, 40vw, 480px);
      height: 1px;
      background: rgba(255,255,255,0.3);
      transform: scaleX(0);
      transform-origin: left center;
      animation: underlineDraw 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    .tvb-logo {
      width: clamp(80px, 14vw, 150px);
      height: auto; display: block; object-fit: contain;
      background: transparent;
      animation: logoDrift 0.6s ease 0.1s both;
    }
    .tvb-tagline {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: clamp(0.38rem, 0.75vw, 0.5rem);
      letter-spacing: 0.42em;
      color: rgba(255,255,255,0.3);
      text-transform: uppercase;
      text-align: center;
      animation: taglineFade 0.5s ease 0.5s both;
    }
  `}</style>
);

/* ── TV Cell ── */
interface TVCellProps extends CellDef {
  loadDeferred: boolean;
  collectRef: (el: HTMLVideoElement, isHero: boolean) => void;
  isBlackout: boolean;
  blackoutDelay: number;
}

function TVCell({ cs, ce, rs, re, vi, dir, hero, bd, loadDeferred, collectRef, isBlackout, blackoutDelay }: TVCellProps) {
  const src = ALL_SRCS[vi % ALL_SRCS.length];
  const [active, setActive] = useState(hero);
  const vRef = useRef<HTMLVideoElement | null>(null);

  const setRef = useCallback((el: HTMLVideoElement | null) => {
    vRef.current = el;
    if (el) collectRef(el, hero);
  }, [collectRef, hero]);

  useEffect(() => {
    if (hero || !loadDeferred) return;
    setActive(true);
  }, [loadDeferred, hero]);

  useEffect(() => {
    const v = vRef.current;
    if (!v || !active) return;
    v.playbackRate = 0.85;
    v.defaultPlaybackRate = 0.85;
    const play = () => { v.playbackRate = 0.85; v.play().catch(() => {}); };
    if (v.readyState >= 2) { play(); return; }
    v.addEventListener("canplay", play, { once: true });
    return () => v.removeEventListener("canplay", play);
  }, [active]);

  const span = (ce - cs) + (re - rs);
  const szCls = span >= 6 ? "lg" : span <= 3 ? "sm" : "";
  const deco = vi % 4;

  return (
    <div
      className={`tvc ${szCls} ${isBlackout ? "blackout" : ""}`}
      style={{
        gridColumn: `${cs}/${ce}`,
        gridRow: `${rs}/${re}`,
        ...(isBlackout ? { animationDelay: `${blackoutDelay}ms` } : {}),
      }}
    >
      <div className="tvc-i">
        {!active && <div className="tvc-ph" />}
        {active && (
          <div className={`tvc-w ${dir === -1 ? "up" : "dn"}`}>
            <video ref={setRef} src={src} muted loop playsInline preload="auto" className="tvc-v" />
          </div>
        )}
        <div className="tvc-s" />
        <div className="tvc-blackout" style={isBlackout ? { animationDelay: `${bd}ms` } : {}} />
      </div>
      {deco === 0 && <><div className="tvc-led" /><div className="tvc-vnt" /></>}
      {deco === 1 && <><div className="tvc-knb" /><div className="tvc-led" /></>}
      {deco === 2 && <><div className="tvc-vnt" /><div className="tvc-knb" /></>}
      {deco === 3 && <div className="tvc-led" />}
    </div>
  );
}

/* ── Main ── */
interface IntroProps {
  onDone: () => void;
}

const Intro = ({ onDone }: IntroProps) => {
  const [phase, setPhase] = useState("wall");
  const [typed, setTyped] = useState("");
  const [showLogo, setShowLogo] = useState(false);
  const [glowing, setGlowing] = useState(false);
  const [loadDeferred, setLoadDeferred] = useState(false);

  const heroVids = useRef<HTMLVideoElement[]>([]);
  const deferredVids = useRef<HTMLVideoElement[]>([]);

  const collectRef = useCallback((el: HTMLVideoElement, isHero: boolean) => {
    if (!el) return;
    const arr = isHero ? heroVids : deferredVids;
    if (!arr.current.includes(el)) arr.current.push(el);
  }, []);

  const TARGET = "WEDFLOW LAB";

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      heroVids.current.filter(Boolean).forEach(v => {
        v.playbackRate = 0.85;
        v.play().catch(() => {});
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const fn = () => setLoadDeferred(true);
    const id = "requestIdleCallback" in window
      ? (window as any).requestIdleCallback(fn, { timeout: 2000 })
      : setTimeout(fn, 2000);
    return () => {
      "cancelIdleCallback" in window
        ? (window as any).cancelIdleCallback(id)
        : clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const ts = [
      setTimeout(() => setPhase("blackout"), 6000),
      setTimeout(() => setPhase("veil"), 6600),
      setTimeout(() => setPhase("brand"), 7200),
      setTimeout(() => setPhase("exit"), 10400),
      setTimeout(() => onDone?.(), 11200),
    ];
    return () => ts.forEach(clearTimeout);
  }, [onDone]);

  useEffect(() => {
    if (phase !== "brand") return;
    let i = 0;
    const iv = setInterval(() => {
      setTyped(TARGET.slice(0, ++i));
      if (i >= TARGET.length) {
        clearInterval(iv);
        setGlowing(true);
        setTimeout(() => setShowLogo(true), 60);
        setTimeout(() => setGlowing(false), 620);
      }
    }, 65);
    return () => clearInterval(iv);
  }, [phase]);

  const isBlackout = ["blackout", "veil", "brand", "exit"].includes(phase);

  return (
    <>
      <Styles />
      <div id="wfl-i" className={phase === "exit" ? "exit" : ""}>
        <div className="tvg-d">
          {D_CELLS.map((c, i) => (
            <TVCell key={`d${i}`} {...c} loadDeferred={loadDeferred} collectRef={collectRef} isBlackout={isBlackout} blackoutDelay={c.bd} />
          ))}
        </div>

        <div className="tvg-m">
          {M_CELLS.map((c, i) => (
            <TVCell key={`m${i}`} {...c} loadDeferred={loadDeferred} collectRef={collectRef} isBlackout={isBlackout} blackoutDelay={c.bd} />
          ))}
        </div>

        {phase === "wall" && <div className="tvg-vig" />}

        <div id="full-veil" className={["veil", "brand", "exit"].includes(phase) ? "fading" : ""} />

        <div id="wfl-brand" className={["brand", "exit"].includes(phase) ? "on" : ""}>
          <div className={`tvb-wm ${glowing ? "glowing" : ""}`}>
            {typed.slice(0, 7)}
            {typed.length > 7 && <span className="r">{typed.slice(7)}</span>}
            {typed.length < TARGET.length && <span className="tvb-cur" />}
          </div>

          {showLogo && (
            <div className="tvb-reveal">
              <div className="tvb-underline" />
              <img src={LOGO_URL} alt="WedflowLab" className="tvb-logo" />
              <span className="tvb-tagline">Premium Web Design for the Wedding Industry</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Intro;
