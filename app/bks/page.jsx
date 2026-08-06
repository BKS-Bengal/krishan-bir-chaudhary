import JsonLd from '../../components/JsonLd';
import Reveal from '../../components/Reveal';
import { bks, profile } from '../../lib/data';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.bks);

export default function BksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Bharatiya Krishak Samaj', path: '/bks' },
        ])}
      />

      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/lamp-lighting.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Heritage &amp; mission</p>
          <h1>
            {bks.name}
            <span className="hero-hi-sub"> {bks.nameHi}</span>
          </h1>
          <p className="page-lead">{bks.summary}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">Research note</p>
            <h2>Names, continuity, and accurate history</h2>
            <p className="lede">{bks.namingNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Visual timeline</p>
            <h2>From 1955 founding tradition to today’s leadership</h2>
            <p className="section-deck">
              Key milestones verified from public organisational histories, registration records,
              and presidential archives — not invented chronology.
            </p>
          </Reveal>

          <div className="heritage-rail">
            {bks.heritageTimeline.map((item, i) => (
              <Reveal key={item.when + item.title} className="heritage-card" delay={i * 50} as="article">
                <div className="heritage-year">{item.when}</div>
                <div className="heritage-body">
                  <h3>{item.title}</h3>
                  <p>{item.what}</p>
                  <p className="heritage-source">Source: {item.source}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stats-strip">
          <Reveal className="stat-block">
            <strong>1955</strong>
            <span>Founding year cited for Bharat Krishak Samaj</span>
          </Reveal>
          <Reveal className="stat-block" delay={60}>
            <strong>1959</strong>
            <span>World Agriculture Fair opens in New Delhi</span>
          </Reveal>
          <Reveal className="stat-block" delay={120}>
            <strong>Today</strong>
            <span>President: {profile.name}</span>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Philosophy</p>
            <h2>Why the organisation exists</h2>
            <p>{bks.philosophy}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Objectives now</p>
            <ul className="issue-copy-list">
              {bks.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Today</p>
            <h2>Relevance in the present agri-ecosystem</h2>
            <p>{bks.today}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Forward</p>
            <h2>Strategic direction</h2>
            <p>{bks.future}</p>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">West Bengal</p>
            <h2>State chapter — dignity, self-reliance, practical knowledge</h2>
            <p>{bks.westBengal}</p>
            <a
              className="text-link"
              href="https://www.bkswbengal.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit bkswbengal.org
            </a>
          </Reveal>
          <aside className="quote-panel">
            <p className="quote-hi">बंगाल के लिए किसान की गरिमा, आत्मनिर्भर कृषि और व्यावहारिक ज्ञान।</p>
            <p className="quote-en">
              Farmer dignity, self-reliant agriculture, and practical knowledge for Bengal.
            </p>
          </aside>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">References</p>
            <h2>Authoritative sources used on this page</h2>
          </Reveal>
          <ul className="source-list">
            {bks.sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <Reveal>
            <p className="archive-reco">
              Recommended archival sourcing (not yet in this portfolio): official BKS logo
              package, Krishak Samachar / Farmers’ Forum covers, World Agriculture Fair 1959
              photographs, and a high-resolution portrait of Dr. Panjabrao S. Deshmukh from
              public-domain or licensed collections.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
