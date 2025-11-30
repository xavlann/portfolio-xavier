/**
 * Composant CV
 * Section présentant le curriculum vitae complet
 * Inclut : Formation, Expériences, Compétences, Langues, Contact
 */
import '../styles/CV.css'

function CV() {
  // Formation de Xavier FAVÉ
  const formation = [
    {
      periode: "2024 – 2027",
      etablissement: "ISEN Ouest (Brest)",
      diplome: "Master en Intelligence Artificielle",
      specialite: "Intelligence Artificielle",
      description: "Formation spécialisée en intelligence artificielle, machine learning et traitement de données."
    },
    {
      periode: "Février – Juin 2026",
      etablissement: "Tomas Bata University in Zlín (Tchéquie)",
      diplome: "ERASMUS - Cours spécialisé IA",
      specialite: "ANN (Artificial Neural Networks), Advanced Programming",
      description: "Échange ERASMUS avec cours spécialisés en réseaux de neurones artificiels et programmation avancée."
    },
    {
      periode: "2022 – 2024",
      etablissement: "ISEN Ouest (Brest)",
      diplome: "Classe préparatoire intégrée",
      specialite: "MPSI / Informatique et Réseaux",
      description: "Formation préparatoire intensive en mathématiques, physique, sciences de l'ingénieur, informatique et réseaux."
    },
    {
      periode: "2022",
      etablissement: "Lycée Bossuet (Lannion)",
      diplome: "Bac général",
      specialite: "Mathématiques expert et Physique-Chimie",
      description: "Baccalauréat général avec spécialités Mathématiques expertes et Physique-Chimie."
    }
  ]

  // Expériences professionnelles de Xavier FAVÉ
  const experiences = [
    {
      periode: "Juillet-Août 2023 & 2024",
      poste: "Employé polyvalent saisonnier",
      entreprise: "Intermarché Trébeurden - Rayon Fruits & Légumes",
      description: "Mise en rayon, contrôle qualité, gestion des stocks, rotation des marchandises, utilisation de gerbeur et transpalettes.",
      technologies: []
    },
    {
      periode: "Mars 2023",
      poste: "Bénévole",
      entreprise: "Banque Alimentaire et Centre Alimentaire, Lannion",
      description: "Collecte et distribution de denrées alimentaires, accueil et accompagnement des bénéficiaires, tri des légumes.",
      technologies: []
    }
  ]

  // Compétences techniques de Xavier FAVÉ
  const competencesTechniques = [
    { 
      categorie: "Gestion de projet", 
      items: ["Agile", "Scrum"] 
    },
    { 
      categorie: "Langages de programmation", 
      items: ["C", "C++", "Python", "R", "JavaScript", "PHP", "SQL", "HTML/CSS", "React", "Qt"] 
    },
    { 
      categorie: "IA / Data Science", 
      items: ["NumPy", "Pandas", "Matplotlib", "ScikitLearn", "TensorFlow", "PyTorch", "Keras"] 
    },
    { 
      categorie: "Outils & environnements", 
      items: ["VSCode", "Anaconda", "Jupyter", "Git/GitHub", "WAMP", "Google Colab"] 
    },
    { 
      categorie: "Systèmes & Réseaux", 
      items: ["Linux", "Windows", "Cisco Packet Tracer", "VirtualBox", "JMerise"] 
    }
  ]

  // Soft Skills de Xavier FAVÉ
  const softSkills = [
    "Travail d'équipe",
    "Communication",
    "Résolution de problèmes",
    "Gestion de projet",
    "Adaptabilité",
    "Curiosité",
    "Autonomie",
    "Rigueur"
  ]

  // Certifications de Xavier FAVÉ
  const certifications = [
    {
      nom: "TOEIC",
      niveau: "900 points (B2+ / C1 Reading | B2 Listening)",
      date: ""
    },
    {
      nom: "Certification Voltaire",
      niveau: "Orthographe - Niveau Affaires",
      date: ""
    }
  ]

  // Langues de Xavier FAVÉ
  const langues = [
    { langue: "Français", niveau: "Natif" },
    { langue: "Anglais", niveau: "B2+ TOEIC 900 (C1 Reading | B2 Listening)" },
    { langue: "Chinois", niveau: "Scolaire (6ᵉ – Terminale)" }
  ]

  return (
    <section id="cv" className="cv">
      <div className="cv-container">
        <h2 className="section-title">Curriculum Vitae</h2>
        
        {/* Formation */}
        <div className="cv-section">
          <h3 className="cv-section-title">Formation</h3>
          <div className="cv-timeline">
            {formation.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-period">{item.periode}</div>
                <div className="timeline-content">
                  <h4>{item.diplome} - {item.specialite}</h4>
                  <p className="timeline-institution">{item.etablissement}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expériences */}
        <div className="cv-section">
          <h3 className="cv-section-title">Expériences</h3>
          <div className="cv-timeline">
            {experiences.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-period">{item.periode}</div>
                <div className="timeline-content">
                  <h4>{item.poste}</h4>
                  <p className="timeline-institution">{item.entreprise}</p>
                  <p className="timeline-description">{item.description}</p>
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="timeline-tech">
                      {item.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compétences Techniques */}
        <div className="cv-section">
          <h3 className="cv-section-title">Compétences Techniques</h3>
          <div className="competences-grid">
            {competencesTechniques.map((cat, index) => (
              <div key={index} className="competence-category">
                <h4>{cat.categorie}</h4>
                <div className="competence-items">
                  {cat.items.map((item, i) => (
                    <span key={i} className="competence-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="cv-section">
          <h3 className="cv-section-title">Soft Skills</h3>
          <div className="soft-skills">
            {softSkills.map((skill, index) => (
              <span key={index} className="soft-skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="cv-section">
          <h3 className="cv-section-title">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <h4 className="certification-nom">{cert.nom}</h4>
                <p className="certification-niveau">{cert.niveau}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Langues */}
        <div className="cv-section">
          <h3 className="cv-section-title">Langues</h3>
          <div className="langues-list">
            {langues.map((item, index) => (
              <div key={index} className="langue-item">
                <span className="langue-name">{item.langue}</span>
                <span className="langue-niveau">{item.niveau}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV

