# 🚀 Guide Pas à Pas - Mettre votre Portfolio en Ligne GRATUITEMENT

## 📋 Prérequis
- Un compte GitHub (gratuit)
- Votre projet Portfolio fonctionnel

---

## ÉTAPE 1 : Créer un compte GitHub (si vous n'en avez pas)

1. Allez sur **https://github.com**
2. Cliquez sur **"Sign up"** (en haut à droite)
3. Remplissez le formulaire :
   - Username (ex: `xavier-fave`)
   - Email
   - Mot de passe
4. Cliquez sur **"Create account"**
5. Vérifiez votre email si demandé

✅ **Votre compte GitHub est créé !**

---

## ÉTAPE 2 : Installer Git sur votre ordinateur

### Vérifier si Git est installé :
Ouvrez PowerShell et tapez :
```powershell
git --version
```

### Si Git n'est pas installé :
1. Allez sur **https://git-scm.com/download/win**
2. Téléchargez Git pour Windows
3. Installez-le (gardez les options par défaut)
4. Redémarrez PowerShell

✅ **Git est installé !**

---

## ÉTAPE 3 : Préparer votre projet pour GitHub

### 3.1 Ouvrir PowerShell dans le dossier de votre projet

1. Ouvrez l'Explorateur de fichiers
2. Allez dans `C:\aaaProjets\Portfolio`
3. Cliquez dans la barre d'adresse et tapez `powershell`
4. Appuyez sur Entrée

### 3.2 Initialiser Git

Dans PowerShell, tapez ces commandes une par une :

```powershell
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer un premier commit
git commit -m "Portfolio Xavier FAVÉ - Version initiale"
```

✅ **Votre projet est prêt pour Git !**

---

## ÉTAPE 4 : Créer un repository sur GitHub

1. Allez sur **https://github.com** et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite
3. Cliquez sur **"New repository"**
4. Remplissez :
   - **Repository name** : `portfolio-xavier` (ou un autre nom)
   - **Description** : "Portfolio professionnel de Xavier FAVÉ"
   - **Public** (cochez Public)
   - **NE COCHEZ PAS** "Add a README file"
   - **NE COCHEZ PAS** "Add .gitignore"
   - **NE COCHEZ PAS** "Choose a license"
5. Cliquez sur **"Create repository"**

✅ **Votre repository GitHub est créé !**

---

## ÉTAPE 5 : Connecter votre projet local à GitHub

GitHub vous affichera des instructions. Dans PowerShell, tapez :

```powershell
# Remplacer VOTRE-USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/portfolio-xavier.git

# Renommer la branche en "main"
git branch -M main

# Envoyer votre code sur GitHub
git push -u origin main
```

**Important** : Remplacez `VOTRE-USERNAME` par votre vrai nom d'utilisateur GitHub !

Exemple si votre username est `xavier-fave` :
```powershell
git remote add origin https://github.com/xavier-fave/portfolio-xavier.git
```

Si on vous demande vos identifiants GitHub :
- **Username** : votre nom d'utilisateur GitHub
- **Password** : créez un **Personal Access Token** (voir ci-dessous)

### Créer un Personal Access Token (si demandé) :

1. Allez sur **https://github.com/settings/tokens**
2. Cliquez sur **"Generate new token"** > **"Generate new token (classic)"**
3. Donnez un nom : "Portfolio"
4. Cochez **"repo"** (toutes les cases sous repo)
5. Cliquez sur **"Generate token"**
6. **COPIEZ LE TOKEN** (vous ne le reverrez plus !)
7. Utilisez ce token comme mot de passe dans PowerShell

✅ **Votre code est sur GitHub !**

---

## ÉTAPE 6 : Déployer sur Vercel (GRATUIT)

### 6.1 Créer un compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez sur **"Sign Up"**
3. Cliquez sur **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub

✅ **Votre compte Vercel est créé !**

### 6.2 Importer votre projet

1. Sur Vercel, cliquez sur **"Add New..."** (ou **"New Project"**)
2. Vous verrez la liste de vos repositories GitHub
3. Trouvez **"portfolio-xavier"** et cliquez sur **"Import"**

### 6.3 Configuration (automatique !)

Vercel détecte automatiquement que c'est un projet Vite :
- **Framework Preset** : Vite (détecté automatiquement)
- **Root Directory** : `./` (par défaut)
- **Build Command** : `npm run build` (automatique)
- **Output Directory** : `dist` (automatique)

**NE CHANGEZ RIEN !** Tout est déjà configuré.

### 6.4 Déployer

1. Cliquez sur le bouton **"Deploy"** (en bas)
2. Attendez 1-2 minutes
3. Vous verrez **"Success"** quand c'est prêt !

✅ **Votre site est en ligne !**

---

## ÉTAPE 7 : Accéder à votre site

1. Sur la page de succès Vercel, vous verrez votre URL
2. Elle ressemble à : **`https://portfolio-xavier.vercel.app`**
3. Cliquez dessus pour voir votre site en ligne !

✅ **Votre portfolio est maintenant accessible partout dans le monde !**

---

## 🎉 Félicitations !

Votre portfolio est maintenant en ligne gratuitement !

### Informations importantes :

- **URL de votre site** : Notez-la quelque part
- **Redéploiement automatique** : Chaque fois que vous modifiez votre code et faites `git push`, Vercel redéploie automatiquement
- **Modifier le nom de l'URL** : Dans les paramètres du projet Vercel, vous pouvez changer le nom

---

## 📝 Pour mettre à jour votre site plus tard

Quand vous modifiez votre code :

```powershell
# 1. Aller dans le dossier du projet
cd C:\aaaProjets\Portfolio

# 2. Ajouter les modifications
git add .

# 3. Créer un commit
git commit -m "Description de vos modifications"

# 4. Envoyer sur GitHub
git push

# 5. Vercel redéploie automatiquement en 1-2 minutes !
```

---

## ❓ Problèmes courants

### "git n'est pas reconnu"
→ Installez Git depuis https://git-scm.com/download/win

### "Permission denied"
→ Vérifiez que vous utilisez le bon Personal Access Token

### "Repository not found"
→ Vérifiez que le nom du repository et votre username sont corrects

### Le site ne se charge pas
→ Attendez 2-3 minutes, parfois le premier déploiement prend un peu plus de temps

---

## 🆘 Besoin d'aide ?

Si vous êtes bloqué à une étape, dites-moi à quelle étape vous êtes et je vous aiderai !

