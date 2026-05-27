import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Scottish Government Grants for Window Upgrades 2026',
  description: 'What grants are available to Scottish homeowners for window upgrades in 2026? Warmer Homes Scotland, Home Energy Scotland, and local authority schemes explained.',
};

export default function ScottishGrantsPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Workshop.jpg')" }}>
        <div className="hero-content">
          <span className="hero-eyebrow">Grants &amp; Funding · February 2026</span>
          <h1>Scottish Government Grants for Window Upgrades — What&apos;s Available in 2026</h1>
        </div>
      </div>

      <section>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>

            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--dark)', marginBottom: '2rem' }}>
              Several funding schemes are available to help Scottish homeowners upgrade their windows and reduce energy bills. Here&apos;s what&apos;s available and how to apply.
            </p>

            <h2>Warmer Homes Scotland</h2>
            <p>The flagship Scottish Government scheme provides free energy efficiency improvements to eligible homeowners and private renters. Window upgrades, including secondary glazing and draught-sealing, may be covered.</p>
            <p><strong>Who qualifies:</strong> Homeowners or private tenants receiving qualifying benefits, or with a household income below a set threshold. Properties must have an EPC rating of D or below.</p>
            <p><strong>How to apply:</strong> Contact Home Energy Scotland on 0808 808 2282 for a free assessment.</p>

            <h2>Home Energy Scotland Loan</h2>
            <p>Interest-free loans of up to £15,000 are available for energy efficiency improvements, including window upgrades and secondary glazing. For mixed measures, this can be combined with a cashback grant.</p>
            <p><strong>Who qualifies:</strong> All Scottish homeowners, regardless of income. The property must be your primary residence.</p>

            <h2>Local Authority Area-Based Schemes</h2>
            <p>Many Scottish councils run their own area-based energy efficiency schemes. Edinburgh City Council has historically offered support for tenement and conservation area properties. Contact your local council directly for current availability.</p>

            <h2>Listed Building Grants</h2>
            <p>Historic Environment Scotland administers grants for the repair and maintenance of Category A and B listed buildings. Window repairs and secondary glazing may qualify where they protect the historic fabric of the building.</p>
            <p>Grant rates vary from 25–75% of eligible costs depending on the building&apos;s significance and the applicant&apos;s circumstances.</p>

            <h2>VAT on Listed Building Work</h2>
            <p>An important saving: approved alterations to listed buildings are zero-rated for VAT. This means no 20% VAT on qualifying window and door work for listed properties — a significant saving on larger projects.</p>

            <div style={{ background: 'var(--cream)', padding: '2rem', borderRadius: '4px', borderLeft: '4px solid var(--orange)', marginTop: '2.5rem' }}>
              <h3>Need help navigating funding?</h3>
              <p>We can advise on which grants may apply to your project and provide the documentation and specifications you need to support your application.</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Get in Touch</Link>
            </div>

            <p style={{ marginTop: '3rem' }}>
              <Link href="/news" style={{ color: 'var(--orange)', fontWeight: 600 }}>← Back to News</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
