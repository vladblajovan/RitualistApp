import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Politique de confidentialité - Ritualist',
  metaDescription: 'Politique de confidentialité de l’app d’habitudes Ritualist.',
  title: 'Politique de confidentialité',
  updated: '10 novembre 2026',
  legal: true,
  sections: [
    {
      title: 'Introduction',
      blocks: [
        { p: 'Ritualist (« nous », « notre » ou « nos ») s’engage à protéger ta vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons tes informations lorsque tu utilises notre application iOS.' },
        { note: '**L’essentiel :** Ritualist est conçue en mettant la confidentialité en premier. Les données de tes habitudes restent sur ton appareil et dans ton compte iCloud personnel. Nous n’avons pas accès à tes données. Les seules exceptions sont des statistiques d’utilisation anonymes, qui n’incluent jamais rien de ce que tu écris, et des données horaires minimales et non identifiantes pour les Activités en direct du jeûne, toutes deux décrites ci-dessous.' },
      ],
    },
    {
      title: 'Informations que nous collectons',
      blocks: [
        { h3: 'Données que tu fournis' },
        {
          ul: [
            '**Informations du profil :** nom, photo de profil, genre et tranche d’âge (tous facultatifs)',
            '**Données des habitudes :** les habitudes que tu crées, avec leurs noms, plannings, rappels et validations',
            '**Catégories :** les catégories personnalisées que tu crées pour organiser tes habitudes',
          ],
        },
        { h3: 'Données collectées automatiquement' },
        {
          ul: [
            '**Données de localisation :** uniquement lorsque tu actives des rappels basés sur la localisation pour certaines habitudes. Nous utilisons le géorepérage pour déclencher des rappels quand tu arrives dans des lieux désignés ou que tu les quittes.',
            '**Horaires des Activités en direct du jeûne :** pendant une Activité en direct de jeûne, l’app envoie à notre backend un jeton push de l’Activité en direct ainsi que les heures de début et d’objectif du jeûne, afin que l’écran verrouillé, la Dynamic Island et l’Apple Watch se mettent à jour à temps. Voir « Mises à jour des Activités en direct » ci-dessous.',
            '**Données d’utilisation anonymes :** nous collectons des données anonymes d’interaction avec le produit (par exemple quels écrans sont visités et quelles fonctionnalités sont utilisées), les performances et diagnostics de l’app, les événements d’abonnement et d’achat, ainsi qu’une localisation approximative (pays et ville) déduite de ton adresse IP, afin de comprendre comment l’app est utilisée et d’améliorer l’expérience. Ces données ne sont pas liées à ton identité. Voir la section « Statistiques » ci-dessous.',
          ],
        },
        { h3: 'Données que nous NE collectons PAS' },
        {
          ul: [
            'Nous n’utilisons pas de SDK publicitaires ni de suivi entre apps',
            'Nous ne collectons pas d’identifiants d’appareil à des fins de suivi ou de publicité',
            'Nous n’envoyons ni noms d’habitudes ou de catégories, ni notes, humeurs, messages d’encouragement ou valeurs d’Apple Health à notre backend ou aux statistiques',
            'Nous ne collectons pas ta position précise',
            'Nous ne vendons ni ne partageons tes données avec des tiers',
          ],
        },
      ],
    },
    {
      title: 'Comment nous stockons tes données',
      blocks: [
        { h3: 'Stockage local' },
        { p: 'Toutes les données de tes habitudes sont stockées localement sur ton appareil, avec les mécanismes de stockage sécurisés d’Apple.' },
        { h3: 'Synchronisation iCloud' },
        { p: 'Si ta session iCloud est ouverte, tes données se synchronisent automatiquement entre tes appareils Apple grâce au service CloudKit d’Apple. Cela signifie que :' },
        {
          ul: [
            'Tes données sont chiffrées par Apple pendant le transfert et au repos',
            'Personne d’autre que toi ne peut accéder à tes données, liées à ton identifiant Apple',
            'Nous ne pouvons ni accéder à tes données iCloud, ni les lire, ni les déchiffrer',
            'La synchronisation est régie par la [politique de confidentialité d’Apple](https://www.apple.com/legal/privacy/)',
          ],
        },
        { h3: 'Stockage sécurisé' },
        { p: 'Les informations sensibles (comme l’état de l’abonnement) sont stockées dans le trousseau iOS, le système sécurisé d’Apple pour les identifiants.' },
      ],
    },
    {
      title: 'Données de localisation',
      blocks: [
        { p: 'Ritualist ne demande l’accès à la localisation que si tu choisis de configurer des rappels basés sur la localisation pour tes habitudes.' },
        { h3: 'Comment nous utilisons la localisation' },
        {
          ul: [
            'Pour t’envoyer des rappels d’habitudes quand tu arrives dans des lieux précis ou que tu les quittes',
            'La surveillance de la localisation se fait entièrement sur l’appareil, avec les API de géorepérage d’Apple',
            'Tes lieux enregistrés et rappels de lieu ne nous sont jamais envoyés, ni à des tiers. Comme le reste de tes données, ils ne se synchronisent que via ton compte iCloud personnel',
            'Les statistiques peuvent enregistrer une localisation approximative (pays et ville) déduite de ton adresse IP, jamais ta position précise ; voir « Statistiques » ci-dessous',
          ],
        },
        { h3: 'Ton contrôle' },
        {
          ul: [
            'L’accès à la localisation est facultatif et peut être désactivé à tout moment dans les Réglages iOS',
            'Tu peux supprimer les rappels de lieu de chaque habitude',
            'Nous prenons en charge les autorisations « Lorsque l’app est active » et « Toujours », selon ta préférence',
          ],
        },
      ],
    },
    {
      title: 'Mises à jour des Activités en direct',
      blocks: [
        { p: 'Les Activités en direct du jeûne affichent ta progression sur l’écran verrouillé, dans la Dynamic Island et dans la pile intelligente de l’Apple Watch. Pour les mettre à jour à chaque phase du jeûne quand l’app est fermée, Ritualist programme des mises à jour push via notre backend sur Google Cloud (Firebase).' },
        { h3: 'Ce qui est envoyé' },
        {
          ul: [
            'Le jeton push émis par Apple pour cette Activité en direct',
            'Les heures de début et d’objectif du jeûne, et les heures de ses prochains changements de phase',
            'Un identifiant de session aléatoire et un numéro de révision, pour que les mises à jour puissent être remplacées ou annulées',
          ],
        },
        { h3: 'Ce qui n’est pas envoyé' },
        {
          ul: [
            'Ton nom, ton identifiant Apple, les noms des habitudes, les notes, les humeurs ou les messages de motivation affichés dans l’activité (ils restent sur ton appareil)',
            'Aucune donnée de santé, de localisation ou de statistiques',
          ],
        },
        { h3: 'Conservation et contrôle' },
        {
          ul: [
            'Ces données ne sont pas liées à ton identité et ne servent ni au suivi, ni à la publicité, ni aux statistiques',
            'Nous ne les stockons pas dans une base de données. Chaque mise à jour programmée est supprimée une fois envoyée, et les autres sont supprimées quand tu termines, abandonnes ou modifies le jeûne',
            'Les mises à jour push sont acheminées par le service de notifications push d’Apple',
            'Tu peux désactiver les Activités en direct de Ritualist à tout moment dans Réglages iOS > Ritualist > Activités en direct ; tant qu’elles sont désactivées, aucune donnée d’Activité en direct n’est envoyée',
          ],
        },
      ],
    },
    {
      title: 'Conservation des données',
      blocks: [
        {
          ul: [
            '**Données actives :** tes données sont conservées tant que tu utilises l’app',
            '**Habitudes supprimées :** quand tu supprimes une habitude, elle est retirée de ton appareil et d’iCloud sous 30 jours',
            '**Tout supprimer :** tu peux supprimer toutes tes données à tout moment depuis Réglages > iCloud et sauvegardes > Supprimer toutes les données',
          ],
        },
      ],
    },
    {
      title: 'Tes droits',
      blocks: [
        {
          ul: [
            '**Accès :** consulte toutes tes données dans l’app',
            '**Exportation :** exporte les données de tes habitudes depuis Réglages > iCloud et sauvegardes > Sauvegarder ; les réimporter fait partie de Ritualist Pro',
            '**Suppression :** supprime toutes tes données depuis les Réglages à tout moment',
            '**Statistiques :** désactive les statistiques d’utilisation anonymes dans Réglages > iCloud et sauvegardes > Partager les statistiques d’utilisation (Ritualist 2.1 et versions ultérieures) ; plus rien n’est envoyé depuis cet appareil',
            '**Tous tes choix :** [Tes choix de confidentialité](/privacy-choices) les liste un par un, avec l’endroit où les faire',
            '**Portabilité :** tes données se synchronisent via iCloud et sont accessibles sur tous tes appareils Apple',
          ],
        },
      ],
    },
    {
      title: 'Services tiers',
      blocks: [
        { h3: 'Services Apple' },
        {
          ul: [
            '**iCloud/CloudKit :** pour synchroniser les données entre tes appareils',
            '**StoreKit :** pour traiter les achats intégrés et les abonnements',
            '**Service de notifications push d’Apple :** pour acheminer les mises à jour des Activités en direct',
            '**WatchConnectivity :** pour la synchronisation directe entre ton iPhone et l’Apple Watch jumelée. Les données des habitudes passent directement entre tes appareils par Bluetooth/Wi‑Fi sans aucun serveur, si bien que l’app Watch fonctionne même quand la synchronisation iCloud est désactivée.',
          ],
        },
        { p: 'Ces services sont fournis par Apple et régis par la [politique de confidentialité d’Apple](https://www.apple.com/legal/privacy/).' },
        { h3: 'Google Firebase' },
        { p: 'Nous utilisons [Google Firebase](https://firebase.google.com) pour ce qui suit, sans Firebase Analytics ni fonctionnalités publicitaires :' },
        {
          ul: [
            '**Remote Config et Hosting :** pour fournir les réglages de l’app et des catalogues de contenu (comme les suggestions d’habitudes et les défis). Firebase traite les informations techniques nécessaires à la livraison, comme un identifiant d’instance de l’app, la version de l’app, la langue de l’appareil, le pays et le fuseau horaire.',
            '**App Check :** pour vérifier que les requêtes vers notre backend viennent bien de l’app Ritualist authentique, grâce à App Attest d’Apple.',
            '**Cloud Functions et Cloud Tasks :** pour programmer les mises à jour des Activités en direct, comme décrit dans « Mises à jour des Activités en direct ».',
          ],
        },
        { p: 'Le traitement par Firebase est régi par les [conditions de confidentialité et de sécurité de Firebase](https://firebase.google.com/support/privacy).' },
        { h3: 'Abonnements (RevenueCat)' },
        { p: 'Nous utilisons [RevenueCat](https://www.revenuecat.com) pour gérer l’état des abonnements. RevenueCat reçoit un identifiant d’utilisateur anonyme de l’app et les informations de tes achats App Store pour confirmer l’accès aux fonctionnalités Pro. Il ne reçoit pas les données de tes habitudes. Voir la [politique de confidentialité de RevenueCat](https://www.revenuecat.com/privacy).' },
        { h3: 'Statistiques (PostHog)' },
        { p: 'Nous utilisons [PostHog](https://posthog.com), une plateforme open source de statistiques produit hébergée dans l’UE, pour comprendre comment les fonctionnalités sont utilisées et améliorer l’app. Cela comprend :' },
        {
          ul: [
            'Les interactions avec les fonctionnalités (par exemple quels écrans sont visités, quelles actions sont effectuées)',
            'Les performances et diagnostics de l’app (par exemple les temps de chargement et le type d’une erreur)',
            'Les événements d’abonnement et d’achat (par exemple quelle formule a été consultée ou achetée, si elle a commencé par un essai gratuit, et ta formule actuelle)',
            'Des informations techniques : version de l’app, modèle de l’appareil, version d’iOS, langue, fuseau horaire et taille d’écran',
            'Une localisation approximative (pays et ville) déduite de ton adresse IP ; l’adresse IP elle-même n’est pas conservée',
            'Un identifiant d’appareil anonyme (non lié à ton identité)',
          ],
        },
        { p: 'Les statistiques n’incluent jamais de noms d’habitudes ou de catégories, de notes, d’humeurs, de valeurs d’Apple Health ni rien d’autre que tu écris.' },
        { p: 'Les données statistiques sont :' },
        {
          ul: [
            'Non liées à ton identité personnelle',
            'Non utilisées pour la publicité ou le suivi entre apps',
            'Non partagées avec des tiers à des fins marketing',
            'Traitées et stockées dans l’Union européenne',
          ],
        },
        { p: 'Tu peux désactiver les statistiques dans Réglages > iCloud et sauvegardes > Partager les statistiques d’utilisation (Ritualist 2.1 et versions ultérieures). Supprimer toutes les données donne aussi à l’app un nouvel identifiant anonyme.' },
        { p: 'Nous n’utilisons aucun réseau publicitaire, courtier en données ni service de rapports de plantage.' },
        { h3: 'Feuille de route des fonctionnalités (Sidetrack)' },
        { p: 'La feuille de route de l’app est fournie par [Sidetrack](https://sidetrack.app). L’ouvrir charge la liste des fonctionnalités prévues et leurs votes ; voter pour une fonctionnalité envoie un vote anonyme pour celle-ci. Aucun identifiant ni donnée personnelle n’est envoyé avec.' },
      ],
    },
    {
      title: 'Apple Health (HealthKit)',
      blocks: [
        { p: 'Ritualist peut, si tu le souhaites, s’intégrer à Apple Health pour lire et écrire des données de santé liées à tes habitudes (par exemple les minutes de pleine conscience des exercices de respiration, le nombre de pas, l’eau bue).' },
        { h3: 'Comment nous utilisons les données de santé' },
        {
          ul: [
            'Les données de santé servent uniquement à afficher la progression et à valider automatiquement des habitudes selon ton activité',
            'Les données de santé restent sur ton appareil et dans ton compte iCloud personnel',
            'Les données de santé ne sont **jamais** envoyées à nos serveurs, à des services de statistiques ou à des tiers',
            'Les données de santé ne sont **jamais** utilisées à des fins publicitaires ou marketing',
          ],
        },
        { h3: 'Ton contrôle' },
        {
          ul: [
            'L’intégration à Santé est facultative et désactivée par défaut',
            'Tu choisis quelles habitudes se synchronisent avec Apple Health',
            'Tu peux révoquer les autorisations de Santé à tout moment dans Réglages iOS > Santé > Ritualist',
          ],
        },
      ],
    },
    {
      title: 'Confidentialité des enfants',
      blocks: [
        { p: 'Ritualist ne s’adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d’informations personnelles d’enfants de moins de 13 ans. Si tu penses que nous en avons collecté par inadvertance, contacte-nous pour qu’elles soient supprimées.' },
      ],
    },
    {
      title: 'Modifications de cette politique',
      blocks: [
        { p: 'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous t’informerons de toute modification en publiant la nouvelle politique sur cette page et en mettant à jour la date de « Dernière mise à jour ».' },
      ],
    },
    {
      title: 'Nous contacter',
      blocks: [
        { p: 'Pour toute question sur cette politique de confidentialité, contacte-nous :' },
        {
          contact: [
            { label: 'E-mail', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Assistance', value: '[Page d’assistance](/support)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
