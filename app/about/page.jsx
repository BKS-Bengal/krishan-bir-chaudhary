import Link from 'next/link';
import Reveal from '../../components/Reveal';
import { contact, profile, roles, tvChannels } from '../../lib/data';

export const metadata = {
  title: 'About',
  description: `Biography of ${profile.name} — ${profile.qualifications}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" data-hero="about" data-fit="top">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: "url('/photos/04-session.jpg')",
            '--hero-focus': '38% 36%',
          }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">About</p>
          <h1>{profile.name}</h1>
          <p className="page-lead">
            {profile.qualifications} · Born {profile.dob} · {profile.shortTitle}
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap about-photo-row">
          <Reveal as="figure" className="about-shot">
            <img
              src="/photos/events/gadkari-meeting.png"
              alt="With Union Minister Nitin Gadkari"
              style={{ objectPosition: 'center 12%' }}
            />
            <figcaption>With Nitin Gadkari</figcaption>
          </Reveal>
          <Reveal as="figure" className="about-shot" delay={80}>
            <img
              src="/photos/events/portrait-speaking.png"
              alt="Speaking at a public agricultural forum"
              style={{ objectPosition: 'center 12%' }}
            />
            <figcaption>Addressing a public forum</figcaption>
          </Reveal>
        </div>
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">Biography</p>
            <h2>Farmer leader, policy expert, editor, and author.</h2>
            <p className="lede">{profile.summary}</p>
            <p>
              He is Editor of <strong>Kisan Ki Awaaz</strong>, the monthly English magazine, and
              author of <em>Development Misplaced</em> (Penguin, 2014). A familiar face on national
              television — including DD News, DD Kisan, Sansad TV, Aaj Tak, Republic Bharat, ZEE,
              News18, NDTV and others — he has also represented Indian farmers at WTO ministerials,
              FAO forums, and Terra Madre.
            </p>
            <p>
              Email:{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {' · '}
              <a href={contact.web} target="_blank" rel="noopener noreferrer">
                {contact.webLabel}
              </a>
            </p>
            <Link className="text-link" href="/journey">
              Full journey &amp; assignments
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band" id="roles">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Positions held</p>
            <h2>Institutional leadership</h2>
          </Reveal>
          <ul className="role-list">
            {roles.map((role, i) => (
              <Reveal key={`${role.title}-${role.org}`} as="li" delay={i * 40}>
                <span className="role-title">
                  {role.years ? `${role.years}` : role.title}
                </span>
                <span className="role-org">
                  {role.title} — {role.org}
                </span>
                <span className="role-note">{role.note}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Media presence</p>
            <h2>National television</h2>
          </Reveal>
          <div className="chip-row">
            {tvChannels.map((ch) => (
              <span className="chip" key={ch}>
                {ch}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
