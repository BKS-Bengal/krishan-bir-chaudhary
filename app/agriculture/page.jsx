import Link from 'next/link';
import Reveal from '../../components/Reveal';
import { pillars, profile } from '../../lib/data';

export const metadata = {
  title: 'Agriculture',
  description: `Sustainable, traditional, and innovative agriculture agenda of ${profile.name}.`,
};

export default function AgriculturePage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/crops-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Agriculture</p>
          <h1>Heritage, sustainability, and disciplined innovation</h1>
          <p className="page-lead">
            Native seed and farmer rights · natural farming &amp; IPM · biofuels and trade policy
            that serve producers.
          </p>
        </div>
      </section>

      <section className="band" id="sustainable">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Sustainable</p>
            <h2>Natural farming, IPM, and soil health</h2>
            <p>
              As a member of the Government of India’s High Level Committee on MSP, natural farming
              and crop diversification — and earlier on the GOI–UNDP IPM steering committee — his
              work links ecological practice with farmer income.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <img className="section-photo" src="/photos/soil-01.jpg" alt="Soil and young plants" />
          </Reveal>
        </div>
      </section>

      <section className="band muted-band" id="traditional">
        <div className="wrap split reverse-split">
          <Reveal>
            <img className="section-photo" src="/photos/seeds-01.jpg" alt="Seeds" />
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Traditional</p>
            <h2>Seed sovereignty &amp; heritage protection</h2>
            <p>
              From the Seeds Bill testimony to the 2004 European Patent Office revocation of an
              illegal patent on an Indian wheat variety (filed with Greenpeace), the through-line is
              clear: Indian germplasm and farmers’ seed rights are not for capture.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band" id="innovation">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Innovation</p>
            <h2>Biofuel, biosafety, and fair trade</h2>
            <p className="section-deck">
              Early ethanol advocacy (1990s), NBPGR biosafety expertise, and WTO ministerial
              participation — innovation subordinated to farmer welfare.
            </p>
          </Reveal>
          <div className="pillar-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} className="pillar-card" delay={i * 60} as="article">
                <div className="pillar-visual" style={{ backgroundImage: `url('${p.image}')` }} />
                <div className="pillar-body">
                  <h3>{p.title}</h3>
                  <p>{p.lead}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link className="text-link" href="/initiatives">
            All initiatives
          </Link>
        </div>
      </section>
    </>
  );
}
