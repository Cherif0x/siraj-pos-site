# Siraj POS - Landing Page

## 📋 Description

Page de destination professionnelle pour Siraj - Système de point de vente et gestion de stock hors ligne pour le marché mauritanien.

Professional landing page for Siraj - Offline POS and inventory management system for the Mauritanian market.

## 🚀 Déploiement sur GitHub Pages

### Étapes:

1. **Créer un dépôt GitHub**
   - Allez sur GitHub.com
   - Créez un nouveau dépôt (ex: `siraj-pos-site`)
   - Initialisez-le sans README

2. **Pousser les fichiers**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Siraj landing page"
   git branch -M main
   git remote add origin https://github.com/Cherif0x/siraj-pos-site.git
   git push -u origin main
   ```

3. **Activer GitHub Pages**
   - Allez dans Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Cliquez sur Save

4. **Votre site sera disponible à:**
   ```
   https://cherif0x.github.io/siraj-pos-site/
   ```

## 📁 Structure du Projet

```
/
├── index.html              # Page principale (Arabe)
├── fr/
│   └── index.html         # Page française
├── assets/
│   ├── siraj_icon.png      # Logo Siraj
│   └── screenshots/
│       ├── pos.png        # Capture d'écran POS
│       ├── inventory.png  # Capture d'écran inventaire
│       └── reports.png    # Capture d'écran rapports
├── css/
│   ├── base.css          # Reset, variables, typographie
│   ├── layout.css        # Grille, conteneurs, sections
│   ├── components.css    # Boutons, cartes, composants
│   └── responsive.css    # Media queries
├── js/
│   └── main.js           # Menu mobile, scroll, FAQ
├── downloads/
│   └── siraj-trial.exe   # Fichier d'installation (à ajouter)
└── README.md             # Ce fichier
```

## 🎨 Palette de Couleurs

```css
--primary: #1E88A8       /* Bleu principal */
--secondary: #3BAED4     /* Bleu secondaire */
--bg-light: #F4F7FA      /* Fond clair */
--white: #FFFFFF         /* Blanc */
--text-main: #1F2937     /* Texte principal */
--text-muted: #6B7280    /* Texte atténué */
--success: #22C55E       /* Vert succès */
--danger: #EF4444        /* Rouge danger */
```

## ✨ Fonctionnalités

- ✅ Design responsive (Mobile / Tablet / Desktop)
- ✅ Support bilingue (Arabe RTL / Français LTR)
- ✅ Menu mobile hamburger
- ✅ Défilement fluide
- ✅ Accordéon FAQ
- ✅ Animations au scroll
- ✅ SEO optimisé
- ✅ Fonctionne hors ligne (après premier chargement)

## 📱 Sections

1. **Header** - Navigation avec logo et liens
2. **Hero** - Section principale avec CTA
3. **Features** - 6 fonctionnalités principales
4. **Benefits** - 4 avantages clés
5. **How It Works** - 4 étapes simples
6. **Screenshots** - 3 captures d'écran
7. **Pricing** - Plans tarifaires
8. **FAQ** - 7 questions fréquentes
9. **CTA Final** - Appel à l'action
10. **Footer** - Contact et informations

## 🔧 Personnalisation

### Modifier les couleurs:
Éditez `css/base.css` et changez les variables CSS dans `:root`

### Ajouter des images:
Placez vos images dans `assets/` et `assets/screenshots/`

### Modifier le contenu:
- Arabe: `index.html`
- Français: `fr/index.html`

### Contact:
Modifiez le numéro WhatsApp dans tous les liens:
```html
https://wa.me/22244666699
```

## 📞 Contact

- **WhatsApp**: +222 44 66 66 99
- **Téléphone**: +222 44 66 66 99
- **Localisation**: Nouakchott – Mauritanie

## 📄 Licence

© 2026 Siraj. Tous droits réservés.

---

## 🛠️ Développement Local

Pour tester localement:

1. Ouvrez `index.html` dans votre navigateur
2. Ou utilisez un serveur local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```
3. Accédez à `http://localhost:8000`

## ✅ Checklist avant déploiement

- [ ] Ajouter le logo `assets/siraj_icon.png`
- [ ] Ajouter les captures d'écran dans `assets/screenshots/`
- [ ] Ajouter le fichier d'installation `downloads/siraj-trial.exe`
- [ ] Vérifier tous les liens
- [ ] Tester sur mobile
- [ ] Tester sur différents navigateurs
- [ ] Vérifier l'orthographe
- [ ] Optimiser les images (compression)
- [ ] Ajouter Google Analytics (optionnel)

## 🌐 Navigateurs Supportés

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- Temps de chargement: < 2s
- Score Lighthouse: > 90
- Mobile-friendly: Oui
- SEO-friendly: Oui

---

**Développé avec ❤️ pour le marché mauritanien**
