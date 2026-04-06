import { useEffect, useRef } from 'react';
import info from '../data/info';
import './Certifications.css';

export default function Certifications() {
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
    <section className="section certs-section" id="certifications" ref={ref}>
      <div className="container">
        <div className="section-header reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="section-label">// achievements</span>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="certs-grid">
          {info.certifications.map((c, i) => (
            <div
              key={c.title}
              className={`cert-card card reveal cert-${c.color}`}
              style={{ opacity: 0, transform: 'translateY(25px)', transition: `all 0.55s ease ${i * 0.1}s` }}
            >
              <div className="cert-icon-wrap">
                <span className="cert-icon">{c.icon}</span>
              </div>
              <div className="cert-body">
                <h4 className={`cert-title ct-${c.color}`}>{c.title}</h4>
                <p className="cert-issuer">{c.issuer}</p>
              </div>
              <span className="cert-year">{c.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
