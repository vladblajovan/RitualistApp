import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Tes choix de confidentialité - Ritualist',
  metaDescription: 'Ce que tu peux voir, modifier, exporter et supprimer dans Ritualist, et où le faire.',
  title: 'Tes choix de confidentialité',
  updated: '10 novembre 2026',
  sections: [
    {
      blocks: [
        { note: 'Ritualist n’a pas de comptes. Tes habitudes, tes saisies et ton profil vivent sur tes appareils et dans ton propre iCloud, où seule Ritualist sur ton appareil peut les atteindre. C’est pourquoi chaque choix de cette page se fait dans l’app ou dans les Réglages iOS, et cette page t’indique où.' },
      ],
    },
    {
      title: 'Tes données',
      blocks: [
        { choice: { title: 'Voir tes données', body: 'Rien de tes habitudes n’est gardé à un endroit que tu ne peux pas voir.', where: 'Tout ce que tu saisis est affiché dans l’app : Accueil, Statistiques, Réglages › Profil.' } },
        { choice: { title: 'En exporter une copie', body: 'Enregistre tes habitudes, saisies, catégories et ton profil dans un fichier que tu gardes. Le réimporter plus tard fait partie de Ritualist Pro.', where: 'Réglages › iCloud et sauvegardes › Sauvegarder.' } },
        { choice: { title: 'Les modifier ou les corriger', body: 'Le nom, la photo, le genre et la tranche d’âge sont tous facultatifs, et peuvent être modifiés ou effacés à tout moment.', where: 'Modifie chaque habitude, saisie ou catégorie là où elle s’affiche ; ton profil dans Réglages › Profil.' } },
        { choice: { title: 'Tout supprimer', body: 'Supprime tes habitudes, tes saisies et ton profil de cet appareil et de ton iCloud, et tes autres appareils suivent. L’app reçoit aussi un nouvel identifiant anonyme de statistiques, pour que rien de ce qui est envoyé ensuite ne soit relié à ce qui l’a été avant.', where: 'Réglages › iCloud et sauvegardes › Supprimer toutes les données.' } },
        { choice: { title: 'Garder tes données hors d’iCloud', body: 'Tes habitudes restent alors uniquement sur cet appareil.', where: 'Réglages iOS › ton nom › iCloud, puis désactive Ritualist parmi les apps qui utilisent iCloud.' } },
      ],
    },
    {
      title: 'Comment tes données sont utilisées',
      blocks: [
        { choice: { title: 'Statistiques d’utilisation anonymes', body: 'Ritualist envoie des données anonymes sur l’utilisation de l’app, jamais tes habitudes ni rien de ce que tu écris. Désactive-les et plus rien n’est envoyé depuis cet appareil. Consulte la [politique de confidentialité](/privacy) pour savoir exactement ce qu’elles comprennent.', where: 'Réglages › iCloud et sauvegardes › Partager les statistiques d’utilisation (Ritualist 2.1 et versions ultérieures).' } },
        { choice: { title: 'À propos de toi', body: 'L’analyse de personnalité ne fonctionne qu’avec ton consentement, entièrement sur ton appareil, et ses résultats ne le quittent jamais. Retirer ton consentement l’arrête et supprime chaque analyse. Tu peux aussi supprimer les analyses passées une par une.', where: 'Réglages › À propos de toi, puis ses détails de confidentialité › Retirer le consentement.' } },
      ],
    },
    {
      title: 'Autorisations',
      blocks: [
        { choice: { title: 'Localisation, Apple Health, notifications et Activités en direct', body: 'Chacune n’est demandée que lorsqu’une fonctionnalité en a besoin, et peut être désactivée à tout moment. La localisation ne sert qu’aux rappels de lieu ; les données d’Apple Health ne quittent jamais ton appareil ni ton app Santé.', where: 'Réglages iOS › Apps › Ritualist.' } },
      ],
    },
    {
      title: 'Achats',
      blocks: [
        { choice: { title: 'Abonnements', body: 'Les achats se font et se gèrent avec ton compte Apple. RevenueCat, qui confirme ta formule, reçoit un identifiant anonyme et les informations de tes achats App Store, jamais tes habitudes.', where: 'Réglages iOS › ton nom › Abonnements.' } },
      ],
    },
    {
      title: 'Tout le reste',
      blocks: [
        { p: 'Pour une demande que cette page ne couvre pas, écris à l’assistance de Ritualist :' },
        {
          contact: [
            { label: 'E-mail', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Politique de confidentialité', value: '[La lire en entier](/privacy)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
