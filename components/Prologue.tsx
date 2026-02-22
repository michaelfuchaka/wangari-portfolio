'use client'
import { useReveal } from './useReveal'

export default function Prologue() {
  const label = useReveal()
  const text = useReveal()

  return (
    <section
      id="prologue"
      style={{
        padding: '120px 60px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid var(--gold-border)',
      }}
    >

      <div
        ref={label.ref}
        style={{
          opacity: label.visible ? 1 : 0,
          transform: label.visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '52px',
        }}
      >
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
        }}>
          Prologue
        </span>
        <div style={{ width: '40px', height: '1px', background: 'var(--gold-dim)' }} />
      </div>

      {/* Text */}
      <div
        ref={text.ref}
        style={{
          maxWidth: '560px',
          paddingLeft: '24px',
          borderLeft: '1px solid rgba(201,169,110,0.2)',
          opacity: text.visible ? 1 : 0,
          transform: text.visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 1s ease 0.15s, transform 1s ease 0.15s',
        }}
      >
        {[
          `There are leaders shaped by systems.\nOthers by singular events.\nAnd then there are those shaped through fire.`,
          `Wangari is one of them.\nNot because she did not break.\nBut because she did not stay broken.`,
        ].map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 'clamp(18px, 1.9vw, 22px)',
              lineHeight: 2,
              color: 'var(--ivory)',
              whiteSpace: 'pre-line',
              marginBottom: i < 1 ? '32px' : 0,
            }}
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}
