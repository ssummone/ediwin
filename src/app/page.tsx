import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Edinburgh Windows and Doors | Scottish Timber Sash & Case Windows',
  description: 'Scottish timber sash and case window manufacturer. Bespoke windows and Accoya doors made in Edinburgh, delivered UK-wide. Book a free survey today.',
  alternates: { canonical: 'https://www.edinburghwindowsanddoors.co.uk/' },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <video className="hero-video-bg" autoPlay muted loop playsInline preload="auto">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-eyebrow">Scottish Timber Manufacturer — Est. 2019</span>
          <h1>Timber Sash &amp; Case Windows. Made in Scotland.</h1>
          <p className="hero-sub">Bespoke manufacture for homeowners, architects, and trade partners across the UK. Traditional craftsmanship. Modern performance.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Survey</Link>
            <Link href="/trade" className="btn btn-white btn-lg">Request Trade Pricing</Link>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-items">
          <div className="trust-item">Made in Britain</div>
          <div className="trust-item">Accoya Approved Manufacturer</div>
          <div className="trust-item">10,000+ Windows Installed</div>
          <div className="trust-item">Presidential Seal of Approval</div>
          <div className="trust-item">5-Star Rated</div>
        </div>
      </div>

      {/* Buyer Types */}
      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Built for Every Project</h2>
          <div className="buyer-grid">
            <Link href="/contact" className="buyer-card">
              <h3>Homeowners</h3>
              <p>Bespoke sash and case windows for your Edinburgh home. Survey to installation.</p>
            </Link>
            <Link href="/contact" className="buyer-card">
              <h3>Architects &amp; Specifiers</h3>
              <p>Made-to-drawing timber windows for your residential and commercial projects.</p>
            </Link>
            <Link href="/trade" className="buyer-card">
              <h3>Builders &amp; Contractors</h3>
              <p>Trade supply with 8–10 week lead times and bespoke manufacturing.</p>
            </Link>
            <Link href="/trade" className="buyer-card">
              <h3>Developers</h3>
              <p>Large-scale projects delivered on time and on budget. Proven track record.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products">
        <div className="container">
          <span className="section-eyebrow">What We Make</span>
          <h2 className="section-title">Bespoke Timber Windows &amp; Doors</h2>
          <div className="products-grid">
            <Link href="/sash-windows" className="product-card">
              <Image src="/images/sash and case windows edinburgh.JPG" alt="Sash and case windows" fill style={{ objectFit: 'cover' }} />
              <div className="product-overlay">
                <h3>Sash &amp; Case Windows</h3>
                <p>Authentic period style, improved energy efficiency</p>
              </div>
            </Link>
            <Link href="/accoya-doors" className="product-card">
              <Image src="/images/Accoya timber front door bespoke.jpg" alt="Accoya timber doors" fill style={{ objectFit: 'cover' }} />
              <div className="product-overlay">
                <h3>Accoya Timber Doors</h3>
                <p>50-year guarantee, performance engineered</p>
              </div>
            </Link>
            <Link href="/secondary-glazing" className="product-card">
              <Image src="/images/Fraser suites edinburgh sash window refurbishment.jpg" alt="Secondary glazing" fill style={{ objectFit: 'cover' }} />
              <div className="product-overlay">
                <h3>Secondary Glazing</h3>
                <p>Heritage compliant, removable panels</p>
              </div>
            </Link>
            <Link href="/contact" className="product-card">
              <Image src="/images/Accoya door.jpeg" alt="Composite doors" fill style={{ objectFit: 'cover' }} />
              <div className="product-overlay">
                <h3>Composite Doors</h3>
                <p>Modern performance with classic style</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trade CTA */}
      <section className="navy-bg">
        <div className="container">
          <h2>Trade Partners Across the UK</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
            We supply made-to-measure timber sash and case windows to builders, developers, and architects. Open a trade account for priority pricing and dedicated support.
          </p>
          <div className="trade-feature-boxes">
            <div className="trade-feature-item"><h4>UK-Wide Delivery</h4></div>
            <div className="trade-feature-item"><h4>8–10 Week Lead Times</h4></div>
            <div className="trade-feature-item"><h4>Bespoke to Drawing</h4></div>
            <div className="trade-feature-item"><h4>Dedicated Trade Team</h4></div>
            <Link href="/trade" className="trade-feature-item trade-feature-cta">
              <h4>Open a Trade Account</h4>
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturer Story */}
      <section className="light-bg">
        <div className="container">
          <span className="section-eyebrow">Scottish Manufacture</span>
          <div className="two-col">
            <Image src="/images/Workshop.jpg" alt="Our workshop" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>We don&apos;t just supply windows. We build them.</h2>
              <p>Edinburgh-based timber window and door manufacturer since 2019. Specialising in sash and case windows for residential, heritage, and commercial projects. UK-wide delivery. Every window made to measure in our Edinburgh workshop.</p>
              <div className="stats-grid">
                <div className="stat-box"><h3>10,000+</h3><p>Windows Made</p></div>
                <div className="stat-box"><h3>156</h3><p>Fraser Suites</p></div>
                <div className="stat-box"><h3>50yr</h3><p>Accoya Guarantee</p></div>
                <div className="stat-box"><h3>8–10wk</h3><p>Trade Lead Time</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="dark-bg">
        <div className="container">
          <span className="section-eyebrow">Proven at Scale</span>
          <h2 className="section-title">Projects That Prove Our Standard</h2>
          <div className="projects-grid-featured">
            <Link href="/projects" className="project-tile project-tile-large">
              <Image src="/images/Fraser suites edinburgh sash window refurbishment.jpg" alt="Fraser Suites" fill style={{ objectFit: 'cover' }} />
              <div className="project-overlay">
                <h3>Fraser Suites Edinburgh</h3>
                <p>156 windows restored</p>
              </div>
            </Link>
            <Link href="/projects" className="project-tile project-tile-small">
              <Image src="/images/craighouse sash and case project.jpg" alt="Craighouse" fill style={{ objectFit: 'cover' }} />
              <div className="project-overlay">
                <h3>Craighouse Restoration</h3>
                <p>136 windows</p>
              </div>
            </Link>
            <Link href="/projects" className="project-tile project-tile-small">
              <Image src="/images/Edinburgh windows and doors trump turnberry.jpg" alt="Trump Turnberry" fill style={{ objectFit: 'cover' }} />
              <div className="project-overlay">
                <h3>Trump Turnberry</h3>
                <p>Presidential Commission</p>
              </div>
            </Link>
          </div>
          <p style={{ marginTop: '2rem', textAlign: 'right' }}>
            <Link href="/projects" style={{ color: 'var(--orange)', fontWeight: 600 }}>View all projects →</Link>
          </p>
        </div>
      </section>

      {/* Accreditations */}
      <div className="accreditations">
        <Image src="/images/edinburgh windows and doors made in britain.jpg" alt="Made in Britain" width={200} height={80} style={{ height: '80px', width: 'auto' }} />
        <Image src="/images/Accoya_Affiliate mark_Approved manufacturer_WHITE ON GREEN_RGB.jpg" alt="Accoya Approved" width={200} height={80} style={{ height: '80px', width: 'auto' }} />
      </div>
    </>
  );
}
