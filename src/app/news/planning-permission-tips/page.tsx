import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Planning Permission for Window Replacement in Edinburgh',
  description: 'Do you need planning permission to replace windows in Edinburgh? Listed buildings, conservation areas, and permitted development rights explained.',
};

export default function PlanningPermissionTipsPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Edinburgh property full sash and case refurbishment.JPG')" }}>
        <div className="hero-content">
          <span className="hero-eyebrow">Planning · January 2026</span>
          <h1>Planning Permission for Window Replacement in Edinburgh — What You Need to Know</h1>
        </div>
      </div>

      <section>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>

            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--dark)', marginBottom: '2rem' }}>
              Edinburgh has some of the most stringent planning requirements in the UK. Here&apos;s what you need to know before replacing windows in a listed building or conservation area.
            </p>

            <h2>Do you always need planning permission?</h2>
            <p>Not always. In many cases, replacing windows in a standard residential property falls under &quot;permitted development&quot; — meaning no planning application is required. However, there are significant exceptions in Edinburgh.</p>

            <h2>Listed Buildings</h2>
            <p>If your property is Category A or B listed, you need <strong>Listed Building Consent</strong> for any alterations to the external appearance — including window replacement. This is separate from planning permission and is required even for like-for-like replacements.</p>
            <p>Edinburgh City Council&apos;s conservation officers will assess any proposed changes. They will typically require:</p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
              <li>Like-for-like replacement of existing profiles and mouldings</li>
              <li>Matching timber species and finish</li>
              <li>Heritage-appropriate glazing (often slimline double or Fineo vacuum glass)</li>
              <li>Retention of existing ironmongery or matching replacements</li>
            </ul>

            <h2>Conservation Areas</h2>
            <p>Edinburgh has extensive conservation areas covering much of the New Town, Old Town, and surrounding Victorian suburbs. Within these areas, &quot;Article 4 Directions&quot; remove permitted development rights — meaning you need planning permission for window changes that would otherwise be exempt.</p>
            <p>If you&apos;re unsure whether your property is in a conservation area, check Edinburgh City Council&apos;s online planning portal or contact their duty planning officer.</p>

            <h2>The Pre-Approved Route</h2>
            <p>We are pre-approved by Edinburgh City Council as a supplier of heritage glazing units. Our products and specifications have already been assessed and approved for use in listed and conservation area properties across the city.</p>
            <p>This significantly speeds up the approval process for projects involving our products — conservation officers don&apos;t need to assess the product itself, only its application in your specific property.</p>

            <h2>Our Advice</h2>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
              <li>Always check listed building and conservation area status before ordering windows</li>
              <li>Submit a pre-application enquiry to the planning authority if you&apos;re unsure</li>
              <li>Allow 8–12 weeks for Listed Building Consent applications</li>
              <li>Use a pre-approved supplier to speed up the conservation officer&apos;s assessment</li>
              <li>Secondary glazing rarely requires consent and is often the fastest route</li>
            </ul>

            <div style={{ background: 'var(--cream)', padding: '2rem', borderRadius: '4px', borderLeft: '4px solid var(--orange)', marginTop: '2.5rem' }}>
              <h3>Need help with your planning application?</h3>
              <p>We can provide product specifications, compliance documentation, and letters of support for your planning submission. Contact us to discuss your project.</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Get in Touch</Link>
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
