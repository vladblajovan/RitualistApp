import type { Locale } from './locales';

/** The words every page shares: navigation, footer, the cookie notice, the language menu. */
export type SiteCopy = {
  language: string;
  backHome: string;
  support: string;
  privacy: string;
  terms: string;
  roadmap: string;
  userGuide: string;
  privacyPolicy: string;
  termsOfService: string;
  privacyChoices: string;
  rights: string;
  cookieSettings: string;
  cookieNotice: string;
  accept: string;
  decline: string;
  lastUpdated: string;
  email: string;
  supportPage: string;
  whereLabel: string;
  builtBy: string;
  /** Under a translated legal page: the English text is the one that applies. */
  translationNote: string;
  englishVersion: string;
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    language: 'Language',
    backHome: '← Ritualist',
    support: 'Support',
    privacy: 'Privacy',
    terms: 'Terms',
    roadmap: 'Roadmap',
    userGuide: 'User Guide',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    privacyChoices: 'Your Privacy Choices',
    rights: 'All rights reserved.',
    cookieSettings: 'Cookie Settings',
    cookieNotice: 'We use cookies for anonymous site analytics to understand how visitors interact with our site.',
    accept: 'Accept',
    decline: 'Decline',
    lastUpdated: 'Last updated',
    email: 'Email',
    supportPage: 'Support page',
    whereLabel: 'Where',
    builtBy: 'Built with ♥ by',
    translationNote: '',
    englishVersion: '',
  },
  de: {
    language: 'Sprache',
    backHome: '← Ritualist',
    support: 'Support',
    privacy: 'Datenschutz',
    terms: 'Bedingungen',
    roadmap: 'Roadmap',
    userGuide: 'Benutzerhandbuch',
    privacyPolicy: 'Datenschutzerklärung',
    termsOfService: 'Nutzungsbedingungen',
    privacyChoices: 'Deine Datenschutz-Optionen',
    rights: 'Alle Rechte vorbehalten.',
    cookieSettings: 'Cookie-Einstellungen',
    cookieNotice: 'Diese Website verwendet Cookies für anonyme Nutzungsstatistiken, um zu verstehen, wie Besucher sie nutzen.',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
    lastUpdated: 'Zuletzt aktualisiert',
    email: 'E-Mail',
    supportPage: 'Support-Seite',
    whereLabel: 'Wo',
    builtBy: 'Mit ♥ gemacht von',
    translationNote: 'Diese Übersetzung dient deinem Verständnis. Bei Abweichungen gilt die englische Fassung.',
    englishVersion: 'Englische Fassung lesen',
  },
  es: {
    language: 'Idioma',
    backHome: '← Ritualist',
    support: 'Soporte',
    privacy: 'Privacidad',
    terms: 'Términos',
    roadmap: 'Hoja de ruta',
    userGuide: 'Guía de usuario',
    privacyPolicy: 'Política de privacidad',
    termsOfService: 'Términos del servicio',
    privacyChoices: 'Tus opciones de privacidad',
    rights: 'Todos los derechos reservados.',
    cookieSettings: 'Configuración de cookies',
    cookieNotice: 'Este sitio usa cookies para estadísticas anónimas que muestran cómo lo usan sus visitantes.',
    accept: 'Aceptar',
    decline: 'Rechazar',
    lastUpdated: 'Última actualización',
    email: 'Correo',
    supportPage: 'Página de soporte',
    whereLabel: 'Dónde',
    builtBy: 'Hecho con ♥ por',
    translationNote: 'Esta traducción se ofrece para tu comodidad. Si difiere de la versión en inglés, prevalece la versión en inglés.',
    englishVersion: 'Leer la versión en inglés',
  },
  fr: {
    language: 'Langue',
    backHome: '← Ritualist',
    support: 'Assistance',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    roadmap: 'Feuille de route',
    userGuide: 'Guide d’utilisation',
    privacyPolicy: 'Politique de confidentialité',
    termsOfService: 'Conditions d’utilisation',
    privacyChoices: 'Tes choix de confidentialité',
    rights: 'Tous droits réservés.',
    cookieSettings: 'Paramètres des cookies',
    cookieNotice: 'Ce site utilise des cookies pour des statistiques anonymes qui montrent comment il est utilisé.',
    accept: 'Accepter',
    decline: 'Refuser',
    lastUpdated: 'Dernière mise à jour',
    email: 'E-mail',
    supportPage: 'Page d’assistance',
    whereLabel: 'Où',
    builtBy: 'Fait avec ♥ par',
    translationNote: 'Cette traduction t’est proposée pour plus de commodité. En cas de différence, la version anglaise prévaut.',
    englishVersion: 'Lire la version anglaise',
  },
  it: {
    language: 'Lingua',
    backHome: '← Ritualist',
    support: 'Assistenza',
    privacy: 'Privacy',
    terms: 'Termini',
    roadmap: 'Roadmap',
    userGuide: 'Guida',
    privacyPolicy: 'Informativa sulla privacy',
    termsOfService: 'Termini di servizio',
    privacyChoices: 'Le tue scelte sulla privacy',
    rights: 'Tutti i diritti riservati.',
    cookieSettings: 'Impostazioni dei cookie',
    cookieNotice: 'Questo sito usa i cookie per statistiche anonime che mostrano come viene usato.',
    accept: 'Accetta',
    decline: 'Rifiuta',
    lastUpdated: 'Ultimo aggiornamento',
    email: 'Email',
    supportPage: 'Pagina di assistenza',
    whereLabel: 'Dove',
    builtBy: 'Fatto con ♥ da',
    translationNote: 'Questa traduzione è fornita per comodità. In caso di differenze, prevale la versione inglese.',
    englishVersion: 'Leggi la versione inglese',
  },
  ro: {
    language: 'Limbă',
    backHome: '← Ritualist',
    support: 'Asistență',
    privacy: 'Confidențialitate',
    terms: 'Termeni',
    roadmap: 'Planuri',
    userGuide: 'Ghid de utilizare',
    privacyPolicy: 'Politica de confidențialitate',
    termsOfService: 'Termenii serviciului',
    privacyChoices: 'Opțiunile tale de confidențialitate',
    rights: 'Toate drepturile rezervate.',
    cookieSettings: 'Setări cookie',
    cookieNotice: 'Acest site folosește cookie-uri pentru statistici anonime care arată cum este folosit.',
    accept: 'Accept',
    decline: 'Refuz',
    lastUpdated: 'Ultima actualizare',
    email: 'Email',
    supportPage: 'Pagina de asistență',
    whereLabel: 'Unde',
    builtBy: 'Făcut cu ♥ de',
    translationNote: 'Această traducere este oferită pentru comoditate. Dacă diferă de versiunea în engleză, se aplică versiunea în engleză.',
    englishVersion: 'Citește versiunea în engleză',
  },
};
