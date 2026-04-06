import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Sanjith</span>
            <span className="logo-slash"> /</span>
            <span className="logo-bracket">&gt;</span>
          </span>
          <p className="footer-copy">
            © {year} Sanjith Senthilkumar · Built with React & ☕
          </p>
        </div>

        <div className="footer-center">
          <p className="footer-quote">
            <span className="t-prompt">$ </span>
            <span className="t-cmd">echo "Code is poetry"</span>
          </p>
        </div>

        <button className="back-top" onClick={scrollTop} aria-label="Back to top">
          ↑
        </button>
      </div>
    </footer>
  );
}
