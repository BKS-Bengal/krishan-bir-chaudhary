import Reveal from '../../components/Reveal';
import { gallery, profile, social } from '../../lib/data';

export const metadata = {
  title: 'Gallery',
  description: `Visual gallery for the ${profile.name} portfolio.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/events/shikhar-award.png')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Gallery</p>
          <h1>Public moments and the agrarian world his work defends</h1>
          <p className="page-lead">
            Event photography from Market Times / Commodex Capital Shikhar Sammelan, alongside
            agrarian visuals that frame his advocacy.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="gallery-grid">
            {gallery.map((item, i) => (
              <Reveal key={item.src} as="figure" className="gallery-card" delay={(i % 3) * 80}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </Reveal>
            ))}
          </div>

          <Reveal className="note-panel">
            <p className="kicker">More media</p>
            <h2>Follow his public channels for latest event photos</h2>
            <p>Facebook, Instagram, YouTube, and X carry ongoing addresses and coverage.</p>
            <div className="social-row dense">
              {social.map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
