import Link from 'next/link';
import { orgs, profile, social } from '../lib/data';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-bn">{profile.nameBn}</p>
          <p className="footer-tag">{profile.shortTitle}</p>
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
                    BKS West Bengal
                  </a>
                </li>
              ))}
              <li>
                <Link href="/media">All media links</Link>
              </li>
              <li>
                <Link href="/contact">Connect</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          Portfolio site for {profile.name}. Distinguish Bharatiya Krishak Samaj from similarly
          named organisations.
        </p>
      </div>
    </footer>
  );
}
