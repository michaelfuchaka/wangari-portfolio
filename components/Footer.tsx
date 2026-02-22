export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(201,169,110,0.18)',
      padding: '16px 12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize: '22px',
        color: 'var(--gold)',
        letterSpacing: '0.22em',
      }}>
        WANGARI
      </p>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '10px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--ivory-dim)',
      }}>
        Daughters of the Nation
      </p>

      <div style={{
        width: '40px',
        height: '1px',
        background: 'var(--gold-dim)',
        margin: '8px 0',
      }} />

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '10px',
        color: 'rgba(240,234,214,0.28)',
        letterSpacing: '0.1em',
      }}>
        © {new Date().getFullYear()} Wangari. All rights reserved.
      </p>
    </footer>
  )
}
