import Reveal from '../../components/Reveal';
import { bks, profile } from '../../lib/data';

export const metadata = {
  title: 'Bharatiya Krishak Samaj',
  description: `${bks.name} — led by ${profile.name}.`,
};

export default function BksPage() {
  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/lamp-lighting.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Organisation</p>
          <h1>{bks.name}</h1>
          <p className="page-lead">{bks.summary}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Objectives</p>
            <h2>What the movement stands for</h2>
          </Reveal>
          <ul className="issue-copy-list">
            {bks.objectives.map((o, i) => (
              <Reveal key={o} as="li" delay={i * 50}>
                {o}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">West Bengal</p>
            <h2>State chapter — dignity, self-reliance, practical knowledge</h2>
            <p>{bks.westBengal}</p>
            <a
              className="text-link"
              href="https://www.bkswbengal.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit bkswbengal.org
            </a>
          </Reveal>
          <aside className="quote-panel">
            <p className="quote-hi">बंगाल के लिए किसान की गरिमा, आत्मनिर्भर कृषि और व्यावहारिक ज्ञान।</p>
            <p className="quote-en">
              Farmer dignity, self-reliant agriculture, and practical knowledge for Bengal.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
