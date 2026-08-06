import Reveal from '../../components/Reveal';
import { featuredMedia, orgs, profile, social } from '../../lib/data';

export const metadata = {
  title: 'Connect',
  description: `Connect with ${profile.name} through public and organisational channels.`,
};

export default function ContactPage() {
  const all = [
    ...social.map((s) => ({ ...s, group: 'Social' })),
    ...orgs.map((o) => ({
      id: o.href,
      label: 'BKS West Bengal',
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
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/field-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Connect</p>
          <h1>Every public link in one directory</h1>
          <p className="page-lead">
            Follow {profile.name} across social platforms, organisation pages, and published media.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="directory">
            {all.map((item, i) => (
              <Reveal key={item.id} as="a" className="directory-row" delay={(i % 6) * 40} href={item.href} target="_blank" rel="noopener noreferrer">
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
