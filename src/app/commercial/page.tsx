import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Commercial Window & Door Projects | Edinburgh Windows and Doors',
  description: 'Commercial-scale timber sash and case windows for developers, hotels, and institutions across the UK. Supply-only and full installation available.',
};

export default function CommercialPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Fraser Edinburgh commercial sash and case work.jpg')" }}>
        <div className="hero-content">
          <h1>Commercial Timber Windows &amp; Doors</h1>
          <p className="hero-sub">Large-scale manufacture for hotels, institutions, and commercial developments. Proven at scale. Supply-only or full installation across the UK.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Discuss Your Project</Link>
            <Link href="/trade" className="btn btn-white btn-lg">Trade Pricing</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <span className="section-eyebrow">Commercial Projects</span>
          <div className="two-col">
            <Image src="/images/Fraser suites edinburgh sash window refurbishment.jpg" alt="Fraser Suites Edinburgh" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>Proven at commercial scale</h2>
              <p>From boutique hotels to Category A listed institutions, we&apos;ve delivered complex, large-volume projects on time and on specification.</p>
              <ul className="feature-list">
                <li><strong>Fraser Suites Edinburgh:</strong> 156 windows, tight programme, hotel operational throughout</li>
                <li><strong>Craighouse:</strong> 136 windows, Category A listed, full heritage compliance</li>
                <li><strong>Trump Turnberry:</strong> Presidential Commission — coastal-grade Accoya throughout</li>
                <li><strong>QMile Developments:</strong> Multi-phase residential delivery programme</li>
                <li><strong>Stirling University:</strong> Heritage window repairs at scale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Commercial Services</h2>
          <div className="features-grid">
            <div className="feature-box"><h3>Supply Only</h3><p>Made-to-measure windows delivered to site. Your team installs. Flat-rate UK-wide delivery.</p></div>
            <div className="feature-box"><h3>Supply &amp; Install</h3><p>Full project management from survey to installation. Single point of contact throughout.</p></div>
            <div className="feature-box"><h3>Heritage Compliance</h3><p>Pre-approved by Edinburgh City Council for listed and conservation area properties.</p></div>
            <div className="feature-box"><h3>Programme Management</h3><p>Phased delivery to match your build programme. Proven on live hotel projects.</p></div>
            <div className="feature-box"><h3>Technical Specification</h3><p>We work directly with your architect and QS from specification through to handover.</p></div>
            <div className="feature-box"><h3>Accoya Certification</h3><p>Approved Accoya manufacturer. 50-year guarantee. Ideal for coastal and high-exposure sites.</p></div>
          </div>
        </div>
      </section>

      <section className="navy-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Ready to discuss your project?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>We work with developers, main contractors, architects, and hotel operators. Get in touch to discuss programme, specification, and pricing.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Start the Conversation</Link>
        </div>
      </section>
    </>
  );
}
