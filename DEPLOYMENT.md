# Guide de déploiement CEER Bourgogne

Ce guide vous explique comment déployer le site CEER Bourgogne sur Vercel en utilisant GitHub pour le versioning.

## 📋 Prérequis

- Compte GitHub
- Compte Vercel (gratuit)
- Accès au domaine ceerbourgogne.com (pour la configuration DNS)

## 🚀 Étapes de déploiement

### 1. Créer le repository GitHub

1. **Créer un nouveau repository sur GitHub** :
   - Allez sur [github.com](https://github.com)
   - Cliquez sur "New repository"
   - Nom : `ceer-bourgogne`
   - Description : "Site web du Comité d'Endurance Équestre Régional de Bourgogne"
   - Laissez en **Public** ou **Private** selon vos préférences
   - **Ne pas** initialiser avec README (on a déjà nos fichiers)

2. **Connecter le projet local au repository** :
   ```bash
   git remote add origin https://github.com/VOTRE-USERNAME/ceer-bourgogne.git
   git branch -M main
   git push -u origin main
   ```

### 2. Configurer Vercel

1. **Se connecter à Vercel** :
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec votre compte GitHub

2. **Importer le projet** :
   - Cliquez sur "New Project"
   - Sélectionnez votre repository `ceer-bourgogne`
   - Vercel détectera automatiquement Next.js

3. **Configuration du projet** :
   - **Framework Preset** : Next.js (détecté automatiquement)
   - **Build Command** : `npm run build` (par défaut)
   - **Output Directory** : `.next` (par défaut)
   - **Install Command** : `npm install` (par défaut)

4. **Variables d'environnement** (si nécessaire) :
   - Pour l'instant, aucune variable n'est requise
   - Vous pourrez en ajouter plus tard dans Settings > Environment Variables

5. **Déployer** :
   - Cliquez sur "Deploy"
   - Le premier déploiement prendra quelques minutes

### 3. Configuration du domaine personnalisé

1. **Dans Vercel** :
   - Allez dans votre projet > Settings > Domains
   - Cliquez sur "Add Domain"
   - Entrez `ceerbourgogne.com` et `www.ceerbourgogne.com`

2. **Configuration DNS** :
   Chez votre registraire de domaine, configurez :

   **Pour le domaine principal (ceerbourgogne.com)** :
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

   **Pour le sous-domaine www** :
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **Verification (recommandé)** :
   Vercel vous donnera des enregistrements TXT à ajouter pour vérifier la propriété du domaine.

3. **SSL/TLS** :
   - Vercel active automatiquement HTTPS avec Let's Encrypt
   - Aucune configuration supplémentaire nécessaire

### 4. Déploiement automatique

Une fois configuré, chaque `git push` sur la branche `main` déclenchera automatiquement :
1. Un nouveau build sur Vercel
2. Un déploiement en production si le build réussit
3. Une mise à jour instantanée du site

### 5. Workflows de développement

#### Pour les updates de contenu :

1. **Ajouter un nouvel article** :
   ```bash
   # Créer un nouveau fichier dans content/posts/
   git add content/posts/nouvel-article.md
   git commit -m "Ajout: nouvel article"
   git push
   ```

2. **Modifier une page** :
   ```bash
   git add content/pages/contact.md
   git commit -m "Mise à jour: informations de contact"
   git push
   ```

#### Pour les développements :

1. **Créer une branche de développement** :
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   # Faire vos modifications
   git add .
   git commit -m "Ajout: nouvelle fonctionnalité"
   git push origin feature/nouvelle-fonctionnalite
   ```

2. **Créer une Pull Request** sur GitHub

3. **Merger en production** :
   ```bash
   git checkout main
   git merge feature/nouvelle-fonctionnalite
   git push
   ```

### 6. Monitoring et maintenance

#### Vercel Dashboard :
- **Analytics** : Voir le trafic et les performances
- **Functions** : Surveiller les temps de réponse
- **Deployments** : Historique des déploiements

#### GitHub :
- **Issues** : Tracker les bugs et améliorations
- **Actions** : Automatiser les tests (optionnel)

## 🛠️ Commandes utiles

```bash
# Développement local
npm run dev

# Vérifier le build avant déploiement
npm run build

# Vérifier les types TypeScript
npm run type-check

# Linter le code
npm run lint
```

## 🔧 Optimisations recommandées

### Performance :
- Les images sont automatiquement optimisées par Next.js
- CDN global via Vercel
- Compression gzip/brotli automatique

### SEO :
- Sitemap généré automatiquement
- Meta tags optimisés
- Schema.org markup pour les événements

### Sécurité :
- HTTPS forcé
- Headers de sécurité configurés
- Protection CSRF via Next.js

## 📞 Support

En cas de problème :

1. **Vercel Support** : [vercel.com/support](https://vercel.com/support)
2. **Next.js Documentation** : [nextjs.org/docs](https://nextjs.org/docs)
3. **GitHub Issues** : Créer une issue sur le repository

## 🎯 Prochaines étapes

Après le déploiement initial :

1. **Migration du contenu** : Convertir tous les articles WordPress en Markdown
2. **Images** : Optimiser et uploader les images existantes
3. **SEO** : Configurer Google Analytics et Search Console
4. **Forms** : Intégrer les formulaires de contact
5. **Performance** : Surveiller et optimiser les performances

---

**Note** : Ce guide assume que vous avez les droits d'administration sur le domaine ceerbourgogne.com et l'accès au registraire pour modifier les enregistrements DNS. 