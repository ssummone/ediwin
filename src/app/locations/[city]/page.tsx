import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { locations, getLocationBySlug } from '@/data/locations';

export async function generateStaticParams() {
  return locations.map(l => ({ city: l.slug }));
}

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) return {};
  return {
    title: `Sash Windows ${loc.city} | Timber Windows & Doors | Edinburgh Windows & Doors`,
    description: `Bespoke timber sash and case windows, Accoya doors, and secondary glazing in ${loc.city}. Scottish manufacturer. Survey to installation across ${loc.region}.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) notFound();

  return (
    <>
      {/* Hero */}
      <div className="hero-internal" style={{ backgroundImage: `url('${loc.heroImage}')` }}>
        <div className="hero-content">
          <span className="hero-eyebrow">Serving {loc.city}</span>
          <h1>Sash Windows &amp; Timber Doors — {loc.city}</h1>
          <p className="hero-sub">Bespoke timber sash and case windows, Accoya doors, and secondary glazing. Manufactured in Edinburgh. Supplied and installed across {loc.city} and {loc.region}.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Survey</Link>
            <Link href="tel:01506168204" className="btn btn-white btn-lg">📞 01506 168 204</Link>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="section-eyebrow">{loc.city}</span>
              <h2>Window and door specialists serving {loc.city}</h2>
              {loc.intro.map((para, i) => (
                <p key={i} style={{ marginBottom: '1.25rem', lineHeight: 1.8 }}>{para}</p>
              ))}
              <p style={{ lineHeight: 1.8 }}>{loc.localContext}</p>
            </div>
            <Image
              src={loc.heroImage}
              alt={`Sash windows ${loc.city}`}
              width={600}
              height={480}
              style={{ width: '100%', height: 'auto', borderRadius: '4px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="light-bg">
        <div className="container">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">What we offer in {loc.city}</h2>
          <div className="features-grid">
            <div className="feature-box">
              <h3>Sash &amp; Case Windows</h3>
              <p>Bespoke timber sash and case windows manufactured to your exact specification. Any profile, any glazing option. <Link href="/sash-windows" style={{ color: 'var(--orange)' }}>Learn more →</Link></p>
            </div>
            <div className="feature-box">
              <h3>Accoya Timber Doors</h3>
              <p>50-year guaranteed Accoya timber doors. Bespoke joinery to drawing. Ideal for heritage and coastal properties. <Link href="/accoya-doors" style={{ color: 'var(--orange)' }}>Learn more →</Link></p>
            </div>
            <div className="feature-box">
              <h3>Secondary Glazing</h3>
              <p>Retain original windows. Add thermal and acoustic performance. Ideal for listed buildings. <Link href="/secondary-glazing" style={{ color: 'var(--orange)' }}>Learn more →</Link></p>
            </div>
            <div className="feature-box">
              <h3>Composite Doors</h3>
              <p>High-performance composite doors. Design online with our door designer tool. <Link href="/composite-doors" style={{ color: 'var(--orange)' }}>Learn more →</Link></p>
            </div>
            <div className="feature-box">
              <h3>Heritage &amp; Listed Buildings</h3>
              <p>Specialist glazing for listed and conservation area properties. Fineo vacuum glass, slim-line units. <Link href="/listed-buildings" style={{ color: 'var(--orange)' }}>Learn more →</Link></p>
            </div>
            <div className="feature-box">
              <h3>Trade Supply</h3>
              <p>Supply-only pricing for joiners, developers, and main contractors. Competitive lead times. <Link href="/trade" style={{ color: 'var(--orange)' }}>Learn more →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation area note */}
      {loc.conservation && (
        <section>
          <div className="container">
            <div className="two-col" style={{ alignItems: 'center' }}>
              <div>
                <span className="section-eyebrow">Listed Buildings &amp; Conservation Areas</span>
                <h2>Heritage expertise in {loc.city}</h2>
                <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>{loc.conservation}</p>
                <p style={{ lineHeight: 1.8 }}>We provide full product specifications and compliance documentation to support planning applications. Our Fineo vacuum glass and slim-line heritage glazing units are designed to meet the requirements of conservation officers across Scotland and England.</p>
                <Link href="/listed-buildings" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Heritage Glazing →</Link>
              </div>
              <Image
                src="/images/Edinburgh property full sash and case refurbishment.JPG"
                alt={`Listed building windows ${loc.city}`}
                width={600}
                height={450}
                style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Nearby areas */}
      <section className="light-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow">Coverage</span>
          <h2 className="section-title">Areas we cover near {loc.city}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginTop: '2rem' }}>
            {[loc.city, ...loc.nearbyAreas].map(area => (
              <span key={area} className="project-tag" style={{ fontSize: '0.95rem', padding: '0.5rem 1.25rem' }}>{area}</span>
            ))}
          </div>
          <p style={{ marginTop: '2rem', color: 'var(--light-grey)', maxWidth: '600px', margin: '2rem auto 0' }}>
            Don&apos;t see your area? We supply and install across all of {loc.region}. <Link href="/contact" style={{ color: 'var(--orange)' }}>Get in touch</Link> to discuss your project.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions — {loc.city}</h2>
          <div className="faq-list">
            {loc.faqs.map(({ q, a }) => (
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
          <h2 style={{ color: '#fff' }}>Get a free quote for {loc.city}</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Survey, measure, and quote at no charge. Contact us to discuss your project in {loc.city}.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Survey</Link>
            <Link href="tel:01506168204" className="btn btn-white btn-lg">📞 01506 168 204</Link>
          </div>
        </div>
      </section>
    </>
  );
}
