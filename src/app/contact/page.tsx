'use client';
import type { Metadata } from 'next';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Workshop.jpg')" }}>
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p className="hero-sub">Book a survey, request a quote, or ask us anything. We respond within one working day.</p>
        </div>
      </div>

      {/* Contact Section */}
      <section>
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form">
              <h2>Send us a message</h2>
              <form action="https://formsubmit.co/sales@edinburghwindowsanddoors.co.uk" method="POST">
                <input type="hidden" name="_subject" value="New enquiry from edinburghwindowsanddoors.co.uk" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.edinburghwindowsanddoors.co.uk/contact?sent=true" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiry">Enquiry Type</label>
                  <select id="enquiry" name="enquiry" required>
                    <option value="">Select...</option>
                    <option value="survey">Book a Survey</option>
                    <option value="quote">Request a Quote</option>
                    <option value="trade">Trade Account</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Message</button>
                <p style={{ fontSize: '0.85rem', color: 'var(--light-grey)', marginTop: '1rem', textAlign: 'center' }}>
                  We respond within one working day, Mon–Fri 8am–5pm.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Details</h2>
              <h3>Phone</h3>
              <p><a href="tel:01506168204" style={{ color: 'var(--orange)', fontWeight: 600 }}>01506 168 204</a></p>
              <h3>Email</h3>
              <p><a href="mailto:sales@edinburghwindowsanddoors.co.uk" style={{ color: 'var(--orange)' }}>sales@edinburghwindowsanddoors.co.uk</a></p>
              <h3>Location</h3>
              <p>Edinburgh, Scotland</p>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--light-grey)' }}>Mon–Fri 8am–5pm<br />We respond within 1 working day</p>
              <div className="accreditations" style={{ justifyContent: 'flex-start', gap: '1.5rem', padding: '2rem 0 0 0', marginTop: '2rem', borderTop: '1px solid var(--border-grey)' }}>
                <img src="/images/edinburgh windows and doors made in britain.jpg" alt="Made in Britain" style={{ height: '60px', width: 'auto' }} />
                <img src="/images/Accoya_Affiliate mark_Approved manufacturer_WHITE ON GREEN_RGB.jpg" alt="Accoya Approved" style={{ height: '60px', width: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
