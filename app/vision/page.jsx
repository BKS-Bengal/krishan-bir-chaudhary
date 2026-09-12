import Link from 'next/link';
import Reveal from '../../components/Reveal';
import { profile, vision } from '../../lib/data';

export const metadata = {
  title: 'Vision & Mission',
  description: `Vision and mission of ${profile.name}.`,
};

export default function VisionPage() {
  return (
    <>
      <section className="page-hero" data-hero="vision">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: "url('/photos/field-01.jpg')",
            '--hero-focus': 'center 42%',
          }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Vision</p>
          <h1>{vision.statement}</h1>
        </div>
      </section>

      <section className="band">
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">Mission</p>
            <h2>Carry the annadata’s voice — nationally and globally.</h2>
            <p className="lede">{vision.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Values</p>
            <h2>What every intervention answers to</h2>
          </Reveal>
          <div className="chip-row large">
            {vision.values.map((v) => (
              <span className="chip" key={v}>
                {v}
              </span>
            ))}
          </div>
          <Reveal>
            <Link className="text-link" href="/initiatives">
              See initiatives
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
