/**
 * Composant Liens
 * Section présentant les liens externes (GitHub, LinkedIn, etc.)
 * Permet d'accéder aux profils et portfolios externes
 */
import '../styles/Liens.css'

function Liens() {
  // Liens externes de Xavier FAVÉ
  const liens = [
    {
      id: 1,
      nom: "LinkedIn",
      description: "Connectez-vous avec moi sur LinkedIn",
      url: "https://linkedin.com/in/fave-xavier/",
      icon: "💼",
      couleur: "#0077b5"
    },
    {
      id: 2,
      nom: "CV PDF",
      description: "Téléchargez mon CV au format PDF (à ajouter)",
      url: "public/Fave_Xavier_CV_Stage (1).pdf",
      icon: "📄",
      couleur: "#e74c3c"
    }
  ]

  return (
    <section id="liens" className="liens">
      <div className="liens-container">
        <h2 className="section-title">Liens Externes</h2>
        <p className="section-subtitle">
          Retrouvez-moi sur différentes plateformes
        </p>
        
        <div className="liens-grid">
          {liens.map((lien) => (
            <a
              key={lien.id}
              href={lien.url}
              target="_blank"
              rel="noopener noreferrer"
              className="lien-card"
              style={{ '--lien-couleur': lien.couleur }}
            >
              <div className="lien-icon">{lien.icon}</div>
              <h3 className="lien-nom">{lien.nom}</h3>
              <p className="lien-description">{lien.description}</p>
              <span className="lien-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Liens

