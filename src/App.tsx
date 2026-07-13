import { useState } from "react";

/* ─────────────────────────────────────────────
   THEME
───────────────────────────────────────────── */
const BG = "#98493D";
const ACCENT = "#FA9232";
const WHITE = "#FFFFFF";
const DIM = "rgba(255,255,255,0.82)";
const DARK_MARK = "rgba(80,28,20,0.38)"; // watermark tint

/* ─────────────────────────────────────────────
   FOLK ART SVGs  (Santal-style tribal line art)
───────────────────────────────────────────── */

/** Palm / sal tree — used in What We Do watermark */
function FolkTree({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 180 380" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* trunk */}
      <rect x="86" y="180" width="8" height="180" rx="3" />
      {/* curved fronds */}
      <path d="M90 180 Q40 140 10 80 Q30 100 50 120 Q65 140 88 175Z" />
      <path d="M90 180 Q140 140 170 80 Q150 100 130 120 Q115 140 92 175Z" />
      <path d="M90 170 Q60 120 30 60 Q50 85 70 115 Q80 140 89 168Z" />
      <path d="M90 170 Q120 120 150 60 Q130 85 110 115 Q100 140 91 168Z" />
      <path d="M90 160 Q80 100 75 30 Q83 60 87 100 Q89 135 90 158Z" />
      <path d="M90 160 Q100 100 105 30 Q97 60 93 100 Q91 135 90 158Z" />
      {/* ground roots */}
      <path d="M90 358 Q70 345 50 355 Q65 348 90 356Z" />
      <path d="M90 358 Q110 345 130 355 Q115 348 90 356Z" />
      {/* ground line */}
      <rect x="20" y="360" width="140" height="4" rx="2" />
      {/* figure beneath tree */}
      <circle cx="55" cy="320" r="7" />
      <rect x="52" y="327" width="6" height="20" rx="2" />
      <path d="M52 335 L42 345 M58 335 L68 345" strokeWidth="3" stroke="currentColor" fill="none" />
      <path d="M52 347 L47 362 M58 347 L63 362" strokeWidth="3" stroke="currentColor" fill="none" />
    </svg>
  );
}

/** Santal village scene — right side of Our Story */
function FolkScene({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 400 280" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* hut 1 */}
      <polygon points="60,160 120,80 180,160" />
      <rect x="75" y="160" width="90" height="50" />
      <rect x="105" y="175" width="20" height="35" />
      {/* hut 2 */}
      <polygon points="220,160 270,95 320,160" />
      <rect x="232" y="160" width="76" height="45" />
      <rect x="258" y="170" width="16" height="35" />
      {/* tree between huts */}
      <rect x="188" y="120" width="6" height="90" rx="2" />
      <ellipse cx="191" cy="100" rx="22" ry="32" />
      {/* ox cart */}
      <circle cx="60" cy="230" r="12" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="100" cy="230" r="12" fill="none" stroke="currentColor" strokeWidth="4" />
      <rect x="60" y="205" width="50" height="18" rx="3" />
      <path d="M60 218 L30 218" strokeWidth="4" stroke="currentColor" fill="none" />
      {/* ox */}
      <ellipse cx="20" cy="220" rx="18" ry="10" />
      <circle cx="5" cy="215" r="7" />
      <path d="M5 208 L8 200 M5 208 L2 200" strokeWidth="2" stroke="currentColor" fill="none" />
      {/* figure 1 */}
      <circle cx="150" cy="200" r="8" />
      <rect x="147" y="208" width="6" height="22" rx="2" />
      <path d="M147 215 L137 225 M153 215 L163 225" strokeWidth="2.5" stroke="currentColor" fill="none" />
      <path d="M147 230 L143 248 M153 230 L157 248" strokeWidth="2.5" stroke="currentColor" fill="none" />
      {/* figure 2 with pot on head */}
      <circle cx="340" cy="195" r="8" />
      <ellipse cx="340" cy="183" rx="10" ry="6" />
      <rect x="337" y="203" width="6" height="22" rx="2" />
      <path d="M337 210 L327 222 M343 210 L353 222" strokeWidth="2.5" stroke="currentColor" fill="none" />
      <path d="M337 225 L333 242 M343 225 L347 242" strokeWidth="2.5" stroke="currentColor" fill="none" />
      {/* birds */}
      <path d="M300 60 Q310 52 320 60" strokeWidth="2.5" stroke="currentColor" fill="none" />
      <path d="M330 45 Q340 37 350 45" strokeWidth="2.5" stroke="currentColor" fill="none" />
      <path d="M270 75 Q278 68 286 75" strokeWidth="2" stroke="currentColor" fill="none" />
      {/* ground */}
      <rect x="0" y="248" width="400" height="6" rx="2" />
    </svg>
  );
}

