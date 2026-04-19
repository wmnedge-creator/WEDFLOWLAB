const services = [
  {
    num: "01",
    title: "Comparison Exit Layer™",
    subtitle: "formerly Authority Website System™",
    body: "Your clients are on Instagram right now — comparing you to 11 other vendors, judging by reels, deciding by follower count. A Comparison Exit Layer ends that game entirely.",
    bullets: [
      "Moves clients from \"let me think about it\" to \"I need to book this\"",
      "Eliminates price comparison by making you the only logical choice",
      "Pre-sells your value before a single call is made",
      "Builds the kind of trust that Instagram structurally cannot",
    ],
    closing: "Your link stops being a portfolio. It becomes your best salesperson.",
  },
  {
    num: "02",
    title: "Premium Positioning Identity™",
    subtitle: null,
    body: "Most wedding businesses undercharge not because their work is average — but because their brand doesn't communicate premium. We fix the perception before we fix the price.",
    bullets: [
      "Positioning so sharp it removes you from the comparison pool entirely",
      "A visual identity that signals high value before a word is read",
      "Messaging crafted to attract high-intent clients and quietly repel the rest",
    ],
    closing: "You stop pitching. You start getting chosen.",
  },
  {
    num: "03",
    title: "Growth & Conversion Engine™",
    subtitle: null,
    body: "A Comparison Exit Layer isn't built once and forgotten. Your market shifts. Your clients evolve. This service ensures your website keeps working harder than your competitors' as time goes on.",
    bullets: [
      "Continuous conversion optimisation based on real visitor behaviour",
      "Strategic updates aligned with your brand's growth and positioning",
      "Fewer follow-ups, fewer ghosted enquiries, more qualified bookings",
    ],
    closing: "Less chasing. More closing.",
  },
];

function HighlightCEL({ text }: { text: string }) {
  const parts = text.split(/(Comparison Exit Layer)/gi);
  return (
    <>
      {parts.map((part, i) =>
        /Comparison Exit Layer/i.test(part)
          ? <span key={i} className="svc-red">{part}</span>
          : part
      )}
    </>
  );
}

export default function ServicesSection() {
  return (
    <section className="svc-section sec">
      <div className="svc-head">
        <p className="svc-eyebrow rv" style={{ fontSize: 'calc(clamp(0.5rem, 1vw, 0.6rem) + 3pt)' }}>THAT'S WHY</p>
        <h2 className="svc-h2 rv d1">
          We Don't Build Websites.<br />
          We Build Your{" "}
          <span className="svc-red">Comparison Exit Layer.</span>
        </h2>
        <p className="svc-subhead rv d2">
          On Instagram, everyone looks good — which means everyone looks same.
          A <span className="svc-red">Comparison Exit Layer</span> pulls your ideal
          client out of that scroll, into a controlled environment where only you
          make sense. That's not a website. That's a closing machine.
        </p>
      </div>

      <div className="svc-cards">
        {services.map((s, i) => (
          <div key={i} className={`svc-card rv d${i + 1}`}>
            <div className="svc-num">{s.num}</div>
            <h3 className="svc-title">
              <HighlightCEL text={s.title} />
            </h3>
            {s.subtitle && (
              <p className="svc-formerly">{s.subtitle}</p>
            )}
            <p className="svc-body">
              <HighlightCEL text={s.body} />
            </p>
            <ul className="svc-bullets">
              {s.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <p className="svc-closing">→ {s.closing}</p>
            <a href="#cta" className="svc-link">Explore Service</a>
          </div>
        ))}
      </div>
    </section>
  );
}
