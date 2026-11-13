import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Termenii serviciului - Ritualist',
  metaDescription: 'Termenii serviciului pentru aplicația de obiceiuri Ritualist.',
  title: 'Termenii serviciului',
  updated: '9 noiembrie 2026',
  legal: true,
  sections: [
    {
      title: '1. Acceptarea termenilor',
      blocks: [{ p: 'Descărcând, instalând sau folosind Ritualist („Aplicația”), accepți acești Termeni ai serviciului („Termeni”). Dacă nu îi accepți, nu folosi Aplicația.' }],
    },
    {
      title: '2. Descrierea serviciului',
      blocks: [
        { p: 'Ritualist este o aplicație de urmărire a obiceiurilor care te ajută să construiești și să păstrezi obiceiuri bune. Aplicația îți permite să:' },
        {
          ul: [
            'Creezi și urmărești obiceiuri pe care le bifezi, numeri, măsori sau cronometrezi',
            'Urmărești activități cronometrate, ca postul și exercițiile de respirație',
            'Setezi mementouri și notificări pe bază de locație',
            'Te integrezi cu Apple Health pentru a citi și scrie date de sănătate',
            'Vezi progresul, statisticile și perspective asupra personalității',
            'Distribui carduri de realizări (serii, zile perfecte, rezumate săptămânale)',
            'Sincronizezi datele între dispozitivele tale Apple prin iCloud',
          ],
        },
      ],
    },
    {
      title: '3. Conturile utilizatorilor',
      blocks: [
        { p: 'Ritualist folosește ID-ul tău Apple și contul tău iCloud pentru sincronizarea datelor. Răspunderea ta privește:' },
        {
          ul: [
            'Securitatea ID-ului tău Apple',
            'Toate activitățile din contul tău',
            'Faptul că dispozitivul tău îndeplinește cerințele minime (iOS 18.0 sau ulterior)',
          ],
        },
      ],
    },
    {
      title: '4. Abonamente și plăți',
      blocks: [
        { h3: '4.1 Funcții gratuite' },
        { p: 'Versiunea gratuită a Ritualist include, printre altele:' },
        {
          ul: [
            'Până la 5 obiceiuri active și 3 locuri salvate',
            'Obiceiuri de bifat, numărat, măsurat și cronometrat, inclusiv postul și respirația cu ghidurile lor',
            'Mementouri la oră fixă și de loc, Apple Health, widgeturi, Siri și Apple Watch',
            'Serii, realizări, grafice de progres și nivelul Bronz al provocărilor',
            'Sincronizare iCloud pe toate dispozitivele tale și salvarea backupurilor',
          ],
        },
        { h3: '4.2 Ritualist Pro' },
        { p: 'Ritualist Pro deblochează funcții suplimentare, printre care:' },
        {
          ul: [
            'Obiceiuri și locuri nelimitate',
            'Perspectivele de personalitate din Despre tine',
            'Nivelurile Argint și Aur ale provocărilor',
            'Toți antrenorii de post și încurajările lor',
            'Forme de respirație, tipare proprii de respirație și perspective despre respirație',
            'Scurtăturile Programării inteligente și restaurarea backupurilor',
          ],
        },
        { p: 'Funcțiile incluse în Pro se pot schimba pe măsură ce Aplicația evoluează. Dacă depășești limitele gratuite, de exemplu după ce se încheie un abonament, obiceiurile și locurile peste limită sunt puse pe pauză, nu șterse.' },
        { h3: '4.3 Planuri' },
        { p: 'Ritualist Pro e disponibil ca:' },
        {
          ul: [
            '**Lunar** — un abonament cu reînnoire automată, facturat în fiecare lună',
            '**Anual** — un abonament cu reînnoire automată, facturat în fiecare an, care poate începe cu o perioadă de probă gratuită pentru abonații noi eligibili',
            '**Pe viață** — o achiziție unică, fără reînnoire, care deblochează Pro fără alte plăți (vezi 4.5)',
          ],
        },
        { p: 'Prețurile actuale sunt afișate în Aplicație înainte de cumpărare și pot varia în funcție de regiune și monedă. Putem oferi reduceri limitate în timp la prima perioadă a unui plan.' },
        { h3: '4.4 Condiții de plată' },
        {
          ul: [
            'Toate plățile sunt procesate prin App Store-ul Apple și debitate din contul tău Apple',
            'Abonamentele Lunar și Anual se reînnoiesc automat dacă nu sunt anulate cu cel puțin 24 de ore înainte de sfârșitul perioadei curente, iar contul tău e debitat pentru perioada următoare în cele 24 de ore dinaintea începerii ei',
            'Dacă e oferită o perioadă de probă gratuită, plata se face la finalul ei, dacă nu anulezi cu cel puțin 24 de ore înainte; partea nefolosită a unei perioade de probă se încheie când cumperi un plan',
            'Poți gestiona și anula abonamentele din setările contului tău App Store. Anularea oprește reînnoirile viitoare; Pro rămâne disponibil până la sfârșitul perioadei plătite',
          ],
        },
        { h3: '4.5 Pe viață' },
        { p: 'Ritualist Pro Pe viață este o achiziție unică, fără reînnoire, care deblochează Pro fără alte plăți: nu ai nimic de anulat. „Pe viață” înseamnă cât timp Ritualist este oferită și întreținută, nu durata vieții unei persoane. Include toate funcțiile Pro, inclusiv cele adăugate ulterior. Aparține contului Apple care a cumpărat-o și poate fi restaurată pe celelalte dispozitive cu Restaurează achizițiile. Dacă vom înceta vreodată să oferim Ritualist, vom anunța în Aplicație cu cel puțin 90 de zile înainte, iar Pro rămâne deblocat în Aplicație pe dispozitivul tău cât timp iOS o rulează. Rambursările sunt gestionate de Apple.' },
        { h3: '4.6 Modificări de preț' },
        { p: 'Putem modifica prețurile planurilor noastre. Abonamentele existente își păstrează prețul cât timp rămân active.' },
        { h3: '4.7 Rambursări' },
        { p: 'Toate achizițiile sunt procesate de Apple. Pentru o cerere de rambursare, contactează [Asistența Apple](https://support.apple.com/ro-ro/HT204084).' },
      ],
    },
    {
      title: '5. Conduita utilizatorului',
      blocks: [
        { p: 'Ești de acord să nu:' },
        {
          ul: [
            'Folosești Aplicația în scopuri ilegale',
            'Încerci să decompilezi, să dezasamblezi sau să faci inginerie inversă pe Aplicație',
            'Elimini sau modifici mențiuni ori etichete de proprietate',
            'Folosești Aplicația într-un mod care ar putea deteriora sau afecta serviciul',
          ],
        },
      ],
    },
    {
      title: '6. Proprietate intelectuală',
      blocks: [{ p: 'Aplicația, inclusiv designul, funcțiile și conținutul ei, aparține Ritualist și este protejată de legile privind drepturile de autor, mărcile și alte drepturi de proprietate intelectuală. Ți se acordă o licență limitată, neexclusivă și netransferabilă de a folosi Aplicația în scopuri personale, necomerciale.' }],
    },
    {
      title: '7. Confidențialitate',
      blocks: [{ p: 'Folosirea Aplicației e guvernată și de [Politica noastră de confidențialitate](/privacy), care descrie cum colectăm, folosim și protejăm informațiile tale.' }],
    },
    {
      title: '8. Date și conținut',
      blocks: [
        { h3: '8.1 Datele tale' },
        { p: 'Toate datele pe care le creezi în Aplicație îți aparțin. Backupurile lor sunt în grija ta.' },
        { h3: '8.2 Pierderea datelor' },
        { p: 'Deși ne străduim să asigurăm integritatea datelor, nu suntem responsabili pentru eventualele pierderi de date. Îți recomandăm să păstrezi sincronizarea iCloud activată pentru copii automate.' },
      ],
    },
    {
      title: '9. Declinarea garanțiilor',
      blocks: [
        { warn: 'APLICAȚIA ESTE OFERITĂ „CA ATARE”, FĂRĂ GARANȚII DE NICIUN FEL.' },
        { p: 'În măsura maximă permisă de lege:' },
        {
          ul: [
            'Declinăm orice garanții, exprese sau implicite, inclusiv garanțiile de vandabilitate și de potrivire pentru un anumit scop',
            'Nu garantăm că Aplicația va funcționa fără întreruperi, fără erori sau fără componente dăunătoare',
            'Nu garantăm niciun rezultat anume din folosirea Aplicației',
          ],
        },
        { h3: '9.1 Funcția de analiză a personalității' },
        { p: 'Analiza personalității oferă perspective pe baza tiparelor de comportament observate în datele obiceiurilor tale. Reține că:' },
        {
          ul: [
            'Analiza are **doar scop informativ și de divertisment**',
            '**Nu este o evaluare psihologică profesională** și nu trebuie interpretată ca diagnostic sau sfat medical',
            'Rezultatele sunt estimări algoritmice și s-ar putea să nu reflecte cu exactitate întreaga ta personalitate',
            'Dacă ai îngrijorări legate de sănătatea ta mintală sau de starea ta de bine, adresează-te unui medic calificat sau unui specialist în sănătate mintală',
            'Această funcție **nu înlocuiește o evaluare sau un tratament psihologic profesional**',
          ],
        },
        { h3: '9.2 Funcțiile de post și respirație' },
        { p: 'Ritualist include funcții cronometrate pentru postul intermitent și exercițiile de respirație ghidată. Reține că:' },
        {
          ul: [
            'Aceste funcții au **doar scop de stare de bine generală și de urmărire a obiceiurilor**',
            '**Nu sunt dispozitive medicale** și nu oferă sfaturi, diagnostic sau tratament medical',
            'Postul s-ar putea să nu fie potrivit pentru oricine, de exemplu pentru persoanele cu tulburări de alimentație, diabet sau alte afecțiuni',
            'Consultă un medic calificat înainte de a începe orice regim de post sau dacă simți disconfort în timpul exercițiilor de respirație',
            'Aceste funcții **nu înlocuiesc îndrumarea medicală profesională**',
          ],
        },
      ],
    },
    {
      title: '10. Limitarea răspunderii',
      blocks: [
        { p: 'În măsura maximă permisă de lege, Ritualist nu răspunde pentru daune indirecte, incidentale, speciale, consecutive sau punitive, inclusiv, fără a se limita la:' },
        { ul: ['Pierderea datelor', 'Pierderea profiturilor', 'Vătămări corporale', 'Daune materiale'] },
        { p: 'Răspunderea noastră totală nu va depăși suma plătită de tine pentru Aplicație în cele 12 luni dinaintea reclamației.' },
      ],
    },
    {
      title: '11. Despăgubire',
      blocks: [{ p: 'Ești de acord să despăgubești și să exonerezi Ritualist de orice pretenții, daune, pierderi sau cheltuieli care decurg din folosirea Aplicației sau din încălcarea acestor Termeni.' }],
    },
    {
      title: '12. Modificări ale termenilor',
      blocks: [{ p: 'Putem modifica acești Termeni oricând. Te vom anunța despre schimbările importante prin Aplicație sau pe alte căi. Folosirea în continuare a Aplicației după schimbări înseamnă acceptarea Termenilor modificați.' }],
    },
    {
      title: '13. Încetare',
      blocks: [
        { p: 'Ne rezervăm dreptul de a înceta sau suspenda accesul tău la Aplicație oricând, fără notificare, pentru un comportament pe care îl considerăm contrar acestor Termeni sau dăunător altor utilizatori ori nouă.' },
        { p: 'La încetare, s-ar putea să pierzi accesul la datele tale. Poți salva un backup al datelor din Aplicație înainte de încetare.' },
      ],
    },
    {
      title: '14. Legea aplicabilă',
      blocks: [{ p: 'Acești Termeni sunt guvernați și interpretați în conformitate cu legile României, fără a ține cont de normele sale privind conflictul de legi.' }],
    },
    {
      title: '15. Soluționarea disputelor',
      blocks: [{ p: 'Orice dispută care decurge din acești Termeni sau din folosirea Aplicației va fi soluționată prin arbitraj obligatoriu, cu excepția cazurilor în care legea interzice acest lucru. Ești de acord să renunți la orice drept de a participa la acțiuni colective.' }],
    },
    {
      title: '16. Separabilitate',
      blocks: [{ p: 'Dacă o prevedere a acestor Termeni este considerată inaplicabilă, celelalte prevederi rămân pe deplin în vigoare.' }],
    },
    {
      title: '17. Contact',
      blocks: [
        { p: 'Dacă ai întrebări despre acești Termeni, contactează-ne:' },
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
