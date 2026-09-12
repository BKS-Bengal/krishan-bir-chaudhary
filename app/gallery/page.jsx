import Reveal from '../../components/Reveal';
import { gallery, mewatHaryana, profile, social } from '../../lib/data';

export const metadata = {
  title: 'Gallery',
  description: `Photo gallery for ${profile.name}, including Mewat Haryana felicitation coverage.`,
};

function InvitationNote({ copy, lang }) {
  return (
    <article className={`invite-note lang-${lang}`} lang={lang === 'hi' ? 'hi' : 'en'}>
      <p className="invite-lang-tag">{lang === 'hi' ? 'हिंदी' : 'English'}</p>
      <p className="invite-org">{copy.org}</p>
      <h3>{copy.heading}</h3>
      <p className="invite-region">{copy.region}</p>
      <p>{copy.body}</p>
      <ul className="invite-meta">
        <li>
          <strong>{lang === 'hi' ? 'दिनांक' : 'Date'}:</strong> {copy.date}
        </li>
        <li>
          <strong>{lang === 'hi' ? 'स्थान' : 'Venue'}:</strong> {copy.venue}
        </li>
      </ul>
      <div className="invite-people">
        <p className="invite-label">{lang === 'hi' ? 'मुख्य अतिथि' : 'Chief Guest'}</p>
        <p className="invite-name">{copy.chiefGuest.name}</p>
        {copy.chiefGuest.lines.map((line) => (
          <p key={line} className="invite-role">
            {line}
          </p>
        ))}
      </div>
      <div className="invite-people">
        <p className="invite-label">{lang === 'hi' ? 'विशिष्ट अतिथि' : 'Special Guests'}</p>
        <ol>
          {copy.specialGuests.map((guest) => (
            <li key={guest.name}>
              <span className="invite-name">{guest.name}</span>
              {guest.lines.map((line) => (
                <span key={line} className="invite-role">
                  {line}
                </span>
              ))}
            </li>
          ))}
        </ol>
      </div>
      <div className="invite-people">
        <p className="invite-label">{lang === 'hi' ? 'आयोजक' : 'Organizer'}</p>
        <p className="invite-name">{copy.organizer.name}</p>
        {copy.organizer.lines.map((line) => (
          <p key={line} className="invite-role">
            {line}
          </p>
        ))}
      </div>
      <p className="invite-closing">{copy.closing}</p>
    </article>
  );
}

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero" data-hero="gallery" data-fit="top">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: "url('/photos/events/mewat-haryana/stage-dignitaries.jpg')",
            '--hero-focus': 'center 38%',
          }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Gallery</p>
          <h1>Public moments and agrarian context</h1>
        </div>
      </section>

      <section className="band invite-band" id={mewatHaryana.invitationId} tabIndex={-1}>
        <div className="wrap">
          <Reveal as="figure" className="invite-banner">
            <img
              src={mewatHaryana.invitationBanner}
              alt="Invitation banner for BKS Nuh felicitation ceremony"
            />
          </Reveal>
          <div className="invite-notes">
            <Reveal delay={60}>
              <InvitationNote copy={mewatHaryana.invitation.hi} lang="hi" />
            </Reveal>
            <Reveal delay={100}>
              <InvitationNote copy={mewatHaryana.invitation.en} lang="en" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band" id={mewatHaryana.id}>
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{mewatHaryana.kicker}</p>
            <h2>{mewatHaryana.title}</h2>
            <p className="lede">{mewatHaryana.summary}</p>
          </Reveal>

          <Reveal className="gallery-video" delay={80}>
            <div className="video-frame">
              <iframe
                src={mewatHaryana.video.embedSrc}
                title={mewatHaryana.video.title}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="video-link-row">
              <a href={mewatHaryana.video.href} target="_blank" rel="noopener noreferrer">
                Open ceremony video on Facebook
              </a>
            </p>
          </Reveal>

          <div className="gallery-grid mewat-grid">
            {mewatHaryana.photos.map((item, i) => (
              <Reveal key={item.src} as="figure" className="gallery-card" delay={(i % 3) * 70}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-soft">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Archive</p>
            <h2>Earlier public moments</h2>
          </Reveal>
          <div className="gallery-grid">
            {gallery.map((item, i) => (
              <Reveal key={item.src} as="figure" className="gallery-card" delay={(i % 3) * 70}>
                <img src={item.src} alt={item.alt} />
                <figcaption>
                  {item.caption}
                  {item.group ? ` · ${item.group}` : ''}
                </figcaption>
              </Reveal>
            ))}
          </div>
          <Reveal className="note-panel">
            <p className="kicker">More</p>
            <h2>Follow for latest event photography</h2>
            <div className="social-row dense">
              {social.map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
