import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'News & Advice | Edinburgh Windows and Doors',
  description: 'Advice and guides on sash windows, listed buildings, planning permission, Scottish grants, and heritage glazing from Edinburgh Windows and Doors.',
};

const articles = [
  {
    slug: 'secondary-glazing-heritage',
    title: 'Secondary Glazing for Heritage Sash Windows — The Complete Guide',
    date: '2026-03-15',
    excerpt: 'If you own a listed building or live in a conservation area, replacing your original sash windows may not be an option. Secondary glazing offers a planning-approved route to improved comfort without touching your originals.',
    category: 'Heritage',
  },
  {
    slug: 'scottish-grants',
    title: "Scottish Government Grants for Window Upgrades — What's Available in 2026",
    date: '2026-02-20',
    excerpt: "Several funding schemes are available to help Scottish homeowners upgrade their windows and reduce energy bills. Here's what's available and how to apply.",
    category: 'Grants & Funding',
  },
  {
    slug: 'planning-permission-tips',
    title: 'Planning Permission for Window Replacement in Edinburgh — What You Need to Know',
    date: '2026-01-10',
    excerpt: "Edinburgh has some of the most stringent planning requirements in the UK. Here's what you need to know before replacing windows in a listed building or conservation area.",
    category: 'Planning',
  },
];

export default function NewsPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Workshop.jpg')" }}>
        <div className="hero-content">
          <h1>News &amp; Advice</h1>
          <p className="hero-sub">Guides on sash windows, listed buildings, planning permission, and Scottish grants — written by our team of specialists.</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  background: '#fff',
                  border: '1px solid var(--border-grey)',
                  borderRadius: '4px',
                  padding: '2rem',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{article.category}</span>
                <h3 style={{ marginTop: '0.75rem', marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--navy)' }}>{article.title}</h3>
                <p style={{ color: 'var(--light-grey)', fontSize: '0.95rem', lineHeight: 1.7 }}>{article.excerpt}</p>
                <p style={{ marginTop: '1.5rem', color: 'var(--orange)', fontWeight: 600, fontSize: '0.9rem' }}>Read article →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