/** Santal tribal shield motif — left of Reference section */
function FolkShield({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 160 240" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M80 10 L150 50 L150 130 L80 230 L10 130 L10 50 Z" strokeWidth="5" />
      <path d="M80 30 L130 62 L130 122 L80 200 L30 122 L30 62 Z" strokeWidth="3" />
      {/* inner pattern */}
      <line x1="80" y1="30" x2="80" y2="200" strokeWidth="2" />
      <line x1="30" y1="62" x2="130" y2="122" strokeWidth="2" />
      <line x1="130" y1="62" x2="30" y2="122" strokeWidth="2" />
      <circle cx="80" cy="115" r="18" strokeWidth="3" />
      <circle cx="80" cy="115" r="8" strokeWidth="2" />
    </svg>
  );
}

/** Geometric tribal chevron pattern — Client section */
function FolkChevron({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 500 300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4].map((row) =>
        [-2, -1, 0, 1, 2].map((col) => {
          const cx = 250 + col * 90;
          const cy = 60 + row * 50;
          const size = 35 - row * 5;
          return (
            <polygon
              key={`${row}-${col}`}
              points={`${cx},${cy - size} ${cx + size * 0.8},${cy + size * 0.5} ${cx - size * 0.8},${cy + size * 0.5}`}
              opacity={0.7 - row * 0.12}
            />
          );
        })
      )}
    </svg>
  );
}

/** Horizontal folk art strip — bottom of Contact */
function FolkStrip({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 1000 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* repeating figures across width */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 60 + i * 120;
        return (
          <g key={i} transform={`translate(${x},0)`}>
            {/* figure */}
            <circle cx="0" cy="30" r="9" />
            <rect x="-4" y="39" width="8" height="28" rx="3" />
            <path d="M-4 48 L-16 58 M4 48 L16 58" strokeWidth="3" stroke="currentColor" fill="none" />
            <path d="M-4 67 L-8 88 M4 67 L8 88" strokeWidth="3" stroke="currentColor" fill="none" />
            {/* item carried / gesture */}
            {i % 3 === 0 && <ellipse cx="0" cy="17" rx="11" ry="6" />}
            {i % 3 === 1 && (
              <>
                <circle cx="22" cy="90" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
                <rect x="10" y="72" width="30" height="14" rx="2" />
                <path d="M10 79 L-5 79" strokeWidth="3" stroke="currentColor" fill="none" />
              </>
            )}
          </g>
        );
      })}
      {/* ground line */}
      <line x1="0" y1="95" x2="1000" y2="95" strokeWidth="4" stroke="currentColor" />
      {/* birds */}
      {[100, 280, 450, 620, 800].map((bx) => (
        <path key={bx} d={`M${bx} 15 Q${bx + 10} 7 ${bx + 20} 15`} strokeWidth="2.5" stroke="currentColor" fill="none" />
      ))}
    </svg>
  );
}

/** Santal logo mark — small tree for navbar */
function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 48" fill={ACCENT} xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="28" width="4" height="18" rx="1.5" />
      <path d="M20 28 Q8 20 2 8 Q10 14 16 22Z" />
      <path d="M20 28 Q32 20 38 8 Q30 14 24 22Z" />
      <path d="M20 22 Q12 12 10 2 Q16 10 19 20Z" />
      <path d="M20 22 Q28 12 30 2 Q24 10 21 20Z" />
      <ellipse cx="20" cy="16" rx="7" ry="10" />
      <ellipse cx="20" cy="8" rx="4" ry="6" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   IMAGE WITH FALLBACK PLACEHOLDER
───────────────────────────────────────────── */
function Img({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.20)",
          color: "rgba(255,255,255,0.35)",
          fontSize: "0.6rem",
          letterSpacing: "0.06em",
          textAlign: "center",
          padding: "4px",
        }}
      >
        {src.replace("/", "")}
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} style={style} onError={() => setErr(true)} />;
}

/* ─────────────────────────────────────────────
   MAIN APP
───────────────────────────────────────────── */
export default function App() {
  const [form, setForm] = useState({ name: "", email: "", text: "" });

  return (
    <div style={{ backgroundColor: BG, fontFamily: "'Inter', sans-serif", color: WHITE }}>

      {/* ══════════ NAVBAR ══════════ */}
      <nav style={{ backgroundColor: BG, borderBottom: "1px solid rgba(255,255,255,0.1)" }} className="sticky top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto px-8 py-3 flex items-center justify-between">
          {/* Left: logo mark + wordmark + tagline */}
          <div className="flex items-center gap-3">
            <LogoMark size={34} />
            <div>
              <div style={{ color: WHITE, letterSpacing: "0.18em", fontSize: "0.75rem", fontWeight: 600 }} className="uppercase">
                SANTAL STUDIO
              </div>
              <div style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", fontSize: "0.52rem" }}>
                Visual Storytelling, Rooted in Life
              </div>
            </div>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" style={{ color: "rgba(255,255,255,0.7)" }} className="hover:opacity-100 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" style={{ color: "rgba(255,255,255,0.7)" }} className="hover:opacity-100 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" style={{ color: "rgba(255,255,255,0.7)" }} className="hover:opacity-100 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill={BG} />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* ══════════ OUR STORY ══════════ */}
      <section id="our-story" className="relative overflow-hidden py-20 px-8">
        {/* Folk art watermark — right */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 pointer-events-none">
          <FolkScene
            className="h-64 w-auto opacity-40"
            style={{ color: "rgba(60,20,10,0.6)" }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 style={{ color: ACCENT, letterSpacing: "0.18em", fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem,3vw,2rem)" }} className="uppercase mb-10">
            OUR STORY
          </h2>
          <div className="max-w-2xl space-y-5">
            <p style={{ color: WHITE, lineHeight: 1.9, fontSize: "0.9rem" }}>
              Santal is a purpose-driven creative production house rooted in people, culture, and landscape. Born from a deep concern for climate vulnerability, social injustice, and cultural erasure, Santal Studio exists to tell the stories of ordinary people—especially marginalized, indigenous, and tribal communities—whose lives are shaped by structural inequality, environmental change, and historical oppression.
            </p>
            <p style={{ color: WHITE, lineHeight: 1.9, fontSize: "0.9rem" }}>
              Our identity is inspired by the Santal community, symbolizing resilience, resistance, and cultural continuity. In the same spirit, our work embodies lived histories, unheard voices, and the quiet strength of communities that are often excluded from mainstream narratives. We believe storytelling is not only a creative act, but also a tool for visibility, dignity, and social change.
            </p>
          </div>
        </div>
      </section>

      {/* Divider strip */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.18)" }} />

      {/* ══════════ WHAT WE DO ══════════ */}
      <section id="what-we-do" className="relative overflow-hidden py-24 px-8">
        {/* Folk tree watermark — left */}
        <div className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none">
          <FolkTree className="h-72 w-auto opacity-35" style={{ color: "rgba(60,20,10,0.55)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h2 style={{ color: ACCENT, letterSpacing: "0.2em", fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem,3vw,2rem)" }} className="uppercase mb-14">
            WHAT WE DO
          </h2>
          <div className="space-y-3" style={{ fontSize: "0.95rem", letterSpacing: "0.25em", color: WHITE }}>
            {["DOCUMENTARY", "PHOTOGRAPHY", "ANIMATION", "BRANDING"].map((s) => (
              <div key={s} className="uppercase font-medium">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider strip */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.18)" }} />

      {/* ══════════ OUR PURPOSE & VISION ══════════ */}
      <section id="our-purpose" className="relative overflow-hidden py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            style={{ color: ACCENT, letterSpacing: "0.18em", fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem,3vw,2rem)", textAlign: "right" }}
            className="uppercase mb-10"
          >
            OUR PURPOSE &amp; VISION
          </h2>
          <div className="max-w-3xl ml-auto space-y-4">
            <p style={{ color: WHITE, lineHeight: 1.9, fontSize: "0.9rem" }}>
              Santal Studio envisions a world where people-centric and nature-centric stories are placed at the heart of communication, advocacy, and development work. We aim to become a climate-resilient and socially conscious production house—one that sets a role model for ethical storytelling and responsible creative practice.
            </p>
            <p style={{ color: WHITE, fontSize: "0.9rem" }}>Our work focuses on:</p>
            <ul className="space-y-1 pl-5" style={{ color: WHITE, fontSize: "0.9rem", listStyleType: "disc" }}>
              {[
                "Climate-affected and climate-vulnerable communities",
                "Indigenous, tribal, and marginalized populations",
                "Social justice, welfare, and rights-based initiatives",
                "Cultural memory, identity, and lived experience",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ color: WHITE, lineHeight: 1.9, fontSize: "0.9rem" }}>
              We do not extract stories—we collaborate with communities and NGOs to represent realities with honesty, respect, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Divider strip */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.18)" }} />

      {/* ══════════ RAFERENCE ══════════ */}
      <section id="reference" className="relative overflow-hidden py-20 px-8">
        {/* Shield motif — left */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none">
          <FolkShield className="h-56 w-auto opacity-30" style={{ color: "rgba(60,20,10,0.7)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 style={{ color: ACCENT, letterSpacing: "0.18em", fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem,3vw,2rem)" }} className="uppercase mb-12">
            RAFERENCE
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Portrait */}
            <div className="flex-shrink-0">
              <Img
                src="/image4.jpg"
                alt="Reference portrait"
                className="w-44 h-44 md:w-52 md:h-52 object-cover"
                style={{ borderRadius: "50%", border: "4px solid rgba(255,255,255,0.25)" }}
              />
            </div>

            {/* Quote */}
            <div className="flex-1 text-center">
              <div style={{ color: WHITE, fontSize: "3rem", lineHeight: 1, opacity: 0.45, fontFamily: "Georgia, serif" }}>"</div>
              <h3 style={{ color: WHITE, letterSpacing: "0.2em", fontFamily: "Georgia, serif", fontSize: "1.3rem" }} className="uppercase mb-3">
                QUOTE
              </h3>
              <p style={{ color: DIM, lineHeight: 1.85, fontSize: "0.875rem", maxWidth: "420px", margin: "0 auto" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard scrambled it to make a type specimen book.
              </p>
              <div style={{ color: WHITE, fontSize: "3rem", lineHeight: 1, opacity: 0.45, fontFamily: "Georgia, serif", marginTop: "8px" }}>"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider strip */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.18)" }} />

      {/* ══════════ CLIENT ══════════ */}
      <section id="client" className="relative overflow-hidden py-20 px-8">
        {/* Geometric chevron watermark — center top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <FolkChevron className="w-80 h-auto opacity-25" style={{ color: "rgba(60,20,10,0.6)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            style={{ color: ACCENT, letterSpacing: "0.2em", fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem,3vw,2rem)", textAlign: "center" }}
            className="uppercase mb-16"
          >
            CLIENT
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { src: "/image5.jpg", alt: "Client logo 1" },
              { src: "/image6.jpg", alt: "Johnson & Johnson" },
              { src: "/image7.jpg", alt: "Goodweave" },
              { src: "/image8.jpg", alt: "Awaj Foundation" },
            ].map((c) => (
              <Img
                key={c.src}
                src={c.src}
                alt={c.alt}
                className="h-14 w-32 object-contain"
                style={{ filter: "brightness(0) invert(1) opacity(0.65)" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider strip */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.18)" }} />

      {/* ══════════ OUR TEAM ══════════ */}
      <section id="our-team" className="relative overflow-hidden py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            style={{ color: ACCENT, letterSpacing: "0.2em", fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem,3vw,2rem)", textAlign: "center" }}
            className="uppercase mb-16"
          >
            OUR TEAM
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              { src: "/image9.jpg",  name: "Md. Zayed Bin Akram",  role: "" },
              { src: "/image10.jpg", name: "Ali Sampreety",         role: "Gender Expert  Scriptwriter" },
              { src: "/image11.jpg", name: "Buddho Dev Mondal",     role: "Head of Animation" },
              { src: "/image12.jpg", name: "Tahzeeb Shawkat Ali",   role: "Motion Graphics Artist" },
              { src: "/image13.jpg", name: "Ahammed Khan Akib",     role: "Video editor  Colorist" },
              { src: "/image14.jpg", name: "Shahir Tasnim",         role: "Translator" },
            ].map((m) => (
              <div key={m.src} className="flex flex-col items-center gap-3" style={{ width: "130px" }}>
                <Img
                  src={m.src}
                  alt={m.name}
                  className="w-24 h-24 object-cover"
                  style={{ borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)" }}
                />
                <div className="text-center">
                  <p style={{ color: WHITE, fontSize: "0.68rem", fontWeight: 600, lineHeight: 1.35 }}>{m.name}</p>
                  {m.role && (
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.58rem", lineHeight: 1.4, marginTop: "2px" }}>{m.role}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider strip */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.18)" }} />

      {/* ══════════ CONTRIBUTION ══════════ */}
      <section id="contribution" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            style={{ color: ACCENT, letterSpacing: "0.12em", fontFamily: "Georgia, serif", fontSize: "clamp(1rem,2.2vw,1.5rem)" }}
            className="uppercase mb-10"
          >
            SANTAL'S CONTRIBUTION TOWARDS SOCIETY
          </h2>
          <div className="max-w-4xl space-y-6">
            <p style={{ color: WHITE, lineHeight: 1.95, fontSize: "0.9rem" }}>
              At SANTAL, our role in society extends beyond visual storytelling. We believe, creative practice carries a responsibility toward the communities and realities it represents. Alongside our documentary and innovative work, we engage in social initiatives that support access to education, promote health awareness, and contribute to the well-being of marginalized and underrepresented communities such as climate displaced women, Dalit in Bangladesh.
            </p>
            <p style={{ color: WHITE, lineHeight: 1.95, fontSize: "0.9rem" }}>
              Our work also focuses on empowering people through knowledge-sharing and capacity-building—creating opportunities for young creatives, encouraging inclusive participation, and advocating for ethical representation in media. By combining responsible storytelling with meaningful community engagement, SANTAL strives to contribute to a more equitable, dignified, and compassionate society—rooted in local realities and guided by a holistic vision of social progress.
            </p>
          </div>
        </div>
      </section>

      {/* Divider strip */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.18)" }} />

      {/* ══════════ CONTRANCT ══════════ */}
      <section id="contact" className="relative overflow-hidden py-20 px-8 pb-0">
        <div className="max-w-6xl mx-auto">
          <h2
            style={{ color: ACCENT, letterSpacing: "0.22em", fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem,3vw,2rem)", textAlign: "center" }}
            className="uppercase mb-16"
          >
            CONTRANCT
          </h2>

          <div className="flex flex-col md:flex-row gap-16 pb-16">
            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex-1 space-y-8"
            >
              {(["Name", "Email", "Text"] as const).map((field) => (
                <div key={field} className="border-b" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                  <label style={{ color: WHITE, fontSize: "0.72rem", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                    {field}
                  </label>
                  {field === "Text" ? (
                    <textarea
                      rows={3}
                      value={form.text}
                      onChange={(e) => setForm({ ...form, text: e.target.value })}
                      className="w-full bg-transparent outline-none resize-none pb-2"
                      style={{ color: WHITE, fontSize: "0.875rem" }}
                    />
                  ) : (
                    <input
                      type={field === "Email" ? "email" : "text"}
                      value={field === "Name" ? form.name : form.email}
                      onChange={(e) => setForm({ ...form, [field.toLowerCase()]: e.target.value })}
                      className="w-full bg-transparent outline-none pb-2"
                      style={{ color: WHITE, fontSize: "0.875rem" }}
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-12 py-2 transition-all hover:opacity-80"
                  style={{
                    border: `1.5px solid ${ACCENT}`,
                    color: ACCENT,
                    borderRadius: "999px",
                    backgroundColor: "transparent",
                    letterSpacing: "0.28em",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                  }}
                >
                  SEND
                </button>
              </div>
            </form>

            {/* Contact info */}
            <div
              className="flex flex-col justify-center gap-2"
              style={{ color: WHITE, fontSize: "0.875rem", minWidth: "240px", textAlign: "right", lineHeight: 1.9 }}
            >
              <p>+880178467751</p>
              <p>team@santalbd.com</p>
              <p style={{ color: DIM, fontSize: "0.8rem" }}>
                25A/27A, Emirates Magnolia,<br />
                Shekhertek 6, Shyamoli Housing Ltd, Mohammadpur
              </p>
            </div>
          </div>
        </div>

        {/* Folk art bottom strip */}
        <div className="w-full overflow-hidden" style={{ marginTop: "0" }}>
          <FolkStrip className="w-full h-28 opacity-30" style={{ color: "rgba(40,10,5,0.8)" }} />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(0,0,0,0.15)" }} className="py-4 text-center">
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.62rem", letterSpacing: "0.18em" }} className="uppercase">
          © 2025 Santal Studio — Visual Storytelling, Rooted in Life
        </p>
      </footer>
    </div>
  );
}
