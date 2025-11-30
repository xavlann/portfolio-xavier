# Guide de déploiement gratuit - Portfolio Xavier FAVÉ

## 🚀 Option 1 : Vercel (Recommandé - Le plus simple)

Vercel est gratuit et parfaitement adapté pour les projets React/Vite.

### Étapes :

1. **Créer un compte sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Sign Up" et connectez-vous avec GitHub (recommandé)

2. **Préparer votre projet sur GitHub**
   ```bash
   # Initialiser Git si ce n'est pas déjà fait
   git init
   
   # Ajouter tous les fichiers
   git add .
   
   # Créer un commit
   git commit -m "Portfolio Xavier FAVÉ"
   
   # Créer un repository sur GitHub (github.com/new)
   # Puis connecter votre projet local
   git remote add origin https://github.com/VOTRE-USERNAME/portfolio-xavier.git
   git branch -M main
   git push -u origin main
   ```

3. **Déployer sur Vercel**
   - Allez sur [vercel.com/new](https://vercel.com/new)
   - Cliquez sur "Import Git Repository"
   - Sélectionnez votre repository GitHub
   - Vercel détectera automatiquement Vite
   - Cliquez sur "Deploy"
   - Attendez 1-2 minutes
   - Votre site sera en ligne avec une URL comme : `portfolio-xavier.vercel.app`

4. **Configuration automatique**
   - Vercel détecte automatiquement Vite
   - Build Command : `npm run build`
   - Output Directory : `dist`
   - Tout est configuré automatiquement !

### Avantages Vercel :
- ✅ Gratuit pour toujours
- ✅ Déploiement en 1 clic
- ✅ HTTPS automatique
- ✅ URL personnalisée gratuite
- ✅ Redéploiement automatique à chaque push Git
- ✅ CDN global (site rapide partout)

---

## 🌐 Option 2 : Netlify (Alternative simple)

### Étapes :

1. **Créer un compte sur Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Cliquez sur "Sign up" (avec GitHub recommandé)

2. **Déployer depuis GitHub**
   - Cliquez sur "Add new site" > "Import an existing project"
   - Connectez votre repository GitHub
   - Configuration :
     - Build command : `npm run build`
     - Publish directory : `dist`
   - Cliquez sur "Deploy site"

3. **Résultat**
   - Votre site sera en ligne avec une URL comme : `portfolio-xavier.netlify.app`

### Avantages Netlify :
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ Déploiement continu
- ✅ Formulaires gratuits (pour votre formulaire de contact)

---

## 📦 Option 3 : GitHub Pages (Gratuit mais plus technique)

### Étapes :

1. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Modifier package.json**
   Ajoutez dans `package.json` :
   ```json
   {
     "homepage": "https://VOTRE-USERNAME.github.io/portfolio-xavier",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Déployer**
   ```bash
   npm run deploy
   ```

4. **Activer GitHub Pages**
   - Allez dans Settings > Pages de votre repository
   - Source : `gh-pages` branch
   - Votre site sera sur : `VOTRE-USERNAME.github.io/portfolio-xavier`

---

## 🎯 Option 4 : Surge.sh (Très simple, sans Git)

### Étapes :

1. **Installer Surge**
   ```bash
   npm install -g surge
   ```

2. **Build votre projet**
   ```bash
   npm run build
   ```

3. **Déployer**
   ```bash
   cd dist
   surge
   ```
   - Créez un compte (gratuit)
   - Choisissez un nom de domaine (ex: `xavier-fave-portfolio.surge.sh`)

### Avantages Surge :
- ✅ Très simple
- ✅ Pas besoin de Git
- ✅ Déploiement en 30 secondes

---

## 🏆 Recommandation : Vercel

**Je recommande Vercel** car :
- C'est le plus simple
- Configuration automatique
- Performance excellente
- Interface très intuitive
- Gratuit pour toujours

### Commandes rapides pour Vercel :

```bash
# 1. Installer Vercel CLI (optionnel)
npm install -g vercel

# 2. Build le projet
npm run build

# 3. Déployer (si vous utilisez la CLI)
vercel

# Ou simplement pousser sur GitHub et connecter sur vercel.com
```

---

## 📝 Notes importantes

1. **Variables d'environnement** : Si vous ajoutez des variables d'environnement plus tard, configurez-les dans les paramètres de déploiement

2. **Nom de domaine personnalisé** : Vous pouvez ajouter votre propre domaine (ex: `xavier-fave.fr`) dans les paramètres de Vercel/Netlify

3. **Redéploiement automatique** : Avec Vercel/Netlify, chaque push sur GitHub redéploie automatiquement votre site

4. **Formulaire de contact** : Pour faire fonctionner le formulaire, vous pouvez utiliser :
   - Formspree (gratuit jusqu'à 50 soumissions/mois)
   - EmailJS (gratuit jusqu'à 200 emails/mois)
   - Netlify Forms (si vous utilisez Netlify)

---

## ✅ Checklist avant déploiement

- [ ] Tester le site localement : `npm run dev`
- [ ] Vérifier que le build fonctionne : `npm run build`
- [ ] Vérifier que toutes les images sont accessibles
- [ ] Tester sur mobile (responsive)
- [ ] Vérifier les liens externes (LinkedIn, etc.)

---

**Besoin d'aide ?** Consultez la documentation :
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)

