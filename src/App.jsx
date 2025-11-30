import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Accueil from './components/Accueil'
import CV from './components/CV'
import Projets from './components/Projets'
import Liens from './components/Liens'
import Contact from './components/Contact'
import './styles/App.css'

function App() {
  const [activeSection, setActiveSection] = useState('accueil')

  // Détection de la section active au scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'cv', 'projets', 'liens', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fonction pour naviguer vers une section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="App">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Accueil />
        <CV />
        <Projets />
        <Liens />
        <Contact />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Xavier FAVÉ - Tous droits réservés</p>
      </footer>
    </div>
  )
}

export default App

