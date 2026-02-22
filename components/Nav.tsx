'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '28px 60px',
      background: scrolled
        ? 'rgba(13,27,42,0.96)'
        : 'linear-gradient(to bottom, rgba(13,27,42,0.9) 0%, transparent 100%)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,169,110,0.08)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <a href="#hero" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize: '18px',
        color: 'var(--gold)',
        letterSpacing: '0.14em',
        textDecoration: 'none',
      }}>
        
      </a>

      <ul style={{ display: 'flex', gap: '48px', listStyle: 'none' }}>
        {[
          { label: 'About', href: '#about' },
          { label: 'Story', href: '#the-woman' },
          { label: 'The Founder', href: '#founder' },
        ].map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--ivory-dim)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ivory-dim)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
