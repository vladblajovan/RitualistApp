import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Datenschutzerklärung - Ritualist',
  metaDescription: 'Datenschutzerklärung der Gewohnheits-App Ritualist.',
  title: 'Datenschutzerklärung',
  updated: '10. November 2026',
  legal: true,
  sections: [
    {
      title: 'Einleitung',
      blocks: [
        { p: 'Ritualist („wir“, „unser“ oder „uns“) schützt deine Privatsphäre. Diese Datenschutzerklärung erklärt, wie wir deine Informationen erheben, nutzen und schützen, wenn du unsere iOS-App verwendest.' },
        { note: '**Das Wichtigste:** Ritualist ist auf Datenschutz ausgelegt. Deine Gewohnheitsdaten bleiben auf deinem Gerät und in deinem persönlichen iCloud-Account. Wir haben keinen Zugriff auf deine Daten. Die einzigen Ausnahmen sind anonyme Nutzungsanalysen, die nie etwas enthalten, das du schreibst, und minimale, nicht identifizierende Zeitangaben für Live-Aktivitäten beim Fasten, beide unten beschrieben.' },
      ],
    },
    {
      title: 'Welche Informationen wir erheben',
      blocks: [
        { h3: 'Daten, die du angibst' },
        {
          ul: [
            '**Profilangaben:** Name, Profilbild, Geschlecht und Altersgruppe (alle optional)',
            '**Gewohnheitsdaten:** Gewohnheiten, die du anlegst, mit Namen, Zeitplänen, Erinnerungen und Erledigungen',
            '**Kategorien:** eigene Kategorien, mit denen du deine Gewohnheiten ordnest',
          ],
        },
        { h3: 'Automatisch erhobene Daten' },
        {
          ul: [
            '**Standortdaten:** nur wenn du ortsbezogene Erinnerungen für bestimmte Gewohnheiten aktivierst. Wir nutzen Geofencing, um Erinnerungen auszulösen, wenn du an festgelegten Orten ankommst oder sie verlässt.',
            '**Zeiten für Live-Aktivitäten beim Fasten:** Läuft eine Live-Aktivität für ein Fasten, sendet die App ein Push-Token der Live-Aktivität sowie Start- und Zielzeit des Fastens an unser Backend, damit Sperrbildschirm, Dynamic Island und Apple Watch pünktlich aktualisiert werden. Siehe „Aktualisierungen von Live-Aktivitäten“ unten.',
            '**Anonyme Nutzungsdaten:** Wir erheben anonyme Daten zur Nutzung des Produkts (etwa welche Bildschirme besucht und welche Funktionen genutzt werden), Leistung und Diagnose der App, Abo- und Kaufereignisse sowie einen ungefähren Standort (Land und Stadt), abgeleitet aus deiner IP-Adresse, um zu verstehen, wie die App genutzt wird, und sie zu verbessern. Diese Daten sind nicht mit deiner Identität verknüpft. Details im Abschnitt „Analysen“ unten.',
          ],
        },
        { h3: 'Daten, die wir NICHT erheben' },
        {
          ul: [
            'Wir verwenden keine SDKs für Werbung oder app-übergreifendes Tracking',
            'Wir erheben keine Gerätekennungen für Tracking oder Werbung',
            'Wir senden keine Namen von Gewohnheiten oder Kategorien, Notizen, Stimmungen, Zuspruch-Nachrichten oder Werte aus Apple Health an unser Backend oder an Analysen',
            'Wir erheben nicht deinen genauen Standort',
            'Wir verkaufen deine Daten nicht und geben sie nicht an Dritte weiter',
          ],
        },
      ],
    },
    {
      title: 'Wie wir deine Daten speichern',
      blocks: [
        { h3: 'Lokale Speicherung' },
        { p: 'Alle deine Gewohnheitsdaten werden lokal auf deinem Gerät mit den sicheren Speichermechanismen von Apple gespeichert.' },
        { h3: 'iCloud-Sync' },
        { p: 'Bist du bei iCloud angemeldet, werden deine Daten über den CloudKit-Dienst von Apple automatisch zwischen deinen Apple-Geräten synchronisiert. Das bedeutet:' },
        {
          ul: [
            'Deine Daten werden von Apple bei der Übertragung und im Ruhezustand verschlüsselt',
            'Nur du kannst über deine Apple-ID auf deine Daten zugreifen',
            'Wir können deine iCloud-Daten weder abrufen noch lesen oder entschlüsseln',
            'Für die Synchronisierung gilt die [Datenschutzrichtlinie von Apple](https://www.apple.com/legal/privacy/)',
          ],
        },
        { h3: 'Sichere Speicherung' },
        { p: 'Sensible Informationen (etwa der Abo-Status) werden im iOS-Schlüsselbund gespeichert, dem sicheren Speicher von Apple für Zugangsdaten.' },
      ],
    },
    {
      title: 'Standortdaten',
      blocks: [
        { p: 'Ritualist fragt nur dann nach Standortzugriff, wenn du ortsbezogene Erinnerungen für deine Gewohnheiten einrichtest.' },
        { h3: 'Wie wir den Standort nutzen' },
        {
          ul: [
            'Um dich an Gewohnheiten zu erinnern, wenn du an bestimmten Orten ankommst oder sie verlässt',
            'Die Standortüberwachung geschieht vollständig auf dem Gerät, über die Geofencing-Schnittstellen von Apple',
            'Deine gespeicherten Orte und Ortserinnerungen werden nie an uns oder Dritte gesendet. Wie deine übrigen Daten werden sie nur über deinen persönlichen iCloud-Account synchronisiert',
            'Analysen können einen ungefähren Standort (Land und Stadt) aus deiner IP-Adresse erfassen, nie deinen genauen Standort; siehe „Analysen“ unten',
          ],
        },
        { h3: 'Deine Kontrolle' },
        {
          ul: [
            'Der Standortzugriff ist optional und lässt sich jederzeit in den iOS-Einstellungen ausschalten',
            'Du kannst ortsbezogene Erinnerungen bei einzelnen Gewohnheiten entfernen',
            'Wir unterstützen die Berechtigungen „Beim Verwenden der App“ und „Immer“, wie du es möchtest',
          ],
        },
      ],
    },
    {
      title: 'Aktualisierungen von Live-Aktivitäten',
      blocks: [
        { p: 'Live-Aktivitäten beim Fasten zeigen deinen Fortschritt auf dem Sperrbildschirm, in der Dynamic Island und im Smart Stack der Apple Watch. Um sie in jeder Phase eines Fastens zu aktualisieren, während die App geschlossen ist, plant Ritualist Push-Aktualisierungen über unser Backend bei Google Cloud (Firebase).' },
        { h3: 'Was gesendet wird' },
        {
          ul: [
            'Das Push-Token, das Apple für diese Live-Aktivität ausgibt',
            'Start- und Zielzeit des Fastens und die Zeiten seiner nächsten Phasenwechsel',
            'Eine zufällige Sitzungskennung und eine Revisionsnummer, damit Aktualisierungen ersetzt oder abgebrochen werden können',
          ],
        },
        { h3: 'Was nicht gesendet wird' },
        {
          ul: [
            'Dein Name, deine Apple-ID, Gewohnheitsnamen, Notizen, Stimmungen oder die motivierenden Nachrichten in der Aktivität (sie bleiben auf deinem Gerät)',
            'Gesundheits-, Standort- oder Analysedaten jeder Art',
          ],
        },
        { h3: 'Aufbewahrung und Kontrolle' },
        {
          ul: [
            'Diese Daten sind nicht mit deiner Identität verknüpft und werden nicht für Tracking, Werbung oder Analysen genutzt',
            'Wir speichern sie nicht in einer Datenbank. Jede geplante Aktualisierung wird gelöscht, sobald sie gesendet ist, und die übrigen werden gelöscht, wenn du das Fasten beendest, verwirfst oder änderst',
            'Push-Aktualisierungen werden über den Apple Push Notification Service zugestellt',
            'Du kannst Live-Aktivitäten für Ritualist jederzeit unter iOS-Einstellungen > Ritualist > Live-Aktivitäten ausschalten; solange sie aus sind, werden keine Daten für Live-Aktivitäten gesendet',
          ],
        },
      ],
    },
    {
      title: 'Aufbewahrung von Daten',
      blocks: [
        {
          ul: [
            '**Aktive Daten:** Deine Daten bleiben erhalten, solange du die App nutzt',
            '**Gelöschte Gewohnheiten:** Löschst du eine Gewohnheit, wird sie innerhalb von 30 Tagen von deinem Gerät und aus iCloud entfernt',
            '**Alles löschen:** Du kannst jederzeit alle deine Daten unter Einstellungen > iCloud & Backups > Alle Daten löschen entfernen',
          ],
        },
      ],
    },
    {
      title: 'Deine Rechte',
      blocks: [
        {
          ul: [
            '**Auskunft:** Sieh dir alle deine Daten in der App an',
            '**Export:** Exportiere deine Gewohnheitsdaten unter Einstellungen > iCloud & Backups > Backup speichern; sie wieder zu importieren gehört zu Ritualist Pro',
            '**Löschung:** Lösche jederzeit alle deine Daten in den Einstellungen',
            '**Analysen:** Schalte anonyme Nutzungsanalysen unter Einstellungen > iCloud & Backups > Nutzungsanalysen teilen aus (Ritualist 2.1 und neuer); von diesem Gerät wird dann nichts mehr gesendet',
            '**Alle deine Optionen:** [Deine Datenschutz-Optionen](/privacy-choices) listet jede einzeln auf und wo du sie triffst',
            '**Übertragbarkeit:** Deine Daten werden über iCloud synchronisiert und sind auf all deinen Apple-Geräten verfügbar',
          ],
        },
      ],
    },
    {
      title: 'Dienste Dritter',
      blocks: [
        { h3: 'Dienste von Apple' },
        {
          ul: [
            '**iCloud/CloudKit:** für die Synchronisierung deiner Daten zwischen deinen Geräten',
            '**StoreKit:** für In-App-Käufe und Abos',
            '**Apple Push Notification Service:** für die Zustellung von Aktualisierungen der Live-Aktivitäten',
            '**WatchConnectivity:** für die direkte Synchronisierung zwischen deinem iPhone und der gekoppelten Apple Watch. Gewohnheitsdaten gehen direkt über Bluetooth/WLAN zwischen deinen Geräten, ohne einen Server, sodass die Watch-App auch bei ausgeschaltetem iCloud-Sync funktioniert.',
          ],
        },
        { p: 'Diese Dienste stellt Apple bereit; es gilt die [Datenschutzrichtlinie von Apple](https://www.apple.com/legal/privacy/).' },
        { h3: 'Google Firebase' },
        { p: 'Wir nutzen [Google Firebase](https://firebase.google.com) für Folgendes, ohne Firebase Analytics oder Werbefunktionen:' },
        {
          ul: [
            '**Remote Config und Hosting:** um App-Einstellungen und Inhaltskataloge (etwa Gewohnheitsvorschläge und Herausforderungen) bereitzustellen. Firebase verarbeitet dafür nötige technische Informationen wie eine Kennung der App-Instanz, App-Version, Gerätesprache, Land und Zeitzone.',
            '**App Check:** um zu prüfen, dass Anfragen an unser Backend von der echten Ritualist-App kommen, über App Attest von Apple.',
            '**Cloud Functions und Cloud Tasks:** um Aktualisierungen der Live-Aktivitäten zu planen, wie unter „Aktualisierungen von Live-Aktivitäten“ beschrieben.',
          ],
        },
        { p: 'Für die Verarbeitung durch Firebase gelten die [Datenschutz- und Sicherheitsbedingungen von Firebase](https://firebase.google.com/support/privacy).' },
        { h3: 'Abos (RevenueCat)' },
        { p: 'Wir nutzen [RevenueCat](https://www.revenuecat.com), um den Abo-Status zu verwalten. RevenueCat erhält eine anonyme App-Nutzerkennung und deine App-Store-Kaufinformationen, um den Zugang zu Pro-Funktionen zu bestätigen. Deine Gewohnheitsdaten erhält RevenueCat nicht. Siehe die [Datenschutzerklärung von RevenueCat](https://www.revenuecat.com/privacy).' },
        { h3: 'Analysen (PostHog)' },
        { p: 'Wir nutzen [PostHog](https://posthog.com), eine in der EU gehostete Open-Source-Plattform für Produktanalysen, um zu verstehen, wie Funktionen genutzt werden, und die App zu verbessern. Dazu gehören:' },
        {
          ul: [
            'Interaktionen mit Funktionen (etwa welche Bildschirme besucht und welche Aktionen ausgeführt werden)',
            'Leistung und Diagnose der App (etwa Ladezeiten und die Art eines Fehlers)',
            'Abo- und Kaufereignisse (etwa welcher Plan angesehen oder gekauft wurde, ob er mit einem kostenlosen Test begann, und dein aktueller Plan)',
            'Technische Informationen: App-Version, Gerätemodell, iOS-Version, Sprache, Zeitzone und Bildschirmgröße',
            'Ein ungefährer Standort (Land und Stadt), abgeleitet aus deiner IP-Adresse; die IP-Adresse selbst wird nicht gespeichert',
            'Eine anonyme Gerätekennung (nicht mit deiner Identität verknüpft)',
          ],
        },
        { p: 'Analysen enthalten nie Namen von Gewohnheiten oder Kategorien, Notizen, Stimmungen, Werte aus Apple Health oder sonst etwas, das du schreibst.' },
        { p: 'Analysedaten werden:' },
        {
          ul: [
            'Nicht mit deiner persönlichen Identität verknüpft',
            'Nicht für Werbung oder app-übergreifendes Tracking verwendet',
            'Nicht zu Marketingzwecken an Dritte weitergegeben',
            'In der Europäischen Union verarbeitet und gespeichert',
          ],
        },
        { p: 'Du kannst Analysen unter Einstellungen > iCloud & Backups > Nutzungsanalysen teilen ausschalten (Ritualist 2.1 und neuer). Alle Daten löschen gibt der App außerdem eine neue anonyme Kennung.' },
        { p: 'Wir nutzen keine Werbenetzwerke, Datenhändler oder Absturzberichtsdienste.' },
        { h3: 'Funktions-Roadmap (Sidetrack)' },
        { p: 'Die Roadmap in der App stellt [Sidetrack](https://sidetrack.app) bereit. Beim Öffnen werden die geplanten Funktionen und ihre Stimmenzahlen geladen; eine Stimme für eine Funktion sendet eine anonyme Stimme für diese Funktion. Dabei werden keine Kennung und keine persönlichen Daten gesendet.' },
      ],
    },
    {
      title: 'Apple Health (HealthKit)',
      blocks: [
        { p: 'Ritualist kann sich auf Wunsch mit Apple Health verbinden, um Gesundheitsdaten zu deinen Gewohnheiten zu lesen und zu schreiben (etwa Achtsamkeitsminuten für Atemübungen, Schritte, Wasser).' },
        { h3: 'Wie wir Gesundheitsdaten nutzen' },
        {
          ul: [
            'Gesundheitsdaten dienen nur dazu, Fortschritt anzuzeigen und Gewohnheiten anhand deiner Aktivität automatisch abzuhaken',
            'Gesundheitsdaten bleiben auf deinem Gerät und in deinem persönlichen iCloud-Account',
            'Gesundheitsdaten werden **nie** an unsere Server, Analysedienste oder Dritte gesendet',
            'Gesundheitsdaten werden **nie** für Werbung oder Marketing genutzt',
          ],
        },
        { h3: 'Deine Kontrolle' },
        {
          ul: [
            'Die Verbindung mit Health ist optional und standardmäßig aus',
            'Du wählst, welche Gewohnheiten mit Apple Health synchronisiert werden',
            'Du kannst Health-Berechtigungen jederzeit unter iOS-Einstellungen > Health > Ritualist widerrufen',
          ],
        },
      ],
    },
    {
      title: 'Datenschutz bei Kindern',
      blocks: [
        { p: 'Ritualist richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13. Falls du glaubst, dass wir solche Daten versehentlich erhoben haben, kontaktiere uns, damit wir sie entfernen.' },
      ],
    },
    {
      title: 'Änderungen dieser Erklärung',
      blocks: [
        { p: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Über Änderungen informieren wir, indem wir die neue Erklärung auf dieser Seite veröffentlichen und das Datum „Zuletzt aktualisiert“ anpassen.' },
      ],
    },
    {
      title: 'Kontakt',
      blocks: [
        { p: 'Bei Fragen zu dieser Datenschutzerklärung kontaktiere uns:' },
        {
          contact: [
            { label: 'E-Mail', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Support', value: '[Support-Seite](/support)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
