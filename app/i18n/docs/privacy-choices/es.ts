import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Tus opciones de privacidad - Ritualist',
  metaDescription: 'Qué puedes ver, cambiar, exportar y eliminar en Ritualist, y dónde hacerlo.',
  title: 'Tus opciones de privacidad',
  updated: '10 de noviembre de 2026',
  sections: [
    {
      blocks: [
        { note: 'Ritualist no tiene cuentas. Tus hábitos, registros y perfil viven en tus dispositivos y en tu propio iCloud, donde solo Ritualist en tu dispositivo puede llegar a ellos. Por eso cada opción de esta página se elige en la app o en los Ajustes de iOS, y aquí te indicamos dónde.' },
      ],
    },
    {
      title: 'Tus datos',
      blocks: [
        { choice: { title: 'Ver tus datos', body: 'Nada sobre tus hábitos se guarda en un lugar que no puedas ver.', where: 'Todo lo que introduces se muestra en la app: Inicio, Estadísticas, Ajustes › Perfil.' } },
        { choice: { title: 'Exportar una copia', body: 'Guarda tus hábitos, registros, categorías y perfil en un archivo que conservas. Volver a importarlo más adelante forma parte de Ritualist Pro.', where: 'Ajustes › iCloud y copias de seguridad › Guardar copia de seguridad.' } },
        { choice: { title: 'Cambiarlos o corregirlos', body: 'El nombre, la foto, el género y el grupo de edad son opcionales y se pueden cambiar o borrar cuando quieras.', where: 'Edita cualquier hábito, registro o categoría donde se muestre; tu perfil en Ajustes › Perfil.' } },
        { choice: { title: 'Eliminarlo todo', body: 'Elimina tus hábitos, registros y perfil de este dispositivo y de tu iCloud, así que tus otros dispositivos hacen lo mismo. Además, da a la app un nuevo identificador anónimo de analíticas, para que nada de lo que se envíe después se vincule con lo anterior.', where: 'Ajustes › iCloud y copias de seguridad › Eliminar todos los datos.' } },
        { choice: { title: 'Mantener tus datos fuera de iCloud', body: 'Tus hábitos se quedan entonces solo en este dispositivo.', where: 'Ajustes de iOS › tu nombre › iCloud, y desactiva Ritualist entre las apps que usan iCloud.' } },
      ],
    },
    {
      title: 'Cómo se usan tus datos',
      blocks: [
        { choice: { title: 'Analíticas de uso anónimas', body: 'Ritualist envía datos anónimos sobre cómo se usa la app, nunca tus hábitos ni nada que escribas. Desactívalas y desde ese dispositivo no se envía nada más. Consulta la [Política de privacidad](/privacy) para saber exactamente qué incluyen.', where: 'Ajustes › iCloud y copias de seguridad › Compartir analíticas de uso (Ritualist 2.1 y posteriores).' } },
        { choice: { title: 'Sobre ti', body: 'El análisis de personalidad solo funciona con tu consentimiento, por completo en tu dispositivo, y sus resultados nunca salen de él. Retirar el consentimiento lo detiene y elimina cada análisis. También puedes eliminar análisis anteriores uno a uno.', where: 'Ajustes › Sobre ti, luego sus detalles de privacidad › Retirar el consentimiento.' } },
      ],
    },
    {
      title: 'Permisos',
      blocks: [
        { choice: { title: 'Ubicación, Apple Health, notificaciones y Actividades en vivo', body: 'Cada uno se pide solo cuando una función lo necesita y se puede desactivar cuando quieras. La ubicación solo se usa para los recordatorios de lugar; los datos de Apple Health nunca salen de tu dispositivo ni de tu app Salud.', where: 'Ajustes de iOS › Apps › Ritualist.' } },
      ],
    },
    {
      title: 'Compras',
      blocks: [
        { choice: { title: 'Suscripciones', body: 'Las compras se hacen y se gestionan con tu cuenta de Apple. RevenueCat, que confirma tu plan, recibe un identificador anónimo y la información de tus compras en el App Store, nunca tus hábitos.', where: 'Ajustes de iOS › tu nombre › Suscripciones.' } },
      ],
    },
    {
      title: 'Cualquier otra cosa',
      blocks: [
        { p: 'Para una solicitud que esta página no cubra, escribe al soporte de Ritualist:' },
        {
          contact: [
            { label: 'Correo', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Política de privacidad', value: '[Léela completa](/privacy)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
