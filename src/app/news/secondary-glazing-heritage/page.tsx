import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Secondary Glazing for Heritage Sash Windows — The Complete Guide',
  description: 'Everything you need to know about secondary glazing for listed buildings and conservation areas in Edinburgh. Planning, performance, and what to expect.',
};

export default function SecondaryGlazingHeritagePage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Fraser suites edinburgh sash window refurbishment.jpg')" }}>
        <div className="hero-content">
          <span className="hero-eyebrow">Heritage · March 2026</span>
          <h1>Secondary Glazing for Heritage Sash Windows — The Complete Guide</h1>
        </div>
      </div>

      <section>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>

            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--dark)', marginBottom: '2rem' }}>
              If you own a listed building or live in a conservation area, replacing your original sash windows may not be an option. Secondary glazing offers a planning-approved route to improved comfort without touching your originals.
            </p>

            <h2>What is secondary glazing?</h2>
            <p>Secondary glazing is an internal panel fitted to the room-side of your existing window reveal. It creates a sealed air gap between the original window and the new panel — which is where the thermal and acoustic performance comes from.</p>
            <p>Unlike replacement windows, secondary glazing doesn&apos;t alter the external appearance of your property. This is why planning authorities and conservation officers approve it even for Category A listed buildings.</p>

            <h2>Is secondary glazing effective?</h2>
            <p>Yes — significantly so. A well-fitted secondary glazing system can:</p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
              <li>Reduce heat loss through windows by up to 60%</li>
              <li>Cut noise levels by up to 80% with acoustic glass</li>
              <li>Eliminate draughts completely</li>
              <li>Reduce condensation on original frames</li>
            </ul>

            <h2>Secondary glazing vs replacement windows for listed buildings</h2>
            <p>In most cases, you cannot replace windows in a Category A or B listed building without Listed Building Consent — and even with consent, your conservation officer will typically require like-for-like replacement that closely matches the original.</p>
            <p>Secondary glazing sidesteps this entirely. Because it&apos;s an internal addition that doesn&apos;t alter the fabric of the building, it typically doesn&apos;t require planning permission at all — though we always recommend checking with your local planning authority first.</p>

            <h2>What types of secondary glazing are available?</h2>
            <p>We offer six configurations to suit different window types and access requirements:</p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
              <li><strong>Lift-out panels</strong> — simplest and most affordable</li>
              <li><strong>Horizontal sliding</strong> — most popular, allows ventilation</li>
              <li><strong>Vertical sliding</strong> — mirrors the operation of sash windows</li>
              <li><strong>Side-hung casement</strong> — for wider openings</li>
              <li><strong>Acoustic grade</strong> — laminated glass for maximum noise reduction</li>
              <li><strong>Thermal grade</strong> — argon-filled for maximum heat retention</li>
            </ul>

            <h2>Edinburgh-specific approvals</h2>
            <p>We are an approved supplier of secondary glazing to Edinburgh City Council, and our products are pre-approved for use in the city&apos;s listed buildings and conservation areas. This simplifies the process considerably for Edinburgh homeowners and contractors.</p>

            <div style={{ background: 'var(--cream)', padding: '2rem', borderRadius: '4px', borderLeft: '4px solid var(--orange)', marginTop: '2.5rem' }}>
              <h3>Ready to improve your listed building?</h3>
              <p>We survey and quote at no cost. Most surveys are completed within 5 working days of booking.</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Book a Free Survey</Link>
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
