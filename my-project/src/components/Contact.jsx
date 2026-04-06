import { useEffect, useRef, useState } from 'react';
import info from '../data/info';
import './Contact.css';

const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);

  // Scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const { serviceId, templateId, publicKey } = info.emailjs;

    if (serviceId === 'YOUR_SERVICE_ID') {
      setStatus(STATUS.ERROR);
      setErrors({ submit: 'EmailJS is not configured yet. Please fill in your credentials in src/data/info.js.' });
      return;
    }

    setStatus(STATUS.SENDING);

    try {
      // emailjs is loaded globally via CDN script in index.html
      await window.emailjs.send(
        serviceId,
        templateId,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_email:   info.email,
        },
        publicKey
      );
      setStatus(STATUS.SUCCESS);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus(STATUS.ERROR);
      setErrors({ submit: 'Failed to send message. Please try again or email me directly.' });
    }
  };

  const contactLinks = [
    { label: 'Email',    val: info.email,            href: `mailto:${info.email}`,  icon: '✉️', color: 'cyan'   },
    { label: 'Phone',    val: info.phone,             href: `tel:${info.phone}`,     icon: '📱', color: 'green'  },
    { label: 'GitHub',   val: 'github.com/sanjith',   href: info.socials.github,     icon: '⌥',  color: 'purple' },
    { label: 'LinkedIn', val: 'linkedin.com/sanjith', href: info.socials.linkedin,   icon: 'in', color: 'cyan'   },
  ];

  return (
    <section className="section contact-section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="section-label">// say hello</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-wrap">
          {/* Left — info */}
          <div className="contact-left reveal" style={{ opacity: 0, transform: 'translateX(-30px)', transition: 'all 0.7s ease 0.2s' }}>
            <p className="contact-intro">
              I'm currently open to <span className="c-highlight">internship opportunities</span>,
              collaborative projects, and interesting conversations about technology.
            </p>
            <p className="contact-sub">
              Whether you have a project idea, want to collaborate, or just want to say hi —
              my inbox is always open!
            </p>
            <div className="contact-links">
              {contactLinks.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={`contact-link cl-${l.color}`}>
                  <span className="cl-icon">{l.icon}</span>
                  <div className="cl-text">
                    <span className="cl-label">{l.label}</span>
                    <span className="cl-val">{l.val}</span>
                  </div>
                  <span className="cl-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-right reveal" style={{ opacity: 0, transform: 'translateX(30px)', transition: 'all 0.7s ease 0.35s' }}>
            <div className="contact-card card">
              <div className="cc-bar">
                <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
                <span className="t-title">send_message.sh</span>
              </div>

              <div className="cc-body">
                <p className="cc-cmd">
                  <span className="t-prompt">$ </span>
                  <span className="t-cmd">./contact --target {info.shortName.toLowerCase()}</span>
                </p>

                {/* Success state */}
                {status === STATUS.SUCCESS ? (
                  <div className="cc-success">
                    <span className="cc-success-icon">✓</span>
                    <h4>Message Sent!</h4>
                    <p>Thanks for reaching out, {form.name || 'there'}! I'll get back to you soon.</p>
                    <button className="btn btn-outline cc-reset" onClick={() => setStatus(STATUS.IDLE)}>
                      Send Another →
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <div className="cc-field">
                      <label className="cc-label" htmlFor="cf-name">Name</label>
                      <input
                        id="cf-name"
                        className={`cc-input${errors.name ? ' cc-input-err' : ''}`}
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={status === STATUS.SENDING}
                      />
                      {errors.name && <span className="cc-err-msg">{errors.name}</span>}
                    </div>

                    <div className="cc-field">
                      <label className="cc-label" htmlFor="cf-email">Email</label>
                      <input
                        id="cf-email"
                        className={`cc-input${errors.email ? ' cc-input-err' : ''}`}
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        disabled={status === STATUS.SENDING}
                      />
                      {errors.email && <span className="cc-err-msg">{errors.email}</span>}
                    </div>

                    <div className="cc-field">
                      <label className="cc-label" htmlFor="cf-message">Message</label>
                      <textarea
                        id="cf-message"
                        className={`cc-input cc-textarea${errors.message ? ' cc-input-err' : ''}`}
                        name="message"
                        placeholder={`Hello ${info.shortName}, I'd like to...`}
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        disabled={status === STATUS.SENDING}
                      />
                      {errors.message && <span className="cc-err-msg">{errors.message}</span>}
                    </div>

                    {errors.submit && (
                      <div className="cc-submit-err">{errors.submit}</div>
                    )}

                    <button
                      type="submit"
                      className={`btn btn-primary cc-submit${status === STATUS.SENDING ? ' cc-sending' : ''}`}
                      disabled={status === STATUS.SENDING}
                    >
                      {status === STATUS.SENDING ? (
                        <><span className="cc-spinner" /> Sending…</>
                      ) : (
                        'Send Message →'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
