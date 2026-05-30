import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Heritage Restorations Edinburgh | Slim-Line Double Glazing | EW&D',
  description: 'Heritage slim-line double glazed units for listed buildings and conservation areas in Edinburgh. Slimtech Heritage units, draught proofing, and full timber window refurbishments using traditional techniques.',
};

export default function HeritageRestorationsPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Helen 3.jpg')" }}>
        <div className="hero-content">
          <span className="hero-eyebrow">Heritage &amp; Conservation</span>
          <h1>Heritage Restorations — Sash &amp; Case Windows</h1>
          <p className="hero-sub">Specialist restoration and slim-line heritage double glazing for listed buildings and conservation area properties across Edinburgh and Scotland.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Survey</Link>
            <Link href="tel:01506168204" className="btn btn-white btn-lg">📞 01506 168 204</Link>
          </div>
        </div>
      </div>

      {/* Heritage glazing intro */}
      <section>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            <div>
              <span className="section-eyebrow">Slim-Line Heritage Glazing</span>
              <h2>Heritage double glazed units for listed buildings</h2>
              <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Heritage double glazed units are designed for properties in conservation areas, as well as listed buildings. Slimtech Heritage double glazed units are designed to be installed with our timber framed windows.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Heritage units can also be put into existing windows if the condition of the windows is good. This means we can preserve the historic timber in old windows that are likely to be installed in most listed buildings in Edinburgh and surrounding areas.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Our heritage double glazed units are designed with a 4mm, 6mm or 8mm cavity in the unit. For the majority of jobs in Edinburgh we recommend a 6mm spacer with 4mm glass. This results in a total unit size of 14mm. Another popular option is units with a total depth of 12mm.
              </p>
            </div>
            <div>
              <Image
                src="/images/Helen 3.jpg"
                alt="Heritage sash window restoration Edinburgh"
                width={560}
                height={420}
                style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unit specs */}
      <section className="light-bg">
        <div className="container">
          <span className="section-eyebrow">Specification</span>
          <h2 className="section-title">Heritage Unit Options</h2>
          <div className="features-grid">
            <div className="feature-box">
              <h3>12mm Total Unit</h3>
              <p>Our slimmest option — ideal where rebate depth is restricted. Suitable for most single-glazed sash window frames in Edinburgh tenements and Georgian properties.</p>
            </div>
            <div className="feature-box">
              <h3>14mm Total Unit (Recommended)</h3>
              <p>Our most popular specification — 6mm spacer with 4mm glass on each face. Best balance of thermal performance and rebate compatibility for listed buildings.</p>
            </div>
            <div className="feature-box">
              <h3>16mm Total Unit</h3>
              <p>8mm cavity option for improved thermal performance where rebate depth allows. Suitable for larger sash frames and some Victorian properties.</p>
            </div>
            <div className="feature-box">
              <h3>Existing Window Compatibility</h3>
              <p>Units can be retro-fitted into existing timber frames if the timber is in sound condition. We assess each window individually before recommending a specification.</p>
            </div>
            <div className="feature-box">
              <h3>Conservation Area Approved</h3>
              <p>Slim-line heritage units are designed to comply with conservation area and listed building guidelines, maintaining the authentic single-glazed appearance.</p>
            </div>
            <div className="feature-box">
              <h3>New Matching Frames</h3>
              <p>If rot or decay means the original frame cannot be retained, we manufacture new timber sash frames designed to exactly match the original profile and detailing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            <div>
              <Image
                src="/images/wooden window replacement.jpeg"
                alt="Edinburgh Windows and Doors heritage sash restoration"
                width={560}
                height={420}
                style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              />
            </div>
            <div>
              <span className="section-eyebrow">Our Services</span>
              <h2>Comprehensive heritage restoration services</h2>
              <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Edinburgh Windows and Doors offer a number of services that can help with heat retention in listed buildings. We offer a comprehensive draught proofing service — all of our full refurbishments come with draught proofing included.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
                We also offer a double glazing service if the windows are able to support the new glass. We will evaluate your windows and check the timber is in a good enough condition to support the new glass.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We try to retain as much of the original window as possible. We use traditional techniques and products such as <strong>linseed putty</strong> and <strong>linseed oil mastic</strong> — the same materials used in the original construction.
              </p>
              <ul className="feature-list">
                <li>Heritage slim-line double glazing (Slimtech)</li>
                <li>Draught proofing — included in all full refurbishments</li>
                <li>Timber window overhaul and repair</li>
                <li>Full window replacement to original specification</li>
                <li>Linseed putty and linseed oil mastic finishing</li>
                <li>Survey and assessment of existing windows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* External resources */}
      <section className="light-bg">
        <div className="container">
          <span className="section-eyebrow">Further Advice</span>
          <h2 className="section-title">Heritage &amp; Conservation Resources</h2>
          <p style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            Looking for further guidance on listed buildings, conservation areas, and heritage window requirements? These organisations provide authoritative advice.
          </p>
          <div className="features-grid">
            <a href="https://www.historicenvironment.scot" target="_blank" rel="noopener noreferrer" className="feature-box" style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}>
              <h3 style={{ color: 'var(--navy)' }}>Historic Environment Scotland ↗</h3>
              <p>The lead public body for Scotland&apos;s historic environment. Guidance on listed buildings, scheduled monuments, and conservation area consents.</p>
            </a>
            <a href="https://www.legislation.gov.uk/ukpga/1990/9/contents" target="_blank" rel="noopener noreferrer" className="feature-box" style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}>
              <h3 style={{ color: 'var(--navy)' }}>Planning (Listed Buildings) Act 1990 ↗</h3>
              <p>The primary legislation governing listed buildings and conservation areas in the UK. Essential reading for anyone working on or owning a listed property.</p>
            </a>
            <a href="https://www.spab.org.uk" target="_blank" rel="noopener noreferrer" className="feature-box" style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}>
              <h3 style={{ color: 'var(--navy)' }}>SPAB — Society for the Protection of Ancient Buildings ↗</h3>
              <p>The UK&apos;s oldest and largest building conservation organisation. Technical advice, training, and guidance on the repair of historic buildings.</p>
            </a>
            <a href="https://www.lpoc.co.uk" target="_blank" rel="noopener noreferrer" className="feature-box" style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}>
              <h3 style={{ color: 'var(--navy)' }}>Listed Property Owners Club ↗</h3>
              <p>A membership organisation representing the owners of listed buildings across the UK. Practical advice, insurance, and access to specialist tradespeople.</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              { q: 'Do I need planning permission to add double glazing to a listed building?', a: 'Listed Building Consent is required for most alterations to a listed building, including changes to windows. Heritage slim-line double glazing is designed to be sympathetic to the original character but you should always consult your local planning authority or Historic Environment Scotland before proceeding.' },
              { q: 'What is a heritage or slim-line double glazed unit?', a: 'A heritage double glazed unit is a very thin sealed unit — typically 12mm or 14mm total thickness — designed to fit into existing single-glazed timber frames. Slimtech Heritage units are made specifically to match the appearance of original single glazing while providing improved thermal and acoustic performance.' },
              { q: 'Can you install heritage glazing into my existing windows?', a: 'In many cases yes — provided the timber frame is in sound condition. We inspect every window before recommending any glazing work. If the timber is rotten or decayed we may recommend a full restoration or new matching replacement frame before fitting heritage glazing.' },
              { q: 'What is draught proofing and is it included?', a: 'Draught proofing involves fitting seals to the meeting rail, staff bead, and parting bead of your sash windows to eliminate cold air infiltration. It is included as standard in all of our full window refurbishments and can also be installed as a standalone service.' },
              { q: 'What traditional materials do you use?', a: 'We use linseed putty and linseed oil mastic — the same materials used historically in timber window construction. These products remain flexible over time and are compatible with the movement characteristics of traditional timber frames.' },
              { q: 'Can you replace windows in a listed building to match the originals?', a: 'Yes. If existing windows are beyond repair due to rot, we can manufacture new timber sash and case windows designed to exactly match the original profile, moulding, and detailing. We use traditional joinery techniques to ensure the replacement is in keeping with the character of the building.' },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary className="faq-question">{q}</summary>
                <div className="faq-answer"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="navy-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Book a heritage survey</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>We assess every property individually. Contact us to arrange a free survey and we&apos;ll advise on the best approach for your listed building or conservation area property.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Survey</Link>
            <Link href="/listed-buildings" className="btn btn-white btn-lg">Listed Buildings Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
