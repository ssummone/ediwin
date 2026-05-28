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
          <h3>Locations</h3>
          <ul>
            <li><Link href="/locations/glasgow">Glasgow</Link></li>
            <li><Link href="/locations/east-lothian">East Lothian</Link></li>
            <li><Link href="/locations/stirling">Stirling</Link></li>
            <li><Link href="/locations/dundee">Dundee</Link></li>
            <li><Link href="/locations/aberdeen">Aberdeen</Link></li>
            <li><Link href="/locations/fife">Fife</Link></li>
            <li><Link href="/locations/highlands">Highlands</Link></li>
            <li><Link href="/locations/england">England &amp; UK-Wide</Link></li>
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

      {/* Legal footer strip */}
      <div className="footer-legal">
        <div className="footer-legal-text">
          <p>
            Website by{' '}
            <a href="https://www.summone.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)' }}>
              Summone Consulting
            </a>
            . Copyright &copy; {new Date().getFullYear()} — All Rights Reserved.
          </p>
          <p>Edinburgh Windows and Doors Limited trading as EWD Sash &amp; Case.</p>
          <p>
            Registered Address: 2c Young Square, Brucefield Industrial Estate, Livingston, EH54 9BX.
            Registered in Scotland | Company Number: SC648002
          </p>
        </div>
        <div className="footer-legal-logos">
          <a href="https://www.trustedtrader.scot/Edinburgh/Edinburgh-Windows-an-0002416.html" target="_blank" rel="noopener noreferrer" className="footer-legal-logo-link" aria-label="Edinburgh Trusted Trader">
            <Image src="/images/edinburgh-trusted-trader.webp" alt="Edinburgh Trusted Trader" width={100} height={52} style={{ height: '52px', width: 'auto' }} />
          </a>
          <a href="https://www.fineoglass.eu/" target="_blank" rel="noopener noreferrer" className="footer-legal-logo-link" aria-label="Fineo glass">
            <Image src="/images/logo-fineo.webp" alt="Fineo Glass by AGC" width={80} height={52} style={{ height: '52px', width: 'auto' }} />
          </a>
          <a href="https://www.historicenvironment.scot/" target="_blank" rel="noopener noreferrer" className="footer-legal-logo-link" aria-label="Historic Environment Scotland">
            <Image src="/images/historic-scotland.webp" alt="Historic Environment Scotland" width={100} height={52} style={{ height: '52px', width: 'auto' }} />
          </a>
          <a href="https://www.accoya.com/uk/#where-to-buy" target="_blank" rel="noopener noreferrer" className="footer-legal-logo-link" aria-label="Accoya approved manufacturer">
            <Image src="/images/Accoya_Affiliate mark_Approved manufacturer_WHITE ON GREEN_RGB.jpg" alt="Accoya Approved Manufacturer" width={110} height={52} style={{ height: '52px', width: 'auto' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
