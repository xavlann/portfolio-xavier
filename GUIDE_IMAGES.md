# Guide pour ajouter vos images

## Structure recommandée

Créez un dossier `public/images/` et placez-y vos images :

```
public/
  images/
    avatar.jpg          # Photo de profil pour la section Accueil
    projet1.png        # Capture d'écran du projet 1
    projet2.png        # Capture d'écran du projet 2
    projet3.png        # Capture d'écran du projet 3
    ...
```

## Utilisation dans les composants

### 1. Photo de profil (Accueil)

Dans `src/components/Accueil.jsx`, remplacez :

```jsx
<img 
  src="https://via.placeholder.com/200x200/4a90e2/ffffff?text=X" 
  alt="Xavier" 
  className="avatar-img"
/>
```

par :

```jsx
<img 
  src="/images/avatar.jpg" 
  alt="Xavier" 
  className="avatar-img"
/>
```

### 2. Images de projets

Dans `src/components/Projets.jsx`, remplacez les URLs placeholder par :

```jsx
image: "/images/projet1.png"
```

## Formats recommandés

- **Photo de profil** : JPG ou PNG, format carré (200x200px minimum)
- **Captures de projets** : PNG ou JPG, format paysage (600x400px minimum)
- **Optimisation** : Utilisez des outils comme TinyPNG ou ImageOptim pour réduire la taille des fichiers

## Note importante

Les fichiers dans le dossier `public/` sont servis à la racine du site. Utilisez donc `/images/nom-fichier.jpg` et non `./images/nom-fichier.jpg`.

