import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Opțiunile tale de confidențialitate - Ritualist',
  metaDescription: 'Ce poți vedea, schimba, exporta și șterge în Ritualist, și unde.',
  title: 'Opțiunile tale de confidențialitate',
  updated: '10 noiembrie 2026',
  sections: [
    {
      blocks: [
        { note: 'Ritualist nu are conturi. Obiceiurile, înregistrările și profilul tău stau pe dispozitivele tale și în propriul tău iCloud, unde doar Ritualist de pe dispozitivul tău ajunge la ele. De aceea fiecare opțiune de pe această pagină se face în aplicație sau în Setările iOS, iar aici vezi unde.' },
      ],
    },
    {
      title: 'Datele tale',
      blocks: [
        { choice: { title: 'Vezi-ți datele', body: 'Nimic despre obiceiurile tale nu e păstrat într-un loc pe care să nu-l poți vedea.', where: 'Tot ce introduci apare în aplicație: Acasă, Statistici, Setări › Profil.' } },
        { choice: { title: 'Exportă o copie', body: 'Salvează obiceiurile, înregistrările, categoriile și profilul într-un fișier pe care îl păstrezi. Reimportarea lui mai târziu face parte din Ritualist Pro.', where: 'Setări › iCloud și copii de rezervă › Salvează backup.' } },
        { choice: { title: 'Schimbă-le sau corectează-le', body: 'Numele, poza, genul și grupa de vârstă sunt opționale și pot fi schimbate sau șterse oricând.', where: 'Editează orice obicei, înregistrare sau categorie acolo unde apare; profilul în Setări › Profil.' } },
        { choice: { title: 'Șterge tot', body: 'Șterge obiceiurile, înregistrările și profilul de pe acest dispozitiv și din iCloud, iar celelalte dispozitive urmează. Aplicația primește și un nou identificator anonim pentru statistici, așa că nimic din ce se trimite după aceea nu e legat de ce s-a trimis înainte.', where: 'Setări › iCloud și copii de rezervă › Șterge toate datele.' } },
        { choice: { title: 'Ține-ți datele în afara iCloud', body: 'Obiceiurile tale rămân atunci doar pe acest dispozitiv.', where: 'Setări iOS › numele tău › iCloud, apoi dezactivează Ritualist printre aplicațiile care folosesc iCloud.' } },
      ],
    },
    {
      title: 'Cum sunt folosite datele tale',
      blocks: [
        { choice: { title: 'Statistici de utilizare anonime', body: 'Ritualist trimite date anonime despre cum e folosită aplicația, niciodată obiceiurile tale sau ce scrii. Dezactivează-le și de pe acel dispozitiv nu se mai trimite nimic. Vezi [Politica de confidențialitate](/privacy) pentru ce includ exact.', where: 'Setări › iCloud și copii de rezervă › Trimite statistici de utilizare (Ritualist 2.1 și versiunile ulterioare).' } },
        { choice: { title: 'Despre tine', body: 'Analiza personalității rulează doar cu consimțământul tău, în întregime pe dispozitivul tău, iar rezultatele ei nu îl părăsesc niciodată. Retragerea consimțământului o oprește și șterge fiecare analiză. Poți șterge și analizele trecute pe rând.', where: 'Setări › Despre tine, apoi detaliile de confidențialitate › Retrage consimțământul.' } },
      ],
    },
    {
      title: 'Permisiuni',
      blocks: [
        { choice: { title: 'Locație, Apple Health, notificări și Activități live', body: 'Fiecare e cerută doar când o funcție are nevoie de ea și poate fi dezactivată oricând. Locația e folosită doar pentru mementourile de loc; datele din Apple Health nu părăsesc niciodată dispozitivul tău sau aplicația Sănătate.', where: 'Setări iOS › Aplicații › Ritualist.' } },
      ],
    },
    {
      title: 'Achiziții',
      blocks: [
        { choice: { title: 'Abonamente', body: 'Achizițiile se fac și se gestionează prin contul tău Apple. RevenueCat, care îți confirmă planul, primește un identificator anonim și informațiile achizițiilor din App Store, niciodată obiceiurile tale.', where: 'Setări iOS › numele tău › Abonamente.' } },
      ],
    },
    {
      title: 'Orice altceva',
      blocks: [
        { p: 'Pentru o cerere pe care această pagină nu o acoperă, scrie-i echipei de asistență Ritualist:' },
        {
          contact: [
            { label: 'Email', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Politica de confidențialitate', value: '[Citește-o integral](/privacy)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
