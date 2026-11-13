import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Politica de confidențialitate - Ritualist',
  metaDescription: 'Politica de confidențialitate a aplicației de obiceiuri Ritualist.',
  title: 'Politica de confidențialitate',
  updated: '10 noiembrie 2026',
  legal: true,
  sections: [
    {
      title: 'Introducere',
      blocks: [
        { p: 'Ritualist („noi”, „nostru” sau „ne”) se angajează să-ți protejeze confidențialitatea. Această Politică de confidențialitate explică cum colectăm, folosim și protejăm informațiile tale când folosești aplicația noastră pentru iOS.' },
        { note: '**Pe scurt:** Ritualist e gândită cu confidențialitatea pe primul loc. Datele obiceiurilor tale rămân pe dispozitivul tău și în contul tău personal iCloud. Nu avem acces la datele tale. Singurele excepții sunt statisticile de utilizare anonime, care nu includ niciodată ceva din ce scrii, și date minime de timp, care nu te identifică, pentru Activitățile live ale postului, ambele descrise mai jos.' },
      ],
    },
    {
      title: 'Ce informații colectăm',
      blocks: [
        { h3: 'Date pe care le oferi' },
        {
          ul: [
            '**Informațiile profilului:** nume, poză de profil, gen și grupă de vârstă (toate opționale)',
            '**Datele obiceiurilor:** obiceiurile pe care le creezi, cu nume, programe, mementouri și înregistrări de bifare',
            '**Categorii:** categoriile proprii pe care le creezi ca să-ți organizezi obiceiurile',
          ],
        },
        { h3: 'Date colectate automat' },
        {
          ul: [
            '**Date de locație:** doar când activezi mementouri pe bază de locație pentru anumite obiceiuri. Folosim geofencing ca să declanșăm mementouri când ajungi în locuri stabilite sau pleci din ele.',
            '**Timpii Activităților live ale postului:** cât rulează o Activitate live de post, aplicația trimite către backendul nostru un token push al Activității live și orele de început și de obiectiv ale postului, ca ecranul de blocare, Dynamic Island și Apple Watch să se actualizeze la timp. Vezi „Actualizările Activităților live” mai jos.',
            '**Date de utilizare anonime:** colectăm date anonime despre interacțiunea cu produsul (de exemplu ce ecrane sunt vizitate și ce funcții sunt folosite), performanța și diagnosticul aplicației, evenimente de abonament și cumpărare, și o locație aproximativă (țară și oraș) dedusă din adresa ta IP, ca să înțelegem cum e folosită aplicația și să o îmbunătățim. Aceste date nu sunt legate de identitatea ta. Detalii în secțiunea „Statistici” mai jos.',
          ],
        },
        { h3: 'Date pe care NU le colectăm' },
        {
          ul: [
            'Nu folosim SDK-uri de publicitate sau de urmărire între aplicații',
            'Nu colectăm identificatori ai dispozitivului pentru urmărire sau publicitate',
            'Nu trimitem către backendul nostru sau către statistici nume de obiceiuri sau categorii, note, stări, mesaje de încurajare sau valori din Apple Health',
            'Nu colectăm locația ta exactă',
            'Nu vindem și nu împărtășim datele tale cu terți',
          ],
        },
      ],
    },
    {
      title: 'Cum păstrăm datele tale',
      blocks: [
        { h3: 'Stocare locală' },
        { p: 'Toate datele obiceiurilor tale sunt păstrate local pe dispozitivul tău, cu mecanismele sigure de stocare ale Apple.' },
        { h3: 'Sincronizare iCloud' },
        { p: 'Dacă folosești iCloud, datele tale se sincronizează automat între dispozitivele tale Apple prin serviciul CloudKit al Apple. Asta înseamnă că:' },
        {
          ul: [
            'Datele tale sunt criptate de Apple în timpul transferului și când sunt stocate',
            'Doar tu poți accesa datele tale prin ID-ul tău Apple',
            'Nu putem accesa, citi sau decripta datele tale din iCloud',
            'Sincronizarea datelor e guvernată de [Politica de confidențialitate a Apple](https://www.apple.com/legal/privacy/)',
          ],
        },
        { h3: 'Stocare securizată' },
        { p: 'Informațiile sensibile (cum ar fi starea abonamentului) sunt păstrate în Portchei-ul iOS, sistemul securizat al Apple pentru credențiale.' },
      ],
    },
    {
      title: 'Date de locație',
      blocks: [
        { p: 'Ritualist cere acces la locație doar dacă alegi să configurezi mementouri pe bază de locație pentru obiceiurile tale.' },
        { h3: 'Cum folosim locația' },
        {
          ul: [
            'Ca să-ți trimitem mementouri pentru obiceiuri când ajungi în anumite locuri sau pleci din ele',
            'Urmărirea locației se face în întregime pe dispozitiv, cu interfețele de geofencing ale Apple',
            'Locurile salvate și mementourile de loc nu ne sunt trimise niciodată nouă sau unor terți. Ca restul datelor tale, se sincronizează doar prin contul tău personal iCloud',
            'Statisticile pot înregistra o locație aproximativă (țară și oraș) dedusă din adresa ta IP, niciodată locația ta exactă; vezi „Statistici” mai jos',
          ],
        },
        { h3: 'Controlul tău' },
        {
          ul: [
            'Accesul la locație e opțional și poate fi dezactivat oricând din Setările iOS',
            'Poți elimina mementourile pe bază de locație de la fiecare obicei',
            'Acceptăm permisiunile „Când folosești aplicația” și „Întotdeauna”, după preferința ta',
          ],
        },
      ],
    },
    {
      title: 'Actualizările Activităților live',
      blocks: [
        { p: 'Activitățile live ale postului îți arată progresul pe ecranul de blocare, în Dynamic Island și în Smart Stack pe Apple Watch. Ca să le actualizeze la fiecare fază a postului cât aplicația e închisă, Ritualist programează actualizări push prin backendul nostru din Google Cloud (Firebase).' },
        { h3: 'Ce se trimite' },
        {
          ul: [
            'Tokenul push emis de Apple pentru acea Activitate live',
            'Orele de început și de obiectiv ale postului, și orele următoarelor schimbări de fază',
            'Un identificator de sesiune aleatoriu și un număr de revizie, ca actualizările să poată fi înlocuite sau anulate',
          ],
        },
        { h3: 'Ce nu se trimite' },
        {
          ul: [
            'Numele tău, ID-ul Apple, numele obiceiurilor, notele, stările sau mesajele motivaționale din activitate (rămân pe dispozitivul tău)',
            'Nicio dată de sănătate, de locație sau de statistici',
          ],
        },
        { h3: 'Păstrare și control' },
        {
          ul: [
            'Aceste date nu sunt legate de identitatea ta și nu sunt folosite pentru urmărire, publicitate sau statistici',
            'Nu le păstrăm într-o bază de date. Fiecare actualizare programată e ștearsă după ce e trimisă, iar cele rămase sunt șterse când termini, renunți la post sau îl modifici',
            'Actualizările push sunt livrate prin serviciul de notificări push al Apple',
            'Poți dezactiva oricând Activitățile live pentru Ritualist din Setări iOS > Ritualist > Activități live; cât sunt dezactivate, nu se trimit date pentru Activități live',
          ],
        },
      ],
    },
    {
      title: 'Păstrarea datelor',
      blocks: [
        {
          ul: [
            '**Date active:** datele tale sunt păstrate cât timp folosești aplicația',
            '**Obiceiuri șterse:** când ștergi un obicei, e eliminat de pe dispozitivul tău și din iCloud în cel mult 30 de zile',
            '**Ștergerea tuturor datelor:** poți șterge oricând toate datele din Setări > iCloud și copii de rezervă > Șterge toate datele',
          ],
        },
      ],
    },
    {
      title: 'Drepturile tale',
      blocks: [
        {
          ul: [
            '**Acces:** vezi toate datele tale în aplicație',
            '**Export:** exportă datele obiceiurilor din Setări > iCloud și copii de rezervă > Salvează backup; reimportarea lor face parte din Ritualist Pro',
            '**Ștergere:** șterge oricând toate datele din Setări',
            '**Statistici:** dezactivează statisticile de utilizare anonime din Setări > iCloud și copii de rezervă > Trimite statistici de utilizare (Ritualist 2.1 și versiunile ulterioare); de pe acel dispozitiv nu se mai trimite nimic',
            '**Toate opțiunile tale:** [Opțiunile tale de confidențialitate](/privacy-choices) le enumeră pe fiecare și unde le faci',
            '**Portabilitate:** datele tale se sincronizează prin iCloud și le poți accesa pe oricare dintre dispozitivele tale Apple',
          ],
        },
      ],
    },
    {
      title: 'Servicii terțe',
      blocks: [
        { h3: 'Servicii Apple' },
        {
          ul: [
            '**iCloud/CloudKit:** pentru sincronizarea datelor între dispozitivele tale',
            '**StoreKit:** pentru procesarea achizițiilor din aplicație și a abonamentelor',
            '**Serviciul de notificări push al Apple:** pentru livrarea actualizărilor Activităților live',
            '**WatchConnectivity:** pentru sincronizarea directă între iPhone și Apple Watch-ul asociat. Datele obiceiurilor trec direct între dispozitivele tale prin Bluetooth/Wi‑Fi, fără niciun server, așa că aplicația de pe ceas funcționează chiar și cu sincronizarea iCloud dezactivată.',
          ],
        },
        { p: 'Aceste servicii sunt oferite de Apple și guvernate de [Politica de confidențialitate a Apple](https://www.apple.com/legal/privacy/).' },
        { h3: 'Google Firebase' },
        { p: 'Folosim [Google Firebase](https://firebase.google.com) pentru următoarele, fără Firebase Analytics și fără funcții de publicitate:' },
        {
          ul: [
            '**Remote Config și Hosting:** pentru a livra setările aplicației și cataloagele de conținut (ca sugestiile de obiceiuri și provocările). Firebase prelucrează informațiile tehnice necesare livrării, ca un identificator al instanței aplicației, versiunea aplicației, limba dispozitivului, țara și fusul orar.',
            '**App Check:** pentru a verifica faptul că cererile către backendul nostru vin de la aplicația Ritualist autentică, prin App Attest de la Apple.',
            '**Cloud Functions și Cloud Tasks:** pentru programarea actualizărilor Activităților live, așa cum e descris în „Actualizările Activităților live”.',
          ],
        },
        { p: 'Prelucrarea prin Firebase e guvernată de [termenii de confidențialitate și securitate Firebase](https://firebase.google.com/support/privacy).' },
        { h3: 'Abonamente (RevenueCat)' },
        { p: 'Folosim [RevenueCat](https://www.revenuecat.com) pentru gestionarea stării abonamentului. RevenueCat primește un identificator anonim de utilizator al aplicației și informațiile achizițiilor tale din App Store, ca să confirme accesul la funcțiile Pro. Nu primește datele obiceiurilor tale. Vezi [Politica de confidențialitate RevenueCat](https://www.revenuecat.com/privacy).' },
        { h3: 'Statistici (PostHog)' },
        { p: 'Folosim [PostHog](https://posthog.com), o platformă open source de statistici de produs găzduită în UE, ca să înțelegem cum sunt folosite funcțiile și să îmbunătățim aplicația. Asta include:' },
        {
          ul: [
            'Interacțiuni cu funcțiile (de exemplu ce ecrane sunt vizitate, ce acțiuni sunt făcute)',
            'Performanța și diagnosticul aplicației (de exemplu timpi de încărcare și tipul unei erori)',
            'Evenimente de abonament și cumpărare (de exemplu ce plan a fost văzut sau cumpărat, dacă a început cu o perioadă de probă gratuită și planul tău actual)',
            'Informații tehnice: versiunea aplicației, modelul dispozitivului, versiunea iOS, limba, fusul orar și dimensiunea ecranului',
            'O locație aproximativă (țară și oraș) dedusă din adresa ta IP; adresa IP în sine nu e păstrată',
            'Un identificator anonim al dispozitivului (nelegat de identitatea ta)',
          ],
        },
        { p: 'Statisticile nu includ niciodată nume de obiceiuri sau categorii, note, stări, valori din Apple Health sau orice altceva scrii.' },
        { p: 'Datele statistice sunt:' },
        {
          ul: [
            'Nelegate de identitatea ta personală',
            'Nefolosite pentru publicitate sau urmărire între aplicații',
            'Neîmpărtășite cu terți în scopuri de marketing',
            'Prelucrate și păstrate în Uniunea Europeană',
          ],
        },
        { p: 'Poți dezactiva statisticile din Setări > iCloud și copii de rezervă > Trimite statistici de utilizare (Ritualist 2.1 și versiunile ulterioare). Șterge toate datele îi dă, de asemenea, aplicației un nou identificator anonim.' },
        { p: 'Nu folosim rețele de publicitate, brokeri de date sau servicii de raportare a erorilor fatale.' },
        { h3: 'Planul de funcții (Sidetrack)' },
        { p: 'Planul de funcții din aplicație e oferit de [Sidetrack](https://sidetrack.app). Deschiderea lui încarcă lista funcțiilor planificate și numărul voturilor; votul pentru o funcție trimite un vot anonim pentru acea funcție. Nu se trimite niciun identificator sau dată personală.' },
      ],
    },
    {
      title: 'Apple Health (HealthKit)',
      blocks: [
        { p: 'Ritualist se poate integra, dacă vrei, cu Apple Health ca să citească și să scrie date de sănătate legate de obiceiurile tale (de exemplu minute de mindfulness pentru exercițiile de respirație, pași, apă).' },
        { h3: 'Cum folosim datele de sănătate' },
        {
          ul: [
            'Datele de sănătate sunt folosite doar pentru a afișa progresul și a bifa automat obiceiurile pe baza activității tale',
            'Datele de sănătate rămân pe dispozitivul tău și în contul tău personal iCloud',
            'Datele de sănătate **nu sunt niciodată** trimise către serverele noastre, serviciile de statistici sau terți',
            'Datele de sănătate **nu sunt niciodată** folosite în scopuri de publicitate sau marketing',
          ],
        },
        { h3: 'Controlul tău' },
        {
          ul: [
            'Integrarea cu Sănătate e opțională și dezactivată implicit',
            'Tu alegi ce obiceiuri se sincronizează cu Apple Health',
            'Poți retrage oricând permisiunile Sănătate din Setări iOS > Sănătate > Ritualist',
          ],
        },
      ],
    },
    {
      title: 'Confidențialitatea copiilor',
      blocks: [
        { p: 'Ritualist nu se adresează copiilor sub 13 ani. Nu colectăm cu bună știință informații personale de la copii sub 13 ani. Dacă crezi că am colectat din greșeală astfel de informații, contactează-ne ca să le eliminăm.' },
      ],
    },
    {
      title: 'Modificări ale acestei politici',
      blocks: [
        { p: 'Putem actualiza din când în când această Politică de confidențialitate. Te vom anunța despre orice modificare publicând noua politică pe această pagină și actualizând data „Ultima actualizare”.' },
      ],
    },
    {
      title: 'Contact',
      blocks: [
        { p: 'Dacă ai întrebări despre această Politică de confidențialitate, contactează-ne:' },
        {
          contact: [
            { label: 'Email', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Asistență', value: '[Pagina de asistență](/support)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
