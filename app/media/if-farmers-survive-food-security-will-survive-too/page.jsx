import Link from 'next/link';
import { FARMERS_FOOD_SECURITY_ARTICLE } from '../../../lib/articles/if-farmers-survive-food-security';
import { buildMetadata } from '../../../lib/seo';
import './article.css';

const article = FARMERS_FOOD_SECURITY_ARTICLE;

export const metadata = buildMetadata({
  title: article.headline,
  description: article.metaDescription,
  path: article.path,
  type: 'article',
});

export default function FarmersFoodSecurityArticlePage() {
  return (
    <div className="article-page">
      <section className="band">
        <div className="wrap article-page__inner">
          <nav className="article-page__nav" aria-label="Breadcrumb">
            <Link className="text-link" href="/media">
              ← Back to Media
            </Link>
          </nav>

          <figure className="article-page__clipping">
            <a href={article.image} target="_blank" rel="noopener noreferrer">
              <img src={article.image} alt={article.imageAlt} loading="eager" />
            </a>
            <figcaption>
              Original newspaper clipping (English opinion page).{' '}
              <a href={article.image} target="_blank" rel="noopener noreferrer">
                View original newspaper clipping
              </a>
            </figcaption>
          </figure>

          <article className="article-page__content" lang="en">
            <header className="article-page__header">
              <h1>{article.headline}</h1>
              <p className="article-page__byline">{article.author}</p>
              <p className="article-page__kicker">{article.category}</p>
            </header>

            <div className="article-page__body">
              {article.intro.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}

              {article.sections.map((section) => (
                <section key={section.heading} className="article-page__section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.afterBullets
                    ? section.afterBullets.map((p) => <p key={p.slice(0, 48)}>{p}</p>)
                    : null}
                </section>
              ))}

              <section className="article-page__section">
                <h2>{article.closingHeading}</h2>
                {article.closing.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </section>

              <p className="article-page__bio">
                <em>{article.authorBio}</em>
              </p>
            </div>
          </article>

          <p className="article-page__download">
            <a
              className="btn btn-solid article-page__download-link"
              href={article.pdf}
              download={article.pdfFilename}
              type="application/pdf"
            >
              <svg
                className="article-page__download-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7V3.5L18.5 9H15zM12 19.5l-4-4h2.5V12h3v3.5H16l-4 4z"
                />
              </svg>
              Download Original Newspaper PDF
            </a>
          </p>

          <p className="article-page__footer-nav">
            <Link className="text-link" href="/media">
              ← Back to Media
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
