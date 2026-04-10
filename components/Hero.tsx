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
        minHeight: '500px',
        display: 'flex',
        overflow: 'hidden',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 1.8s ease',
      }}
    >
      
      <div style={{
        width: '50%',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
    
       <Image src="/images/hero.jpg" alt="Wangari" fill sizes="50vw" style={{ objectFit:'cover', objectPosition:'top center', filter:'grayscale(100%) contrast(1.05)' }} priority />

        
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
        minHeight: 0,
       padding: 'clamp(40px, 8vw, 100px) clamp(20px, 4vw, 70px) clamp(40px, 8vw, 100px) clamp(20px, 4vw, 64px)',
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
          fontSize: 'clamp(22px, 5vw, 92px)',
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
          margin: 'clamp(12px, 3vw, 28px) 0',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.2s ease 1s',
        }} />

        {/* SUBTITLE */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(14px, 4vw, 28px)',
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
          marginTop: 'clamp(16px, 3vw, 36px)',       
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
         letterSpacing: '0.08em',
         fontSize: 'clamp(7px, 1.8vw, 10px)', 
          textTransform: 'uppercase',
          color: 'var(--ivory-dim)',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.2s ease 1.5s',
        }}>
          Founder of Daughters of the Nation <br />  <br />
          A vision rooted in dignity, intergenerational honor, and national restoration.
        </p>

        
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

       @media (max-width: 768px) {
  #hero {
    position: relative;
  }
  #hero > div:first-child {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    top: 0;
    left: 0;
  }
  #hero > div:nth-child(2) {
    width: 100% !important;
    justify-content: flex-start !important;
    padding-top: 60vh !important;
    position: relative;
    z-index: 1;
  }
  #hero h1 {
    font-size: 11vw !important;
  }
  #hero p:first-of-type {
    font-size: 6vw !important;
  }
  #hero p:last-of-type {
    font-size: 3vw !important;
  }
}
`}</style>
      
    </section>
  )
}
