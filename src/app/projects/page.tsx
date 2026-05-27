import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Projects | Edinburgh Windows and Doors',
  description: 'Sash window and timber door projects by Edinburgh Windows and Doors. Hotels, listed buildings, residential developments, and commercial projects across Scotland.',
};

const projects = [
  { title: 'Fraser Suites Edinburgh', desc: '156 sash and case windows restored across a live hotel. Full programme management, heritage compliance.', category: 'Commercial / Heritage', img: '/images/Fraser suites edinburgh sash window refurbishment.jpg' },
  { title: 'Craighouse Restoration', desc: '136 windows for Category A listed property. Replica profiles, Fineo glass, Historic Environment Scotland approved.', category: 'Heritage', img: '/images/craighouse sash and case project.jpg' },
  { title: 'Trump Turnberry', desc: 'Presidential Commission. Coastal-grade Accoya throughout. Bespoke ironmongery and multi-point locking.', category: 'Commercial', img: '/images/Edinburgh windows and doors trump turnberry.jpg' },
  { title: 'Stirling University', desc: 'Large-scale heritage window repairs across the campus. Minimal disruption to live academic environment.', category: 'Heritage', img: '/images/stirling uni sash and case window repairs.JPG' },
  { title: 'Grand Island Hotel', desc: 'Full hotel window replacement programme. Accoya throughout for coastal durability.', category: 'Commercial', img: '/images/Sash and case windows - grand island hotel.jpg' },
  { title: 'Edinburgh Residential Refurbishment', desc: 'Full-house sash window replacement for private Edinburgh townhouse. Georgian profiles, double glazed.', category: 'Residential', img: '/images/full house of new sash and case windows.JPG' },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="hero-internal" style={{ backgroundImage: "url('/images/Fraser suites edinburgh sash window refurbishment.jpg')" }}>
        <div className="hero-content">
          <h1>Our Projects</h1>
          <p className="hero-sub">Hotels, listed buildings, residential refurbishments, and commercial developments. Proven at scale across Scotland and the UK.</p>
        </div>
      </div>

      <section>
        <div className="container">
          <span className="section-eyebrow">Proven at Scale</span>
          <h2 className="section-title">Projects That Prove Our Standard</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.title} className="project-card">
                <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
                <div className="project-card-overlay">
                  <span className="project-category">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Want to see more?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>We have an extensive portfolio of residential and commercial work. Get in touch and we&apos;ll share relevant case studies for your project type.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Discuss Your Project</Link>
        </div>
      </section>
    </>
  );
}
