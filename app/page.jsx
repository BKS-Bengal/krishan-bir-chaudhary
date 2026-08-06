import Link from 'next/link';
import Reveal from '../components/Reveal';
import {
  contact,
  gallery,
  pillars,
  profile,
  proofRibbon,
  roles,
  social,
} from '../lib/data';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-layers" aria-hidden="true">
          <div
            className="hero-photo"
            style={{ backgroundImage: "url('/photos/events/portrait-speaking.png')" }}
          />
          <div className="hero-veil" />
          <div className="hero-grain" />
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
        </div>

        <div className="hero-content wrap">
          <p className="hero-kicker animate-rise">{profile.nameHi}</p>
          <p className="hero-brand animate-rise delay-1">{profile.name}</p>
          <h1 className="animate-rise delay-2">{profile.brandLine}</h1>
          <p className="hero-lead animate-rise delay-3">{profile.tagline}</p>
          <p className="hero-micro animate-rise delay-3">
            {profile.shortTitle} · {profile.qualifications}
          </p>
          <div className="hero-actions animate-rise delay-4">
            <Link className="btn btn-solid" href="/journey">
              Explore the journey
            </Link>
            <Link className="btn btn-line" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section className="proof-band">
        <div className="wrap proof-row">
          {proofRibbon.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="band intro-band">
        <div className="wrap split portrait-split">
          <Reveal className="intro-portrait" as="figure">
            <img
              src="/photos/events/gadkari-meeting.png"
              alt="Krishan Bir Chaudhary with Nitin Gadkari"
            />
            <figcaption>With Union Minister Nitin Gadkari</figcaption>
          </Reveal>
          <Reveal delay={120}>
            <p className="kicker">Who he is</p>
            <h2>Farmer-statesman of Indian agriculture.</h2>
            <p className="lede">{profile.summary}</p>
            <p>
              Editor of <strong>Kisan Ki Awaaz</strong> · Author of{' '}
              <em>Development Misplaced</em> (Penguin, 2014) · Born {profile.dob}.
            </p>
            <Link className="text-link" href="/about">
              Full biography &amp; positions
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
              <Reveal
                key={`${role.title}-${role.org}`}
                className="role-chip"
                delay={i * 80}
                as="article"
              >
                <span>{role.years || role.title}</span>
                <strong>
                  {role.title} — {role.org}
                </strong>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link className="text-link" href="/about#roles">
              See all positions
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
                  <Link href={p.href}>Open</Link>
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
              <p className="kicker">In the room</p>
              <h2>Public moments</h2>
            </div>
            <Link className="text-link" href="/gallery">
              View gallery
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
            <h2>Email, call, or follow</h2>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {' · '}
              <a href={contact.web} target="_blank" rel="noopener noreferrer">
                {contact.webLabel}
              </a>
            </p>
          </Reveal>
          <Reveal className="social-row" delay={100}>
            {social.map((s) => (
              <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
            <Link href="/contact">All contact details</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
