import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Prologue from '@/components/Prologue'
import TheWoman from '@/components/TheWoman'
import TheCovering from '@/components/TheCovering'
import TheFounder from '@/components/TheFounder'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Prologue />
      <TheWoman />
      <TheCovering />
      <TheFounder />
      <Footer />
    </main>
  )
}
