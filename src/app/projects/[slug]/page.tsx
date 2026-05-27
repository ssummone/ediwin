import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Edinburgh Windows & Doors`,
    description: project.shortDesc,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <div className="project-detail-hero">
        <Image
          src={project.img}
          alt={project.title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="project-detail-hero-overlay" />
        <div className="project-detail-hero-content">
          <Link href="/projects" className="project-back-link">← All Projects</Link>
          <span className="project-detail-label">{project.label}</span>
          <h1>{project.title}</h1>
          <p className="project-detail-hero-sub">{project.shortDesc}</p>
        </div>
      </div>

      {/* Main content */}
      <section>
        <div className="container">
          <div className="project-detail-layout">

            {/* Left: Description */}
            <div className="project-detail-body">
              <span className="section-eyebrow">Project Overview</span>
              <h2>About This Project</h2>
              {project.fullDesc.map((para, i) => (
                <p key={i} style={{ marginBottom: '1.25rem', lineHeight: 1.8 }}>{para}</p>
              ))}

              {/* Tags */}
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Stats + CTA */}
            <div className="project-detail-sidebar">
              {project.stats && project.stats.length > 0 && (
                <div className="project-stat-box">
                  <h3>Project Details</h3>
                  <ul className="project-stat-list">
                    {project.stats.map(s => (
                      <li key={s.label} className="project-stat-item">
                        <span className="project-stat-label">{s.label}</span>
                        <span className="project-stat-value">{s.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-cta-box">
                <h3>Interested in a similar project?</h3>
                <p>Talk to our team about your requirements. We respond within one working day.</p>
                <Link href="/contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginBottom: '0.75rem' }}>
                  Book a Survey
                </Link>
                <Link href="tel:01506168204" className="btn btn-outline" style={{ display: 'block', textAlign: 'center' }}>
                  📞 01506 168 204
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related projects (same category, excluding current) */}
      {(() => {
        const related = projects.filter(p => p.category === project.category && p.slug !== project.slug).slice(0, 3);
        if (!related.length) return null;
        return (
          <section className="light-bg">
            <div className="container">
              <h2 className="section-title">Related Projects</h2>
              <div className="projects-grid" style={{ marginTop: '2rem' }}>
                {related.map(p => (
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
        );
      })()}

      {/* Bottom CTA */}
      <section className="navy-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Ready to start your project?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Whether it&apos;s a single window or a full commercial programme, we&apos;re ready to deliver.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
            <Link href="/projects" className="btn btn-white btn-lg">View All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
}
