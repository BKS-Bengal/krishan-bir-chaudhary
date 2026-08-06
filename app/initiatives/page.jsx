import Reveal from '../../components/Reveal';
import { initiatives, profile } from '../../lib/data';

export const metadata = {
  title: 'Initiatives',
  description: `Campaigns and programmes associated with ${profile.name}.`,
};

export default function InitiativesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/hands-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Initiatives</p>
          <h1>Where advocacy becomes action</h1>
        </div>
      </section>

      <section className="band">
        <div className="wrap initiative-grid">
          {initiatives.map((item, i) => (
            <Reveal key={item.title} as="article" className="initiative-card" delay={i * 50}>
              <span className="pillar-index">0{i + 1}</span>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
