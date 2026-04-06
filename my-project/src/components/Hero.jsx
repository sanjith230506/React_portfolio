import { useState, useEffect } from 'react';
import info from '../data/info';
import './Hero.css';

export default function Hero() {
  const roles = info.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, 35);
      } else {
        setRoleIndex(r => (r + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, roleIndex, roles]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="hero-content container">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          <span>Available for Opportunities</span>
        </div>

        <div className="hero-terminal">
          <div className="terminal-bar">
            <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
            <span className="t-title">sanjith@portfolio:~</span>
          </div>
          <div className="terminal-body">
            <p><span className="t-prompt">$ </span><span className="t-cmd">whoami</span></p>
            <p className="t-output">{info.name}</p>
            <p><span className="t-prompt">$ </span><span className="t-cmd">cat role.txt</span></p>
            <p className="t-output t-role">{displayed}<span className="cursor" /></p>
            <p><span className="t-prompt">$ </span><span className="t-cmd">cat university.txt</span></p>
            <p className="t-output">B.ECSE (AI&ML) @ Sri Eshwar College of Engineering</p>
            <p><span className="t-prompt">$ </span><span className="t-blink">█</span></p>
          </div>
        </div>

        <h1 className="hero-name">
          Hi, I'm <span className="name-gradient">{info.shortName}</span>
        </h1>
        <p className="hero-sub">
          Passionate about building scalable web applications, smart mobile apps,
          and AI-powered solutions. Currently pursuing B.ECSE in AI &amp; ML — turning
          ideas into elegant code.
        </p>

        <div className="hero-stats">
          {info.heroStats.map((s, i) => (
            <>
              {i > 0 && <div className="stat-divider" key={`d${i}`} />}
              <div className="stat" key={s.label}>
                <span className="stat-val">{s.val}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            </>
          ))}
        </div>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>View Projects →</button>
          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>Get In Touch</button>
          <a href={`mailto:${info.email}`} className="hero-link">{info.email}</a>
        </div>

        <div className="hero-socials">
          <a href={info.socials.github}   target="_blank" rel="noreferrer" className="social-pill"><span>⌥</span> GitHub</a>
          <a href={info.socials.linkedin} target="_blank" rel="noreferrer" className="social-pill"><span>in</span> LinkedIn</a>
          <a href={info.socials.leetcode} target="_blank" rel="noreferrer" className="social-pill"><span>{'{}'}</span> LeetCode</a>
        </div>
      </div>

      <div className="hero-bg-glow hero-glow-1" />
      <div className="hero-bg-glow hero-glow-2" />
      <div className="scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
