import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Política de privacidad - Ritualist',
  metaDescription: 'Política de privacidad de la app de hábitos Ritualist.',
  title: 'Política de privacidad',
  updated: '10 de noviembre de 2026',
  legal: true,
  sections: [
    {
      title: 'Introducción',
      blocks: [
        { p: 'Ritualist (“nosotros”, “nuestro” o “nos”) se compromete a proteger tu privacidad. Esta Política de privacidad explica cómo recopilamos, usamos y protegemos tu información cuando usas nuestra app para iOS.' },
        { note: '**Lo esencial:** Ritualist está diseñada con la privacidad primero. Los datos de tus hábitos se quedan en tu dispositivo y en tu cuenta personal de iCloud. No tenemos acceso a tus datos. Las únicas excepciones son las analíticas de uso anónimas, que nunca incluyen nada de lo que escribes, y unos datos de tiempo mínimos y no identificativos para las Actividades en vivo de ayuno, ambos descritos más abajo.' },
      ],
    },
    {
      title: 'Información que recopilamos',
      blocks: [
        { h3: 'Datos que proporcionas' },
        {
          ul: [
            '**Información del perfil:** nombre, foto de perfil, género y grupo de edad (todo opcional)',
            '**Datos de hábitos:** los hábitos que creas, con nombres, programaciones, recordatorios y registros de cumplimiento',
            '**Categorías:** las categorías propias que creas para organizar tus hábitos',
          ],
        },
        { h3: 'Datos recopilados automáticamente' },
        {
          ul: [
            '**Datos de ubicación:** solo cuando activas recordatorios por ubicación para hábitos concretos. Usamos geovallas para lanzar recordatorios cuando llegas a lugares designados o sales de ellos.',
            '**Tiempos de las Actividades en vivo de ayuno:** mientras hay una Actividad en vivo de ayuno, la app envía a nuestro backend un token push de la Actividad en vivo y las horas de inicio y de meta del ayuno, para que la pantalla bloqueada, la Dynamic Island y el Apple Watch se actualicen a tiempo. Consulta “Actualizaciones de Actividades en vivo” más abajo.',
            '**Datos de uso anónimos:** recopilamos datos anónimos de interacción con el producto (como qué pantallas se visitan y qué funciones se usan), rendimiento y diagnóstico de la app, eventos de suscripción y compra, y una ubicación aproximada (país y ciudad) derivada de tu dirección IP, para entender cómo se usa la app y mejorar la experiencia. Estos datos no están vinculados a tu identidad. Consulta la sección “Analíticas” más abajo.',
          ],
        },
        { h3: 'Datos que NO recopilamos' },
        {
          ul: [
            'No usamos SDK de publicidad ni de seguimiento entre apps',
            'No recopilamos identificadores del dispositivo con fines de seguimiento o publicidad',
            'No enviamos nombres de hábitos o categorías, notas, estados de ánimo, mensajes de ánimo ni valores de Apple Health a nuestro backend ni a las analíticas',
            'No recopilamos tu ubicación precisa',
            'No vendemos ni compartimos tus datos con terceros',
          ],
        },
      ],
    },
    {
      title: 'Cómo guardamos tus datos',
      blocks: [
        { h3: 'Almacenamiento local' },
        { p: 'Todos los datos de tus hábitos se guardan localmente en tu dispositivo con los mecanismos de almacenamiento seguro de Apple.' },
        { h3: 'Sincronización con iCloud' },
        { p: 'Si tienes sesión iniciada en iCloud, tus datos se sincronizan automáticamente entre tus dispositivos Apple con el servicio CloudKit de Apple. Esto significa que:' },
        {
          ul: [
            'Apple cifra tus datos en tránsito y en reposo',
            'Solo tú puedes acceder a tus datos con tu ID de Apple',
            'No podemos acceder a tus datos de iCloud, leerlos ni descifrarlos',
            'La sincronización se rige por la [Política de privacidad de Apple](https://www.apple.com/legal/privacy/)',
          ],
        },
        { h3: 'Almacenamiento seguro' },
        { p: 'La información sensible (como el estado de la suscripción) se guarda en el llavero de iOS, el sistema seguro de Apple para credenciales.' },
      ],
    },
    {
      title: 'Datos de ubicación',
      blocks: [
        { p: 'Ritualist solo pide acceso a la ubicación si decides configurar recordatorios por ubicación para tus hábitos.' },
        { h3: 'Cómo usamos la ubicación' },
        {
          ul: [
            'Para enviarte recordatorios de hábitos cuando llegas a lugares concretos o sales de ellos',
            'El control de la ubicación ocurre por completo en el dispositivo, con las API de geovallas de Apple',
            'Tus lugares guardados y recordatorios por ubicación nunca se nos envían a nosotros ni a terceros. Como el resto de tus datos, solo se sincronizan a través de tu cuenta personal de iCloud',
            'Las analíticas pueden registrar una ubicación aproximada (país y ciudad) derivada de tu dirección IP, nunca tu ubicación precisa; consulta “Analíticas” más abajo',
          ],
        },
        { h3: 'Tu control' },
        {
          ul: [
            'El acceso a la ubicación es opcional y puedes desactivarlo cuando quieras en los Ajustes de iOS',
            'Puedes quitar los recordatorios por ubicación de cada hábito',
            'Admitimos los permisos “Cuando se use la app” y “Siempre”, según prefieras',
          ],
        },
      ],
    },
    {
      title: 'Actualizaciones de Actividades en vivo',
      blocks: [
        { p: 'Las Actividades en vivo de ayuno muestran tu progreso en la pantalla bloqueada, en la Dynamic Island y en el Smart Stack del Apple Watch. Para actualizarlas en cada fase del ayuno con la app cerrada, Ritualist programa actualizaciones push a través de nuestro backend en Google Cloud (Firebase).' },
        { h3: 'Qué se envía' },
        {
          ul: [
            'El token push que Apple emite para esa Actividad en vivo',
            'Las horas de inicio y de meta del ayuno, y las horas de sus próximos cambios de fase',
            'Un identificador de sesión aleatorio y un número de revisión, para poder sustituir o cancelar las actualizaciones',
          ],
        },
        { h3: 'Qué no se envía' },
        {
          ul: [
            'Tu nombre, ID de Apple, nombres de hábitos, notas, estados de ánimo ni los mensajes motivadores de la actividad (se quedan en tu dispositivo)',
            'Ningún dato de salud, de ubicación ni de analíticas',
          ],
        },
        { h3: 'Conservación y control' },
        {
          ul: [
            'Estos datos no están vinculados a tu identidad ni se usan para seguimiento, publicidad o analíticas',
            'No los guardamos en una base de datos. Cada actualización programada se elimina una vez enviada, y las restantes se eliminan cuando terminas, descartas o cambias el ayuno',
            'Las actualizaciones push las entrega el servicio de notificaciones push de Apple',
            'Puedes desactivar las Actividades en vivo de Ritualist cuando quieras en Ajustes de iOS > Ritualist > Actividades en vivo; mientras estén desactivadas no se envía ningún dato de Actividades en vivo',
          ],
        },
      ],
    },
    {
      title: 'Conservación de los datos',
      blocks: [
        {
          ul: [
            '**Datos activos:** tus datos se conservan mientras uses la app',
            '**Hábitos eliminados:** cuando eliminas un hábito, se quita de tu dispositivo y de iCloud en un plazo de 30 días',
            '**Eliminarlo todo:** puedes eliminar todos tus datos cuando quieras en Ajustes > iCloud y copias de seguridad > Eliminar todos los datos',
          ],
        },
      ],
    },
    {
      title: 'Tus derechos',
      blocks: [
        {
          ul: [
            '**Acceso:** consulta todos tus datos en la app',
            '**Exportación:** exporta los datos de tus hábitos en Ajustes > iCloud y copias de seguridad > Guardar copia de seguridad; volver a importarlos forma parte de Ritualist Pro',
            '**Eliminación:** elimina todos tus datos desde Ajustes cuando quieras',
            '**Analíticas:** desactiva las analíticas de uso anónimas en Ajustes > iCloud y copias de seguridad > Compartir analíticas de uso (Ritualist 2.1 y posteriores); desde ese dispositivo no se envía nada más',
            '**Todas tus opciones:** [Tus opciones de privacidad](/privacy-choices) las enumera una a una, con dónde elegirlas',
            '**Portabilidad:** tus datos se sincronizan por iCloud y puedes acceder a ellos en cualquiera de tus dispositivos Apple',
          ],
        },
      ],
    },
    {
      title: 'Servicios de terceros',
      blocks: [
        { h3: 'Servicios de Apple' },
        {
          ul: [
            '**iCloud/CloudKit:** para sincronizar los datos entre tus dispositivos',
            '**StoreKit:** para procesar compras dentro de la app y suscripciones',
            '**Servicio de notificaciones push de Apple:** para entregar las actualizaciones de las Actividades en vivo',
            '**WatchConnectivity:** para la sincronización directa entre tu iPhone y el Apple Watch enlazado. Los datos de hábitos van directamente entre tus dispositivos por Bluetooth/Wi‑Fi sin pasar por ningún servidor, así que la app del Watch funciona incluso con la sincronización de iCloud desactivada.',
          ],
        },
        { p: 'Apple presta estos servicios, regidos por la [Política de privacidad de Apple](https://www.apple.com/legal/privacy/).' },
        { h3: 'Google Firebase' },
        { p: 'Usamos [Google Firebase](https://firebase.google.com) para lo siguiente, sin Firebase Analytics ni funciones publicitarias:' },
        {
          ul: [
            '**Remote Config y Hosting:** para entregar ajustes de la app y catálogos de contenido (como sugerencias de hábitos y desafíos). Firebase procesa la información técnica necesaria para la entrega, como un identificador de instancia de la app, la versión de la app, el idioma del dispositivo, el país y la zona horaria.',
            '**App Check:** para verificar que las solicitudes a nuestro backend vienen de la app Ritualist auténtica, mediante App Attest de Apple.',
            '**Cloud Functions y Cloud Tasks:** para programar las actualizaciones de las Actividades en vivo, como se describe en “Actualizaciones de Actividades en vivo”.',
          ],
        },
        { p: 'El tratamiento de Firebase se rige por los [términos de privacidad y seguridad de Firebase](https://firebase.google.com/support/privacy).' },
        { h3: 'Suscripciones (RevenueCat)' },
        { p: 'Usamos [RevenueCat](https://www.revenuecat.com) para gestionar el estado de la suscripción. RevenueCat recibe un identificador de usuario anónimo de la app y la información de tus compras en el App Store para confirmar el acceso a las funciones Pro. No recibe los datos de tus hábitos. Consulta la [Política de privacidad de RevenueCat](https://www.revenuecat.com/privacy).' },
        { h3: 'Analíticas (PostHog)' },
        { p: 'Usamos [PostHog](https://posthog.com), una plataforma de analíticas de producto de código abierto alojada en la UE, para entender cómo se usan las funciones y mejorar la app. Esto incluye:' },
        {
          ul: [
            'Interacciones con funciones (por ejemplo, qué pantallas se visitan y qué acciones se realizan)',
            'Rendimiento y diagnóstico de la app (por ejemplo, tiempos de carga y el tipo de un error)',
            'Eventos de suscripción y compra (por ejemplo, qué plan se vio o se compró, si empezó con una prueba gratis y tu plan actual)',
            'Información técnica: versión de la app, modelo del dispositivo, versión de iOS, idioma, zona horaria y tamaño de pantalla',
            'Una ubicación aproximada (país y ciudad) derivada de tu dirección IP; la dirección IP en sí no se guarda',
            'Un identificador de dispositivo anónimo (no vinculado a tu identidad)',
          ],
        },
        { p: 'Las analíticas nunca incluyen nombres de hábitos o categorías, notas, estados de ánimo, valores de Apple Health ni nada que escribas.' },
        { p: 'Los datos de analíticas:' },
        {
          ul: [
            'No están vinculados a tu identidad personal',
            'No se usan para publicidad ni seguimiento entre apps',
            'No se comparten con terceros con fines de marketing',
            'Se procesan y se guardan en la Unión Europea',
          ],
        },
        { p: 'Puedes desactivar las analíticas en Ajustes > iCloud y copias de seguridad > Compartir analíticas de uso (Ritualist 2.1 y posteriores). Eliminar todos los datos también da a la app un nuevo identificador anónimo.' },
        { p: 'No usamos redes publicitarias, intermediarios de datos ni servicios de informes de fallos.' },
        { h3: 'Hoja de ruta de funciones (Sidetrack)' },
        { p: 'La hoja de ruta de la app la proporciona [Sidetrack](https://sidetrack.app). Al abrirla se cargan las funciones previstas y sus votos; votar una función envía un voto anónimo por esa función. No se envía ningún identificador ni dato personal.' },
      ],
    },
    {
      title: 'Apple Health (HealthKit)',
      blocks: [
        { p: 'Ritualist puede integrarse, si quieres, con Apple Health para leer y escribir datos de salud relacionados con tus hábitos (por ejemplo, minutos de atención plena de los ejercicios de respiración, pasos, agua).' },
        { h3: 'Cómo usamos los datos de salud' },
        {
          ul: [
            'Los datos de salud solo se usan para mostrar el progreso y completar hábitos automáticamente según tu actividad',
            'Los datos de salud se quedan en tu dispositivo y en tu cuenta personal de iCloud',
            'Los datos de salud **nunca** se envían a nuestros servidores, a servicios de analíticas ni a terceros',
            'Los datos de salud **nunca** se usan con fines publicitarios o de marketing',
          ],
        },
        { h3: 'Tu control' },
        {
          ul: [
            'La integración con Salud es opcional y está desactivada por defecto',
            'Tú eliges qué hábitos se sincronizan con Apple Health',
            'Puedes retirar los permisos de Salud cuando quieras en Ajustes de iOS > Salud > Ritualist',
          ],
        },
      ],
    },
    {
      title: 'Privacidad de menores',
      blocks: [
        { p: 'Ritualist no está dirigida a menores de 13 años. No recopilamos a sabiendas información personal de menores de 13 años. Si crees que la hemos recopilado sin querer, contáctanos para eliminarla.' },
      ],
    },
    {
      title: 'Cambios en esta política',
      blocks: [
        { p: 'Podemos actualizar esta Política de privacidad de vez en cuando. Te avisaremos de cualquier cambio publicando la nueva política en esta página y actualizando la fecha de “Última actualización”.' },
      ],
    },
    {
      title: 'Contacto',
      blocks: [
        { p: 'Si tienes preguntas sobre esta Política de privacidad, contáctanos:' },
        {
          contact: [
            { label: 'Correo', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Soporte', value: '[Página de soporte](/support)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
