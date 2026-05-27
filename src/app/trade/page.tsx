import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Trade Account | Timber Windows Supplier to Trade',
  description: 'Supply your projects with Scottish-manufactured sash and case windows. UK-wide delivery. 8–10 week lead times on supply-only orders. Open a trade account today.',
  alternates: { canonical: 'https://www.edinburghwindowsanddoors.co.uk/trade' },
};

export default function TradePage() {
  return (
    <>
      {/* Hero */}
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Workshop.jpg')" }}>
        <div className="hero-content">
          <h1>Timber Sash &amp; Case Windows — Supplier to Trade</h1>
          <p className="hero-sub">Supply your projects with Scottish-manufactured sash and case windows. UK-wide delivery. 8–10 week lead times on supply-only orders.</p>
          <div className="hero-ctas">
            <a href="#trade-form" className="btn btn-primary btn-lg">Open Trade Account</a>
            <Link href="/contact" className="btn btn-white btn-lg">Request Quote</Link>
          </div>
        </div>
      </div>

      {/* Why Trade With Us */}
      <section>
        <div className="container">
          <div className="two-col">
            <Image src="/images/timber supplier to the trade uk wide.jpg" alt="UK-wide delivery map" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <div>
              <h2>A dependable manufacturing partner</h2>
              <p>We&apos;ve built our reputation supplying made-to-measure timber sash and case windows to Scotland&apos;s leading builders, developers, and architects. Our proven track record includes:</p>
              <ul className="feature-list">
                <li><strong>Fraser Suites Edinburgh:</strong> 156 windows on schedule</li>
                <li><strong>Craighouse Restoration:</strong> 136 windows for Category A listed property</li>
                <li><strong>QMile Developments:</strong> Large-scale residential projects</li>
                <li><strong>Ogilvie Construction:</strong> Multi-phase delivery contracts</li>
                <li><strong>SJS &amp; Cedar Developments:</strong> Bespoke architectural commissions</li>
              </ul>
              <p style={{ marginTop: '1.5rem' }}>Large order capacity. Bespoke to drawing. Reliable 8–10 week lead time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Features */}
      <section className="light-bg">
        <div className="container">
          <h2 className="section-title">Trade Partnership Features</h2>
          <div className="features-grid">
            <div className="feature-box"><h3>Bespoke Manufacturing</h3><p>Every window made to your exact specification and architectural drawings.</p></div>
            <div className="feature-box"><h3>8–10 Week Lead Times</h3><p>Reliable, predictable timescales. Supply-only orders throughout the UK.</p></div>
            <div className="feature-box"><h3>UK-Wide Delivery</h3><p>Flat-rate delivery across Scotland, England, Wales. Central Edinburgh location.</p></div>
            <div className="feature-box"><h3>Trade Accounts</h3><p>Preferential pricing, credit terms available for established contractors.</p></div>
            <div className="feature-box"><h3>Technical Support</h3><p>Expert advice on glazing, ironmongery, installation, and thermal performance.</p></div>
            <div className="feature-box"><h3>Scalable Capacity</h3><p>From single windows to large multi-project orders. Proven at scale.</p></div>
          </div>
        </div>
      </section>

      {/* Distribution + Trade Form */}
      <section id="trade-form">
        <div className="container">
          <div className="two-col" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            <div>
              <h2>Delivering across the UK from Edinburgh</h2>
              <p>Our central Edinburgh location means efficient delivery to projects across Scotland, England, Wales, and beyond. We supply to Glasgow, Aberdeen, London, Manchester, Birmingham, and everywhere in between.</p>
              <p style={{ marginTop: '1rem' }}><strong>Standard lead time:</strong> 8–10 weeks from specification to delivery. Rush orders available on request.</p>
              <p style={{ marginTop: '1rem' }}><strong>Delivery:</strong> Specialist timber transport with offloading at site. Flat-rate pricing across the UK.</p>
            </div>
            <div style={{ background: 'var(--cream)', padding: '2rem', borderRadius: '6px', borderTop: '4px solid var(--orange)', flex: 1 }}>
              <h2 style={{ marginBottom: '0.5rem' }}>Trade Enquiry Form</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--dark-grey)' }}>Tell us about your project and we&apos;ll get back with pricing and lead times within one working day.</p>
              <form action="https://formsubmit.co/sales@edinburghwindowsanddoors.co.uk" method="POST">
                <input type="hidden" name="_subject" value="New trade enquiry from edinburghwindowsanddoors.co.uk" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.edinburghwindowsanddoors.co.uk/trade?sent=true" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group"><label htmlFor="fname">First Name</label><input type="text" id="fname" name="fname" required /></div>
                  <div className="form-group"><label htmlFor="lname">Last Name</label><input type="text" id="lname" name="lname" required /></div>
                </div>
                <div className="form-group"><label htmlFor="company">Company Name</label><input type="text" id="company" name="company" required /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group"><label htmlFor="jobtitle">Job Title</label><input type="text" id="jobtitle" name="jobtitle" required /></div>
                  <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" name="email" required /></div>
                </div>
                <div className="form-group"><label htmlFor="phone">Phone</label><input type="tel" id="phone" name="phone" required /></div>
                <div className="form-group"><label htmlFor="projectname">Project Name</label><input type="text" id="projectname" name="projectname" required /></div>
                <div className="form-group">
                  <label htmlFor="projecttype">Project Type</label>
                  <select id="projecttype" name="projecttype" required>
                    <option value="">Select project type...</option>
                    <option value="residential">Residential Development</option>
                    <option value="commercial">Commercial</option>
                    <option value="heritage">Heritage / Listed Building</option>
                    <option value="newbuild">New Build</option>
                    <option value="mixed">Mixed Use</option>
                  </select>
                </div>
                <div className="form-group"><label htmlFor="quantity">Approximate Window Quantity</label><input type="number" id="quantity" name="quantity" placeholder="Number of windows" required /></div>
                <div className="form-group"><label htmlFor="notes">Additional Notes</label><textarea id="notes" name="notes" placeholder="Tell us about your project, any special requirements, glazing specifications, etc."></textarea></div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Enquiry</button>
                <p style={{ fontSize: '0.85rem', color: 'var(--dark-grey)', marginTop: '1rem', textAlign: 'center' }}>We&apos;ll respond within one working day with pricing and lead times.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Supply */}
      <section className="dark-bg" id="b2b-supply">
        <div className="container">
          <span className="section-eyebrow">Supply Only</span>
          <h2 className="section-title" style={{ color: '#fff' }}>B2B Trade Supply — Windows &amp; Doors for the Industry</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '720px', marginBottom: '2.5rem' }}>We offer a dedicated supply-only service for joinery firms, builders, and developers who need high-quality Scottish-manufactured products without installation.</p>
          <div className="features-grid">
            <div className="feature-box" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <h3 style={{ color: '#fff' }}>Timber Sash &amp; Case Windows</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Made to measure in our Edinburgh workshop. Bespoke to drawing, any finish, any size.</p>
            </div>
            <div className="feature-box" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <h3 style={{ color: '#fff' }}>Composite Doors for New Builds</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>A full range of composite doors for new-build residential and commercial projects. Competitive trade pricing.</p>
            </div>
            <div className="feature-box" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <h3 style={{ color: '#fff' }}>Accoya Timber Doors for Heritage</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Accoya-certified timber doors for listed buildings and conservation areas. 50-year above-ground guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Accounts */}
      <section className="light-bg" id="trade-accounts">
        <div className="container">
          <span className="section-eyebrow">Trade Accounts</span>
          <h2 className="section-title">Opening a Trade Account</h2>
          <div className="two-col">
            <div>
              <p>We work with joinery firms, main contractors, and developers on an account basis. Our trade relationships are built on consistency — consistent quality, consistent timescales, and consistent communication.</p>
              <p style={{ marginTop: '1.25rem' }}><strong>Payment terms:</strong></p>
              <ul className="feature-list" style={{ marginTop: '0.75rem' }}>
                <li><strong>Standard accounts:</strong> 50% payment upfront on order confirmation, balance on delivery.</li>
                <li><strong>Pay as you go:</strong> Available for single orders and new trade relationships — full payment upfront, no account required.</li>
              </ul>
              <p style={{ marginTop: '1.25rem' }}>We are an approved supplier of heritage glazing units, with our products pre-approved by Edinburgh City Council for use in listed and conservation area properties.</p>
              <p style={{ marginTop: '1.25rem' }}>To open a trade account or discuss your project, complete the enquiry form above or call us directly on <a href="tel:01506168204" style={{ color: 'var(--orange)', fontWeight: 600 }}>01506 168 204</a>.</p>
            </div>
            <div style={{ background: 'var(--cream)', padding: '2rem', borderRadius: '4px', borderLeft: '4px solid var(--orange)' }}>
              <h3 style={{ marginBottom: '1rem' }}>What you get with a trade account</h3>
              <ul className="feature-list">
                <li>Priority manufacturing slot</li>
                <li>Dedicated account contact</li>
                <li>Pre-approved heritage glazing units</li>
                <li>Technical specification support</li>
                <li>UK-wide delivery coordination</li>
                <li>Consistent 8–10 week lead times</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
