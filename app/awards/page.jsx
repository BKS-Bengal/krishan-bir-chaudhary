import Reveal from '../../components/Reveal';
import { awards, profile } from '../../lib/data';

export const metadata = {
  title: 'Awards',
  description: `Awards and recognition for ${profile.name}.`,
};

export default function AwardsPage() {
  return (
    <>
      <section className="page-hero" data-hero="awards" data-fit="top">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: "url('/photos/events/shikhar-award.png')",
            '--hero-focus': 'center 14%',
          }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Awards</p>
          <h1>Recognition for service to Indian farmers</h1>
          <p className="page-lead">
            From Krishi Ratan (1998) to D.Litt. Honoris Causa (2021) — and Guest of Honour at the
            Indian Science Congress.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap award-grid">
          {awards.map((item, i) => (
            <Reveal key={item.title} as="article" className="award-card" delay={i * 70}>
              <img src={item.image} alt="" />
              <div>
                <p className="kicker">{item.when}</p>
                <h2>{item.title}</h2>
                <p className="lede">{item.by}</p>
                <p>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
