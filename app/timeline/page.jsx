import Reveal from '../../components/Reveal';
import { profile, timeline } from '../../lib/data';

export const metadata = {
  title: 'Timeline',
  description: `Selected markers in the public work of ${profile.name}.`,
};

export default function TimelinePage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/soil-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Timeline</p>
          <h1>Selected markers in a long advocacy record</h1>
          <p className="page-lead">
            From seed-law campaigns to national trade conferences and the West Bengal chapter.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <ol className="timeline">
            {timeline.map((item, i) => (
              <Reveal key={item.when} as="li" className="timeline-item" delay={i * 70}>
                <time>{item.when}</time>
                <p>{item.what}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
