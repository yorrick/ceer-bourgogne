# CEER Bourgogne - Site Web

Site web statique pour le Comité d'Endurance Équestre Régional de Bourgogne, construit avec Next.js et hébergé sur Vercel.

## 🐴 À propos

Le CEER Bourgogne est une association loi 1901 agréée jeunesse et sport, dédiée à la promotion et au développement de l'endurance équestre en Bourgogne. Ce site web présente nos activités, stages, actualités et informations pratiques pour tous les cavaliers pratiquant l'endurance ou désireux de la découvrir.

## 🛠️ Technologies utilisées

- **Framework**: Next.js 14 avec App Router
- **Styling**: Tailwind CSS
- **Content Management**: Markdown + Gray Matter
- **Deployment**: Vercel
- **Version Control**: Git + GitHub

## 🚀 Installation et développement

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/yorrick/ceer-bourgogne.git
cd ceer-bourgogne

# Installer les dépendances
npm install

# Initialiser Git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit"

# Ajouter le remote GitHub
git remote add origin https://github.com/yorrick/ceer-bourgogne.git
git push -u origin main

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible à `http://localhost:3000`

## 📁 Structure du projet

```
ceer-bourgogne/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── blog/              # Pages du blog
│   │   ├── portfolio/         # Galerie photos
│   │   ├── stages/           # Pages des stages
│   │   └── contact/          # Page de contact
│   ├── components/           # Composants React réutilisables
│   │   ├── ui/              # Composants UI de base
│   │   └── layout/          # Composants de mise en page
│   ├── lib/                 # Utilitaires et fonctions
│   └── types/               # Types TypeScript
├── content/                 # Contenu en Markdown
│   ├── posts/              # Articles de blog
│   ├── pages/              # Pages statiques
│   └── stages/             # Informations sur les stages
├── public/                 # Fichiers statiques
│   └── images/            # Images et photos
└── package.json
```

## 📝 Gestion du contenu

### Articles de blog

Les articles sont stockés dans `content/posts/` au format Markdown avec front matter :

```markdown
---
title: "Titre de l'article"
date: "2024-11-05"
category: "Catégorie"
excerpt: "Résumé de l'article..."
featuredImage: "/images/image.jpg"
author: "CEER Bourgogne"
---

# Contenu de l'article

Votre contenu en Markdown...
```

### Pages statiques

Les pages comme "Contact", "À propos" sont dans `content/pages/` :

```markdown
---
title: "Titre de la page"
lastModified: "2024-11-05"
---

# Contenu de la page

Votre contenu...
```

## 🎨 Personnalisation

### Couleurs principales

- **Vert principal**: `#0e7e2f` (green-700)
- **Vert accent**: `#16a34a` (green-600)
- **Fond clair**: `#f7f8fa`

### Typographie

- Police principale : Inter (via Next.js)
- Police des titres : Oswald (optionnel)

## 📷 Images et médias

- Placez les images dans `public/images/`
- Utilisez le composant `next/image` pour l'optimisation automatique
- Formats recommandés : WebP, AVIF pour les navigateurs modernes

## 🚀 Déploiement sur Vercel

### 1. Préparer le repository GitHub

```bash
# Initialiser Git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit"

# Ajouter le remote GitHub
git remote add origin https://github.com/yorrick/ceer-bourgogne.git
git push -u origin main
```

### 2. Déployer sur Vercel

1. Connectez-vous à [Vercel](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository GitHub
4. Configurez :
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Déployez

### 3. Configuration du domaine

1. Dans Vercel, allez dans "Settings" > "Domains"
2. Ajoutez votre domaine personnalisé
3. Configurez les enregistrements DNS selon les instructions Vercel

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📞 Contact et support

**CEER Bourgogne**
- **Adresse**: 14 ruelle au Pauvre, 21380 Messigny et Vantoux
- **Téléphone**: 06 78 37 04 08
- **Email**: janine.mareschal21@gmail.com
- **Facebook**: [CEER Bourgogne](https://www.facebook.com/CEER-Bourgogne-Endurance-équestre-1651352001821605/)

## 🤝 Contribution

Pour contribuer au projet :

1. Forkez le repository
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commitez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence privée - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Comité d'Endurance Équestre de Bourgogne** - Passion, Nature, Respect du cheval 