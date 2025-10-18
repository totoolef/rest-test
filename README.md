# L'ESCALE - Site Vitrine Restaurant

Un site vitrine ultra moderne et professionnel pour le restaurant L'ESCALE, spécialisé dans les smash burgers, riz crousty poulet, poulet dynamite et milkshakes artisanaux.

## 🚀 Fonctionnalités

### Design Ultra Moderne
- **Interface responsive** adaptée à tous les écrans
- **Animations fluides** et transitions élégantes
- **Design system cohérent** avec Tailwind CSS
- **Typographie optimisée** avec Google Fonts (Inter & Poppins)

### Sections Principales
- **Hero Section** avec image de fond et call-to-action
- **Menu interactif** avec filtres par catégories
- **Section À propos** avec valeurs et statistiques
- **Formulaire de contact** avec validation
- **Footer complet** avec liens et informations

### Fonctionnalités Avancées
- **Navigation sticky** avec effet de transparence
- **Smooth scrolling** entre les sections
- **Système de notifications toast**
- **Bouton retour en haut** automatique
- **Éléments flottants animés**
- **Images optimisées** avec lazy loading

## 🛠️ Technologies Utilisées

- **Vue.js 3** - Framework JavaScript moderne
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool rapide
- **Heroicons** - Icônes SVG optimisées
- **Headless UI** - Composants accessibles

## 📦 Installation

```bash
# Cloner le projet
git clone [url-du-repo]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 🎨 Personnalisation

### Couleurs
Le site utilise une palette de couleurs personnalisée définie dans `tailwind.config.js` :
- **Primary** : Rouge/Orange pour les éléments principaux
- **Secondary** : Gris pour les textes et arrière-plans
- **Accent** : Orange pour les accents

### Typographie
- **Display** : Poppins pour les titres
- **Body** : Inter pour le texte courant

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Performance

- **Images optimisées** avec lazy loading
- **CSS purgé** automatiquement
- **Animations GPU-accelerated**
- **Code splitting** automatique

## 📄 Structure du Projet

```
src/
├── components/          # Composants Vue
│   ├── Header.vue      # Navigation principale
│   ├── Hero.vue        # Section d'accueil
│   ├── Menu.vue        # Menu des produits
│   ├── About.vue       # Section à propos
│   ├── Contact.vue     # Formulaire de contact
│   ├── Footer.vue      # Pied de page
│   └── ...
├── composables/        # Logique réutilisable
│   ├── useToast.js     # Gestion des notifications
│   └── useSmoothScroll.js # Navigation fluide
├── assets/            # Ressources statiques
└── main.js           # Point d'entrée
```

## 🎯 Optimisations SEO

- **Meta tags** optimisés
- **Structure sémantique** HTML5
- **Images alt** descriptives
- **Navigation claire** et accessible

## 🔧 Développement

### Scripts Disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Aperçu du build
```

### Ajout de Nouveaux Produits
Modifiez le tableau `menuItems` dans `Menu.vue` pour ajouter de nouveaux produits.

### Personnalisation des Couleurs
Éditez `tailwind.config.js` pour modifier la palette de couleurs.

## 📞 Support

Pour toute question ou suggestion concernant le site, n'hésitez pas à nous contacter via le formulaire de contact intégré.

---

**L'ESCALE** - Votre destination culinaire pour une expérience gastronomique unique ! 🍔✨