import Reveal from '../../components/Reveal';
import { pillars, profile } from '../../lib/data';

export const metadata = {
  title: 'Issues',
  description: `Policy pillars and campaigns associated with ${profile.name}.`,
};

export default function IssuesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/crops-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Issues</p>
          <h1>Themes that structure his public work</h1>
          <p className="page-lead">
            Seed law, trade justice, policy engagement, and movement building — one through-line:
            economic reform must answer to India’s agrarian majority.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap issue-stack">
          {pillars.map((pillar, i) => (
            <article className="issue-block" id={pillar.slug} key={pillar.slug}>
              <Reveal className="issue-media">
                <img src={pillar.image} alt="" />
              </Reveal>
              <Reveal className="issue-copy" delay={100}>
                <span className="pillar-index">0{i + 1}</span>
                <h2>{pillar.title}</h2>
                <p className="lede">{pillar.lead}</p>
                <ul>
                  {pillar.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
