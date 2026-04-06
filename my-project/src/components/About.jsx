import { useEffect, useRef } from 'react';
import info from '../data/info';
import './About.css';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const { education, internship } = info;

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="section-header reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="section-label">// about me</span>
          <h2 className="section-title">Who Am I?</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio reveal" style={{ opacity: 0, transform: 'translateX(-30px)', transition: 'all 0.7s ease 0.15s' }}>
            <div className="bio-card card">
              <div className="bio-avatar">
                <div className="avatar-ring">
                  <div className="avatar-inner">{info.shortName[0]}</div>
                </div>
                <div className="avatar-badge"><span>Available</span></div>
              </div>
              <div className="bio-text">
                <h3 className="bio-name">{info.name}</h3>
                <p className="bio-role">{info.role}</p>
                {info.bio.map((p, i) => <p className="bio-desc" key={i}>{p}</p>)}
                <div className="bio-meta">
                  <span className="meta-item">📍 {info.location}</span>
                  <span className="meta-item">📧 {info.email}</span>
                  <span className="meta-item">📱 {info.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-edu reveal" style={{ opacity: 0, transform: 'translateX(30px)', transition: 'all 0.7s ease 0.3s' }}>
            <h3 className="edu-heading">Education Timeline</h3>
            <div className="timeline">
              {education.map((e, i) => (
                <div className={`timeline-item tl-${e.color}`} key={i}>
                  <div className="tl-icon">{e.icon}</div>
                  <div className="tl-content">
                    <div className="tl-top">
                      <h4 className="tl-degree">{e.degree}</h4>
                      <span className="tl-year">{e.year}</span>
                    </div>
                    <p className="tl-school">{e.school}</p>
                    <span className={`tl-grade tag ${e.color === 'purple' ? 'tag-purple' : e.color === 'green' ? 'tag-green' : ''}`}>
                      {e.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="internship-card card">
              <div className="int-header">
                <span className="int-icon">💼</span>
                <div>
                  <h4 className="int-title">{internship.role}</h4>
                  <p className="int-company">{internship.company} · {internship.year}</p>
                </div>
              </div>
              <p className="int-desc">
                Developed <strong>{internship.project}</strong> — {internship.desc}
              </p>
              <div className="int-tags">
                {internship.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
