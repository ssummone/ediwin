import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Listed Building Windows & Doors | Heritage Window Specialists Edinburgh',
  description: 'Specialist timber windows and doors for listed buildings and conservation areas. Pre-approved by Edinburgh City Council. Category A & B listed building specialists.',
};

export default function ListedBuildingsPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/craighouse sash and case project.jpg')" }}>
        <div className="hero-content">
          <h1>Windows &amp; Doors for Listed Buildings</h1>
          <p className="hero-sub">Specialist manufacture for Category A and B listed properties. Pre-approved by Edinburgh City Council. Compliant with Historic Environment Scotland guidance.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Survey</Link>
            <Link href="/contact" className="btn btn-white btn-lg">Speak to an Expert</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <span className="section-eyebrow">Heritage Specialists</span>
          <div className="two-col">
            <Image src="/images/Edinburgh property full sash and case refurbishment.JPG" alt="Listed building window refurbishment" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>Pre-approved for Edinburgh&apos;s listed properties</h2>
              <p>We are an approved supplier of heritage glazing units, with our products pre-approved by Edinburgh City Council for use in listed and conservation area properties across the city.</p>
              <p style={{ marginTop: '1rem' }}>This means faster planning approvals for your project — we&apos;ve already done the legwork so your conservation officer doesn&apos;t have to.</p>
              <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                <li>Pre-approved by Edinburgh City Council</li>
                <li>Compliant with Historic Environment Scotland guidance</li>
                <li>Category A and B listed building experience</li>
                <li>Fineo vacuum glass for ultra-thin heritage glazing</li>
                <li>Accoya timber — approved for heritage use</li>
                <li>Craighouse: 136 windows, Category A listed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Heritage Solutions</h2>
          <div className="features-grid">
            <div className="feature-box"><h3>Replica Sash Windows</h3><p>Exact replicas of original windows. Match existing profiles, mouldings, and hardware to planning specification.</p></div>
            <div className="feature-box"><h3>Heritage Secondary Glazing</h3><p>Retain original windows, add internal secondary panel. Planning-friendly thermal improvement.</p></div>
            <div className="feature-box"><h3>Fineo Glass</h3><p>Vacuum glass in an ultra-thin format. Virtually invisible from outside. Outstanding thermal performance.</p></div>
            <div className="feature-box"><h3>Accoya Doors</h3><p>Replica period doors in Accoya. 50-year guarantee. Accepted by Historic Environment Scotland.</p></div>
            <div className="feature-box"><h3>Conservation Area Work</h3><p>We understand conservation area requirements across Edinburgh, Glasgow, and historic Scottish towns.</p></div>
            <div className="feature-box"><h3>Planning Support</h3><p>We can provide product specifications and compliance documentation to support your planning application.</p></div>
          </div>
        </div>
      </section>

      <section className="navy-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Working on a listed building?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>Talk to our heritage team. We can advise on specification, planning, and the fastest route to approval for your project.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
