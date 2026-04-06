import { useEffect, useRef } from 'react';
import info from '../data/info';
import './Projects.css';

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="section-label">// my work</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {info.projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card card reveal proj-${p.color}`}
              style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease ${i * 0.12}s` }}
            >
              <div className="proj-top">
                <span className="proj-icon">{p.icon}</span>
                <div className="proj-meta">
                  <span className={`proj-type tag ${p.color === 'green' ? 'tag-green' : p.color === 'purple' ? 'tag-purple' : p.color === 'pink' ? 'tag-pink' : ''}`}>
                    {p.type}
                  </span>
                  <span className="proj-year">{p.year}</span>
                </div>
              </div>
              <h3 className={`proj-title pc-${p.color}`}>{p.title}</h3>
              <p className="proj-subtitle">{p.subtitle}</p>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-features">
                {p.features.map(f => (
                  <span className="feature-item" key={f}>
                    <span className="feature-dot" />{f}
                  </span>
                ))}
              </div>
              <div className="proj-tags">
                {p.tags.map(t => (
                  <span className={`tag ${p.color === 'green' ? 'tag-green' : p.color === 'purple' ? 'tag-purple' : p.color === 'pink' ? 'tag-pink' : ''}`} key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-actions">
                <a href={p.projectUrl} className={`proj-link pl-${p.color}`}>View Project →</a>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="proj-link-gh">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
