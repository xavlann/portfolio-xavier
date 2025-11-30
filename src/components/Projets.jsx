/**
 * Composant Projets
 * Section présentant les projets académiques et personnels
 * Chaque projet inclut : capture d'écran, description, technologies utilisées
 */
import '../styles/Projets.css'

function Projets() {
  // Projets académiques et techniques de Xavier FAVÉ
  const projets = [
    {
      id: 1,
      titre: "Prédiction des Trajectoires Maritimes",
      periode: "Juin 2025",
      ecole: "ISEN Brest",
      description: "Analyse Big Data d'un fichier de 500 000 lignes en R, développement de modèles IA (clustering, classification, LSTM) pour la prédiction de trajectoires maritimes.",
      descriptionLongue: "Projet d'analyse de données massives et d'intelligence artificielle réalisé à l'ISEN Brest. Traitement d'un dataset volumineux (500 000 lignes) en R avec analyse statistique approfondie. Développement de modèles d'apprentissage automatique incluant des techniques de clustering, classification et réseaux de neurones LSTM pour la prédiction de trajectoires. Création d'une application web interactive permettant la visualisation des trajectoires prédites et l'analyse des résultats.",
      technologies: ["R", "Python", "Machine Learning", "LSTM", "Clustering", "Classification", "Big Data", "Visualisation"],
      image: "public/ijgi-13-00085-g001.png",
      lienDemo: "#",
      lienGithub: "#",
      categorie: "Académique"
    },
    {
      id: 2,
      titre: "Réalisation d'un électrocardiogramme",
      periode: "Février 2025",
      ecole: "ISEN Brest",
      description: "Conception électronique complète d'un électrocardiogramme avec microcontrôleur, traitement et visualisation des signaux en Python.",
      descriptionLongue: "Projet interdisciplinaire combinant électronique, programmation embarquée et traitement de signal. Conception et réalisation d'un système d'électrocardiogramme complet incluant la partie électronique (capteurs, amplification, filtrage), programmation d'un microcontrôleur pour l'acquisition des données, et développement d'une application Python pour le traitement et la visualisation des signaux cardiaques. Fonctionnalités : affichage du BPM (battements par minute), mesure de la SpO2 (saturation en oxygène), système d'alarmes, et visualisation graphique des signaux ECG en temps réel.",
      technologies: ["Python", "Microcontrôleur", "Électronique", "Traitement de signal", "Matplotlib", "NumPy"],
      image: "public/62-large.jpg",
      lienDemo: "#",
      lienGithub: "#",
      categorie: "Académique"
    },
    {
      id: 3,
      titre: "Site type Spotify",
      periode: "2022 – 2025",
      ecole: "ISEN Brest",
      description: "Développement d'une plateforme de streaming musical complète avec front-end et back-end.",
      descriptionLongue: "Projet de développement web full-stack simulant une plateforme de streaming musical. Interface utilisateur moderne et intuitive, système de gestion de playlists, recherche avancée, et lecture de musique. Backend robuste avec gestion des utilisateurs, base de données musicale, et API REST.",
      technologies: ["React", "JavaScript", "PHP", "SQL", "HTML/CSS", "Backend", "Frontend"],
      image: "public/download-page-image-mac.fec937cc.png",
      lienDemo: "#",
      lienGithub: "#",
      categorie: "Académique"
    },
    {
      id: 4,
      titre: "Table de plongée (Front-end & Back-end)",
      periode: "2022 – 2025",
      ecole: "ISEN Brest",
      description: "Application complète de gestion de tables de plongée avec interface utilisateur et système backend.",
      descriptionLongue: "Développement d'une application web complète pour la gestion et le calcul des tables de plongée. Interface utilisateur permettant la saisie des paramètres de plongée, calcul automatique des paliers de décompression, et visualisation des résultats. Backend avec algorithmes de calcul de décompression et gestion des données.",
      technologies: ["Frontend", "Backend", "JavaScript", "PHP", "SQL", "Algorithmes"],
      image: "public/one-scuba-diver-underwater-back-260nw-1070776529.webp",
      lienDemo: "#",
      lienGithub: "#",
      categorie: "Académique"
    },
    {
      id: 5,
      titre: "Filmothèque en React JS",
      periode: "2022 – 2025",
      ecole: "ISEN Brest",
      description: "Application web de gestion de filmothèque développée avec React JS.",
      descriptionLongue: "Application React moderne pour la gestion d'une collection de films. Fonctionnalités : ajout, modification, suppression de films, recherche et filtrage, affichage des détails (réalisateur, acteurs, année, genre, note), et interface utilisateur responsive.",
      technologies: ["React", "JavaScript", "HTML/CSS", "State Management"],
      image: "public/45592f00-ea1b-11e9-8846-ccfcb8897f62.jpg",
      lienDemo: "#",
      lienGithub: "#",
      categorie: "Académique"
    },
    {
      id: 6,
      titre: "Mini-jeu rogue-like en C",
      periode: "2022 – 2025",
      ecole: "ISEN Brest",
      description: "Développement d'un jeu vidéo de type rogue-like en langage C.",
      descriptionLongue: "Projet de programmation système en C : développement d'un jeu de type rogue-like avec génération procédurale de niveaux, système de combat, gestion de l'inventaire, et mécaniques de jeu classiques du genre. Optimisation des performances et gestion mémoire.",
      technologies: ["C", "Programmation système", "Algorithmes", "Structures de données"],
      image: "public/tiny-rogue.jpg",
      lienDemo: "#",
      lienGithub: "#",
      categorie: "Académique"
    },
    {
      id: 7,
      titre: "Calcul du plus court chemin sur la carte de Bretagne",
      periode: "2022 – 2025",
      ecole: "ISEN Brest",
      description: "Application Qt en C++ pour le calcul du plus court chemin sur une carte de la Bretagne.",
      descriptionLongue: "Application desktop développée avec Qt et C++ implémentant des algorithmes de recherche de plus court chemin (Dijkstra, A*) sur une carte graphique de la Bretagne. Interface utilisateur interactive permettant de sélectionner des points de départ et d'arrivée, visualisation du chemin optimal, et affichage des distances et temps de trajet.",
      technologies: ["C++", "Qt", "Algorithmes de graphes", "Dijkstra", "A*", "Interface graphique"],
      image: "public/carte-gr34-sentier-des-douaniers-avec-noms-villes-portions.jpg",
      lienDemo: "#",
      lienGithub: "#",
      categorie: "Académique"
    }
  ]

  return (
    <section id="projets" className="projets">
      <div className="projets-container">
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">
          Découvrez mes réalisations académiques et personnelles
        </p>
        
        <div className="projets-grid">
          {projets.map((projet) => (
            <div key={projet.id} className="projet-card">
              <div className="projet-image-container">
                <img 
                  src={projet.image} 
                  alt={projet.titre}
                  className="projet-image"
                />
              </div>
              
              <div className="projet-content">
                <div className="projet-header">
                  <h3 className="projet-titre">{projet.titre}</h3>
                  <span className="projet-categorie">{projet.categorie}</span>
                </div>
                
                {(projet.periode || projet.ecole) && (
                  <div className="projet-meta">
                    {projet.periode && <span className="projet-periode">{projet.periode}</span>}
                    {projet.ecole && <span className="projet-ecole">{projet.ecole}</span>}
                  </div>
                )}
                
                <p className="projet-description">{projet.description}</p>
                
                <details className="projet-details">
                  <summary>En savoir plus</summary>
                  <p className="projet-description-longue">{projet.descriptionLongue}</p>
                </details>
                
                <div className="projet-technologies">
                  <h4>Technologies utilisées :</h4>
                  <div className="tech-tags">
                    {projet.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projets

