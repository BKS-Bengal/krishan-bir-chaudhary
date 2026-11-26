import Link from 'next/link';
import Reveal from '../../components/Reveal';
import JsonLd from '../../components/JsonLd';
import { nationalConvention2026 } from '../../lib/data';
import { absoluteUrl, buildMetadata } from '../../lib/seo';
import './national-convention.css';

const conv = nationalConvention2026;

export const metadata = buildMetadata({
  title: conv.title,
  description: conv.page.metaDescription,
  path: conv.path,
});

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: conv.fullTitle,
  startDate: `${conv.dateIso}T10:00:00+05:30`,
  endDate: `${conv.dateIso}T17:00:00+05:30`,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  description: conv.page.metaDescription,
  image: absoluteUrl(conv.invitationBanner),
  organizer: {
    '@type': 'Organization',
    name: conv.leadership.organizer.name,
  },
  location: {
    '@type': 'Place',
    name: conv.venue.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pathri (Ajanta Road), Taluka Phulambri',
      addressLocality: 'Chhatrapati Sambhajinagar',
      addressRegion: 'Maharashtra',
      postalCode: '431111',
      addressCountry: 'IN',
    },
  },
};

export default function NationalConventionPage() {
  const page = conv.page;

  return (
    <div className="nc-page">
      <JsonLd data={eventJsonLd} />

      <div className="nc-ribbon" aria-label={page.ribbon}>
        <div className="nc-ribbon-track">
          <span className="nc-ribbon-item">
            <span className="nc-ribbon-dot" aria-hidden="true" />
            {page.ribbon}
          </span>
          <span className="nc-ribbon-item">
            <span className="nc-ribbon-dot" aria-hidden="true" />
            {page.ribbon}
          </span>
        </div>
      </div>

      <section className="nc-hero" aria-labelledby="nc-hero-title">
        <span className="nc-motif nc-motif-tl" aria-hidden="true" />
        <div className="wrap nc-hero-grid">
          <div>
            <p className="nc-kicker">{conv.kicker}</p>
            <h1 id="nc-hero-title">{conv.fullTitle}</h1>
            <p className="nc-hero-lead">{page.heroLead}</p>
            <p className="lede" lang="hi">
              {conv.titleHi}
            </p>
            <div className="nc-badges" role="list">
              <span className="nc-badge nc-badge-date" role="listitem">
                {conv.dateLabel}
              </span>
              <span className="nc-badge nc-badge-time" role="listitem">
                {conv.timeHeadline}
              </span>
              <span className="nc-badge" role="listitem">
                Maharashtra
              </span>
            </div>
            <div className="nc-actions">
              <a className="btn btn-solid" href="#programme">
                View programme
              </a>
              <a className="btn btn-line" href="#official-poster">
                View official poster
              </a>
            </div>
          </div>
          <figure className="nc-poster-frame">
            <img src={conv.invitationBanner} alt={conv.invitationAlt} />
          </figure>
        </div>
      </section>

      <section className="nc-section nc-section-alt" aria-labelledby="nc-about-title">
        <div className="wrap">
          <Reveal className="nc-section-head">
            <p className="nc-kicker">{page.aboutTitle}</p>
            <h2 id="nc-about-title">{page.aboutLead}</h2>
            <p>{page.aboutBody}</p>
          </Reveal>
          <Reveal>
            <aside className="convention-special-note" aria-label={conv.specialNote.label}>
              <p className="kicker">{conv.specialNote.label}</p>
              <p>{conv.specialNote.text}</p>
              <p lang="hi">{conv.specialNote.textHi}</p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="nc-section" aria-labelledby="nc-lead-title">
        <div className="wrap">
          <Reveal className="nc-section-head">
            <p className="nc-kicker">{page.leadershipTitle}</p>
            <h2 id="nc-lead-title">{page.leadershipLead}</h2>
          </Reveal>
          <div className="nc-lead-grid">
            <Reveal className="nc-card" as="article" delay={40}>
              <p className="kicker">Chief Guest</p>
              <h3>{conv.leadership.chiefGuest.name}</h3>
              {conv.leadership.chiefGuest.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>{page.chiefGuestNote}</p>
            </Reveal>
            <Reveal className="nc-card" as="article" delay={100}>
              <p className="kicker">Presiding Authority</p>
              <h3>{conv.leadership.presiding.name}</h3>
              {conv.leadership.presiding.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </Reveal>
            <Reveal className="nc-card" as="article" delay={160}>
              <p className="kicker">Organiser</p>
              <h3>{conv.leadership.organizer.name}</h3>
              {conv.leadership.organizer.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="nc-section nc-section-alt"
        id="programme"
        tabIndex={-1}
        aria-labelledby="nc-programme-title"
      >
        <div className="wrap">
          <Reveal className="nc-section-head">
            <p className="nc-kicker">Programme</p>
            <h2 id="nc-programme-title">{page.programmeLead}</h2>
          </Reveal>
          <ol className="nc-timeline">
            {conv.programme.map((item, index) => (
              <Reveal key={item.time} as="li" delay={index * 70}>
                <time dateTime={item.time}>{item.time}</time>
                <strong>{item.title}</strong>
                {item.detail ? <p>{item.detail}</p> : null}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="nc-section" aria-labelledby="nc-states-title">
        <div className="wrap">
          <Reveal className="nc-section-head">
            <p className="nc-kicker">Participating states</p>
            <h2 id="nc-states-title">{page.statesLead}</h2>
            <p>{page.statesNote}</p>
          </Reveal>
          <div className="nc-states" role="list">
            {conv.states.map((state, index) => (
              <Reveal key={state} className="nc-state" delay={index * 40} as="div">
                <span role="listitem">{state}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="nc-section nc-section-alt" aria-labelledby="nc-venue-title">
        <div className="wrap">
          <Reveal className="nc-section-head">
            <p className="nc-kicker">Venue</p>
            <h2 id="nc-venue-title">{page.venueLead}</h2>
          </Reveal>
          <Reveal className="nc-venue" as="article">
            <strong>{conv.venue.name}</strong>
            {conv.venue.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="nc-section" aria-labelledby="nc-delegates-title">
        <div className="wrap">
          <Reveal className="nc-section-head">
            <p className="nc-kicker">Delegate arrangements</p>
            <h2 id="nc-delegates-title">{page.delegatesLead}</h2>
          </Reveal>
          <div className="nc-delegate-grid">
            <Reveal className="nc-card" as="article">
              <p className="kicker">Confirmed in the brief</p>
              <ul className="nc-list">
                {conv.delegates.confirmed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="nc-card" as="article" delay={80}>
              <p className="kicker">Awaiting organiser confirmation</p>
              <ul className="nc-list">
                {conv.delegates.pending.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="nc-section nc-section-alt"
        id="official-poster"
        tabIndex={-1}
        aria-labelledby="nc-poster-title"
      >
        <div className="wrap nc-poster-block">
          <Reveal>
            <p className="nc-kicker">Official invitation</p>
            <h2 id="nc-poster-title">
              The Hindi invitation poster is the authoritative visual reference for this programme.
            </h2>
          </Reveal>
          <Reveal as="figure" className="nc-poster-frame" delay={60}>
            <img src={conv.invitationBanner} alt={conv.invitationAlt} />
            <figcaption>
              <span lang="en">{conv.flyerCaption.en}</span>
            </figcaption>
          </Reveal>
        </div>
      </section>

      <section className="nc-close" aria-labelledby="nc-close-title">
        <span className="nc-motif nc-motif-br" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <h2 id="nc-close-title">You are invited</h2>
            <p>
              Join Bharatiya Krishak Samaj for a national day of farmer leadership and policy
              dialogue in Maharashtra.
            </p>
            <div className="nc-actions" style={{ justifyContent: 'center' }}>
              <Link className="btn btn-solid" href="/">
                Back to home
              </Link>
              <Link className="btn btn-line" href="/gallery">
                View gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
