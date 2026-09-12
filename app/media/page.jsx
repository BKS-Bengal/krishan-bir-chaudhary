import Reveal from '../../components/Reveal';
import {
  featuredMedia,
  press,
  profile,
  seedBill2025,
  social,
  tvChannels,
} from '../../lib/data';

export const metadata = {
  title: 'Media',
  description: `Press, publications, and channels for ${profile.name}.`,
};

export default function MediaPage() {
  return (
    <>
      <section className="page-hero" data-hero="media" data-fit="top">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: "url('/photos/events/shikhar-panel.png')",
            '--hero-focus': 'center 30%',
          }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Media</p>
          <h1>Press, book, magazine, and broadcast</h1>
          <p className="page-lead">
            Editor of Kisan Ki Awaaz · Author of Development Misplaced (Penguin, 2014) · National TV
            &amp; international forums.
          </p>
        </div>
      </section>

      <section className="band" id={seedBill2025.id}>
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{seedBill2025.kicker}</p>
            <h2>{seedBill2025.title}</h2>
            <p className="lede">{seedBill2025.summary}</p>
          </Reveal>
          <div className="gallery-grid">
            {seedBill2025.photos.map((item, i) => (
              <Reveal key={item.src} as="figure" className="gallery-card" delay={(i % 3) * 70}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Channels</p>
            <h2>Social &amp; web</h2>
          </Reveal>
          <div className="link-grid">
            {social.map((s, i) => (
              <Reveal
                key={s.id}
                as="a"
                className="link-card"
                delay={i * 50}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <p className="kicker">Publications &amp; coverage</p>
            <h2>Book, magazine, opinions, interviews</h2>
          </Reveal>
          <ul className="media-list">
            {press.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 40}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <span className="media-type">{item.type}</span>
                    <span className="media-title">
                      {item.title}
                      <span className="media-meta">
                        {' '}
                        — {item.outlet}
                        {item.when ? `, ${item.when}` : ''}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="media-static">
                    <span className="media-type">{item.type}</span>
                    <span className="media-title">
                      {item.title}
                      <span className="media-meta">
                        {' '}
                        — {item.outlet}
                        {item.when ? `, ${item.when}` : ''}
                      </span>
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Broadcast</p>
            <h2>National television</h2>
          </Reveal>
          <div className="chip-row">
            {tvChannels.map((ch) => (
              <span className="chip" key={ch}>
                {ch}
              </span>
            ))}
          </div>
          <ul className="media-list" style={{ marginTop: 28 }}>
            {featuredMedia.map((item, i) => (
              <Reveal key={item.href} as="li" delay={i * 40}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="media-type">{item.type}</span>
                  <span className="media-title">{item.label}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
