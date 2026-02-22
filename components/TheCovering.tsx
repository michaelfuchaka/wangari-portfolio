'use client'
import { useReveal } from './useReveal'

export default function TheCovering() {
  const label = useReveal()
  const text = useReveal()

  return (
    <section
      id="covering"
      style={{
        borderTop: '1px solid var(--gold-border)',
        padding: '140px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Label */}
      <div
        ref={label.ref}
        style={{
          opacity: label.visible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '56px',
        }}
      >
        <div style={{ width: '40px', height: '1px', background: 'var(--gold-dim)' }} />
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
        }}>The Covering</span>
        <div style={{ width: '40px', height: '1px', background: 'var(--gold-dim)' }} />
      </div>

     
      <div
        ref={text.ref}
        style={{
          maxWidth: '520px',
          opacity: text.visible ? 1 : 0,
          transform: text.visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 1s ease 0.15s, transform 1s ease 0.15s',
        }}
      >
        {[
          `Her endurance is not self-made.\nThere is a mercy that has held her.\nA quiet covering that steadies her steps.`,
          `Without God, she would not be\na quarter of the woman she is.\nShe knows this.\nAnd she moves accordingly.`,
        ].map((para, i) => (
          <p key={i} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(18px, 2vw, 23px)',
            lineHeight: 2,
            color: 'var(--ivory)',
            whiteSpace: 'pre-line',
            marginBottom: i < 1 ? '32px' : 0,
          }}>
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}
