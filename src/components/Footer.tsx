import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <Image
            src="/images/Company Logo - image 1.jpg"
            alt="Edinburgh Windows and Doors Logo"
            width={160}
            height={50}
            className="footer-logo"
            style={{ height: '50px', width: 'auto' }}
          />
          <p className="footer-tagline">Scottish timber sash &amp; case window manufacturer. Est. 2019.</p>
          <p className="footer-tagline" style={{ marginTop: '0.5rem' }}>
            <a href="https://www.google.com/search?hl=en-GB&gl=uk&q=EDINBURGH+WINDOWS+AND+DOORS,+2c+Young+Square,+Bellsquarry,+Livingston+EH54+9BX&ludocid=11310449275001631798&lsig=AB86z5WGF8Coig5VhDGl6MpYLM4q#lrd=" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '0.9rem' }}>
              ★ Read our Google reviews
            </a>
          </p>
        </div>
        <div className="footer-col">
          <h3>Products</h3>
          <ul>
            <li><Link href="/sash-windows">Sash &amp; Case Windows</Link></li>
            <li><Link href="/accoya-doors">Accoya Timber Doors</Link></li>
            <li><Link href="/secondary-glazing">Secondary Glazing</Link></li>
            <li><Link href="/composite-doors">Composite Doors</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Trade &amp; Commercial</h3>
          <ul>
            <li><Link href="/trade">Trade Account</Link></li>
            <li><Link href="/commercial">Commercial Projects</Link></li>
            <li><Link href="/projects">Our Projects</Link></li>
            <li><Link href="/contact">Request Quote</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <div className="footer-contact-info">
            <p><strong>Phone:</strong><br />01506 168 204</p>
            <p><strong>Email:</strong><br />sales@edinburghwindowsanddoors.co.uk</p>
            <p><strong>Location:</strong><br />Edinburgh &amp; Scotland-wide</p>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
              Response within 1 working day<br />Mon–Fri 8am–5pm
            </p>
          </div>
        </div>
      </div>

      {/* Partner logos strip */}
      <div className="footer-partners">
        <a href="https://www.accoya.com/uk/#where-to-buy" target="_blank" rel="noopener noreferrer" className="footer-partner-link" aria-label="Accoya approved manufacturer">
          <Image src="/images/Accoya_Affiliate mark_Approved manufacturer_WHITE ON GREEN_RGB.jpg" alt="Accoya Approved Manufacturer" width={120} height={48} style={{ height: '48px', width: 'auto' }} />
        </a>
        <a href="https://www.fineoglass.eu/" target="_blank" rel="noopener noreferrer" className="footer-partner-link" aria-label="Fineo glass supplier">
          <span className="footer-partner-text">Fineo Glass</span>
        </a>
        <a href="https://www.trustedtrader.scot/Edinburgh/Edinburgh-Windows-an-0002416.html" target="_blank" rel="noopener noreferrer" className="footer-partner-link" aria-label="Edinburgh Trusted Trader">
          <span className="footer-partner-text">✓ Trusted Trader</span>
        </a>
      </div>

      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Edinburgh Windows and Doors. All rights reserved. Scottish timber manufacturer.</p>
      </div>
    </footer>
  );
}

