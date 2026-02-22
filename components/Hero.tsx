'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mounted] = useState(true)

  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 1.8s ease',
      }}
    >
      {/* LEFT — IMAGE */}
      <div style={{
        width: '50%',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
    
        <Image src="/images/hero.jpg" alt="Wangari" fill style={{ objectFit:'cover', objectPosition:'center top', filter:'grayscale(100%) contrast(1.05)' }} priority />


        {/* Gradient bleed into right side */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 55%, #0D1B2A 100%), linear-gradient(to top, #0D1B2A 0%, transparent 25%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* RIGHT — TEXT */}
      <div style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 70px 100px 64px',
        position: 'relative',
      }}>
        {/* Thin left border line */}
        <div style={{
          position: 'absolute',
          left: 0, top: '15%', bottom: '15%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.3), transparent)',
        }} />

        {/* NAME */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 'clamp(60px, 6.5vw, 92px)',
          color: 'var(--gold)',
          letterSpacing: '0.1em',
          lineHeight: 1,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1.2s ease 0.8s, transform 1.2s ease 0.8s',
        }}>
          WANGARI
        </h1>

        {/* GOLD LINE */}
        <div style={{
          width: '60px', height: '1px',
          background: 'var(--gold)',
          margin: '28px 0',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.2s ease 1s',
        }} />

        {/* SUBTITLE */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(20px, 2.2vw, 28px)',
          color: 'var(--ivory)',
          lineHeight: 1.45,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1.2s ease 1.2s, transform 1.2s ease 1.2s',
        }}>
          A Woman Held by God
        </p>

        {/* ROLE */}
        <p style={{
          marginTop: '36px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--ivory-dim)',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.2s ease 1.5s',
        }}>
          Founding Secretary General - Daughters of the Nation <br />  <br />
          A vision rooted in dignity, intergenerational honor, and national restoration.
        </p>

        {/* SCROLL CUE */}
        <div style={{
          position: 'absolute',
          bottom: '44px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease 2.2s',
        }}>
          <div style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
