/**
 * Composant Navigation
 * Menu de navigation fixe en haut de la page
 * Permet de naviguer entre les différentes sections du portfolio
 */
import { useState } from 'react'
import '../styles/Navigation.css'

function Navigation({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'cv', label: 'CV' },
    { id: 'projets', label: 'Projets' },
    { id: 'liens', label: 'Liens' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false) // Fermer le menu mobile après clic
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="/avatar.jpg" 
            alt="Xavier FAVÉ" 
            className="nav-avatar"
          />
          <span>Xavier FAVÉ</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Menu hamburger pour mobile */}
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation

