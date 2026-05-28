'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <Link href="/" className="nav-logo">
        <Image
          src="/images/Company Logo - image 1.jpg"
          alt="Edinburgh Windows and Doors Logo"
          width={160}
          height={50}
          style={{ height: '40px', width: 'auto' }}
        />
      </Link>

      <div className="nav-center">
        <div className="nav-dropdown">
          <Link href="/#products" onClick={() => setMobileOpen(false)}>Products</Link>
          <div className="dropdown-menu">
            <Link href="/sash-windows" onClick={() => setMobileOpen(false)}>Sash &amp; Case Windows</Link>
            <Link href="/accoya-doors" onClick={() => setMobileOpen(false)}>Accoya Timber Doors</Link>
            <Link href="/secondary-glazing" onClick={() => setMobileOpen(false)}>Secondary Glazing</Link>
            <Link href="/composite-doors" onClick={() => setMobileOpen(false)}>Composite Doors</Link>
            <Link href="/listed-buildings" onClick={() => setMobileOpen(false)}>Listed Buildings</Link>
            <Link href="/repairs" onClick={() => setMobileOpen(false)}>Repairs</Link>
          </div>
        </div>
        <Link href="/commercial" onClick={() => setMobileOpen(false)}>Commercial</Link>
        <Link href="/trade" onClick={() => setMobileOpen(false)}>Trade</Link>
        <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
        <Link href="/news" onClick={() => setMobileOpen(false)}>News</Link>
        <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
      </div>

      <div className="nav-ctas">
        <Link href="/trade" className="btn btn-outline">Trade Account</Link>
        <Link href="/contact" className="btn btn-primary">Book a Survey</Link>
      </div>

      <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
