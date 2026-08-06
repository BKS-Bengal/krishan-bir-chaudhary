import Reveal from '../../components/Reveal';
import { assignments, journey, profile } from '../../lib/data';

export const metadata = {
  title: 'Journey',
  description: `Career timeline and special assignments of ${profile.name}.`,
};

export default function JourneyPage() {
  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/gadkari-meeting.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Journey</p>
          <h1>From sugarcane council to the nation’s MSP table</h1>
          <p className="page-lead">
            Documented milestones — institutions, Parliament, WTO, and recognition — since the early
            1990s.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <ol className="timeline">
            {journey.map((item, i) => (
              <Reveal key={`${item.when}-${item.title}`} as="li" className="timeline-item" delay={i * 40}>
                <time>
                  {item.when}
                  {item.theme ? ` · ${item.theme}` : ''}
                </time>
                <p>
                  <strong>{item.title}.</strong> {item.what}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Special assignments</p>
            <h2>Selected parliamentary, WTO, FAO &amp; global engagements</h2>
          </Reveal>
          <ul className="assignment-list">
            {assignments.map((item, i) => (
              <Reveal key={item.when + item.what} as="li" delay={(i % 8) * 30}>
                <span className="assign-when">{item.when}</span>
                <span className="assign-what">{item.what}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
