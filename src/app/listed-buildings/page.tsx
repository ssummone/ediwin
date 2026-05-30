import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Listed Building Windows & Doors | Heritage Window Specialists Edinburgh',
  description: 'Specialist timber windows and doors for listed buildings and conservation areas across Scotland. Category A & B listed building experience. Heritage glazing specialists.',
};

export default function ListedBuildingsPage() {
  return (
    <>
      <div className="hero">
        <video className="hero-video-bg" autoPlay muted loop playsInline preload="auto">
          <source src="/vids/Window_in_luxury_apartment_202605202142.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Heritage Glazing Specialists · Scotland</span>
          <h1>Sash and Case Windows for Listed Buildings</h1>
          <p className="hero-sub">Approved heritage glazing. Traditional timber manufacture. Survey to installation across Scotland and the UK.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Survey</Link>
            <Link href="tel:01506168204" className="btn btn-white btn-lg">📞 01506 168 204</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <span className="section-eyebrow">Heritage Specialists</span>
          <div className="two-col">
            <Image src="/images/Pic 4.jpeg" alt="Listed building window refurbishment" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>Experienced in Scotland&apos;s listed building requirements</h2>
              <p>We are an approved Accoya manufacturer and supplier of heritage glazing units, with extensive experience working on listed and conservation area properties across Edinburgh and Scotland. Please note that planning permission will still be required for your project — we work closely with conservation officers and can provide full product specifications and compliance documentation to support your application.</p>
              <p style={{ marginTop: '1rem' }}>Our products are recognised by Historic Environment Scotland and Edinburgh City Council, and we have a strong track record of successful planning outcomes on Category A and B listed properties.</p>
              <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                <li>Experienced with Edinburgh City Council conservation officers</li>
                <li>Compliant with Historic Environment Scotland guidance</li>
                <li>Category A and B listed building experience</li>
                <li>Fineo ultra-thin vacuum insulated glass for heritage properties</li>
                <li>Accoya timber — recognised for heritage use by HES</li>
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
            <div className="feature-box"><h3>Fineo Glass</h3><p>Ultra-thin vacuum insulated glass delivering outstanding thermal performance while preserving the appearance of traditional glazing.</p></div>
            <div className="feature-box"><h3>Accoya Doors</h3><p>Replica period doors in Accoya. 50-year guarantee. Accepted by Historic Environment Scotland.</p></div>
            <div className="feature-box"><h3>Conservation Area Work</h3><p>We understand conservation area requirements across Edinburgh, Glasgow, and historic Scottish towns.</p></div>
            <div className="feature-box"><h3>Planning Support</h3><p>We can provide product specifications and compliance documentation to support your planning application.</p></div>
          </div>
        </div>
      </section>

      <section className="light-bg" style={{ marginTop: 0 }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              { q: 'Do I need planning permission to replace windows in a listed building?', a: 'Yes — Listed Building Consent is required for any alterations to a listed building, including window replacement. Edinburgh City Council\'s conservation officers will assess any application. We can provide full product specifications and compliance documentation to support your application.' },
              { q: 'What glazing is approved for listed buildings in Scotland?', a: 'Historic Environment Scotland recognises several approved options including Fineo ultra-thin vacuum insulated glass, slim-line heritage double-glazed units, and secondary glazing. The most appropriate solution depends on your specific building and conservation officer\'s requirements.' },
              { q: 'What is Fineo glass?', a: 'Fineo is an ultra-thin vacuum insulated glass unit that fits within traditional single-glazed rebates. It delivers outstanding thermal performance while maintaining the appearance of the original single glazing from the outside. It is particularly suited to Category A listed buildings.' },
              { q: 'Can I have double glazing in a listed building?', a: 'In many cases yes, with the right specification. Slim-line heritage units and Fineo glass are designed to be approved by conservation officers. The key is using the right product and providing the correct documentation. We can guide you through this process.' },
              { q: 'Do you work on Category A listed buildings?', a: 'Yes. Our most significant heritage project was Craighouse — 136 windows for a Category A listed property, approved by Historic Environment Scotland. We have a strong track record on Scotland\'s most protected buildings.' },
              { q: 'How do I know if my property is listed?', a: 'You can check on the Canmore or Historic Environment Scotland databases. Category A is the highest level of protection (around 8% of listed buildings), Category B is the most common. Conservation areas — which don\'t confer listed status — also have their own restrictions.' },
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
          <h2 style={{ color: '#fff' }}>Working on a listed building?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>Talk to our heritage team. We can advise on specification, planning, and the fastest route to approval for your project.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
