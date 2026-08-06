import './globals.css';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';
import { profile } from '../lib/data';

export const metadata = {
  title: {
    default: `${profile.name} — ${profile.shortTitle}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.summary,
  applicationName: 'krishan-bir-chaudhary',
  openGraph: {
    title: profile.name,
    description: profile.tagline,
    type: 'website',
    siteName: profile.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,560;9..144,700&family=Karla:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
