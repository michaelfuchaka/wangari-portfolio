'use client'
import { useReveal } from './useReveal'

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="about"
      style={{
        padding: '140px 60px',
        borderTop: '1px solid var(--gold-border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Vertical gold line */}
      <div style={{
        width: '1px',
        height: '80px',
        background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
        marginBottom: '60px',
      }} />

      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 1s ease, transform 1s ease',
          maxWidth: '680px',
        }}
      >
        <blockquote style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(22px, 2.8vw, 36px)',
          color: 'var(--ivory)',
          lineHeight: 1.75,
        }}>
          {`"All that I am is as a result of the `}
        <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>mercies of God,</em>
        <br />
        {`without which I am nothing."`}
                </blockquote>
      </div>
    </section>
  )
}


