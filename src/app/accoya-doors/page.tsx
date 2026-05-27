import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Accoya Timber Doors Edinburgh | 50-Year Guaranteed Timber Doors',
  description: 'Bespoke Accoya timber doors made in Edinburgh. 50-year above-ground guarantee. Approved for listed buildings and conservation areas across Scotland.',
};

export default function AccoyaDoorsPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Accoya timber front door bespoke.jpg')" }}>
        <div className="hero-content">
          <h1>Accoya Timber Doors — 50-Year Guarantee</h1>
          <p className="hero-sub">Bespoke Accoya timber doors made in Edinburgh. Dimensionally stable, rot-resistant, and approved for use in Scotland&apos;s most demanding heritage environments.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Get a Quote</Link>
            <Link href="/trade" className="btn btn-white btn-lg">Trade Supply</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="two-col">
            <Image src="/images/Accoya timber.jpeg" alt="Accoya timber" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>What is Accoya?</h2>
              <p>Accoya is a modified timber that outperforms hardwood in dimensional stability, rot resistance, and longevity. It is produced from sustainably sourced softwood through an acetylation process that transforms its molecular structure.</p>
              <p style={{ marginTop: '1rem' }}>The result is a timber with a 50-year above-ground guarantee — and 25-year below-ground — that accepts paint and finish better than any hardwood, and that is approved by Historic Environment Scotland for use in listed buildings.</p>
              <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                <li>50-year above-ground guarantee</li>
                <li>Class 1 durability — no further treatment needed</li>
                <li>Approved Accoya manufacturer</li>
                <li>Accepted by Edinburgh City Council for listed properties</li>
                <li>Excellent paint adhesion — minimal maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Door Styles</h2>
          <div className="features-grid">
            <div className="feature-box"><h3>Traditional Front Doors</h3><p>Period-accurate panel doors for Georgian and Victorian properties. Any configuration to drawing.</p></div>
            <div className="feature-box"><h3>French Doors</h3><p>Accoya French door sets for garden access, rear extensions, and conservatories.</p></div>
            <div className="feature-box"><h3>Bi-Fold Doors</h3><p>Timber bi-fold door sets. Warmer than aluminium, better looking, longer lasting.</p></div>
            <div className="feature-box"><h3>Heritage Doors</h3><p>Replicas of original doors for Category A and B listed buildings. Match existing ironmongery.</p></div>
            <div className="feature-box"><h3>Stable Doors</h3><p>Top and bottom opening stable doors in Accoya. Popular for coastal and rural properties.</p></div>
            <div className="feature-box"><h3>Commercial Entrance</h3><p>Heavy-duty Accoya entrance doors for hotels, offices, and commercial buildings.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <h2>Hardware &amp; Ironmongery</h2>
              <p>We supply and fit a full range of traditional and contemporary door hardware to complement every Accoya door we make.</p>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                <li>Brass, bronze, stainless steel, and black ironmongery</li>
                <li>Multi-point locking systems as standard</li>
                <li>Heritage pulls, knockers, and letterplates</li>
                <li>Coastal-grade hardware for exposed locations</li>
              </ul>
            </div>
            <Image src="/images/Accoya door hardware bronze.jpg" alt="Accoya door hardware" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
          </div>
        </div>
      </section>

      <section className="navy-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Ready to specify an Accoya door?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>We work from your drawings or can help you design from scratch. Contact us to discuss specification, finish, and lead times.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
