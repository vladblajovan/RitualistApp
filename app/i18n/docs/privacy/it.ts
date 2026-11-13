import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Informativa sulla privacy - Ritualist',
  metaDescription: 'Informativa sulla privacy dell’app Ritualist per le abitudini.',
  title: 'Informativa sulla privacy',
  updated: '10 novembre 2026',
  legal: true,
  sections: [
    {
      title: 'Introduzione',
      blocks: [
        { p: 'Ritualist (“noi”, “nostro” o “ci”) si impegna a proteggere la tua privacy. Questa Informativa sulla privacy spiega come raccogliamo, usiamo e proteggiamo le tue informazioni quando usi la nostra applicazione iOS.' },
        { note: '**In sintesi:** Ritualist è progettata mettendo la privacy al primo posto. I dati delle tue abitudini restano sul tuo dispositivo e nel tuo account iCloud personale. Non abbiamo accesso ai tuoi dati. Le uniche eccezioni sono le statistiche di utilizzo anonime, che non includono mai nulla di ciò che scrivi, e dati temporali minimi e non identificativi per le Attività in tempo reale del digiuno, entrambi descritti più avanti.' },
      ],
    },
    {
      title: 'Informazioni che raccogliamo',
      blocks: [
        { h3: 'Dati che fornisci' },
        {
          ul: [
            '**Informazioni del profilo:** nome, foto del profilo, genere e fascia d’età (tutti facoltativi)',
            '**Dati delle abitudini:** le abitudini che crei, inclusi nomi, pianificazioni, promemoria e registrazioni di completamento',
            '**Categorie:** le categorie personalizzate che crei per organizzare le tue abitudini',
          ],
        },
        { h3: 'Dati raccolti automaticamente' },
        {
          ul: [
            '**Dati sulla posizione:** solo quando attivi i promemoria basati sulla posizione per abitudini specifiche. Usiamo il geofencing per attivare i promemoria quando arrivi in luoghi designati o te ne vai.',
            '**Tempi delle Attività in tempo reale del digiuno:** quando è in corso un’Attività in tempo reale del digiuno, l’app invia al nostro backend un token push dell’Attività in tempo reale e gli orari di inizio e di obiettivo del digiuno, così la schermata di blocco, la Dynamic Island e Apple Watch si aggiornano in tempo. Vedi “Aggiornamenti delle Attività in tempo reale” più avanti.',
            '**Dati di utilizzo anonimi:** raccogliamo dati anonimi sull’interazione con il prodotto (ad esempio quali schermate vengono visitate e quali funzioni vengono usate), prestazioni e diagnostica dell’app, eventi di abbonamento e acquisto, e una posizione approssimativa (paese e città) ricavata dal tuo indirizzo IP, per capire come viene usata l’app e migliorare l’esperienza. Questi dati non sono collegati alla tua identità. Vedi la sezione “Statistiche” più avanti per i dettagli.',
          ],
        },
        { h3: 'Dati che NON raccogliamo' },
        {
          ul: [
            'Non usiamo SDK pubblicitari o di tracciamento tra app',
            'Non raccogliamo identificatori del dispositivo per scopi di tracciamento o pubblicitari',
            'Non inviamo al nostro backend né alle statistiche nomi di abitudini o categorie, note, stati d’animo, messaggi di incoraggiamento o valori di Apple Health',
            'Non raccogliamo la tua posizione precisa',
            'Non vendiamo né condividiamo i tuoi dati con terze parti',
          ],
        },
      ],
    },
    {
      title: 'Come conserviamo i tuoi dati',
      blocks: [
        { h3: 'Archiviazione locale' },
        { p: 'Tutti i dati delle tue abitudini sono conservati localmente sul tuo dispositivo usando i meccanismi di archiviazione sicura di Apple.' },
        { h3: 'Sincronizzazione iCloud' },
        { p: 'Se hai effettuato l’accesso a iCloud, i tuoi dati si sincronizzano automaticamente tra i tuoi dispositivi Apple tramite il servizio CloudKit di Apple. Questo significa che:' },
        {
          ul: [
            'I tuoi dati sono crittografati da Apple durante il trasferimento e quando sono archiviati',
            'Solo tu puoi accedere ai tuoi dati tramite il tuo ID Apple',
            'Non possiamo accedere, leggere o decrittografare i tuoi dati iCloud',
            'La sincronizzazione dei dati è regolata dall’[Informativa sulla privacy di Apple](https://www.apple.com/legal/privacy/)',
          ],
        },
        { h3: 'Archiviazione sicura' },
        { p: 'Le informazioni sensibili (come lo stato dell’abbonamento) sono conservate nel Portachiavi di iOS, il sistema sicuro di Apple per le credenziali.' },
      ],
    },
    {
      title: 'Dati sulla posizione',
      blocks: [
        { p: 'Ritualist chiede l’accesso alla posizione solo se scegli di impostare promemoria basati sulla posizione per le tue abitudini.' },
        { h3: 'Come usiamo la posizione' },
        {
          ul: [
            'Per inviarti promemoria delle abitudini quando arrivi in luoghi specifici o te ne vai',
            'Il monitoraggio della posizione avviene interamente sul dispositivo, tramite le API di geofencing di Apple',
            'I tuoi luoghi salvati e i promemoria di posizione non vengono mai inviati a noi o a terze parti. Come il resto dei tuoi dati, si sincronizzano solo tramite il tuo account iCloud personale',
            'Le statistiche possono registrare una posizione approssimativa (paese e città) ricavata dal tuo indirizzo IP, mai la tua posizione precisa; vedi “Statistiche” più avanti',
          ],
        },
        { h3: 'Il tuo controllo' },
        {
          ul: [
            'L’accesso alla posizione è facoltativo e si può disattivare in qualsiasi momento nelle Impostazioni di iOS',
            'Puoi rimuovere i promemoria basati sulla posizione dalle singole abitudini',
            'Supportiamo i permessi “Mentre usi l’app” e “Sempre”, secondo la tua preferenza',
          ],
        },
      ],
    },
    {
      title: 'Aggiornamenti delle Attività in tempo reale',
      blocks: [
        { p: 'Le Attività in tempo reale del digiuno mostrano i tuoi progressi sulla schermata di blocco, nella Dynamic Island e nello Smart Stack di Apple Watch. Per aggiornarle a ogni fase del digiuno mentre l’app è chiusa, Ritualist programma aggiornamenti push tramite il nostro backend su Google Cloud (Firebase).' },
        { h3: 'Cosa viene inviato' },
        {
          ul: [
            'Il token push emesso da Apple per quell’Attività in tempo reale',
            'Gli orari di inizio e di obiettivo del digiuno, e gli orari dei suoi prossimi cambi di fase',
            'Un identificatore di sessione casuale e un numero di revisione, perché gli aggiornamenti possano essere sostituiti o annullati',
          ],
        },
        { h3: 'Cosa non viene inviato' },
        {
          ul: [
            'Il tuo nome, l’ID Apple, i nomi delle abitudini, le note, gli stati d’animo o i messaggi motivazionali mostrati nell’attività (restano sul tuo dispositivo)',
            'Qualsiasi dato sanitario, di posizione o statistico',
          ],
        },
        { h3: 'Conservazione e controllo' },
        {
          ul: [
            'Questi dati non sono collegati alla tua identità e non sono usati per tracciamento, pubblicità o statistiche',
            'Non li conserviamo in un database. Ogni aggiornamento programmato viene eliminato una volta inviato, e quelli rimanenti vengono eliminati quando termini, scarti o modifichi il digiuno',
            'Gli aggiornamenti push sono consegnati dal servizio di notifiche push di Apple',
            'Puoi disattivare le Attività in tempo reale di Ritualist in qualsiasi momento in Impostazioni di iOS > Ritualist > Attività in tempo reale; mentre sono disattivate non viene inviato alcun dato delle Attività in tempo reale',
          ],
        },
      ],
    },
    {
      title: 'Conservazione dei dati',
      blocks: [
        {
          ul: [
            '**Dati attivi:** i tuoi dati sono conservati finché usi l’app',
            '**Abitudini eliminate:** quando elimini un’abitudine, viene rimossa dal tuo dispositivo e da iCloud entro 30 giorni',
            '**Eliminazione di tutto:** puoi eliminare tutti i tuoi dati in qualsiasi momento da Impostazioni > iCloud e backup > Elimina tutti i dati',
          ],
        },
      ],
    },
    {
      title: 'I tuoi diritti',
      blocks: [
        {
          ul: [
            '**Accesso:** visualizza tutti i tuoi dati nell’app',
            '**Esportazione:** esporta i dati delle tue abitudini da Impostazioni > iCloud e backup > Salva backup; importarli di nuovo fa parte di Ritualist Pro',
            '**Eliminazione:** elimina tutti i tuoi dati dalle Impostazioni in qualsiasi momento',
            '**Statistiche:** disattiva le statistiche di utilizzo anonime in Impostazioni > iCloud e backup > Condividi dati di utilizzo (Ritualist 2.1 e successive); da quel dispositivo non viene più inviato nulla',
            '**Tutte le tue scelte:** [Le tue scelte sulla privacy](/privacy-choices) le elenca una per una, con dove farle',
            '**Portabilità:** i tuoi dati si sincronizzano tramite iCloud e sono accessibili su tutti i tuoi dispositivi Apple',
          ],
        },
      ],
    },
    {
      title: 'Servizi di terze parti',
      blocks: [
        { h3: 'Servizi Apple' },
        {
          ul: [
            '**iCloud/CloudKit:** per sincronizzare i dati tra i tuoi dispositivi',
            '**StoreKit:** per elaborare acquisti in-app e abbonamenti',
            '**Servizio di notifiche push di Apple:** per consegnare gli aggiornamenti delle Attività in tempo reale',
            '**WatchConnectivity:** per la sincronizzazione diretta tra il tuo iPhone e l’Apple Watch abbinato. I dati delle abitudini passano direttamente tra i tuoi dispositivi via Bluetooth/Wi-Fi senza passare da alcun server, così l’app per Watch funziona anche con la sincronizzazione iCloud disattivata.',
          ],
        },
        { p: 'Questi servizi sono forniti da Apple e regolati dall’[Informativa sulla privacy di Apple](https://www.apple.com/legal/privacy/).' },
        { h3: 'Google Firebase' },
        { p: 'Usiamo [Google Firebase](https://firebase.google.com) per quanto segue, senza Firebase Analytics né funzioni pubblicitarie:' },
        {
          ul: [
            '**Remote Config e Hosting:** per fornire le impostazioni dell’app e i cataloghi di contenuti (come i suggerimenti di abitudini e le sfide). Firebase elabora le informazioni tecniche necessarie alla consegna, come un identificatore dell’istanza dell’app, la versione dell’app, la lingua del dispositivo, il paese e il fuso orario.',
            '**App Check:** per verificare che le richieste al nostro backend provengano dall’app Ritualist autentica, tramite App Attest di Apple.',
            '**Cloud Functions e Cloud Tasks:** per programmare gli aggiornamenti delle Attività in tempo reale, come descritto in “Aggiornamenti delle Attività in tempo reale”.',
          ],
        },
        { p: 'L’elaborazione di Firebase è regolata dai [termini di privacy e sicurezza di Firebase](https://firebase.google.com/support/privacy).' },
        { h3: 'Abbonamenti (RevenueCat)' },
        { p: 'Usiamo [RevenueCat](https://www.revenuecat.com) per gestire lo stato dell’abbonamento. RevenueCat riceve un identificatore utente anonimo dell’app e le informazioni sui tuoi acquisti App Store per confermare l’accesso alle funzioni Pro. Non riceve i dati delle tue abitudini. Vedi l’[Informativa sulla privacy di RevenueCat](https://www.revenuecat.com/privacy).' },
        { h3: 'Statistiche (PostHog)' },
        { p: 'Usiamo [PostHog](https://posthog.com), una piattaforma open source di statistiche di prodotto ospitata nell’UE, per capire come vengono usate le funzioni e migliorare l’app. Questo include:' },
        {
          ul: [
            'Interazioni con le funzioni (ad esempio quali schermate vengono visitate e quali azioni vengono compiute)',
            'Prestazioni e diagnostica dell’app (ad esempio tempi di caricamento e il tipo di un errore)',
            'Eventi di abbonamento e acquisto (ad esempio quale piano è stato visualizzato o acquistato, se è iniziato con una prova gratuita, e il tuo piano attuale)',
            'Informazioni tecniche: versione dell’app, modello del dispositivo, versione di iOS, lingua, fuso orario e dimensioni dello schermo',
            'Una posizione approssimativa (paese e città) ricavata dal tuo indirizzo IP; l’indirizzo IP stesso non viene conservato',
            'Un identificatore anonimo del dispositivo (non collegato alla tua identità)',
          ],
        },
        { p: 'Le statistiche non includono mai nomi di abitudini o categorie, note, stati d’animo, valori di Apple Health o qualsiasi altra cosa tu scriva.' },
        { p: 'I dati statistici sono:' },
        {
          ul: [
            'Non collegati alla tua identità personale',
            'Non usati per pubblicità o tracciamento tra app',
            'Non condivisi con terze parti per il marketing',
            'Elaborati e conservati nell’Unione europea',
          ],
        },
        { p: 'Puoi disattivare le statistiche in Impostazioni > iCloud e backup > Condividi dati di utilizzo (Ritualist 2.1 e successive). Anche Elimina tutti i dati assegna all’app un nuovo identificatore anonimo.' },
        { p: 'Non usiamo reti pubblicitarie, broker di dati o servizi di segnalazione degli arresti anomali.' },
        { h3: 'Roadmap delle funzioni (Sidetrack)' },
        { p: 'La roadmap nell’app è fornita da [Sidetrack](https://sidetrack.app). Aprirla carica l’elenco delle funzioni in programma e il numero dei loro voti; votare una funzione invia un voto anonimo per quella funzione. Insieme non viene inviato alcun identificatore né dato personale.' },
      ],
    },
    {
      title: 'Apple Health (HealthKit)',
      blocks: [
        { p: 'Ritualist può integrarsi, se lo desideri, con Apple Health per leggere e scrivere dati sanitari legati alle tue abitudini (ad esempio minuti di consapevolezza per gli esercizi di respirazione, passi, acqua assunta).' },
        { h3: 'Come usiamo i dati sanitari' },
        {
          ul: [
            'I dati sanitari sono usati solo per mostrare i progressi e completare automaticamente le abitudini in base alla tua attività',
            'I dati sanitari restano sul tuo dispositivo e nel tuo account iCloud personale',
            'I dati sanitari non vengono **mai** inviati ai nostri server, a servizi di statistiche o a terze parti',
            'I dati sanitari non vengono **mai** usati a scopi pubblicitari o di marketing',
          ],
        },
        { h3: 'Il tuo controllo' },
        {
          ul: [
            'L’integrazione con Salute è facoltativa e disattivata per impostazione predefinita',
            'Scegli tu quali abitudini si sincronizzano con Apple Health',
            'Puoi revocare i permessi di Salute in qualsiasi momento in Impostazioni di iOS > Salute > Ritualist',
          ],
        },
      ],
    },
    {
      title: 'Privacy dei minori',
      blocks: [
        { p: 'Ritualist non è rivolta ai minori di 13 anni. Non raccogliamo consapevolmente informazioni personali di minori di 13 anni. Se ritieni che le abbiamo raccolte involontariamente, contattaci per farle rimuovere.' },
      ],
    },
    {
      title: 'Modifiche a questa informativa',
      blocks: [
        { p: 'Potremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova Informativa su questa pagina e aggiornando la data di “Ultimo aggiornamento”.' },
      ],
    },
    {
      title: 'Contattaci',
      blocks: [
        { p: 'Per qualsiasi domanda su questa Informativa sulla privacy, contattaci:' },
        {
          contact: [
            { label: 'Email', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Assistenza', value: '[Pagina di assistenza](/support)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
