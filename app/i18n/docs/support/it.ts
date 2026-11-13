import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Assistenza - Ritualist',
  metaDescription: 'Aiuto e assistenza per Ritualist, l’app per le abitudini.',
  title: 'Assistenza Ritualist',
  lead: 'Siamo qui per aiutarti a costruire abitudini migliori e a raggiungere i tuoi obiettivi con Ritualist.',
  sections: [
    {
      title: 'Contattaci',
      blocks: [
        { p: 'Hai domande, suggerimenti o ti serve aiuto? Scrivi al team di assistenza:' },
        { button: { text: 'ritualist.help@gmail.com', href: 'mailto:ritualist.help@gmail.com' } },
      ],
    },
    {
      title: 'Domande frequenti',
      blocks: [
        {
          faq: [
            { q: 'Ritualist è gratuita?', a: 'Sì. La versione gratuita include tutti e quattro i tipi di abitudine (Spunta, Conteggio, Misura e Timer), fino a 5 abitudini attive e 3 luoghi, digiuno e respirazione con le loro guide, promemoria, Apple Health, widget, Siri, sincronizzazione iCloud, Apple Watch e il livello Bronzo di ogni sfida. Ritualist Pro aggiunge abitudini e luoghi illimitati, Su di te, i livelli Argento e Oro delle sfide, tutti i coach del digiuno, i fiori della respirazione e schemi tuoi, la Pianificazione intelligente e il ripristino dei backup.' },
            { q: 'Quanto costa Ritualist Pro?', a: 'Pro è disponibile in tre modi: Mensile a 9,99 $ al mese, Annuale a 39,99 $ all’anno con una settimana di prova gratuita, o A vita a 69,99 $, pagato una volta. I prezzi possono variare in base al paese, e l’app mostra il prezzo nella tua valuta prima dell’acquisto.' },
            { q: 'Cos’è A vita?', a: 'A vita è un acquisto unico, senza rinnovo, che sblocca Pro senza ulteriori pagamenti: non c’è nulla da disdire. “A vita” significa per tutto il tempo in cui Ritualist è offerta e supportata, non per la vita di una persona, e include tutte le funzioni Pro, comprese quelle aggiunte in futuro. Appartiene all’account Apple che l’ha acquistato e si può ripristinare sugli altri tuoi dispositivi con Ripristina acquisti. Se un giorno smettessimo di offrire Ritualist, lo diremo nell’app con almeno 90 giorni di anticipo, e Pro resterà sbloccato sul tuo dispositivo finché iOS la eseguirà.' },
            { q: 'Posso passare da un abbonamento ad A vita?', a: 'Sì. Acquista A vita dalla pagina Pro, poi disdici l’abbonamento nelle impostazioni del tuo account Apple perché non si rinnovi. L’abbonamento resta attivo fino alla fine del periodo già pagato.' },
            { q: 'Il prezzo del mio abbonamento cambierà?', a: 'No. Con un abbonamento già attivo, mantieni il prezzo di sottoscrizione finché l’abbonamento resta attivo.' },
            { q: 'Come ripristino i miei acquisti?', a: 'Apri la pagina Pro in Ritualist, ad esempio dalle Impostazioni, e tocca Ripristina acquisti. Il tuo abbonamento o l’acquisto A vita tornano su qualsiasi dispositivo con lo stesso account Apple.' },
            { q: 'Come disdico l’abbonamento?', a: 'Gli abbonamenti si gestiscono tramite il tuo account Apple: apri l’app Impostazioni, tocca il tuo nome, poi Abbonamenti. Disdici almeno 24 ore prima della fine del periodo in corso per fermare il rinnovo successivo. A vita non ha nulla da disdire.' },
            { q: 'Cosa succede alle mie abitudini se l’abbonamento finisce?', a: 'Niente viene eliminato. Se superi i limiti gratuiti, le abitudini e i luoghi oltre il limite vengono messi in pausa, con la loro cronologia, finché non passi di nuovo a Pro o non ne rimuovi alcuni.' },
            { q: 'Quali dispositivi sono supportati?', a: 'Ritualist funziona su iPhone e iPad con iOS 18 o successivo, con un’app di accompagnamento per Apple Watch. I tuoi dati si sincronizzano tra iPhone e iPad tramite iCloud, e il Watch resta sincronizzato con l’iPhone anche con la sincronizzazione iCloud disattivata.' },
            { q: 'Cosa posso fare su Apple Watch?', a: 'Vedere le abitudini di oggi e i progressi, spuntare le abitudini, cambiare le quantità, impostare la misurazione di un’abitudine Misura con la Digital Crown, e avviare o fermare digiuni e sessioni di respirazione.' },
            { q: 'Cosa sono le abitudini Misura e gli obiettivi settimanali?', a: 'Un’abitudine Misura registra una misurazione, come il peso o il girovita, e ne mostra l’andamento. Qualsiasi abitudine può anche ripetersi con una pianificazione tutta sua (ogni pochi giorni, settimane, mesi o anni) o puntare a un numero di giorni o a un totale ogni settimana o mese, ad esempio 3 allenamenti a settimana o 70.000 passi a settimana.' },
            { q: 'Come funzionano digiuno e respirazione?', a: 'Il digiuno segue il tuo digiuno fase per fase, con una guida, avvisi all’inizio di ogni fase, un’Attività in tempo reale e un resoconto alla fine. La respirazione dà il ritmo a ogni respiro con una forma che si apre e si chiude e vibrazioni da seguire a occhi chiusi. Entrambi tengono una cronologia delle sessioni e degli stati d’animo.' },
            { q: 'Chi sono i coach del digiuno?', a: 'Il tuo coach del digiuno è uno di sei eroi di peluche che parlano negli avvisi, nell’Attività in tempo reale e nella guida: Taisu (leale, affettuoso), Wren (chiaro, pratico), Moss (paziente, calmo), Pip (vivace, giocosa), Luna (dolce, premurosa) o Bruno (saldo, conciso). Scorrili nella pagina del Coach del digiuno e ognuno si presenta. Taisu è gratuito. Gli altri coach arrivano con Pro. I consigli della guida sono gli stessi qualunque coach tu scelga.' },
            { q: 'Posso usare Siri?', a: 'Sì. Di’ “Avvia un digiuno su Ritualist”, “Ferma il mio digiuno su Ritualist”, “Da quanto sto digiunando su Ritualist” o “Respira con Ritualist”. Le stesse azioni sono nell’app Comandi e in Spotlight, e Inizia digiuno e Respira possono stare nel Centro di Controllo, sulla schermata di blocco o sul tasto Azione.' },
            { q: 'Cosa sono le sfide?', a: 'Ogni mese porta una nuova sfida, insieme a sfide stagionali e percorsi permanenti. Raggiungi il Bronzo, poi l’Argento e l’Oro, ognuno una medaglia. Il Bronzo è gratuito; Argento e Oro arrivano con Pro, e i giorni già fatti contano quando passi a Pro.' },
            { q: 'Come funziona Su di te?', a: 'Su di te legge le abitudini che mantieni per stimare i tuoi tratti di personalità Big Five, suggerisce attività adatte a te e mostra come cambiano i tuoi tratti nel tempo. Funziona solo con il tuo consenso, interamente sul tuo dispositivo, si può bloccare con Face ID ed è un orientamento, non una valutazione psicologica. Fa parte di Pro.' },
            { q: 'I miei dati sono privati?', a: 'Sì. Le tue abitudini restano sul tuo dispositivo e nel tuo account iCloud. Su di te e gli incoraggiamenti del coach del digiuno vengono elaborati sul tuo dispositivo. Non vediamo mai le tue abitudini né le tue informazioni personali; riceviamo solo statistiche di utilizzo anonime, descritte nell’[Informativa sulla privacy](/privacy).' },
            { q: 'I miei dati si sincronizzano tra i dispositivi?', a: 'Sì. Abitudini, progressi, luoghi e profilo si sincronizzano automaticamente tramite iCloud. Su un nuovo dispositivo o dopo una reinstallazione, Ritualist riporta le tue abitudini da iCloud.' },
            { q: 'Ritualist funziona con Apple Health?', a: 'Sì, gratis. Collega qualsiasi abitudine tranne un digiuno a una misura di Salute, come passi, acqua, sonno, minuti di consapevolezza o peso, e lascia che Salute la compili, invia a Salute le tue registrazioni, o entrambe le cose. I tuoi dati di Salute non vengono mai inviati a noi né alle statistiche.' },
            { q: 'Come faccio il backup dei miei dati?', a: 'Apri Impostazioni › iCloud e backup e tocca Salva backup per salvare abitudini, registrazioni e profilo in un file. Il ripristino di un backup fa parte di Pro.' },
            { q: 'Quali lingue supporta Ritualist?', a: 'Inglese, tedesco, spagnolo, francese, italiano e rumeno.' },
            { q: 'Posso condividere i miei progressi?', a: 'Sì. I traguardi ottenuti si possono condividere come schede con la tua serie, una giornata perfetta o il riepilogo settimanale, e lo stesso vale per il resoconto di un digiuno e per il tuo archetipo di Su di te. Le schede hanno un codice QR che porta a Ritualist e niente di privato.' },
          ],
        },
        { p: 'Per un aiuto passo passo su ogni funzione, consulta la [Guida](/user-guide).' },
      ],
    },
  ],
};

export default doc;
