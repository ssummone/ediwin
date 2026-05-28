import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Composite Doors Edinburgh | Design Your Door Online | EW&D',
  description: 'High-performance composite doors supplied and fitted across Scotland. Design your door online with our door designer tool. Competitive pricing, full installation service.',
};

export default function CompositeDoors() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/composite door.png')" }}>
        <div className="hero-content">
          <h1>Composite Doors — Designed Online, Installed Perfectly</h1>
          <p className="hero-sub">High-performance composite doors designed to your exact specification. Use our online door designer, then let us handle supply and installation across Scotland.</p>
          <div className="hero-ctas">
            <a href="https://portico.portal.bm-touch.co.uk/launch/edinburgh-windows-and-doo462" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Design Your Door</a>
            <Link href="/contact" className="btn btn-white btn-lg">Get a Quote</Link>
          </div>
        </div>
      </div>

      {/* Door designer CTA */}
      <section style={{ background: 'var(--navy)', padding: '3rem 2rem' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--orange)' }}>Online Door Designer</span>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Design your door in minutes</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '1.5rem' }}>Use our interactive door designer to choose your style, colour, glazing, and hardware. See exactly what your door will look like before you order — then send us your design and we&apos;ll take care of everything.</p>
            <ul style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 2, listStyle: 'none', marginBottom: '2rem' }}>
              <li>✓ Hundreds of door styles and colour options</li>
              <li>✓ Choose glazing panels and decorative glass</li>
              <li>✓ Select hardware — handles, knockers, letterplates</li>
              <li>✓ Preview your design before ordering</li>
            </ul>
            <a href="https://portico.portal.bm-touch.co.uk/launch/edinburgh-windows-and-doo462" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Design Your Own Door →</a>
          </div>
        </div>
      </section>

      {/* Why composite */}
      <section className="light-bg">
        <div className="container">
          <span className="section-eyebrow">Why Composite?</span>
          <h2 className="section-title">The Benefits of Composite Doors</h2>
          <div className="features-grid">
            <div className="feature-box">
              <h3>Outstanding Security</h3>
              <p>Multi-point locking as standard. GRP composite skin over insulated foam core. Tough, resistant to warping and forced entry.</p>
            </div>
            <div className="feature-box">
              <h3>Low Maintenance</h3>
              <p>Never needs painting. Colour-fast UV-stable finish holds for decades. Just wipe clean — no sanding, no repainting.</p>
            </div>
            <div className="feature-box">
              <h3>Excellent Thermal Performance</h3>
              <p>Insulated foam core gives composite doors outstanding energy efficiency — far better than timber or uPVC alternatives.</p>
            </div>
            <div className="feature-box">
              <h3>Authentic Timber Look</h3>
              <p>Woodgrain finish is virtually indistinguishable from timber at a glance — without any of the maintenance requirements.</p>
            </div>
            <div className="feature-box">
              <h3>Wide Style Range</h3>
              <p>Hundreds of styles, colours, and glazing options. Traditional, contemporary, cottage, and bespoke designs available.</p>
            </div>
            <div className="feature-box">
              <h3>Fully Installed</h3>
              <p>We supply and fit. Full installation across Edinburgh, Glasgow, and Scotland. Guaranteed workmanship on all installations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply & install */}
      <section>
        <div className="container">
          <div className="two-col">
            <Image
              src="/images/composite door 3.png"
              alt="Composite door installation service"
              width={600}
              height={450}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <div>
              <h2>Supply and installation across Scotland</h2>
              <p>Edinburgh Windows &amp; Doors supplies and installs composite doors across Edinburgh, Glasgow, and throughout Scotland. Whether you&apos;re replacing a single front door or specifying doors for a new development, we&apos;ll handle the full process from design to installation.</p>
              <p style={{ marginTop: '1rem' }}>For trade customers, we offer competitive supply-only pricing on composite doors with fast lead times. Contact our trade team for a price list.</p>
              <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                <li>Full installation service Scotland-wide</li>
                <li>Trade supply available</li>
                <li>New build and replacement projects</li>
                <li>Residential and commercial</li>
                <li>Full guarantee on supply and installation</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <a href="https://portico.portal.bm-touch.co.uk/launch/edinburgh-windows-and-doo462" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Design Your Door</a>
                <Link href="/contact" className="btn btn-outline">Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              { q: 'How long does a composite door take to supply and install?', a: 'Lead times vary by style and specification, but typically 4–6 weeks from order to installation. Contact us for current lead times on your chosen door.' },
              { q: 'Can I design my own door online?', a: 'Yes. Use our online door designer to choose your style, colour, glazing, and hardware. Once you\'re happy with your design, send it to us and we\'ll provide a firm quote.' },
              { q: 'Do composite doors need planning permission?', a: 'For most properties, no planning permission is needed to replace a front door with a composite door. If your property is listed or in a conservation area, please check with your local planning authority first.' },
              { q: 'Are composite doors suitable for listed buildings?', a: 'Generally no — conservation officers will usually require a timber replica door for listed and conservation area properties. We manufacture Accoya timber doors that are approved for heritage use. See our Accoya Doors page.' },
              { q: 'Do you offer trade pricing on composite doors?', a: 'Yes. We offer competitive trade supply pricing on composite doors for builders, developers, and joiners. Contact our trade team for pricing.' },
              { q: 'What\'s the difference between composite and uPVC doors?', a: 'Composite doors have a solid timber core or insulated foam core with a GRP skin, giving them a much more authentic look and better performance than hollow uPVC doors. They are stronger, more secure, and better insulating.' },
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
          <h2 style={{ color: '#fff' }}>Ready to design your new door?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>Use our door designer, then contact us for a quote. We&apos;ll handle everything from specification to installation.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://portico.portal.bm-touch.co.uk/launch/edinburgh-windows-and-doo462" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Design Your Door</a>
            <Link href="/contact" className="btn btn-white btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
