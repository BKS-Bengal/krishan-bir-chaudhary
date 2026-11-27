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
      <section className="page-hero" data-hero="media" data-fit="top">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: "url('/photos/events/shikhar-panel.png')",
            '--hero-focus': 'center 30%',
          }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{article.category}</p>
          <h1>{article.headline}</h1>
          <p className="page-lead">{article.author}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap article-page__inner">
          <nav className="article-page__nav" aria-label="Breadcrumb">
            <Link className="text-link" href="/media">
              ← Back to Media
            </Link>
          </nav>

          <article className="article-page__body" lang="en">
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
          </article>

          <figure className="article-page__clipping">
            <a href={article.image} target="_blank" rel="noopener noreferrer">
              <img src={article.image} alt={article.imageAlt} loading="lazy" />
            </a>
            <figcaption>
              Original newspaper clipping (English opinion page).{' '}
              <a href={article.image} target="_blank" rel="noopener noreferrer">
                View original newspaper clipping
              </a>
            </figcaption>
          </figure>

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
