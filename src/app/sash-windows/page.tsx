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
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Pic 1.jpeg')" }}>
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
            <Image src="/images/Pic 1.jpeg" alt="Sash window manufacture" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>Authentically made. Performance engineered.</h2>
              <p>Our sash and case windows are made entirely in our Edinburgh workshop using traditional joinery techniques. Every window is built to drawing — no two are exactly the same.</p>
              <p style={{ marginTop: '1rem' }}>We use slow-grown softwood and Accoya® for maximum dimensional stability, and offer the full range of glazing options from standard double-glazed units to heritage Fineo glass for listed buildings.</p>
              <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                <li>Made to your exact measurements and drawings</li>
                <li>Any paint or stain finish — RAL colours available</li>
                <li>Draught-sealed, steel-weighted, fully operational</li>
                <li>Recognised by Edinburgh City Council conservation officers</li>
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

      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              { q: 'How long do sash and case windows last?', a: 'Properly maintained timber sash and case windows can last 100+ years. Original Victorian windows are still in service across Edinburgh. The key is regular painting and draught-proofing to prevent moisture ingress.' },
              { q: 'Can I get double glazing in a sash and case window?', a: 'Yes. We offer standard double-glazed units, slim-line heritage units, and Fineo vacuum glass — all fitted into traditional timber sash frames. For most non-listed properties, standard double glazing is the best option.' },
              { q: 'Do I need planning permission for new sash windows?', a: 'For most properties, replacing like-for-like does not require planning permission. If your property is listed or in a conservation area, you will need to check with your local authority. We can advise on what is and isn\'t permitted for your specific property.' },
              { q: 'How long does it take to get new sash windows?', a: 'Supply-only orders typically take 8–10 weeks from order to delivery. Supply and fit projects take longer depending on programme. We\'ll give you a firm lead time at the point of quotation.' },
              { q: 'Do you supply sash windows to the trade?', a: 'Yes. We are a specialist trade supplier of sash and case windows to joiners, developers, and main contractors across Scotland and the UK. Contact our trade team for pricing and lead times.' },
              { q: 'What timber do you use for sash windows?', a: 'We use slow-grown European softwood as standard, and Accoya® for clients requiring maximum durability — particularly for coastal, exposed, or heritage properties. Accoya carries a 50-year above-ground guarantee.' },
              { q: 'Are your sash windows suitable for listed buildings?', a: 'Yes. We have extensive experience with Category A and B listed properties across Scotland. We can specify Fineo vacuum glass or slim-line heritage units where original profiles must be maintained. We work with conservation officers to ensure compliance.' },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary className="faq-question">{q}</summary>
                <div className="faq-answer"><p>{a}</p></div>
              </details>
            ))}
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
