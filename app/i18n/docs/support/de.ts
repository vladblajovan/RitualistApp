import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Support - Ritualist',
  metaDescription: 'Hilfe und Support für die Gewohnheits-App Ritualist.',
  title: 'Ritualist-Support',
  lead: 'Wir helfen dir gern, mit Ritualist bessere Gewohnheiten aufzubauen und deine Ziele zu erreichen.',
  sections: [
    {
      title: 'Kontakt',
      blocks: [
        { p: 'Fragen, Feedback oder brauchst du Hilfe? Schreib unserem Support-Team:' },
        { button: { text: 'ritualist.help@gmail.com', href: 'mailto:ritualist.help@gmail.com' } },
      ],
    },
    {
      title: 'Häufige Fragen',
      blocks: [
        {
          faq: [
            { q: 'Ist Ritualist kostenlos?', a: 'Ja. Die kostenlose Version umfasst alle vier Arten von Gewohnheiten (Abhaken, Zählen, Messen und Timer), bis zu 5 aktive Gewohnheiten und 3 Orte, Fasten und Atmen mit ihren Guides, Erinnerungen, Apple Health, Widgets, Siri, iCloud-Sync, Apple Watch und die Bronze-Stufe jeder Herausforderung. Ritualist Pro bietet zusätzlich unbegrenzt Gewohnheiten und Orte, Über dich, die Silber- und Gold-Stufen der Herausforderungen, jeden Fasten-Coach, Atem-Blumen und eigene Muster, die Intelligente Planung und das Wiederherstellen von Backups.' },
            { q: 'Was kostet Ritualist Pro?', a: 'Pro gibt es auf drei Arten: Monatlich für 9,99 $ im Monat, Jährlich für 39,99 $ im Jahr mit 1 Woche gratis zum Testen, oder Lebenslang für 69,99 $, einmal bezahlt. Die Preise können je nach Region abweichen, und die App zeigt den Preis vor dem Kauf in deiner Währung.' },
            { q: 'Was ist Lebenslang?', a: 'Lebenslang ist ein einmaliger Kauf ohne Verlängerung, der Pro ohne weitere Zahlungen freischaltet: Es gibt nichts zu kündigen. „Lebenslang“ bedeutet, solange Ritualist angeboten und unterstützt wird, nicht die Lebenszeit eines Menschen, und es umfasst alle Pro-Funktionen, auch später hinzugefügte. Es gehört zu dem Apple-Account, mit dem es gekauft wurde, und lässt sich auf deinen anderen Geräten mit Käufe wiederherstellen wiederherstellen. Sollten wir Ritualist einmal nicht mehr anbieten, sagen wir es mindestens 90 Tage vorher in der App, und Pro bleibt auf deinem Gerät freigeschaltet, solange iOS die App ausführt.' },
            { q: 'Kann ich von einem Abo zu Lebenslang wechseln?', a: 'Ja. Kauf Lebenslang auf der Pro-Seite und kündige dann dein Abo in den Einstellungen deines Apple-Accounts, damit es sich nicht verlängert. Dein Abo bleibt bis zum Ende des bereits bezahlten Zeitraums aktiv.' },
            { q: 'Ändert sich der Preis meines Abos?', a: 'Nein. Mit einem laufenden Abo behältst du deinen Preis, solange das Abo aktiv bleibt.' },
            { q: 'Wie stelle ich meine Käufe wieder her?', a: 'Öffne in Ritualist die Pro-Seite, etwa über die Einstellungen, und tippe auf Käufe wiederherstellen. Dein Abo oder dein Lebenslang-Kauf kommt auf jedem Gerät mit demselben Apple-Account zurück.' },
            { q: 'Wie kündige ich mein Abo?', a: 'Abos verwaltest du über deinen Apple-Account: Öffne die App Einstellungen, tippe auf deinen Namen und dann auf Abonnements. Kündige mindestens 24 Stunden vor Ende des laufenden Zeitraums, um die nächste Verlängerung zu stoppen. Bei Lebenslang gibt es nichts zu kündigen.' },
            { q: 'Was passiert mit meinen Gewohnheiten, wenn mein Abo endet?', a: 'Gelöscht wird nichts. Liegst du über den kostenlosen Grenzen, werden die Gewohnheiten und Orte darüber hinaus mit ihrem Verlauf pausiert, bis du wieder upgradest oder einige entfernst.' },
            { q: 'Welche Geräte werden unterstützt?', a: 'Ritualist läuft auf iPhone und iPad mit iOS 18 oder neuer, mit einer begleitenden App für die Apple Watch. Deine Daten werden über iCloud zwischen iPhone und iPad synchronisiert, und die Watch bleibt mit deinem iPhone synchron, auch wenn der iCloud-Sync aus ist.' },
            { q: 'Was kann ich auf der Apple Watch tun?', a: 'Die heutigen Gewohnheiten und deinen Fortschritt sehen, Gewohnheiten abhaken, Mengen ändern, den Messwert einer Mess-Gewohnheit mit der Digital Crown einstellen und Fasten sowie Atemsitzungen starten oder beenden.' },
            { q: 'Was sind Mess-Gewohnheiten und Wochenziele?', a: 'Eine Mess-Gewohnheit hält einen Messwert fest, etwa dein Gewicht oder deinen Taillenumfang, und zeigt seinen Verlauf. Jede Gewohnheit kann sich außerdem nach eigenem Plan wiederholen (alle paar Tage, Wochen, Monate oder Jahre) oder eine Anzahl Tage oder eine Summe pro Woche oder Monat anstreben, etwa 3 Trainings pro Woche oder 70.000 Schritte pro Woche.' },
            { q: 'Wie funktionieren Fasten und Atmen?', a: 'Beim Fasten folgt die App deinem Fasten Phase für Phase, mit einem Guide, Hinweisen zu Beginn jeder Phase, einer Live-Aktivität und einem Bericht am Ende. Beim Atmen gibt eine Form, die sich öffnet und schließt, das Tempo jedes Atemzugs vor, mit Haptik, der du auch mit geschlossenen Augen folgen kannst. Beide führen einen Verlauf deiner Sitzungen und Stimmungen.' },
            { q: 'Wer sind die Fasten-Coaches?', a: 'Dein Fasten-Coach ist einer von sechs Plüsch-Helden, die in deinen Hinweisen, der Live-Aktivität und im Guide sprechen: Taisu (treu, herzlich), Wren (klar, praktisch), Moss (geduldig, ruhig), Pip (lebhaft, verspielt), Luna (sanft, fürsorglich) oder Bruno (beständig, knapp). Wische auf der Seite des Fasten-Coachs durch sie, und jeder stellt sich vor. Taisu ist kostenlos. Die anderen Coaches gibt es mit Pro. Die Tipps im Guide sind bei jedem gleich.' },
            { q: 'Kann ich Siri nutzen?', a: 'Ja. Sag „Fasten in Ritualist starten“, „Mein Fasten in Ritualist beenden“, „Wie lange faste ich schon in Ritualist“ oder „Mit Ritualist atmen“. Dieselben Aktionen gibt es in der App Kurzbefehle und in Spotlight, und Fasten starten und Atmen lassen sich ins Kontrollzentrum, auf den Sperrbildschirm oder auf die Aktionstaste legen.' },
            { q: 'Was sind Herausforderungen?', a: 'Jeden Monat gibt es eine neue Herausforderung, dazu saisonale und lebenslange Pfade. Erreiche Bronze, dann Silber und Gold, jeweils eine Medaille. Bronze ist kostenlos; Silber und Gold gibt es mit Pro, und Tage, die du schon geschafft hast, zählen beim Upgrade mit.' },
            { q: 'Wie funktioniert Über dich?', a: 'Über dich liest die Gewohnheiten, die du pflegst, um deine Big-Five-Persönlichkeitsmerkmale einzuschätzen, schlägt Aktivitäten vor, die zu dir passen, und zeigt, wie sich deine Merkmale mit der Zeit verändern. Es läuft nur mit deiner Einwilligung, vollständig auf deinem Gerät, lässt sich mit Face ID sperren und ist eine Orientierung, keine psychologische Beurteilung. Es gehört zu Pro.' },
            { q: 'Sind meine Daten privat?', a: 'Ja. Deine Gewohnheiten bleiben auf deinem Gerät und in deinem eigenen iCloud-Account. Über dich und der Zuspruch des Fasten-Coachs entstehen auf deinem Gerät. Wir sehen nie deine Gewohnheiten oder persönlichen Daten; wir erhalten nur anonyme Nutzungsanalysen, beschrieben in der [Datenschutzerklärung](/privacy).' },
            { q: 'Werden meine Daten zwischen Geräten synchronisiert?', a: 'Ja. Deine Gewohnheiten, dein Fortschritt, deine Orte und dein Profil werden automatisch über iCloud synchronisiert. Auf einem neuen Gerät oder nach einer Neuinstallation holt Ritualist deine Gewohnheiten aus iCloud zurück.' },
            { q: 'Funktioniert Ritualist mit Apple Health?', a: 'Ja, kostenlos. Verbinde jede Gewohnheit außer einem Fasten mit einem Health-Messwert, etwa Schritten, Wasser, Schlaf, Achtsamkeitsminuten oder Gewicht, und lass Health sie ausfüllen, sende deine Einträge an Health oder beides. Deine Health-Daten werden nie an uns oder an Analysen gesendet.' },
            { q: 'Wie sichere ich meine Daten?', a: 'Öffne Einstellungen › iCloud & Backups und tippe auf Backup speichern, um Gewohnheiten, Einträge und Profil in einer Datei zu speichern. Das Wiederherstellen eines Backups gehört zu Pro.' },
            { q: 'Welche Sprachen unterstützt Ritualist?', a: 'Englisch, Deutsch, Spanisch, Französisch, Italienisch und Rumänisch.' },
            { q: 'Kann ich meinen Fortschritt teilen?', a: 'Ja. Erreichte Erfolge lassen sich als Karten mit deiner Serie, einem perfekten Tag oder deinem Wochenrückblick teilen, ebenso der Bericht eines Fastens und dein Über-dich-Archetyp. Karten tragen einen QR-Code zu Ritualist und nichts Privates.' },
          ],
        },
        { p: 'Schritt-für-Schritt-Hilfe zu jeder Funktion findest du im [Benutzerhandbuch](/user-guide).' },
      ],
    },
  ],
};

export default doc;
