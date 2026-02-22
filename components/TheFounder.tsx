'use client'
import Image from 'next/image'
import { useReveal } from './useReveal'

export default function TheFounder() {
  const label = useReveal()
  const col1 = useReveal()
  const bene = useReveal()

  return (
    <div id="founder" style={{ borderTop: '1px solid var(--gold-border)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '80vh',
      }}>

        <div style={{
          padding: '100px 80px 100px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>

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
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>The Founder</span>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold-dim)' }} />
          </div>

          {/* Her words */}
          <div
            ref={col1.ref}
            style={{
              opacity: col1.visible ? 1 : 0,
              transform: col1.visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1s ease 0.1s, transform 1s ease 0.1s',
            }}
          >
            {[
              'Wangari is the Founding Secretary General of Daughters of the Nation — a vision rooted in dignity, intergenerational honor, and national restoration.',
              `It begins with reverence.\nIt builds with responsibility.\nIt exists to strengthen men and women, and restore memory where it has been fractured.`,
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 'clamp(17px, 1.8vw, 21px)',
                lineHeight: 2,
                color: 'var(--ivory)',
                whiteSpace: 'pre-line',
                marginBottom: i < 1 ? '28px' : 0,
              }}>
                {para}
              </p>
            ))}
          </div>

          
          <div
            ref={bene.ref}
            style={{
              marginTop: '64px',
              paddingTop: '48px',
              borderTop: '1px solid rgba(201,169,110,0.18)',
              opacity: bene.visible ? 1 : 0,
              transform: bene.visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1.1s ease 0.3s, transform 1.1s ease 0.3s',
            }}
          >
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              color: 'var(--gold)',
              lineHeight: 1.8,
              letterSpacing: '0.03em',
            }}>
              Not for noise.<br />For foundation.
            </p>
          </div>
        </div>

        
        <div style={{ position: 'relative', overflow: 'hidden' }}>
        
          <Image src="/images/founder.jpg" alt="Wangari" fill style={{ objectFit:'cover', objectPosition:'center top', filter:'grayscale(100%) contrast(1.05)' }} />

        
          
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #0D1B2A 0%, transparent 35%)',
            pointerEvents: 'none',
          }} />
        </div>

      </div>
    </div>
  )
}