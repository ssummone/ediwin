'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  { title: 'Fraser Suites Edinburgh', desc: '156 sash and case windows restored across a live hotel. Full programme management, heritage compliance.', category: 'commercial', label: 'Commercial', href: '/commercial', img: '/images/Fraser suites edinburgh sash window refurbishment.jpg' },
  { title: 'Craighouse Restoration', desc: '136 windows restored and manufactured for Category A listed property. Replica profiles, Fineo glass, Historic Environment Scotland approved.', category: 'heritage', label: 'Heritage', href: '/listed-buildings', img: '/images/craighouse sash and case project.jpg' },
  { title: 'Trump Turnberry', desc: 'Presidential Commission. Coastal-grade Accoya throughout. Bespoke ironmongery and multi-point locking.', category: 'commercial', label: 'Presidential', href: '/commercial', img: '/images/Edinburgh windows and doors trump turnberry.jpg' },
  { title: 'Stirling University', desc: 'Specialist repairs preserving original features in student accommodation. Minimal disruption to live academic environment.', category: 'commercial', label: 'Commercial', href: '/commercial', img: '/images/stirling uni sash and case window repairs.JPG' },
  { title: 'Ochil Tower School', desc: 'Double-glazed timber sash windows replacing aluminium units. Educational setting, fully managed programme.', category: 'commercial', label: 'Educational', href: '/commercial', img: '/images/Ochil tower school window replacement.jpg' },
  { title: "Banjo & Ro's Grand Island Hotel", desc: 'New sash and case windows for remote island hotel refurbishment, Isle of Ulva.', category: 'hotel', label: 'Hotel', href: '/contact', img: '/scraped-projects/BvFdsF94CWvgpIm.jpg' },
  { title: "Helen's Edinburgh Home", desc: 'Bespoke sash and case windows for homeowner property upgrade.', category: 'residential', label: 'Residential', href: '/contact', img: '/images/Helen - sash and case windows.jpg' },
  { title: 'Aberdeen Glass Install', desc: 'Timber window supply and installation in Aberdeen.', category: 'commercial', label: 'Commercial', href: '/commercial', img: '/images/EWD Aberdeen glass install.jpg' },
  { title: 'Colinton Window Preservation', desc: 'Sympathetic window preservation in Colinton, retaining period character.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/yXz6FXS2OQ8fDrn.jpg' },
  { title: 'Bespoke Accoya Entrance Door', desc: 'Handcrafted Accoya timber entrance door. Bespoke joinery to exact specification.', category: 'doors', label: 'Doors', href: '/accoya-doors', img: '/scraped-projects/WPR4vPX5793ffc3.jpg' },
  { title: 'Stockbridge Repairs', desc: 'Sash and case window repairs in the Stockbridge conservation area of Edinburgh.', category: 'repairs', label: 'Repairs', href: '/repairs', img: '/scraped-projects/Kp1Yf5CVm71fJ3P.jpg' },
  { title: 'Linlithgow – Full Refurbishments', desc: 'Full property window refurbishment for period home in Linlithgow.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/bfpCzwkwOmMfDVR.jpg' },
  { title: 'Accoya French Doors', desc: 'Stunning Accoya timber French doors manufactured and installed for a private client.', category: 'doors', label: 'Doors', href: '/accoya-doors', img: '/scraped-projects/axrfNBIuDLs5XgI.jpg' },
  { title: 'Inverkeithing – Full Restoration', desc: 'Full sash window restoration and Gecko draught seal installation in Inverkeithing.', category: 'heritage', label: 'Heritage', href: '/listed-buildings', img: '/scraped-projects/ddegNLHaPzu7oyQ.jpg' },
  { title: 'Broxburn Double Glazing', desc: 'Double glazing upgrade for timber sash and case windows in Broxburn.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/DTx4E9TEDDdGYv5.jpg' },
  { title: 'Accoya Windows & Doors', desc: 'Complete Accoya timber windows and doors package for a private Edinburgh property.', category: 'doors', label: 'Doors', href: '/accoya-doors', img: '/scraped-projects/Is8sTdWg0T9Ml6e.jpg' },
  { title: 'Composite Doors', desc: 'High-performance composite doors supplied and fitted for residential properties.', category: 'doors', label: 'Doors', href: '/contact', img: '/scraped-projects/gcF11LFobE1Gmia.jpg' },
  { title: 'Lenborough Accoya Sash & Case', desc: 'Accoya sash and case windows manufactured and installed at Lenborough estate.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/F4FTrGNvn1edUx8.jpg' },
  { title: 'The Drum – Sash Window Repairs', desc: 'Sash window repairs at The Drum, preserving original timber joinery.', category: 'repairs', label: 'Repairs', href: '/repairs', img: '/scraped-projects/7Olta48bXB80rWp.jpg' },
  { title: 'Property Renovation – Window Replacement', desc: 'Full window replacement as part of a comprehensive property renovation project.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/z5ZHilSqT0EefPM.jpg' },
  { title: 'Morningside – New Timber Sash & Case', desc: 'New timber sash and case windows for a period property in Morningside, Edinburgh.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/Iybvw8ct4U5qKnH.jpg' },
  { title: 'Morningside Restorations', desc: 'Sash window restorations in Edinburgh\'s Morningside conservation area.', category: 'heritage', label: 'Heritage', href: '/listed-buildings', img: '/scraped-projects/d4yjBwW9NAg1l5x.jpg' },
  { title: 'Lomond Sash & Case Windows', desc: 'New sash and case windows installed at a property near Loch Lomond.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/yFrYOhGdLjX3B24.jpg' },
  { title: 'The Meadows – 14 New Sash & Case', desc: '14 new timber sash and case windows for a tenement property in The Meadows.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/mzeZsX7VZ64g28M.jpg' },
  { title: 'Like-for-Like Sash Replacements', desc: 'Accurate like-for-like sash and case window replacements maintaining period authenticity.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/VXo6VzTt62XFmQC.jpg' },
  { title: 'City Centre – Window Draught Proofing', desc: 'Draught proofing for sash and case windows in Edinburgh city centre.', category: 'repairs', label: 'Repairs', href: '/repairs', img: '/scraped-projects/Rk59hKeErs4nc7j.jpg' },
  { title: 'Cramond Tower – Timber Double Glazing', desc: 'Slim-profile double glazing for the historic Cramond Tower property.', category: 'heritage', label: 'Heritage', href: '/listed-buildings', img: '/scraped-projects/6IdDoTeCp3C1tjO.jpg' },
  { title: 'Belgrave – Sash & Case Repairs', desc: 'Expert sash window repairs in the Belgrave conservation area of Edinburgh.', category: 'repairs', label: 'Repairs', href: '/repairs', img: '/scraped-projects/RfaCNIp3Gf4d390.jpg' },
  { title: 'The Meadows – New Double Glazed Sashes', desc: 'New double-glazed sash units fitted into existing frames in The Meadows.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/gNRF4PfEK6dM8Mt.jpg' },
  { title: 'Leith Sash Window Double Glazing', desc: 'Double glazing upgrade to existing timber sash windows in Leith, Edinburgh.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/xkldWOnv6o52DE0.jpg' },
  { title: 'Melville Street Draught Proofing', desc: "Draught proofing for sash windows on Melville Street, Edinburgh's West End.", category: 'repairs', label: 'Repairs', href: '/repairs', img: '/scraped-projects/pZf1Tx5G4UQUF6h.jpg' },
  { title: 'Easter Road – Sash & Case Repairs', desc: 'Sash and case window repairs on Easter Road, Edinburgh.', category: 'repairs', label: 'Repairs', href: '/repairs', img: '/scraped-projects/G8D7Uo5ZlVc13s7.jpg' },
  { title: 'The Meadows – Timber Sash & Case', desc: 'New timber sash and case windows for a tenement flat in The Meadows, Edinburgh.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/T4mpaR7meDpu4yB.jpg' },
  { title: 'Heritage Slim-Line Double Glazing', desc: 'Slim-profile heritage double glazing fitted sensitively within listed building guidelines.', category: 'heritage', label: 'Heritage', href: '/listed-buildings', img: '/scraped-projects/JX1QZFRNLXzD9Gg.jpg' },
  { title: 'Aberdour Sash & Case Windows', desc: 'Timber sash and case windows for a period property in Aberdour, Fife.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/8OhpSx09C4DB52H.jpg' },
  { title: 'Draught Proofing – Edinburgh City Centre', desc: 'Full draught proofing package for a period tenement in Edinburgh city centre.', category: 'repairs', label: 'Repairs', href: '/repairs', img: '/scraped-projects/OCzuhRvYOx1qUCi.jpg' },
  { title: 'Commercial Air Circulation Project', desc: 'Bespoke ventilation and air circulation solution for a commercial building.', category: 'commercial', label: 'Commercial', href: '/commercial', img: '/scraped-projects/VhJj3UYzEqVQGih.jpg' },
  { title: 'Sash Window Restoration Edinburgh', desc: 'Full restoration of original sash and case windows for a listed Edinburgh property.', category: 'heritage', label: 'Heritage', href: '/listed-buildings', img: '/scraped-projects/o8FYLyiNO8Ky8uj.jpg' },
  { title: 'Timber Sash & Case Refurbishment', desc: 'Comprehensive timber sash and case refurbishment for a period Edinburgh property.', category: 'residential', label: 'Residential', href: '/contact', img: '/scraped-projects/6w4lhfa7OXg7KIA.jpg' },
];

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
              <Link key={p.title} href={p.href} className="project-card">
                <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
                <div className="project-card-overlay">
                  <span className="project-category">{p.label}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
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
