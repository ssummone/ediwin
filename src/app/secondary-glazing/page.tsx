import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Secondary Glazing Edinburgh | Heritage-Compliant Secondary Glazing',
  description: 'Secondary glazing for listed buildings and conservation areas in Edinburgh. Removable, thermally efficient, and planning-friendly. Survey to installation.',
};

export default function SecondaryGlazingPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Fraser suites edinburgh sash window refurbishment.jpg')" }}>
        <div className="hero-content">
          <h1>Secondary Glazing for Listed Buildings</h1>
          <p className="hero-sub">Retain your original windows. Add thermal and acoustic performance. Planning-friendly secondary glazing for Edinburgh&apos;s heritage properties.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Survey</Link>
            <Link href="/contact" className="btn btn-white btn-lg">Get a Quote</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="two-col">
            <Image src="/images/sash and case windows edinburgh.JPG" alt="Secondary glazing" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>Keep your original windows. Improve your comfort.</h2>
              <p>Secondary glazing is the planning-approved solution for listed buildings and conservation areas where replacing original windows isn&apos;t permitted — or isn&apos;t desired.</p>
              <p style={{ marginTop: '1rem' }}>An internal secondary panel is fitted to the existing window reveal. It is removable for summer months and maintenance, and invisible from outside.</p>
              <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                <li>No planning permission required in most cases</li>
                <li>Improves U-value without replacing original windows</li>
                <li>Reduces noise by up to 80%</li>
                <li>Removable — no permanent modification to the building</li>
                <li>Recognised by Edinburgh City Council conservation officers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Secondary Glazing Options</h2>
          <div className="features-grid">
            <div className="feature-box"><h3>Lift-Out Panels</h3><p>Simple, removable panels. Lowest cost option. Suitable for infrequently opened windows.</p></div>
            <div className="feature-box"><h3>Horizontal Sliding</h3><p>Two panels slide past each other. Full ventilation access maintained. Most popular option.</p></div>
            <div className="feature-box"><h3>Vertical Sliding</h3><p>Mirrors the operation of original sash windows. Perfect for traditional sash and case properties.</p></div>
            <div className="feature-box"><h3>Side-Hung Casement</h3><p>Hinged on one side, opens like a door. Ideal for wide windows or French door openings.</p></div>
            <div className="feature-box"><h3>Acoustic Grade</h3><p>Laminated glass with large air gap. Significant noise reduction. Ideal for city-centre properties.</p></div>
            <div className="feature-box"><h3>Thermal Grade</h3><p>Argon-filled sealed unit in secondary position. Maximum thermal improvement for period homes.</p></div>
          </div>
        </div>
      </section>

      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              { q: 'Does secondary glazing need planning permission?', a: 'In most cases, no planning permission is needed for secondary glazing. Because the original windows are not altered and the secondary panels are on the inside, it is generally accepted even in conservation areas and listed buildings. Always confirm with your local authority for listed buildings.' },
              { q: 'Can secondary glazing be removed?', a: 'Yes — that\'s one of its key advantages. Our secondary glazing is designed to be removable, making it ideal for the summer months or for maintenance purposes. It can be taken down and stored when not needed.' },
              { q: 'How much noise does secondary glazing reduce?', a: 'Our acoustic-grade secondary glazing can reduce noise by up to 80%, making it one of the most effective solutions for city-centre properties or those near busy roads. The large air gap between the original window and the secondary panel is key to this performance.' },
              { q: 'Will secondary glazing affect the look of my windows?', a: 'Secondary glazing is fitted internally and is invisible from outside. Inside, slim aluminium frames are used which are designed to be as unobtrusive as possible. Most clients find them barely noticeable.' },
              { q: 'Is secondary glazing better than replacing my windows?', a: 'For listed buildings and conservation area properties, secondary glazing is often the only compliant option. Even where replacement is permitted, secondary glazing can be a cost-effective way to dramatically improve thermal and acoustic performance while retaining original windows.' },
              { q: 'Do you install secondary glazing Scotland-wide?', a: 'Yes. We install secondary glazing across Edinburgh, Glasgow, and throughout Scotland. Contact us to discuss your property and arrange a survey.' },
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
          <h2 style={{ color: '#fff' }}>Survey your property</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>We survey, measure, and quote at no cost. Most surveys completed within 5 working days of booking.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Survey</Link>
        </div>
      </section>
    </>
  );
}
