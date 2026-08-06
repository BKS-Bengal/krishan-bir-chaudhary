import Reveal from '../../components/Reveal';
import { featuredMedia, orgs, profile, social } from '../../lib/data';

export const metadata = {
  title: 'Media',
  description: `Public interviews, articles, and social channels for ${profile.name}.`,
};

export default function MediaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/seeds-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Media</p>
          <h1>Public channels, interviews, and coverage</h1>
          <p className="page-lead">All known public and social links in one place.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Social</p>
            <h2>Active public profiles</h2>
          </Reveal>
          <div className="link-grid">
            {social.map((s, i) => (
              <Reveal key={s.id} as="a" className="link-card" delay={i * 60} href={s.href} target="_blank" rel="noopener noreferrer">
                <span className="link-label">{s.label}</span>
                <strong>{s.handle}</strong>
                <span className="link-go">Open</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Featured</p>
            <h2>Videos, interviews &amp; articles</h2>
          </Reveal>
          <ul className="media-list">
            {featuredMedia.map((item, i) => (
              <Reveal key={item.href} as="li" delay={i * 50}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="media-type">{item.type}</span>
                  <span className="media-title">{item.label}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Organisation</p>
            <h2>Bharatiya Krishak Samaj platforms</h2>
          </Reveal>
          <div className="link-grid">
            {orgs.map((o) => (
              <a
                key={o.href}
                className="link-card"
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-label">Website</span>
                <strong>{o.label}</strong>
                <span className="link-detail">{o.detail}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
