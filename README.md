# Twins Video Player 2

Version moderne du lecteur Twins Video Player : une seule page HTML, sans serveur, sans envoi de données.

## Utiliser en ligne
Réglages du dépôt → Pages → Source : **GitHub Actions**. Poussez sur `main`, la page est publiée automatiquement.

## Obtenir le .exe Windows
- Onglet **Actions** → « Build Windows exe » → **Run workflow**, puis téléchargez l'artefact.
- Ou créez une release : `git tag v2.0.0 && git push --tags` ; le .exe est joint à la release.

## Tester en local
```
npm install
npm start
```
