import { useState, useEffect } from 'react'
import './proposal.css'

const poems = [
  {
    title: "From the Moment I Saw You",
    lines: [
      "From the moment I saw you, Suganya dear,",
      "My heart knew a joy it had never felt near.",
      "Your smile like the sunrise, your laugh like a song,",
      "With you by my side, I know I belong.",
    ],
  },
  {
    title: "Two Souls, One Heart",
    lines: [
      "Two souls wandering, searching the earth,",
      "Found each other — a moment of rebirth.",
      "Sanjith and Sugunya, written in the stars,",
      "A love that transcends all distance and scars.",
    ],
  },
  {
    title: "Forever With You",
    lines: [
      "In every heartbeat, I whisper your name,",
      "In every sunrise, you set my soul aflame.",
      "I promise to love you through storm and through sun,",
      "My Sugunya, my world — you are the one.",
    ],
  },
]

function FloatingHearts() {
  return (
    <div className="hearts-container">
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className="heart" style={{ '--i': i }}>❤️</span>
      ))}
    </div>
  )
}

function Sparkles() {
  return (
    <div className="sparkles">
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} className="sparkle" style={{ '--j': i }}>✨</span>
      ))}
    </div>
  )
}

export default function Proposal() {
  const [answered, setAnswered] = useState(null)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [poem, setPoem] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPoem(p => (p + 1) % poems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const runAway = () => {
    setNoPos({
      x: Math.random() * 300 - 150,
      y: Math.random() * 200 - 100,
    })
  }

  return (
    <div className="proposal-page">
      <FloatingHearts />
      <Sparkles />

      <div className="proposal-card">
        <div className="names-banner">
          <span className="name sanjith">Sanjith Senthilkumar</span>
          <span className="heart-icon">💖</span>
          <span className="name sugunya">Suganya</span>
        </div>

        <div className="poem-section">
          <div className="poem-card" key={poem}>
            <h3 className="poem-title">{poems[poem].title}</h3>
            {poems[poem].lines.map((line, i) => (
              <p key={i} className="poem-line" style={{ '--delay': `${i * 0.15}s` }}>
                {line}
              </p>
            ))}
          </div>
          <div className="poem-dots">
            {poems.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === poem ? 'active' : ''}`}
                onClick={() => setPoem(i)}
              />
            ))}
          </div>
        </div>

        {answered === null && (
          <div className="proposal-section">
            <div className="ring-emoji">💍</div>
            <h2 className="proposal-question">
              Sugunya, will you be mine forever?
            </h2>
            <p className="proposal-sub">
              Every moment with you feels like magic. ✨
            </p>
            <div className="buttons">
              <button className="yes-btn" onClick={() => setAnswered('yes')}>
                Yes, forever! 💕
              </button>
              <button
                className="no-btn"
                style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
                onMouseEnter={runAway}
                onTouchStart={runAway}
              >
                No 🙈
              </button>
            </div>
          </div>
        )}

        {answered === 'yes' && (
          <div className="accepted-section">
            <div className="big-heart">💗</div>
            <h2 className="accepted-title">She said YES! 🎉</h2>
            <p className="accepted-msg">
              Sanjith &amp; Suganya — together forever, written in the stars. 🌟
            </p>
            <div className="confetti-row">
              {['🎊','🌹','💫','🎉','🌸','💞','🎊','🌹','💫'].map((e, i) => (
                <span key={i} className="confetti-item" style={{ '--k': i }}>{e}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
