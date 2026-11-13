import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Le tue scelte sulla privacy - Ritualist',
  metaDescription: 'Cosa puoi vedere, cambiare, esportare ed eliminare in Ritualist, e dove farlo.',
  title: 'Le tue scelte sulla privacy',
  updated: '10 novembre 2026',
  sections: [
    {
      blocks: [
        { note: 'Ritualist non ha account. Le tue abitudini, le registrazioni e il profilo vivono sui tuoi dispositivi e nel tuo iCloud, dove solo Ritualist sul tuo dispositivo può raggiungerli. Per questo ogni scelta di questa pagina si fa nell’app o nelle Impostazioni di iOS, e qui trovi dove.' },
      ],
    },
    {
      title: 'I tuoi dati',
      blocks: [
        { choice: { title: 'Vedere i tuoi dati', body: 'Nulla delle tue abitudini è conservato in un posto che non puoi vedere.', where: 'Tutto ciò che inserisci è mostrato nell’app: Home, Statistiche, Impostazioni › Profilo.' } },
        { choice: { title: 'Esportarne una copia', body: 'Salva abitudini, registrazioni, categorie e profilo in un file da tenere. Importarlo di nuovo in seguito fa parte di Ritualist Pro.', where: 'Impostazioni › iCloud e backup › Salva backup.' } },
        { choice: { title: 'Modificarli o correggerli', body: 'Nome, foto, genere e fascia d’età sono tutti facoltativi, e si possono cambiare o cancellare in qualsiasi momento.', where: 'Modifica qualsiasi abitudine, registrazione o categoria dove viene mostrata; il tuo profilo in Impostazioni › Profilo.' } },
        { choice: { title: 'Eliminare tutto', body: 'Elimina abitudini, registrazioni e profilo da questo dispositivo e dal tuo iCloud, così anche gli altri tuoi dispositivi si adeguano. Assegna inoltre all’app un nuovo identificatore anonimo per le statistiche, così nulla di ciò che viene inviato dopo è legato a quanto inviato prima.', where: 'Impostazioni › iCloud e backup › Elimina tutti i dati.' } },
        { choice: { title: 'Tenere i tuoi dati fuori da iCloud', body: 'Le tue abitudini restano allora solo su questo dispositivo.', where: 'Impostazioni di iOS › il tuo nome › iCloud, poi disattiva Ritualist tra le app che usano iCloud.' } },
      ],
    },
    {
      title: 'Come vengono usati i tuoi dati',
      blocks: [
        { choice: { title: 'Statistiche di utilizzo anonime', body: 'Ritualist invia dati anonimi su come viene usata l’app, mai le tue abitudini o qualcosa che scrivi. Disattivale e da quel dispositivo non viene più inviato nulla. Vedi l’[Informativa sulla privacy](/privacy) per sapere esattamente cosa includono.', where: 'Impostazioni › iCloud e backup › Condividi dati di utilizzo (Ritualist 2.1 e successive).' } },
        { choice: { title: 'Su di te', body: 'L’analisi della personalità funziona solo con il tuo consenso, interamente sul tuo dispositivo, e i suoi risultati non lo lasciano mai. Revocare il consenso la interrompe ed elimina ogni analisi. Puoi anche eliminare le analisi passate una per una.', where: 'Impostazioni › Su di te, poi i dettagli sulla privacy › Revoca il consenso.' } },
      ],
    },
    {
      title: 'Permessi',
      blocks: [
        { choice: { title: 'Posizione, Apple Health, notifiche e Attività in tempo reale', body: 'Ognuno viene chiesto solo quando una funzione ne ha bisogno, e si può disattivare in qualsiasi momento. La posizione è usata solo per i promemoria di luogo; i dati di Apple Health non lasciano mai il tuo dispositivo o la tua app Salute.', where: 'Impostazioni di iOS › App › Ritualist.' } },
      ],
    },
    {
      title: 'Acquisti',
      blocks: [
        { choice: { title: 'Abbonamenti', body: 'Gli acquisti si fanno e si gestiscono tramite il tuo account Apple. RevenueCat, che conferma il tuo piano, riceve un identificatore anonimo e le informazioni sui tuoi acquisti App Store, mai le tue abitudini.', where: 'Impostazioni di iOS › il tuo nome › Abbonamenti.' } },
      ],
    },
    {
      title: 'Altro',
      blocks: [
        { p: 'Per una richiesta che questa pagina non copre, scrivi all’assistenza di Ritualist:' },
        {
          contact: [
            { label: 'Email', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Informativa sulla privacy', value: '[Leggila per intero](/privacy)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
