import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Deine Datenschutz-Optionen - Ritualist',
  metaDescription: 'Was du in Ritualist sehen, ändern, exportieren und löschen kannst, und wo.',
  title: 'Deine Datenschutz-Optionen',
  updated: '10. November 2026',
  sections: [
    {
      blocks: [
        { note: 'Ritualist hat keine Accounts. Deine Gewohnheiten, Einträge und dein Profil liegen auf deinen Geräten und in deiner eigenen iCloud, wo nur Ritualist auf deinem Gerät sie erreicht. Deshalb triffst du jede Entscheidung auf dieser Seite in der App oder in den iOS-Einstellungen, und hier steht, wo.' },
      ],
    },
    {
      title: 'Deine Daten',
      blocks: [
        { choice: { title: 'Deine Daten ansehen', body: 'Nichts über deine Gewohnheiten liegt irgendwo, wo du es nicht sehen kannst.', where: 'Alles, was du eingibst, zeigt die App: Home, Statistik, Einstellungen › Profil.' } },
        { choice: { title: 'Eine Kopie exportieren', body: 'Speichere Gewohnheiten, Einträge, Kategorien und Profil als Datei, die du behältst. Sie später wieder zu importieren gehört zu Ritualist Pro.', where: 'Einstellungen › iCloud & Backups › Backup speichern.' } },
        { choice: { title: 'Ändern oder korrigieren', body: 'Name, Foto, Geschlecht und Altersgruppe sind optional und lassen sich jederzeit ändern oder entfernen.', where: 'Bearbeite jede Gewohnheit, jeden Eintrag und jede Kategorie dort, wo sie angezeigt wird; dein Profil unter Einstellungen › Profil.' } },
        { choice: { title: 'Alles löschen', body: 'Löscht deine Gewohnheiten, Einträge und dein Profil auf diesem Gerät und in deiner iCloud, sodass deine anderen Geräte folgen. Außerdem erhält die App eine neue anonyme Analysekennung, sodass nichts, was danach gesendet wird, mit dem Früheren verknüpft ist.', where: 'Einstellungen › iCloud & Backups › Alle Daten löschen.' } },
        { choice: { title: 'Deine Daten aus iCloud heraushalten', body: 'Deine Gewohnheiten bleiben dann nur auf diesem Gerät.', where: 'iOS-Einstellungen › dein Name › iCloud, dann Ritualist bei den Apps, die iCloud nutzen, ausschalten.' } },
      ],
    },
    {
      title: 'Wie deine Daten genutzt werden',
      blocks: [
        { choice: { title: 'Anonyme Nutzungsanalysen', body: 'Ritualist sendet anonyme Daten darüber, wie die App genutzt wird, nie deine Gewohnheiten oder etwas, das du schreibst. Schalte sie aus, und von diesem Gerät wird nichts mehr gesendet. Was genau sie umfassen, steht in der [Datenschutzerklärung](/privacy).', where: 'Einstellungen › iCloud & Backups › Nutzungsanalysen teilen (Ritualist 2.1 und neuer).' } },
        { choice: { title: 'Über dich', body: 'Die Persönlichkeitsanalyse läuft nur mit deiner Einwilligung, vollständig auf deinem Gerät, und ihre Ergebnisse verlassen es nie. Widerrufst du die Einwilligung, endet sie und jede Analyse wird gelöscht. Frühere Analysen kannst du auch einzeln löschen.', where: 'Einstellungen › Über dich, dann die Datenschutzdetails › Einwilligung widerrufen.' } },
      ],
    },
    {
      title: 'Berechtigungen',
      blocks: [
        { choice: { title: 'Standort, Apple Health, Mitteilungen und Live-Aktivitäten', body: 'Jede wird nur erfragt, wenn eine Funktion sie braucht, und lässt sich jederzeit ausschalten. Der Standort wird nur für Ortserinnerungen genutzt; Daten aus Apple Health verlassen nie dein Gerät oder deine Health-App.', where: 'iOS-Einstellungen › Apps › Ritualist.' } },
      ],
    },
    {
      title: 'Käufe',
      blocks: [
        { choice: { title: 'Abos', body: 'Käufe werden über deinen Apple-Account getätigt und verwaltet. RevenueCat, das deinen Plan bestätigt, erhält eine anonyme Kennung und deine App-Store-Kaufinformationen, nie deine Gewohnheiten.', where: 'iOS-Einstellungen › dein Name › Abonnements.' } },
      ],
    },
    {
      title: 'Alles andere',
      blocks: [
        { p: 'Für ein Anliegen, das diese Seite nicht abdeckt, schreib dem Support von Ritualist:' },
        {
          contact: [
            { label: 'E-Mail', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Datenschutzerklärung', value: '[Vollständig lesen](/privacy)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
