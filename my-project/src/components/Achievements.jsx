import { useEffect, useRef } from 'react';
import info from '../data/info';
import './Achievements.css';

export default function Achievements() {
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
    <section className="section ach-section" id="achievements" ref={ref}>
      <div className="container">
        <div className="section-header reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="section-label">// milestones</span>
          <h2 className="section-title">Achievements</h2>
        </div>
        <div className="ach-grid">
          {info.achievements.map((a, i) => (
            <div
              key={a.title}
              className={`ach-card card reveal ach-${a.color}`}
              style={{ opacity: 0, transform: 'translateY(25px)', transition: `all 0.6s ease ${i * 0.15}s` }}
            >
              <div className={`ach-icon-wrap aw-${a.color}`}>
                <span className="ach-icon">{a.icon}</span>
              </div>
              <div className="ach-body">
                <h4 className={`ach-title at-${a.color}`}>{a.title}</h4>
                <p className="ach-desc">{a.desc}</p>
              </div>
              <span className="ach-year">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
