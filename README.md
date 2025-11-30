# Portfolio Professionnel - Xavier FAVÉ

Portfolio professionnel moderne et responsive pour Xavier FAVÉ, étudiant ingénieur en M1 à l'ISEN Ouest, spécialisé en Intelligence Artificielle et à la recherche d'un stage de 3 mois. Développé avec React.

## 🚀 Fonctionnalités

- **Section Accueil** : Présentation avec photo/avatar, titre et résumé
- **Section CV** : Formation, expériences, compétences techniques et soft skills, langues
- **Section Projets** : Liste de projets avec captures d'écran, descriptions et technologies
- **Section Liens** : Liens vers GitHub, LinkedIn et autres plateformes
- **Section Contact** : Formulaire de contact et informations de contact

## 🛠️ Technologies Utilisées

- **React** 18.2.0
- **Vite** 5.0.8 (outil de build moderne)
- **CSS3** (styles modulaires et responsive)

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir le navigateur à l'adresse indiquée (généralement `http://localhost:5173`)

## 🏗️ Build pour Production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 📁 Structure du Projet

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Accueil.jsx      # Section d'accueil
│   │   ├── CV.jsx           # Section CV
│   │   ├── Projets.jsx      # Section projets
│   │   ├── Liens.jsx        # Section liens externes
│   │   ├── Contact.jsx      # Section contact
│   │   └── Navigation.jsx   # Menu de navigation
│   ├── styles/
│   │   ├── index.css        # Styles globaux
│   │   ├── App.css          # Styles de l'application
│   │   ├── Navigation.css   # Styles navigation
│   │   ├── Accueil.css      # Styles accueil
│   │   ├── CV.css           # Styles CV
│   │   ├── Projets.css      # Styles projets
│   │   ├── Liens.css        # Styles liens
│   │   └── Contact.css      # Styles contact
│   ├── App.jsx              # Composant principal
│   └── main.jsx             # Point d'entrée
├── index.html               # Fichier HTML principal
├── vite.config.js           # Configuration Vite
├── package.json             # Dépendances et scripts
└── README.md                # Documentation
```

## ✏️ Personnalisation

Le portfolio est déjà configuré avec les informations de Xavier FAVÉ. Pour mettre à jour :

1. **Accueil** : Modifier `src/components/Accueil.jsx`
   - Remplacer l'image placeholder par votre photo dans `public/images/avatar.jpg`
   - Modifier le texte de présentation si nécessaire

2. **CV** : Modifier `src/components/CV.jsx`
   - Mettre à jour les tableaux `formation`, `experiences`, `competencesTechniques`, `certifications`, `langues`

3. **Projets** : Modifier `src/components/Projets.jsx`
   - Ajouter ou modifier les projets dans le tableau `projets`
   - Ajouter vos captures d'écran dans un dossier `public/images/` et mettre à jour les chemins

4. **Liens** : Modifier `src/components/Liens.jsx`
   - Mettre à jour le tableau `liens` avec vos vrais liens (GitHub, etc.)

5. **Contact** : Modifier `src/components/Contact.jsx`
   - Mettre à jour `contactInfo` si nécessaire
   - Configurer l'envoi d'email (EmailJS, Formspree, ou votre backend)

### Modifier les couleurs

Modifier les variables CSS dans `src/styles/index.css` :

```css
:root {
  --primary-color: #4a90e2;    /* Couleur principale */
  --secondary-color: #50c878;  /* Couleur secondaire */
  --accent-color: #ff6b6b;     /* Couleur d'accent */
  /* ... */
}
```

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte aux écrans :
- Desktop (1200px+)
- Tablette (768px - 1199px)
- Mobile (< 768px)

## 🔧 Configuration du Formulaire de Contact

Le formulaire de contact nécessite une configuration pour l'envoi d'emails. Options possibles :

1. **EmailJS** : Service gratuit pour envoyer des emails depuis le frontend
2. **Formspree** : Service de formulaire en ligne
3. **Backend personnalisé** : Créer une API pour gérer l'envoi d'emails

Exemple avec EmailJS (à installer : `npm install @emailjs/browser`) :

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY');
  // ...
};
```

## 📝 Notes

- Toutes les images sont actuellement des placeholders. Remplacez-les par vos propres images.
- Les liens externes sont des placeholders. Mettez à jour avec vos vrais profils.
- Le formulaire de contact nécessite une configuration pour fonctionner réellement.

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

---

Développé avec ❤️ pour Xavier FAVÉ

