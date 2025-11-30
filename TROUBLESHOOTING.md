# Guide de dépannage - Écran blanc

## Vérifications à effectuer

### 1. Vérifier que le serveur de développement est lancé

```bash
npm run dev
```

Vous devriez voir une URL comme `http://localhost:5173`

### 2. Vérifier la console du navigateur

Ouvrez les outils de développement (F12) et regardez l'onglet "Console" pour voir les erreurs JavaScript.

### 3. Vérifier que les dépendances sont installées

```bash
npm install
```

### 4. Vérifier les erreurs dans le terminal

Le terminal où `npm run dev` est lancé devrait afficher les erreurs de compilation.

### 5. Vider le cache et réinstaller

```bash
# Supprimer node_modules et package-lock.json
rm -rf node_modules package-lock.json

# Réinstaller
npm install

# Relancer
npm run dev
```

### 6. Vérifier l'encodage des fichiers

Assurez-vous que tous les fichiers sont en UTF-8.

### 7. Problèmes courants

- **Erreur "Cannot find module"** : Les dépendances ne sont pas installées
- **Erreur de syntaxe JSX** : Vérifiez les composants pour des erreurs de syntaxe
- **Erreur CSS** : Vérifiez que tous les fichiers CSS existent dans `src/styles/`
- **Port déjà utilisé** : Changez le port dans `vite.config.js` ou arrêtez l'autre processus

## Test minimal

Pour tester si React fonctionne, remplacez temporairement `App.jsx` par :

```jsx
function App() {
  return <div><h1>Test</h1></div>
}

export default App
```

Si cela fonctionne, le problème vient d'un composant spécifique.

