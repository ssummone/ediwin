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
        </div>
        <div className="footer-col">
          <h3>Products</h3>
          <ul>
            <li><Link href="/sash-windows">Sash &amp; Case Windows</Link></li>
            <li><Link href="/accoya-doors">Accoya Timber Doors</Link></li>
            <li><Link href="/secondary-glazing">Secondary Glazing</Link></li>
            <li><Link href="/contact">Composite Doors</Link></li>
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
            <p><strong>Location:</strong><br />Edinburgh</p>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
              Response within 1 working day<br />Mon–Fri 8am–5pm
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Edinburgh Windows and Doors. All rights reserved. Scottish timber manufacturer.</p>
      </div>
    </footer>
  );
}
