import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wangari — A Woman Held by God',
  description: 'Founding Secretary General of Daughters of the Nation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}