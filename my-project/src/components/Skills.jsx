import { useEffect, useRef } from 'react';
import info from '../data/info';
import './Skills.css';

export default function Skills() {
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
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="section-label">// tech stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          {info.skillCategories.map((cat, i) => (
            <div
              className="skill-cat card reveal"
              key={cat.label}
              style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease ${i * 0.08}s` }}
            >
              <div className="cat-header">
                <span className="cat-icon">{cat.icon}</span>
                <h3 className={`cat-label cat-${cat.color}`}>{cat.label}</h3>
              </div>
              <div className="skill-badges">
                {cat.skills.map(s => (
                  <span className={`skill-badge sb-${cat.color}`} key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
