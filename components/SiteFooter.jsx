import Link from 'next/link';
import { contact, orgs, profile, social } from '../lib/data';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-hi">{profile.nameHi}</p>
          <p className="footer-tag">{profile.shortTitle}</p>
          <p className="footer-contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span aria-hidden="true"> · </span>
            <a href={contact.web} target="_blank" rel="noopener noreferrer">
              {contact.webLabel}
            </a>
          </p>
          <p className="footer-phones">
            {contact.phones.map((p, i) => (
              <span key={p}>
                {i > 0 ? ' / ' : null}
                <a href={`tel:+91${p}`}>+91 {p}</a>
              </span>
            ))}
          </p>
        </div>
        <div className="footer-cols">
          <div>
            <p className="footer-label">Social</p>
            <ul>
              {social.map((s) => (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-label">Organisation</p>
            <ul>
              {orgs.map((o) => (
                <li key={o.href}>
                  <a href={o.href} target="_blank" rel="noopener noreferrer">
                    {o.label.includes('West Bengal') ? 'BKS West Bengal' : o.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/media">Media</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          {profile.name} · {profile.qualifications} · Bharatiya Krishak Samaj
        </p>
      </div>
    </footer>
  );
}
