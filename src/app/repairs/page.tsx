import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sash Window Repairs Edinburgh | Timber Window Renovation',
  description: 'Expert sash and case window repairs in Edinburgh and across Scotland. Draught-sealing, cord replacement, rot repair, full overhaul. Same-day quotes.',
};

export default function RepairsPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Frasers Edinburgh window repairs.jpg')" }}>
        <div className="hero-content">
          <h1>Sash &amp; Case Window Repairs</h1>
          <p className="hero-sub">From draught-sealing to full overhaul. We repair, restore, and renovate timber sash windows across Edinburgh and Scotland.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Get a Repair Quote</Link>
            <Link href="/contact" className="btn btn-white btn-lg">Book a Survey</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <span className="section-eyebrow">Window Repairs</span>
          <div className="two-col">
            <Image src="/images/sash and case cill.jpeg" alt="Sash window repair" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>Repair first. Replace only when necessary.</h2>
              <p>Many Edinburgh sash windows that appear to need replacement can be repaired and restored to full working order. We always assess repair viability before recommending replacement — it&apos;s better for your budget and for the building.</p>
              <p style={{ marginTop: '1rem' }}>Our repair team are specialists in traditional timber joinery. We carry out everything from minor cord replacements to full frame and sill rebuilds.</p>
              <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                <li>Sash cord and pulley replacement</li>
                <li>Draught-sealing with brush or compression seals</li>
                <li>Rotten sill and frame repair or replacement</li>
                <li>Glass replacement and re-glazing</li>
                <li>Paint stripping and full redecoration</li>
                <li>Balance weight adjustment and alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Repair Services</h2>
          <div className="features-grid">
            <div className="feature-box"><h3>Draught Sealing</h3><p>Brush seals to meeting rail, stiles, and head. Dramatically reduces heat loss. No planning required.</p></div>
            <div className="feature-box"><h3>Cord Replacement</h3><p>Replace broken or frayed sash cords. Restore smooth, counterbalanced operation.</p></div>
            <div className="feature-box"><h3>Rot Repair</h3><p>Cut out and replace rotted sections with Accoya or treated softwood. Epoxy consolidation also available.</p></div>
            <div className="feature-box"><h3>Re-Glazing</h3><p>Replace cracked or failed units. Upgrade to double glazing where permitted.</p></div>
            <div className="feature-box"><h3>Full Overhaul</h3><p>Strip, repair, re-cord, re-glaze, seal, and redecorate. Fully restored to period standard.</p></div>
            <div className="feature-box"><h3>Emergency Repairs</h3><p>Broken windows, failed locks, or security issues. We aim to respond within 24 hours.</p></div>
          </div>
        </div>
      </section>

      <section className="navy-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Get a repair quote</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>Send us photos and a description of the problem and we&apos;ll give you a same-day indication of likely costs.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
