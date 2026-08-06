import Link from 'next/link';
import Reveal from '../../components/Reveal';
import { profile, roles } from '../../lib/data';

export const metadata = {
  title: 'About',
  description: `Biography and institutional roles of ${profile.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/events/portrait-speaking.png')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">About</p>
          <h1>{profile.name}</h1>
          <p className="page-lead">{profile.nameBn} — {profile.shortTitle}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap about-photo-row">
          <Reveal as="figure" className="about-shot">
            <img src="/photos/events/shikhar-award.png" alt="Receiving the Shikhar Samman award" />
            <figcaption>Shikhar Samman · Market Times TV</figcaption>
          </Reveal>
          <Reveal as="figure" className="about-shot" delay={80}>
            <img src="/photos/events/shikhar-panel.png" alt="On the Shikhar Sammelan panel stage" />
            <figcaption>Panel · The Lalit, New Delhi</figcaption>
          </Reveal>
        </div>
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">Biography</p>
            <h2>A long record at the intersection of farmers, law, and policy.</h2>
            <p className="lede">
              Over several decades, Shri Krishan Bir Chaudhary has emerged as a prominent voice
              articulating a farmer-centric vision of India’s economic and trade policy. His
              interventions consistently defend seed sovereignty, oppose royalty practices of
              multinational seed corporations, and call for native seeds and self-reliant
              agricultural systems.
            </p>
            <p>
              In parallel, he links trade negotiations — especially US–India agriculture and
              dairy discussions — to the livelihood security of India’s farming majority, warning
              against tariff concessions that could undercut domestic producers.
            </p>
            <p>
              These critiques are grounded in operational experience: leadership in farmer
              organisation alongside roles inside public-sector farm operations, sugarcane
              development, cooperative marketing, and smallholder agribusiness institutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band" id="roles">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Roles</p>
            <h2>Leadership and institutional positions</h2>
          </Reveal>
          <ul className="role-list">
            {roles.map((role, i) => (
              <Reveal key={`${role.title}-${role.org}`} as="li" delay={i * 60}>
                <span className="role-title">{role.title}</span>
                <span className="role-org">{role.org}</span>
                <span className="role-note">{role.note}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">West Bengal</p>
            <h2>Guiding a new state chapter of Bharatiya Krishak Samaj</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              In June 2026, the West Bengal branch of Bharatiya Krishak Samaj was formed under
              his guidance as national president. The chapter emphasises farmer dignity,
              self-reliant agriculture, practical knowledge, district leadership enrolment, and
              farmer-education initiatives including SRI learning and local-language AI assistance.
            </p>
            <a
              className="text-link"
              href="https://www.bkswbengal.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit bkswbengal.org
            </a>
            <div className="bn-quote">
              <p>বাংলার জন্য কৃষকের মর্যাদা, স্বনির্ভর কৃষি এবং ব্যবহারিক জ্ঞান।</p>
            </div>
            <Link className="text-link" href="/timeline">
              See timeline
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
