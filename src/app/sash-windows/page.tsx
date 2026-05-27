import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sash & Case Windows Edinburgh | Bespoke Timber Sash Windows',
  description: 'Bespoke timber sash and case windows made in Edinburgh. Traditional craftsmanship, modern thermal performance. Survey to installation across Scotland and the UK.',
};

export default function SashWindowsPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/sash and case windows edinburgh.JPG')" }}>
        <div className="hero-content">
          <h1>Bespoke Timber Sash &amp; Case Windows</h1>
          <p className="hero-sub">Made to measure in Edinburgh. Traditional craftsmanship with modern thermal performance. Survey to installation across Scotland and the UK.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Survey</Link>
            <Link href="/trade" className="btn btn-white btn-lg">Trade Supply</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <span className="section-eyebrow">Sash &amp; Case Windows</span>
          <div className="two-col">
            <Image src="/images/sash window manufacture.jpeg" alt="Sash window manufacture" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>Authentically made. Performance engineered.</h2>
              <p>Our sash and case windows are made entirely in our Edinburgh workshop using traditional joinery techniques. Every window is built to drawing — no two are exactly the same.</p>
              <p style={{ marginTop: '1rem' }}>We use slow-grown softwood and Accoya® for maximum dimensional stability, and offer the full range of glazing options from standard double-glazed units to heritage Fineo glass for listed buildings.</p>
              <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                <li>Made to your exact measurements and drawings</li>
                <li>Any paint or stain finish — RAL colours available</li>
                <li>Draught-sealed, spring-balanced, fully operational</li>
                <li>Pre-approved for Edinburgh City Council listed properties</li>
                <li>8–10 week lead time for supply-only orders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Glazing Options</h2>
          <div className="features-grid">
            <div className="feature-box"><h3>Standard Double Glazed</h3><p>Modern sealed unit in traditional timber frame. Best thermal performance for non-listed properties.</p></div>
            <div className="feature-box"><h3>Slimline Double Glazed</h3><p>Heritage-compliant slim-profile units for conservation areas. Near-invisible from the street.</p></div>
            <div className="feature-box"><h3>Fineo Vacuum Glass</h3><p>Ultra-thin heritage glass with outstanding thermal performance. Approved for listed buildings.</p></div>
            <div className="feature-box"><h3>Single Glazed</h3><p>Traditional single glazing with putty bars. Period-accurate for Category A listed properties.</p></div>
            <div className="feature-box"><h3>Secondary Glazing</h3><p>Retain original sashes, add internal secondary panel. Planning-friendly, thermally effective.</p></div>
            <div className="feature-box"><h3>Acoustic Glazing</h3><p>Laminated glass for noise reduction. Ideal for properties on busy streets or near airports.</p></div>
          </div>
        </div>
      </section>

      <section className="navy-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Book a free survey</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>We survey, measure, and quote at no charge. Most surveys completed within 5 working days of booking.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Book a Survey</Link>
        </div>
      </section>
    </>
  );
}
