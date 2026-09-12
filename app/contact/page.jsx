import Reveal from '../../components/Reveal';
import { contact, featuredMedia, orgs, profile, social } from '../../lib/data';

export const metadata = {
  title: 'Contact',
  description: `Contact ${profile.name} — email, phone, office and residence.`,
};

export default function ContactPage() {
  const directory = [
    {
      id: 'email',
      group: 'Direct',
      label: 'Email',
      handle: contact.email,
      href: `mailto:${contact.email}`,
    },
    ...contact.phones.map((p) => ({
      id: p,
      group: 'Direct',
      label: 'Mobile',
      handle: `+91 ${p}`,
      href: `tel:+91${p}`,
    })),
    {
      id: 'web',
      group: 'Direct',
      label: 'Website',
      handle: contact.webLabel,
      href: contact.web,
    },
    ...social.map((s) => ({ ...s, group: 'Social' })),
    ...orgs.map((o) => ({
      id: o.href,
      label: o.label,
      handle: o.detail,
      href: o.href,
      group: 'Organisation',
    })),
    ...featuredMedia.map((m) => ({
      id: m.href,
      label: m.type,
      handle: m.label,
      href: m.href,
      group: 'Coverage',
    })),
  ];

  return (
    <>
      <section className="page-hero" data-hero="contact" data-fit="top">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: "url('/photos/events/shikhar-award.png')",
            '--hero-focus': 'center 14%',
          }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Contact</p>
          <h1>Write, call, or follow</h1>
          <p className="page-lead">
            Official contact for {profile.name} — press, invitations, and farmer organisation
            correspondence.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap contact-grid">
          <Reveal className="contact-card">
            <p className="kicker">Email</p>
            <a className="contact-strong" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </Reveal>
          <Reveal className="contact-card" delay={60}>
            <p className="kicker">Mobile</p>
            <div className="contact-strong stack-phones">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`}>
                  +91 {p}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal className="contact-card" delay={120}>
            <p className="kicker">Web</p>
            <a
              className="contact-strong"
              href={contact.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.webLabel}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Office</p>
            <h2>New Delhi</h2>
            <p>{contact.office}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Residence</p>
            <h2>Ghaziabad</h2>
            <p>{contact.residence}</p>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Directory</p>
            <h2>All public channels</h2>
          </Reveal>
          <div className="directory">
            {directory.map((item, i) => (
              <Reveal
                key={item.id}
                as="a"
                className="directory-row"
                delay={(i % 6) * 40}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="dir-group">{item.group}</span>
                <span className="dir-label">{item.label}</span>
                <span className="dir-handle">{item.handle}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
