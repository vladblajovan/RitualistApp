import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Asistență - Ritualist',
  metaDescription: 'Ajutor și asistență pentru Ritualist, aplicația de obiceiuri.',
  title: 'Asistență Ritualist',
  lead: 'Suntem aici să te ajutăm să-ți construiești obiceiuri mai bune și să-ți atingi obiectivele cu Ritualist.',
  sections: [
    {
      title: 'Contact',
      blocks: [
        { p: 'Ai întrebări, sugestii sau ai nevoie de ajutor? Scrie-i echipei de asistență:' },
        { button: { text: 'ritualist.help@gmail.com', href: 'mailto:ritualist.help@gmail.com' } },
      ],
    },
    {
      title: 'Întrebări frecvente',
      blocks: [
        {
          faq: [
            { q: 'Ritualist e gratuită?', a: 'Da. Versiunea gratuită include toate cele patru feluri de obiceiuri (de bifat, de numărat, de măsurat și cronometrate), până la 5 obiceiuri active și 3 locuri, postul și respirația cu ghidurile lor, mementouri, Apple Health, widgeturi, Siri, sincronizare iCloud, Apple Watch și nivelul Bronz al fiecărei provocări. Ritualist Pro adaugă obiceiuri și locuri nelimitate, Despre tine, nivelurile Argint și Aur ale provocărilor, toți antrenorii de post, florile de respirație și tipare proprii, Programarea inteligentă și restaurarea backupurilor.' },
            { q: 'Cât costă Ritualist Pro?', a: 'Pro vine în trei feluri: Lunar la 9,99 $ pe lună, Anual la 39,99 $ pe an cu o săptămână de probă gratuită, sau Pe viață la 69,99 $, plătit o singură dată. Prețurile pot varia în funcție de regiune, iar aplicația îți arată prețul în moneda ta înainte de cumpărare.' },
            { q: 'Ce înseamnă Pe viață?', a: 'Pe viață este o achiziție unică, fără reînnoire, care deblochează Pro fără alte plăți: nu ai nimic de anulat. „Pe viață” înseamnă cât timp Ritualist este oferită și întreținută, nu durata vieții unei persoane, și include toate funcțiile Pro, inclusiv cele adăugate ulterior. Aparține contului Apple care a cumpărat-o și poate fi restaurată pe celelalte dispozitive cu Restaurează achizițiile. Dacă vom înceta vreodată să oferim Ritualist, vom anunța în aplicație cu cel puțin 90 de zile înainte, iar Pro rămâne deblocat pe dispozitivul tău cât timp iOS o rulează.' },
            { q: 'Pot trece de la un abonament la Pe viață?', a: 'Da. Cumpără Pe viață din pagina Pro, apoi anulează abonamentul din setările contului tău Apple ca să nu se reînnoiască. Abonamentul rămâne activ până la sfârșitul perioadei deja plătite.' },
            { q: 'Se va schimba prețul abonamentului meu?', a: 'Nu. Cu un abonament activ, îți păstrezi prețul cât timp abonamentul rămâne activ.' },
            { q: 'Cum îmi restaurez achizițiile?', a: 'Deschide pagina Pro în Ritualist, de exemplu din Setări, și atinge Restaurează achizițiile. Abonamentul sau achiziția Pe viață revin pe orice dispozitiv cu același cont Apple.' },
            { q: 'Cum îmi anulez abonamentul?', a: 'Abonamentele se gestionează prin contul tău Apple: deschide aplicația Configurări, atinge numele tău, apoi Abonamente. Anulează cu cel puțin 24 de ore înainte de sfârșitul perioadei curente ca să oprești următoarea reînnoire. Pe viață nu are nimic de anulat.' },
            { q: 'Ce se întâmplă cu obiceiurile mele dacă abonamentul se încheie?', a: 'Nu se șterge nimic. Dacă depășești limitele gratuite, obiceiurile și locurile peste limită sunt puse pe pauză, cu istoricul lor, până treci din nou la Pro sau elimini câteva.' },
            { q: 'Ce dispozitive sunt compatibile?', a: 'Ritualist funcționează pe iPhone și iPad cu iOS 18 sau ulterior, cu o aplicație însoțitoare pentru Apple Watch. Datele tale se sincronizează între iPhone și iPad prin iCloud, iar ceasul rămâne sincronizat cu iPhone-ul chiar și cu sincronizarea iCloud dezactivată.' },
            { q: 'Ce pot face pe Apple Watch?', a: 'Să vezi obiceiurile de azi și progresul, să bifezi obiceiuri, să schimbi cantități, să setezi valoarea unui obicei de măsurat cu Digital Crown și să pornești sau să oprești posturi și sesiuni de respirație.' },
            { q: 'Ce sunt obiceiurile de măsurat și obiectivele săptămânale?', a: 'Un obicei de măsurat păstrează o valoare, ca greutatea sau talia, și îi arată evoluția. Orice obicei se poate și repeta după un program propriu (la câteva zile, săptămâni, luni sau ani) sau poate ținti un număr de zile ori un total pe săptămână sau pe lună, cum ar fi 3 antrenamente pe săptămână sau 70.000 de pași pe săptămână.' },
            { q: 'Cum funcționează postul și respirația?', a: 'Postul îți urmărește postul fază cu fază, cu un ghid, alerte la începutul fiecărei faze, o Activitate live și un raport la final. Respirația dă ritmul fiecărei respirații cu o formă care se deschide și se închide și vibrații pe care le poți urma cu ochii închiși. Amândouă păstrează un istoric al sesiunilor și al stărilor tale.' },
            { q: 'Cine sunt antrenorii de post?', a: 'Antrenorul tău de post e unul dintre cei șase eroi de pluș care vorbesc în alertele tale, în Activitatea live și în ghid: Taisu (loial, cald), Wren (clar, practic), Moss (răbdător, calm), Pip (vioi, jucăuș), Luna (blândă, grijulie) sau Bruno (statornic, scurt). Glisează printre ei pe pagina Antrenorului de post și fiecare se prezintă. Taisu e gratuit. Ceilalți antrenori vin cu Pro. Sfaturile ghidului sunt aceleași oricare l-ai alege.' },
            { q: 'Pot folosi Siri?', a: 'Da. Spune „Începe un post în Ritualist”, „Oprește-mi postul în Ritualist”, „De cât timp postesc în Ritualist” sau „Respiră cu Ritualist”. Aceleași acțiuni sunt în aplicația Scurtături și în Spotlight, iar Începe postul și Respirație pot sta în Centrul de control, pe ecranul de blocare sau pe butonul de acțiune.' },
            { q: 'Ce sunt provocările?', a: 'În fiecare lună vine o provocare nouă, plus provocări de sezon și trasee pe viață. Ajungi la Bronz, apoi la Argint și Aur, fiecare o medalie. Bronzul e gratuit; Argintul și Aurul vin cu Pro, iar zilele deja făcute se pun la socoteală când treci la Pro.' },
            { q: 'Cum funcționează Despre tine?', a: 'Despre tine citește obiceiurile pe care le păstrezi ca să-ți estimeze trăsăturile de personalitate Big Five, îți sugerează activități potrivite pentru tine și arată cum se schimbă trăsăturile tale în timp. Rulează doar cu consimțământul tău, în întregime pe dispozitivul tău, poate fi blocat cu Face ID și e o orientare, nu o evaluare psihologică. Face parte din Pro.' },
            { q: 'Datele mele sunt private?', a: 'Da. Obiceiurile tale rămân pe dispozitivul tău și în propriul cont iCloud. Despre tine și încurajările antrenorului de post sunt calculate pe dispozitivul tău. Nu vedem niciodată obiceiurile sau informațiile tale personale; primim doar statistici de utilizare anonime, descrise în [Politica de confidențialitate](/privacy).' },
            { q: 'Datele mele se sincronizează între dispozitive?', a: 'Da. Obiceiurile, progresul, locurile și profilul tău se sincronizează automat prin iCloud. Pe un dispozitiv nou sau după reinstalare, Ritualist îți aduce obiceiurile înapoi din iCloud.' },
            { q: 'Ritualist funcționează cu Apple Health?', a: 'Da, gratuit. Leagă orice obicei, mai puțin un post, de o măsură din Sănătate, ca pașii, apa, somnul, minutele de mindfulness sau greutatea, și lasă Sănătate să-l completeze, trimite-i înregistrările tale, sau ambele. Datele tale din Sănătate nu ne sunt trimise niciodată, nici nouă, nici statisticilor.' },
            { q: 'Cum îmi fac backup la date?', a: 'Deschide Setări › iCloud și copii de rezervă și atinge Salvează backup ca să salvezi obiceiurile, înregistrările și profilul într-un fișier. Restaurarea unui backup face parte din Pro.' },
            { q: 'Ce limbi suportă Ritualist?', a: 'Engleză, germană, spaniolă, franceză, italiană și română.' },
            { q: 'Îmi pot distribui progresul?', a: 'Da. Realizările obținute pot fi distribuite ca carduri cu seria ta, o zi perfectă sau rezumatul săptămânal, la fel ca raportul unui post și arhetipul tău din Despre tine. Cardurile au un cod QR către Ritualist și nimic privat.' },
          ],
        },
        { p: 'Pentru ajutor pas cu pas la fiecare funcție, vezi [Ghidul de utilizare](/user-guide).' },
      ],
    },
  ],
};

export default doc;
