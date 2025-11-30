# 🚀 Déploiement Rapide - Portfolio Xavier FAVÉ

## Méthode la plus simple : Vercel (5 minutes)

### Étape 1 : Créer un compte GitHub (si vous n'en avez pas)
1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign up"
3. Créez votre compte

### Étape 2 : Mettre votre code sur GitHub

Ouvrez PowerShell dans le dossier de votre projet et exécutez :

```powershell
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Portfolio Xavier FAVÉ - Thème rouge"

# Créer un nouveau repository sur GitHub.com
# Puis connecter :
git remote add origin https://github.com/VOTRE-USERNAME/portfolio-xavier.git
git branch -M main
git push -u origin main
```

**Ou utilisez GitHub Desktop** (plus simple) :
1. Téléchargez [GitHub Desktop](https://desktop.github.com)
2. Créez un nouveau repository
3. Ajoutez tous les fichiers
4. Publiez sur GitHub

### Étape 3 : Déployer sur Vercel

1. **Allez sur [vercel.com](https://vercel.com)**
   - Cliquez sur "Sign Up"
   - Connectez-vous avec GitHub

2. **Importez votre projet**
   - Cliquez sur "Add New..." > "Project"
   - Sélectionnez votre repository `portfolio-xavier`
   - Vercel détecte automatiquement Vite
   - **Ne changez rien**, cliquez sur "Deploy"

3. **Attendez 1-2 minutes**
   - Vercel build votre site automatiquement
   - Vous verrez "Success" quand c'est prêt

4. **Votre site est en ligne !**
   - URL : `https://portfolio-xavier.vercel.app` (ou un nom similaire)
   - Vous pouvez changer le nom dans les paramètres

### ✅ C'est tout !

Votre portfolio est maintenant en ligne gratuitement !

**À chaque fois que vous modifiez votre code :**
1. Faites `git push` sur GitHub
2. Vercel redéploie automatiquement votre site

---

## 🌐 Alternative : Netlify (aussi très simple)

1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez sur "Sign up" (avec GitHub)
3. "Add new site" > "Import an existing project"
4. Sélectionnez votre repository GitHub
5. Configuration :
   - Build command : `npm run build`
   - Publish directory : `dist`
6. Cliquez sur "Deploy site"

---

## 📱 Tester avant de déployer

```bash
# Tester localement
npm run dev

# Tester le build (comme en production)
npm run build
npm run preview
```

---

## 🎨 Votre site est maintenant en rouge !

Le thème rouge a été appliqué à tout le site :
- Couleur principale : Rouge (#dc2626)
- Fond d'écran : Dégradé rouge
- Boutons : Rouge avec effets au survol
- Accents : Tons de rouge harmonieux

---

## 💡 Astuce : Nom de domaine personnalisé

Dans les paramètres Vercel/Netlify, vous pouvez ajouter votre propre domaine (ex: `xavier-fave.fr`) gratuitement !

---

**Besoin d'aide ?** Consultez `DEPLOIEMENT.md` pour plus de détails.

