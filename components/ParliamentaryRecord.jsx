import Reveal from './Reveal';
import { SEEDS_BILL_2004_REPORT as record } from '../lib/parliamentaryRecords';

export default function ParliamentaryRecord({ id = record.id }) {
  return (
    <section className="band muted-band parliamentary-record" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{record.kicker}</p>
          <h2 id={`${id}-title`}>{record.title}</h2>
          <p className="section-deck">{record.supportingLine}</p>
        </Reveal>

        <div className="parliament-layout">
          <Reveal as="aside" className="parliament-doc" aria-label="Standing Committee report metadata">
            <p className="parliament-doc-label">Primary source</p>
            <div className="parliament-doc-sheet" aria-hidden="true">
              <span className="parliament-doc-mark">॥</span>
              <p>{record.documentPreview.line1}</p>
              <p>{record.documentPreview.line2}</p>
              <p>{record.documentPreview.line3}</p>
              <p>{record.documentPreview.line4}</p>
              <p className="parliament-doc-bill">{record.documentPreview.line5}</p>
            </div>
            <dl className="parliament-meta">
              <div>
                <dt>Committee</dt>
                <dd>{record.committee}</dd>
              </div>
              <div>
                <dt>House</dt>
                <dd>{record.lokSabha}</dd>
              </div>
              <div>
                <dt>Report</dt>
                <dd>
                  {record.reportNumber} · {record.reportMonth}
                </dd>
              </div>
              <div>
                <dt>Witness</dt>
                <dd>
                  {record.witness.name}
                  <br />
                  <span className="parliament-role">{record.witness.roleAtTheTime}</span>
                </dd>
              </div>
            </dl>
          </Reveal>

          <div className="parliament-main">
            <Reveal delay={60}>
              <h3 className="parliament-subhead">Chronology</h3>
              <ol className="parliament-chrono" aria-label="Seeds Bill 2004 chronology">
                {record.timeline.map((step) => (
                  <li key={`${step.when}-${step.label}`}>
                    <time dateTime={step.dateTime || step.when}>{step.when}</time>
                    <div>
                      <strong>{step.label}</strong>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="parliament-subhead">What the parliamentary record says</h3>
              <div className="parliament-evidence">
                {record.evidenceCards.map((card) => (
                  <article key={card.index} className="parliament-card">
                    <span className="pillar-index" aria-hidden="true">
                      {card.index}
                    </span>
                    <h4>{card.title}</h4>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140} className="parliament-source-note">
              <p>
                <cite>{record.sourceNote}</cite>
              </p>
              <div className="parliament-ctas">
                {record.sources.map((source) => (
                  <a
                    key={source.href}
                    className={source.kind === 'pdf' ? 'btn btn-solid' : 'text-link'}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
