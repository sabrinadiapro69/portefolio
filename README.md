# Portfolio de Nadia Bourouaha

Webdesigner WordPress. Je conçois des sites vitrines clairs et rapides pour les petites entreprises.

Site en ligne : https://sabrinadiapro69.github.io/portefolio/

## Ce que montre ce dépôt

- Un site statique en HTML et CSS, sans framework ni dépendance
- Une identité visuelle tirée de la charte graphique de mon agence One-Concept : billet d'embarquement, perforation, tampon
- Des polices auto-hébergées en woff2 (Fraunces, Inter, IBM Plex Mono), sans appel à Google Fonts, pour la performance et le RGPD
- Une mise en page responsive (ordinateur, tablette, mobile)
- Une attention portée à l'accessibilité : contrastes AA ou AAA, lien d'évitement, focus visible, textes alternatifs, respect de `prefers-reduced-motion`

## Structure

```
index.html            Page unique : billet d'accueil, projets, itinéraire, compétences, contact
projets.html          Redirection vers la section projets
assets/css/style.css  Styles et variables de la charte
assets/fonts/         Polices woff2 auto-hébergées
assets/img/           Portrait et captures des projets
```

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```
python3 -m http.server 8000
```

## Licences

Polices sous licence SIL Open Font License. Code et contenus : Nadia Bourouaha.
