'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/data/projects';



const filters = [
  { key: 'all', label: 'All' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'heritage', label: 'Heritage' },
  { key: 'hotel', label: 'Hotel' },
  { key: 'doors', label: 'Doors' },
  { key: 'repairs', label: 'Repairs' },
];

export default function ProjectsPage() {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/EWD Aberdeen glass install.jpg')" }}>
        <div className="hero-content">
          <h1>Our Projects</h1>
          <p className="hero-sub">From presidential commissions to family homes. Every project delivered to the same standard.</p>
        </div>
      </div>

      {/* Filter buttons */}
      <section style={{ padding: '3rem 2rem' }}>
        <div className="container">
          <div className="filter-buttons">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${active === f.key ? ' active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="projects-grid">
            {visible.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="project-card">
                <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
                <div className="project-card-overlay">
                  <span className="project-category">{p.label}</span>
                  <h3>{p.title}</h3>
                  <p>{p.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Ready to start your project?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>Whether it&apos;s a single window upgrade or a complex commercial installation, we&apos;re ready to deliver.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Start Your Project</Link>
            <Link href="/trade" className="btn btn-white btn-lg">Trade Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
