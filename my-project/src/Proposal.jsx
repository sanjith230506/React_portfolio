import { useState, useEffect, useRef } from 'react'
import './proposal.css'

const poems = [
  {
    title: '✦ From the Moment I Saw You',
    lines: [
      'From the moment I saw you, Suganya dear,',
      'My heart knew a joy it had never felt near.',
      'Your smile like the sunrise, your laugh like a song,',
      'With you by my side, I know I belong.',
    ],
  },
  {
    title: '✦ Two Souls, One Heart',
    lines: [
      'Two souls wandering, searching the earth,',
      'Found each other — a moment of rebirth.',
      'Sanjith and Suganya, written in the stars,',
      'A love that transcends all distance and scars.',
    ],
  },
  {
    title: '✦ Forever With You',
    lines: [
      'In every heartbeat, I whisper your name,',
      'In every sunrise, you set my soul aflame.',
      'I promise to love you through storm and through sun,',
      'My Suganya, my world — you are the one.',
    ],
  },
]

// Burst heart particles
const BURST_HEARTS = ['❤️','💕','💖','💗','💓','💞','🌹','✨','💫','🌸']

function BurstParticles({ active }) {
  if (!active) return null
  return (
    <div className="burst-container">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="burst-particle"
          style={{
            '--angle': `${(i / 30) * 360}deg`,
            '--dist':  `${80 + Math.random() * 120}px`,
            '--dur':   `${0.6 + Math.random() * 0.8}s`,
            '--delay': `${Math.random() * 0.3}s`,
            fontSize:  `${14 + Math.random() * 18}px`,
          }}
        >
          {BURST_HEARTS[i % BURST_HEARTS.length]}
        </span>
      ))}
    </div>
  )
}

function FloatingHearts() {
  return (
    <div className="hearts-container">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="heart" style={{ '--i': i }}>
          {i % 3 === 0 ? '💖' : i % 3 === 1 ? '🌸' : '✨'}
        </span>
      ))}
    </div>
  )
}

export default function Proposal() {
  // phase: 'intro' → photos slide in
  //        'collide' → photos meet, burst fires
  //        'settled' → photos side by side, rest of page visible
  const [phase, setPhase]       = useState('intro')
  const [burst, setBurst]       = useState(false)
  const [poem, setPoem]         = useState(0)
  const [answered, setAnswered] = useState(null)
  const [noPos, setNoPos]       = useState({ x: 0, y: 0 })
  const [playing, setPlaying]   = useState(false)
  const audioRef = useRef(null)

  // ── Autoplay: muted autoplay → unmute on first interaction ──
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = true
    audio.play().then(() => {
      // unmute after a tiny delay so browser doesn't block
      setTimeout(() => { audio.muted = false; setPlaying(true) }, 300)
    }).catch(() => {})
    const unlock = () => {
      audio.muted = false
      audio.play().then(() => setPlaying(true)).catch(() => {})
      document.removeEventListener('pointerdown', unlock)
    }
    document.addEventListener('pointerdown', unlock)
    return () => document.removeEventListener('pointerdown', unlock)
  }, [])

  // ── Photo collision timeline ──
  useEffect(() => {
    // After 1.6s photos have slid in → trigger collision
    const t1 = setTimeout(() => setPhase('collide'), 1600)
    // Fire burst at collision moment
    const t2 = setTimeout(() => setBurst(true), 1700)
    // Burst fades, photos settle
    const t3 = setTimeout(() => { setBurst(false); setPhase('settled') }, 2800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  // ── Poem auto-rotate ──
  useEffect(() => {
    const t = setInterval(() => setPoem(p => (p + 1) % poems.length), 5000)
    return () => clearInterval(t)
  }, [])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) { audio.pause(); setPlaying(false) }
    else { audio.play().then(() => setPlaying(true)) }
  }

  const runAway = () => setNoPos({
    x: Math.random() * 280 - 140,
    y: Math.random() * 180 - 90,
  })

  return (
    <div className="proposal-page">
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      <FloatingHearts />

      {/* ── Stars background ── */}
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i} className="star" style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--s': `${0.5 + Math.random() * 1.5}px`,
            '--d': `${Math.random() * 4}s`,
          }} />
        ))}
      </div>

      {/* ── Music Player ── */}
      <div className="music-player">
        <div className="music-bars">
          {[1,2,3,4,5].map(b => (
            <span key={b} className={`bar bar-${b} ${playing ? 'active' : ''}`} />
          ))}
        </div>
        <span className="music-track-name">♪ Our Song</span>
        <button className="music-toggle" onClick={toggleMusic}>
          {playing
            ? <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            : <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
          }
        </button>
      </div>

      <div className="page-content">

        {/* ══════════════════════════════
            PHOTO COLLISION SECTION
        ══════════════════════════════ */}
        <div className={`collision-scene phase-${phase}`}>

          {/* Boy photo — slides from left */}
          <div className="photo-wrapper boy-wrapper">
            <div className="photo-frame boy-frame">
              <img src="/boy.jpg" alt="Sanjith" className="couple-photo" />
              <div className="photo-label">Sanjith 💙</div>
            </div>
          </div>

          {/* Centre burst */}
          <div className="collision-center">
            <BurstParticles active={burst} />
            {phase === 'settled' && (
              <div className="joined-heart">💞</div>
            )}
          </div>

          {/* Girl photo — slides from right */}
          <div className="photo-wrapper girl-wrapper">
            <div className="photo-frame girl-frame">
              <img src="/girl.jpg" alt="Suganya" className="couple-photo" />
              <div className="photo-label">💗 Suganya</div>
            </div>
          </div>

        </div>

        {/* ══════════════════════════════
            MAIN CONTENT (fades in after settle)
        ══════════════════════════════ */}
        <div className={`main-content ${phase === 'settled' ? 'visible' : ''}`}>

          {/* Names */}
          <div className="names-banner">
            <span className="name sanjith">Sanjith Senthilkumar</span>
            <span className="heart-icon">💖</span>
            <span className="name sugunya">Suganya</span>
          </div>

          {/* Tagline */}
          <p className="tagline">~ A love story written in the stars ~</p>

          {/* Proposal card */}
          <div className="proposal-card">

            {/* Poem */}
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
                  <span key={i} className={`dot ${i === poem ? 'active' : ''}`} onClick={() => setPoem(i)} />
                ))}
              </div>
            </div>

            {/* Proposal / Accepted */}
            {answered === null && (
              <div className="proposal-section">
                <div className="ring-emoji">💍</div>
                <h2 className="proposal-question">Suganya, will you be mine forever?</h2>
                <p className="proposal-sub">Every moment with you feels like magic. ✨</p>
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
                  {['🎊','🌹','💫','🎉','🌸','💞','🎊','🌹','💫','🌟'].map((e, i) => (
                    <span key={i} className="confetti-item" style={{ '--k': i }}>{e}</span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
