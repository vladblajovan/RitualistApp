import type { Locale } from './locales';

export type RoadmapCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  vote: string;
  intro: string;
  empty: string;
  completed: string;
  statuses: Record<'planned' | 'in progress' | 'in review' | 'finished', string>;
  suggestTitle: string;
  suggestLead: string;
  featureTitle: string;
  featureDescription: string;
  send: string;
  sendNote: string;
  mailSubject: string;
  mailFeature: string;
  mailDescription: string;
};

export const roadmapCopy: Record<Locale, RoadmapCopy> = {
  en: {
    metaTitle: "What's Next - Ritualist",
    metaDescription: 'See what features are coming next to Ritualist and vote for your favorites in the app.',
    title: 'What’s Next',
    vote: 'Want to vote on features? Open **Ritualist** on your iPhone and go to **Settings → Request Feature** to cast your votes.',
    intro: 'Here’s what we’re working on and what’s coming next.',
    empty: 'No features on the roadmap yet. Check back soon!',
    completed: 'Completed',
    statuses: { planned: 'Planned', 'in progress': 'In progress', 'in review': 'In review', finished: 'Finished' },
    suggestTitle: 'Suggest a Feature',
    suggestLead: 'Have an idea? Let us know and we’ll consider it for the roadmap.',
    featureTitle: 'Feature title',
    featureDescription: 'Describe your idea (optional)',
    send: 'Send Feature Request',
    sendNote: 'This will open your email client with the details pre-filled.',
    mailSubject: 'Ritualist - New Feature Request',
    mailFeature: 'Feature',
    mailDescription: 'Description',
  },
  de: {
    metaTitle: 'Was als Nächstes kommt - Ritualist',
    metaDescription: 'Sieh, welche Funktionen als Nächstes in Ritualist kommen, und stimme in der App für deine Favoriten.',
    title: 'Was als Nächstes kommt',
    vote: 'Möchtest du über Funktionen abstimmen? Öffne **Ritualist** auf deinem iPhone und geh zu **Einstellungen → Funktion wünschen**.',
    intro: 'Daran arbeiten wir gerade, und das kommt als Nächstes.',
    empty: 'Noch keine Funktionen auf der Roadmap. Schau bald wieder vorbei!',
    completed: 'Erledigt',
    statuses: { planned: 'Geplant', 'in progress': 'In Arbeit', 'in review': 'In Prüfung', finished: 'Fertig' },
    suggestTitle: 'Funktion vorschlagen',
    suggestLead: 'Hast du eine Idee? Sag sie uns, und wir prüfen sie für die Roadmap.',
    featureTitle: 'Titel der Funktion',
    featureDescription: 'Beschreibe deine Idee (optional)',
    send: 'Vorschlag senden',
    sendNote: 'Damit öffnet sich dein E-Mail-Programm mit den Angaben schon ausgefüllt.',
    mailSubject: 'Ritualist - Neuer Funktionswunsch',
    mailFeature: 'Funktion',
    mailDescription: 'Beschreibung',
  },
  es: {
    metaTitle: 'Lo que viene - Ritualist',
    metaDescription: 'Mira qué funciones llegan pronto a Ritualist y vota tus favoritas en la app.',
    title: 'Lo que viene',
    vote: '¿Quieres votar funciones? Abre **Ritualist** en tu iPhone y ve a **Ajustes → Pedir una función** para votar.',
    intro: 'Esto es en lo que trabajamos y lo que llega después.',
    empty: 'Todavía no hay funciones en la hoja de ruta. ¡Vuelve pronto!',
    completed: 'Completadas',
    statuses: { planned: 'Prevista', 'in progress': 'En curso', 'in review': 'En revisión', finished: 'Terminada' },
    suggestTitle: 'Sugerir una función',
    suggestLead: '¿Tienes una idea? Cuéntanosla y la tendremos en cuenta para la hoja de ruta.',
    featureTitle: 'Título de la función',
    featureDescription: 'Describe tu idea (opcional)',
    send: 'Enviar sugerencia',
    sendNote: 'Se abrirá tu app de correo con los datos ya completados.',
    mailSubject: 'Ritualist - Nueva sugerencia de función',
    mailFeature: 'Función',
    mailDescription: 'Descripción',
  },
  fr: {
    metaTitle: 'À venir - Ritualist',
    metaDescription: 'Découvre les prochaines fonctionnalités de Ritualist et vote pour tes préférées dans l’app.',
    title: 'À venir',
    vote: 'Envie de voter pour des fonctionnalités ? Ouvre **Ritualist** sur ton iPhone et va dans **Réglages → Demander une fonctionnalité**.',
    intro: 'Voici ce sur quoi nous travaillons et ce qui arrive ensuite.',
    empty: 'Aucune fonctionnalité sur la feuille de route pour l’instant. Reviens bientôt !',
    completed: 'Terminées',
    statuses: { planned: 'Prévue', 'in progress': 'En cours', 'in review': 'En revue', finished: 'Terminée' },
    suggestTitle: 'Proposer une fonctionnalité',
    suggestLead: 'Une idée ? Dis-la-nous et nous l’étudierons pour la feuille de route.',
    featureTitle: 'Titre de la fonctionnalité',
    featureDescription: 'Décris ton idée (facultatif)',
    send: 'Envoyer la proposition',
    sendNote: 'Ton app de messagerie s’ouvrira avec les détails déjà remplis.',
    mailSubject: 'Ritualist - Nouvelle demande de fonctionnalité',
    mailFeature: 'Fonctionnalité',
    mailDescription: 'Description',
  },
  it: {
    metaTitle: 'Cosa arriva - Ritualist',
    metaDescription: 'Scopri le prossime funzioni di Ritualist e vota le tue preferite nell’app.',
    title: 'Cosa arriva',
    vote: 'Vuoi votare le funzioni? Apri **Ritualist** sul tuo iPhone e vai in **Impostazioni → Richiedi una funzione** per votare.',
    intro: 'Ecco a cosa stiamo lavorando e cosa arriverà dopo.',
    empty: 'Ancora nessuna funzione nella roadmap. Torna presto!',
    completed: 'Completate',
    statuses: { planned: 'In programma', 'in progress': 'In corso', 'in review': 'In revisione', finished: 'Completata' },
    suggestTitle: 'Proponi una funzione',
    suggestLead: 'Hai un’idea? Raccontacela e la valuteremo per la roadmap.',
    featureTitle: 'Titolo della funzione',
    featureDescription: 'Descrivi la tua idea (facoltativo)',
    send: 'Invia la proposta',
    sendNote: 'Si aprirà la tua app di posta con i dettagli già compilati.',
    mailSubject: 'Ritualist - Nuova richiesta di funzione',
    mailFeature: 'Funzione',
    mailDescription: 'Descrizione',
  },
  ro: {
    metaTitle: 'Ce urmează - Ritualist',
    metaDescription: 'Vezi ce funcții urmează în Ritualist și votează-le pe cele preferate în aplicație.',
    title: 'Ce urmează',
    vote: 'Vrei să votezi funcții? Deschide **Ritualist** pe iPhone și mergi la **Setări → Cere o funcționalitate** ca să votezi.',
    intro: 'Iată la ce lucrăm și ce urmează.',
    empty: 'Încă nu sunt funcții în plan. Revino curând!',
    completed: 'Finalizate',
    statuses: { planned: 'Planificată', 'in progress': 'În lucru', 'in review': 'În revizuire', finished: 'Finalizată' },
    suggestTitle: 'Propune o funcție',
    suggestLead: 'Ai o idee? Spune-ne și o vom lua în calcul pentru plan.',
    featureTitle: 'Titlul funcției',
    featureDescription: 'Descrie-ți ideea (opțional)',
    send: 'Trimite propunerea',
    sendNote: 'Se va deschide aplicația ta de email cu detaliile deja completate.',
    mailSubject: 'Ritualist - Cerere de funcție nouă',
    mailFeature: 'Funcție',
    mailDescription: 'Descriere',
  },
};
