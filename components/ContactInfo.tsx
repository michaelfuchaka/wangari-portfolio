'use client';
import { Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section style={{
      padding: '60px 20px',
      background: 'var(--navy)',
      borderTop: '1px solid var(--gold-border)',
      borderBottom: '1px solid var(--gold-border)',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* Heading */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
        }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 400,
            color: 'var(--gold)',
            letterSpacing: '0.12em',
            marginBottom: '12px',
          }}>
            Get in Touch
          </h2>
          <div style={{
            width: '60px',
            height: '2px',
            background: 'var(--gold-dim)',
            margin: '0 auto',
          }} />
        </div>

        {/* Contact Cards Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          padding: '0 20px',
        }}>
          {/* Phone Card */}
          <a
            href="tel:+254716331296"
            style={{
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <div style={{
              padding: '32px',
              border: '1px solid var(--gold-border)',
              borderRadius: '4px',
              background: 'rgba(201, 169, 110, 0.03)',
              transition: 'all 0.3s ease',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              height: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.background = 'rgba(201, 169, 110, 0.08)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 169, 110, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold-border)';
              e.currentTarget.style.background = 'rgba(201, 169, 110, 0.03)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--gold-dim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <Phone size={24} color="var(--gold)" />
                </div>
              <div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '20px',
                  fontWeight: 400,
                  color: 'var(--gold)',
                  marginBottom: '8px',
                  letterSpacing: '0.05em',
                }}>
                  Phone
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  color: 'var(--ivory)',
                  letterSpacing: '0.02em',
                  fontWeight: 500,
                }}>
                  +254 716 331296
                </p>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:joywangari98@gmail.com"
            style={{
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <div style={{
              padding: '32px',
              border: '1px solid var(--gold-border)',
              borderRadius: '4px',
              background: 'rgba(201, 169, 110, 0.03)',
              transition: 'all 0.3s ease',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              height: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.background = 'rgba(201, 169, 110, 0.08)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 169, 110, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold-border)';
              e.currentTarget.style.background = 'rgba(201, 169, 110, 0.03)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
                 <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--gold-dim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <Mail size={24} color="var(--gold)" />
                </div>
              <div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '20px',
                  fontWeight: 400,
                  color: 'var(--gold)',
                  marginBottom: '8px',
                  letterSpacing: '0.05em',
                }}>
                  Email
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  color: 'var(--ivory)',
                  letterSpacing: '0.02em',
                  fontWeight: 500,
                  wordBreak: 'break-all',
                }}>
                  joywangari98@gmail.com
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Additional Message */}
        <p style={{
          textAlign: 'center',
          marginTop: '48px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '16px',
          color: 'var(--ivory-dim)',
          letterSpacing: '0.03em',
          lineHeight: 1.6,
        }}>
          We'd love to hear from you. Reach out anytime.
        </p>
      </div>
    </section>
  );
}
