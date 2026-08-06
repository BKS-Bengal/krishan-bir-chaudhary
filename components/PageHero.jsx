import Link from 'next/link';

export default function PageHero({
  kicker,
  title,
  lead,
  image = '/photos/events/portrait-speaking.png',
  children,
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url('${image}')` }} aria-hidden="true" />
      <div className="wrap page-hero-copy">
        {kicker ? <p className="kicker light">{kicker}</p> : null}
        <h1>{title}</h1>
        {lead ? <p className="page-lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ kicker, title, deck, action }) {
  return (
    <div className={`section-head ${action ? 'row-head' : ''}`}>
      <div>
        {kicker ? <p className="kicker">{kicker}</p> : null}
        {title ? <h2>{title}</h2> : null}
        {deck ? <p className="section-deck">{deck}</p> : null}
      </div>
      {action || null}
    </div>
  );
}

export function TextLink({ href, children, external = false }) {
  if (external) {
    return (
      <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className="text-link" href={href}>
      {children}
    </Link>
  );
}
