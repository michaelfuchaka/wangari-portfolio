'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
 const [closing, setClosing] = useState(false)
const closeMenu = () => { setClosing(true); setTimeout(() => { setMenuOpen(false); setClosing(false) }, 280) }

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

      <ul style={{ display: 'flex', gap: '48px', listStyle: 'none' }} className="nav-desktop">
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

          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display:'none', flexDirection:'column', gap:'5px', background:'none', border:'none', cursor:'pointer' }}>
      <span style={{ display:'block', width:'24px', height:'1px', background:'var(--gold)', transition:'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
      <span style={{ display:'block', width:'24px', height:'1px', background:'var(--gold)', transition:'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
      <span style={{ display:'block', width:'24px', height:'1px', background:'var(--gold)', transition:'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
    </button>
    {(menuOpen) && <div style={{position:'fixed', top:0, right:0, height:'100vh', width:'70vw', background:'rgba(13,27,42,0.97)', backdropFilter:'blur(12px)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start',paddingTop:'100px', gap:'40px', zIndex:99, animation: closing ? 'slideOut 0.3s ease forwards' : 'slideIn 0.3s ease forwards' }}>
           <button onClick={closeMenu} style={{ position:'absolute', top:'28px', right:'28px', background:'none', border:'none', cursor:'pointer', color:'var(--gold)', fontSize:'20px' }}>✕</button>
      {[{label:'About',href:'#about'},{label:'Story',href:'#the-woman'},{label:'The Founder',href:'#founder'}].map(l => <a key={l.href} href={l.href} onClick={()=>closeMenu()} style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'13px', fontWeight:300, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--ivory)', textDecoration:'none' }}>{l.label}</a>)}
    </div>}
    <style>{`.nav-desktop{display:flex} .nav-hamburger{display:none} @media(max-width:768px){.nav-desktop{display:none!important} .nav-hamburger{display:flex!important}} @keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}} @keyframes slideOut{from{transform:translateX(0)}to{transform:translateX(100%)}}`}</style>
    </nav>
  )
}
