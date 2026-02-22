'use client'
import Image from 'next/image'
import { useReveal } from './useReveal'

export default function TheWoman() {
  const label = useReveal()
  const image = useReveal(0.08)
  const text = useReveal(0.08)
  const quote = useReveal()

  return (
    <section
      id="the-woman"
      style={{
        borderTop: '1px solid var(--gold-border)',
        padding: '120px 60px',
        maxWidth: '1400px',
        margin: '0 auto',
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
          marginBottom: '64px',
        }}
      >
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
        }}>The Woman</span>
        <div style={{ width: '40px', height: '1px', background: 'var(--gold-dim)' }} />
      </div>

      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}>

       
        <div
          ref={image.ref}
          style={{
            position: 'relative',
            overflow: 'hidden',
            opacity: image.visible ? 1 : 0,
            transform: image.visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 1.1s ease, transform 1.1s ease',
          }}
        >
           <Image src="/images/woman.jpg" alt="Wangari" width={700} height={900} style={{ width:'100%', height:'680px', objectFit:'cover', objectPosition:'center top', filter:'grayscale(100%) contrast(1.05)', display:'block' }} />

                
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 65%, #0D1B2A 100%)',
            pointerEvents: 'none',
          }} />
        </div>

        <div style={{ paddingTop: '20px' }}>
          <div
            ref={text.ref}
            style={{
              opacity: text.visible ? 1 : 0,
              transform: text.visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
            }}
          >
            {[
              `Wangari is a woman.\nShe has known trauma.\nShe has known rejection.\nShe has known isolation.\nShe has known spiritual weight without language for it.`,
              `She has known love, misunderstanding, intensity, and failure.\nShe has collapsed.\nAnd she has risen.`,
              `Not once. Not neatly. Not perfectly.\nBut consistently.`,
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 'clamp(17px, 1.8vw, 21px)',
                lineHeight: 2,
                color: 'var(--ivory)',
                whiteSpace: 'pre-line',
                marginBottom: '28px',
              }}>
                {para}
              </p>
            ))}
          </div>

          <div
            ref={quote.ref}
            style={{
              margin: '48px 0',
              padding: '40px 0',
              borderTop: '1px solid rgba(201,169,110,0.2)',
              borderBottom: '1px solid rgba(201,169,110,0.2)',
              opacity: quote.visible ? 1 : 0,
              transform: quote.visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1s ease 0.35s, transform 1s ease 0.35s',
            }}
          >
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(20px, 2.2vw, 28px)',
              color: 'var(--gold)',
              lineHeight: 1.7,
            }}>
              "There is a difference between never falling<br />
              and refusing to remain on the ground.<br />
              She refuses to remain there."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
