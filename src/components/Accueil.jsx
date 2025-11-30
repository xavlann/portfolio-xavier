/**
 * Composant Accueil
 * Section d'introduction avec présentation rapide de Xavier FAVÉ
 * Affiche photo/avatar, titre et résumé
 */
import '../styles/Accueil.css'

function Accueil() {
  return (
    <section id="accueil" className="accueil">
      <div className="accueil-container">
        <div className="accueil-content">
          {/* Photo ou avatar - placeholder à remplacer */}
          <div className="accueil-avatar">
            <img 
              src="/avatar.jpg" 
              alt="Xavier FAVÉ" 
              className="avatar-img"
            />
          </div>
          
          {/* Titre et présentation */}
          <h1 className="accueil-title">
            <span className="title-name">Xavier FAVÉ</span>
            <span className="title-role">Étudiant ingénieur en recherche de stage</span>
          </h1>
          
          <div className="accueil-age">
            <span>21 ans</span>
          </div>
          
          <p className="accueil-description">
            Passionné par l'intelligence artificielle, je cherche un stage de 3 mois pour 
            mettre en pratique mes compétences en IA et continuer à apprendre. Actuellement 
            en M1 à l'ISEN Ouest, je suis spécialisé en Intelligence Artificielle et 
            développement logiciel.
          </p>
          
          {/* Bouton d'action vers CV */}
          <div className="accueil-actions">
            <a href="#cv" className="btn btn-primary">
              Découvrir mon parcours
            </a>
            <a href="#projets" className="btn btn-secondary">
              Voir mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accueil

