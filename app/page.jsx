import Link from 'next/link';
import Reveal from '../components/Reveal';
import { gallery, pillars, profile, roles, social } from '../lib/data';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-layers" aria-hidden="true">
          <div className="hero-photo" style={{ backgroundImage: "url('/photos/events/shikhar-group.png')" }} />
          <div className="hero-veil" />
          <div className="hero-grain" />
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
        </div>

        <div className="hero-content wrap">
          <p className="hero-kicker animate-rise">{profile.nameBn}</p>
          <p className="hero-brand animate-rise delay-1">{profile.name}</p>
          <h1 className="animate-rise delay-2">{profile.tagline}</h1>
          <p className="hero-lead animate-rise delay-3">
            {profile.shortTitle}. Member, Government of India High Power Committee on MSP,
            natural farming, and crop diversification.
          </p>
          <div className="hero-actions animate-rise delay-4">
            <Link className="btn btn-solid" href="/about">
              Read the profile
            </Link>
            <Link className="btn btn-line" href="/media">
              Social &amp; media
            </Link>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section className="band intro-band">
        <div className="wrap split portrait-split">
          <Reveal className="intro-portrait" as="figure">
            <img
              src="/photos/events/portrait-speaking.png"
              alt="Krishan Bir Chaudhary speaking at a conference"
            />
            <figcaption>Public address · Market Times / Commodity Capital platform</figcaption>
          </Reveal>
          <Reveal delay={120}>
            <p className="kicker">Who he is</p>
            <h2>Farmer organisation leadership with public-sector depth.</h2>
            <p className="lede">{profile.summary}</p>
            <p>
              His work connects micro-level concerns about seeds, royalties, and rural livelihoods
              with macro debates on trade, tax reform, and sovereignty — insisting that growth
              strategies protect India’s agrarian majority.
            </p>
            <Link className="text-link" href="/about">
              Full biography &amp; roles
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="band roles-strip">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Institutional ground</p>
            <h2>Key positions</h2>
          </Reveal>
          <div className="role-rail">
            {roles.slice(0, 4).map((role, i) => (
              <Reveal key={`${role.title}-${role.org}`} className="role-chip" delay={i * 80} as="article">
                <span>{role.title}</span>
                <strong>{role.org}</strong>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link className="text-link" href="/about#roles">
              See all roles
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="band pillars-home">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Agenda</p>
            <h2>Four pillars of public work</h2>
          </Reveal>
          <div className="pillar-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} className="pillar-card" delay={i * 90} as="article">
                <div
                  className="pillar-visual"
                  style={{ backgroundImage: `url('${p.image}')` }}
                  aria-hidden="true"
                />
                <div className="pillar-body">
                  <span className="pillar-index">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.lead}</p>
                  <Link href={`/issues#${p.slug}`}>Open issue</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band gallery-preview">
        <div className="wrap">
          <Reveal className="section-head row-head">
            <div>
              <p className="kicker">Visuals</p>
              <h2>Gallery</h2>
            </div>
            <Link className="text-link" href="/gallery">
              View all
            </Link>
          </Reveal>
          <div className="mosaic">
            {gallery.slice(0, 4).map((item, i) => (
              <Reveal key={item.src} className={`mosaic-item m${i + 1}`} delay={i * 70} as="figure">
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band connect-cta">
        <div className="wrap cta-panel">
          <Reveal>
            <p className="kicker light">Connect</p>
            <h2>Follow his public channels</h2>
            <p>Facebook, Instagram, YouTube, X — and the BKS West Bengal platform.</p>
          </Reveal>
          <Reveal className="social-row" delay={100}>
            {social.map((s) => (
              <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
            <Link href="/contact">All links</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
