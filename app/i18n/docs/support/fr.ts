import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Assistance - Ritualist',
  metaDescription: 'Aide et assistance pour Ritualist, l’app d’habitudes.',
  title: 'Assistance Ritualist',
  lead: 'Nous sommes là pour t’aider à prendre de meilleures habitudes et à atteindre tes objectifs avec Ritualist.',
  sections: [
    {
      title: 'Nous contacter',
      blocks: [
        { p: 'Une question, une remarque ou besoin d’aide ? Écris à notre équipe d’assistance :' },
        { button: { text: 'ritualist.help@gmail.com', href: 'mailto:ritualist.help@gmail.com' } },
      ],
    },
    {
      title: 'Questions fréquentes',
      blocks: [
        {
          faq: [
            { q: 'Ritualist est-elle gratuite ?', a: 'Oui. La version gratuite comprend les quatre types d’habitudes (à cocher, à compter, à mesurer et minutées), jusqu’à 5 habitudes actives et 3 lieux, le jeûne et la respiration avec leurs guides, les rappels, Apple Health, les widgets, Siri, la synchronisation iCloud, l’Apple Watch et le niveau Bronze de chaque défi. Ritualist Pro ajoute des habitudes et des lieux illimités, À propos de toi, les niveaux Argent et Or des défis, tous les coachs de jeûne, les fleurs de respiration et tes propres schémas, la Planification intelligente et la restauration des sauvegardes.' },
            { q: 'Combien coûte Ritualist Pro ?', a: 'Pro existe en trois formules : Mensuel à 9,99 $ par mois, Annuel à 39,99 $ par an avec 1 semaine d’essai gratuit, ou À vie à 69,99 $, payé une fois. Les prix peuvent varier selon la région, et l’app affiche le prix dans ta devise avant l’achat.' },
            { q: 'Qu’est-ce que À vie ?', a: 'À vie est un achat unique, sans renouvellement, qui débloque Pro sans autre paiement : il n’y a rien à résilier. « À vie » signifie aussi longtemps que Ritualist est proposée et prise en charge, et non la vie d’une personne, et cela comprend toutes les fonctionnalités Pro, y compris celles ajoutées plus tard. L’achat appartient au compte Apple qui l’a effectué et peut être restauré sur tes autres appareils avec Restaurer les achats. Si nous cessions un jour de proposer Ritualist, nous l’annoncerions dans l’app au moins 90 jours à l’avance, et Pro resterait débloqué sur ton appareil tant qu’iOS l’exécute.' },
            { q: 'Puis-je passer d’un abonnement à À vie ?', a: 'Oui. Achète À vie depuis la page Pro, puis résilie ton abonnement dans les réglages de ton compte Apple pour qu’il ne se renouvelle pas. Ton abonnement reste actif jusqu’à la fin de la période déjà payée.' },
            { q: 'Le prix de mon abonnement va-t-il changer ?', a: 'Non. Avec un abonnement en cours, tu gardes ton prix tant que l’abonnement reste actif.' },
            { q: 'Comment restaurer mes achats ?', a: 'Ouvre la page Pro dans Ritualist, par exemple depuis les Réglages, et touche Restaurer les achats. Ton abonnement ou ton achat À vie revient sur tout appareil utilisant le même compte Apple.' },
            { q: 'Comment résilier mon abonnement ?', a: 'Les abonnements se gèrent avec ton compte Apple : ouvre l’app Réglages, touche ton nom, puis Abonnements. Résilie au moins 24 heures avant la fin de la période en cours pour arrêter le prochain renouvellement. À vie n’a rien à résilier.' },
            { q: 'Que deviennent mes habitudes si mon abonnement prend fin ?', a: 'Rien n’est supprimé. Si tu dépasses les limites gratuites, les habitudes et les lieux au-delà sont mis en pause, avec leur historique, jusqu’à ce que tu repasses à Pro ou en retires.' },
            { q: 'Quels appareils sont pris en charge ?', a: 'Ritualist fonctionne sur iPhone et iPad avec iOS 18 ou version ultérieure, avec une app compagnon pour Apple Watch. Tes données se synchronisent entre iPhone et iPad via iCloud, et la montre reste synchronisée avec ton iPhone même quand la synchronisation iCloud est désactivée.' },
            { q: 'Que puis-je faire sur l’Apple Watch ?', a: 'Voir les habitudes du jour et ta progression, cocher des habitudes, modifier des quantités, régler la mesure d’une habitude à mesurer avec la Digital Crown, et démarrer ou arrêter des jeûnes et des séances de respiration.' },
            { q: 'Que sont les habitudes à mesurer et les objectifs hebdomadaires ?', a: 'Une habitude à mesurer enregistre une mesure, comme ton poids ou ton tour de taille, et montre son évolution. Toute habitude peut aussi se répéter selon son propre rythme (tous les quelques jours, semaines, mois ou années) ou viser un nombre de jours ou un total par semaine ou par mois, par exemple 3 entraînements par semaine ou 70 000 pas par semaine.' },
            { q: 'Comment fonctionnent le jeûne et la respiration ?', a: 'Le jeûne suit ton jeûne phase par phase, avec un guide, des alertes au début de chaque phase, une Activité en direct et un bilan à la fin. La respiration rythme chaque respiration avec une forme qui s’ouvre et se ferme et des vibrations que tu peux suivre les yeux fermés. Les deux gardent un historique de tes séances et de tes humeurs.' },
            { q: 'Qui sont les coachs de jeûne ?', a: 'Ton coach de jeûne est l’un des six héros en peluche qui parlent dans tes alertes, l’Activité en direct et le guide : Taisu (fidèle, chaleureux), Wren (clair, pratique), Moss (patient, calme), Pip (plein d’entrain, joueur), Luna (douce, bienveillante) ou Bruno (solide, bref). Fais-les défiler sur la page du Coach de jeûne et chacun se présente. Taisu est gratuit. Les autres coachs viennent avec Pro. Les conseils du guide sont les mêmes quel que soit ton choix.' },
            { q: 'Puis-je utiliser Siri ?', a: 'Oui. Dis « Commencer un jeûne dans Ritualist », « Arrêter mon jeûne dans Ritualist », « Depuis combien de temps je jeûne dans Ritualist » ou « Respirer avec Ritualist ». Les mêmes actions sont dans l’app Raccourcis et dans Spotlight, et Commencer le jeûne et Respirer peuvent aller dans le centre de contrôle, sur l’écran verrouillé ou sur le bouton Action.' },
            { q: 'Que sont les défis ?', a: 'Chaque mois apporte un nouveau défi, avec des défis de saison et des parcours au long cours. Atteins le Bronze, puis l’Argent et l’Or, chacun une médaille. Le Bronze est gratuit ; l’Argent et l’Or viennent avec Pro, et les jours déjà faits comptent quand tu passes à Pro.' },
            { q: 'Comment fonctionne À propos de toi ?', a: 'À propos de toi lit les habitudes que tu entretiens pour estimer tes traits de personnalité Big Five, te suggère des activités qui te correspondent et montre comment tes traits évoluent avec le temps. Il ne fonctionne qu’avec ton consentement, entièrement sur ton appareil, peut être verrouillé avec Face ID et sert de repère, pas d’évaluation psychologique. Il fait partie de Pro.' },
            { q: 'Mes données sont-elles privées ?', a: 'Oui. Tes habitudes restent sur ton appareil et dans ton propre compte iCloud. À propos de toi et les encouragements du coach de jeûne sont élaborés sur ton appareil. Nous ne voyons jamais tes habitudes ni tes informations personnelles ; nous recevons seulement des statistiques d’utilisation anonymes, décrites dans la [politique de confidentialité](/privacy).' },
            { q: 'Mes données se synchronisent-elles entre mes appareils ?', a: 'Oui. Tes habitudes, ta progression, tes lieux et ton profil se synchronisent automatiquement via iCloud. Sur un nouvel appareil ou après une réinstallation, Ritualist récupère tes habitudes depuis iCloud.' },
            { q: 'Ritualist fonctionne-t-elle avec Apple Health ?', a: 'Oui, gratuitement. Relie n’importe quelle habitude, sauf un jeûne, à une mesure de Santé, comme les pas, l’eau, le sommeil, les minutes de pleine conscience ou le poids, et laisse Santé la remplir, envoie tes saisies à Santé, ou les deux. Tes données de Santé ne nous sont jamais envoyées, ni aux statistiques.' },
            { q: 'Comment sauvegarder mes données ?', a: 'Ouvre Réglages › iCloud et sauvegardes et touche Sauvegarder pour enregistrer tes habitudes, tes saisies et ton profil dans un fichier. La restauration d’une sauvegarde fait partie de Pro.' },
            { q: 'Quelles langues Ritualist prend-elle en charge ?', a: 'L’anglais, l’allemand, l’espagnol, le français, l’italien et le roumain.' },
            { q: 'Puis-je partager ma progression ?', a: 'Oui. Les succès obtenus peuvent se partager en cartes avec ta série, une journée parfaite ou ton bilan hebdomadaire, tout comme le bilan d’un jeûne et ton archétype À propos de toi. Les cartes portent un code QR vers Ritualist et rien de privé.' },
          ],
        },
        { p: 'Pour une aide pas à pas sur chaque fonctionnalité, consulte le [Guide d’utilisation](/user-guide).' },
      ],
    },
  ],
};

export default doc;
