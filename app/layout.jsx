import './globals.css';

export const metadata = {
  title: 'OmniDEL.ai / KarmYog for 21st Century — Inaugural Team Offsite',
  description:
    'OmniDEL.ai / KarmYog for 21st Century held their Inaugural Team Offsite in Kolkata on 26th July 2026.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
