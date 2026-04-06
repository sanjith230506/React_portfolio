import { useEffect, useRef } from 'react';
import info from '../data/info';
import './CodingProfiles.css';

export default function CodingProfiles() {
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
    <section className="section coding-section" id="coding" ref={ref}>
      <div className="container">
        <div className="section-header reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="section-label">// competitive programming</span>
          <h2 className="section-title">Coding Profiles</h2>
        </div>
        <div className="coding-grid">
          {info.codingProfiles.map((p, i) => (
            <div
              key={p.platform}
              className={`coding-card card reveal cp-${p.color}`}
              style={{ opacity: 0, transform: 'translateY(25px)', transition: `all 0.6s ease ${i * 0.15}s` }}
            >
              <div className="cp-header">
                <div className={`cp-icon-wrap cw-${p.color}`}>
                  <span className="cp-icon">{p.icon}</span>
                </div>
                <div>
                  <h3 className={`cp-platform ct2-${p.color}`}>{p.platform}</h3>
                  <span className={`tag ${p.color === 'green' ? 'tag-green' : p.color === 'purple' ? 'tag-purple' : ''}`}>
                    {p.badge}
                  </span>
                </div>
              </div>
              <div className="cp-stats">
                {p.stats.map(s => (
                  <div className="cp-stat" key={s.label}>
                    <span className={`cp-val cv-${p.color}`}>{s.val}</span>
                    <span className="cp-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <a href={p.url} target="_blank" rel="noreferrer" className={`cp-btn cb-${p.color}`}>
                View Profile ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
