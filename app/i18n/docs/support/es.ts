import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Soporte - Ritualist',
  metaDescription: 'Ayuda y soporte para Ritualist, la app de hábitos.',
  title: 'Soporte de Ritualist',
  lead: 'Estamos aquí para ayudarte a crear mejores hábitos y alcanzar tus metas con Ritualist.',
  sections: [
    {
      title: 'Contacto',
      blocks: [
        { p: '¿Tienes preguntas, comentarios o necesitas ayuda? Escribe a nuestro equipo de soporte:' },
        { button: { text: 'ritualist.help@gmail.com', href: 'mailto:ritualist.help@gmail.com' } },
      ],
    },
    {
      title: 'Preguntas frecuentes',
      blocks: [
        {
          faq: [
            { q: '¿Ritualist es gratis?', a: 'Sí. La versión gratuita incluye los cuatro tipos de hábito (marcar, contar, medir y con cronómetro), hasta 5 hábitos activos y 3 lugares, ayuno y respiración con sus guías, recordatorios, Apple Health, widgets, Siri, sincronización con iCloud, Apple Watch y el nivel Bronce de cada desafío. Ritualist Pro añade hábitos y lugares ilimitados, Sobre ti, los niveles Plata y Oro de los desafíos, todos los coaches de ayuno, flores de respiración y patrones propios, la Programación inteligente y restaurar copias de seguridad.' },
            { q: '¿Cuánto cuesta Ritualist Pro?', a: 'Pro se ofrece de tres formas: Mensual a 9,99 $ al mes, Anual a 49,99 $ al año con 1 semana de prueba gratis, o De por vida a 99,99 $, en un solo pago. Los precios pueden variar según la región, y la app muestra el precio en tu moneda antes de comprar.' },
            { q: '¿Qué es De por vida?', a: 'De por vida es una compra única, sin renovación, que desbloquea Pro sin más pagos: no hay nada que cancelar. “De por vida” significa mientras Ritualist se ofrezca y tenga soporte, no la vida de una persona, e incluye todas las funciones Pro, también las que se añadan más adelante. Pertenece a la cuenta de Apple que la compró y se puede restaurar en tus otros dispositivos con Restaurar compras. Si algún día dejamos de ofrecer Ritualist, lo diremos en la app con al menos 90 días de antelación, y Pro seguirá desbloqueado en tu dispositivo mientras iOS la ejecute.' },
            { q: '¿Puedo pasar de una suscripción a De por vida?', a: 'Sí. Compra De por vida en la página Pro y luego cancela tu suscripción en los ajustes de tu cuenta de Apple para que no se renueve. Tu suscripción sigue activa hasta el final del periodo ya pagado.' },
            { q: '¿Cambiará el precio de mi suscripción?', a: 'No. Con una suscripción activa, mantienes el precio con el que te suscribiste mientras siga activa.' },
            { q: '¿Cómo restauro mis compras?', a: 'Abre la página Pro en Ritualist, por ejemplo desde Ajustes, y toca Restaurar compras. Tu suscripción o tu compra De por vida vuelve en cualquier dispositivo con la misma cuenta de Apple.' },
            { q: '¿Cómo cancelo mi suscripción?', a: 'Las suscripciones se gestionan con tu cuenta de Apple: abre la app Ajustes, toca tu nombre y luego Suscripciones. Cancela al menos 24 horas antes del final del periodo actual para detener la siguiente renovación. De por vida no tiene nada que cancelar.' },
            { q: '¿Qué pasa con mis hábitos si termina mi suscripción?', a: 'No se elimina nada. Si superas los límites gratuitos, los hábitos y lugares por encima se pausan, con su historial, hasta que vuelvas a Pro o quites algunos.' },
            { q: '¿Qué dispositivos son compatibles?', a: 'Ritualist funciona en iPhone y iPad con iOS 18 o posterior, con una app complementaria para Apple Watch. Tus datos se sincronizan entre iPhone e iPad mediante iCloud, y el reloj se mantiene sincronizado con tu iPhone incluso con la sincronización de iCloud desactivada.' },
            { q: '¿Qué puedo hacer en el Apple Watch?', a: 'Ver los hábitos de hoy y tu progreso, marcar hábitos, cambiar cantidades, poner la medición de un hábito de medir con la Digital Crown, e iniciar o detener ayunos y sesiones de respiración.' },
            { q: '¿Qué son los hábitos de medir y las metas semanales?', a: 'Un hábito de medir registra una medición, como tu peso o tu cintura, y muestra su tendencia. Cualquier hábito puede además repetirse con su propia programación (cada pocos días, semanas, meses o años) o apuntar a un número de días o a un total cada semana o mes, como 3 entrenamientos a la semana o 70.000 pasos a la semana.' },
            { q: '¿Cómo funcionan el ayuno y la respiración?', a: 'El ayuno sigue tu ayuno fase a fase, con una guía, avisos al empezar cada fase, una Actividad en vivo y un informe al final. La respiración marca el ritmo de cada respiración con una forma que se abre y se cierra y una vibración que puedes seguir con los ojos cerrados. Ambos guardan un historial de tus sesiones y estados de ánimo.' },
            { q: '¿Quiénes son los coaches de ayuno?', a: 'Tu coach de ayuno es uno de seis héroes de peluche que hablan en tus avisos, la Actividad en vivo y la guía: Taisu (leal, cálido), Wren (claro, práctico), Moss (paciente, tranquilo), Pip (animado, juguetón), Luna (dulce, atenta) o Bruno (constante, breve). Desliza entre ellos en la página del Coach de ayuno y cada uno se presenta. Taisu es gratis. Los demás coaches vienen con Pro. Los consejos de la guía son los mismos elijas el que elijas.' },
            { q: '¿Puedo usar Siri?', a: 'Sí. Di “Empezar un ayuno en Ritualist”, “Terminar mi ayuno en Ritualist”, “Cuánto llevo ayunando en Ritualist” o “Respirar con Ritualist”. Las mismas acciones están en la app Atajos y en Spotlight, y Empezar ayuno y Respirar pueden ir en el Centro de control, en la pantalla bloqueada o en el botón de acción.' },
            { q: '¿Qué son los desafíos?', a: 'Cada mes llega un nuevo desafío, además de desafíos de temporada y caminos para toda la vida. Alcanza el Bronce, luego la Plata y el Oro, cada uno una medalla. El Bronce es gratis; la Plata y el Oro vienen con Pro, y los días que ya hayas hecho cuentan cuando te pasas a Pro.' },
            { q: '¿Cómo funciona Sobre ti?', a: 'Sobre ti lee los hábitos que mantienes para estimar tus rasgos de personalidad Big Five, te sugiere actividades que encajan contigo y muestra cómo cambian tus rasgos con el tiempo. Solo funciona con tu consentimiento, por completo en tu dispositivo, se puede bloquear con Face ID y es una orientación, no una evaluación psicológica. Forma parte de Pro.' },
            { q: '¿Mis datos son privados?', a: 'Sí. Tus hábitos se quedan en tu dispositivo y en tu propia cuenta de iCloud. Sobre ti y los mensajes de ánimo del coach de ayuno se generan en tu dispositivo. Nunca vemos tus hábitos ni tu información personal; solo recibimos analíticas de uso anónimas, descritas en la [Política de privacidad](/privacy).' },
            { q: '¿Mis datos se sincronizan entre dispositivos?', a: 'Sí. Tus hábitos, progreso, lugares y perfil se sincronizan automáticamente con iCloud. En un dispositivo nuevo o tras reinstalar, Ritualist recupera tus hábitos de iCloud.' },
            { q: '¿Ritualist funciona con Apple Health?', a: 'Sí, gratis. Vincula cualquier hábito salvo un ayuno a una medida de Salud, como pasos, agua, sueño, minutos de atención plena o peso, y deja que Salud lo complete, envía tus registros a Salud o ambas cosas. Tus datos de Salud nunca se nos envían a nosotros ni a las analíticas.' },
            { q: '¿Cómo hago una copia de seguridad?', a: 'Abre Ajustes › iCloud y copias de seguridad y toca Guardar copia de seguridad para guardar tus hábitos, registros y perfil en un archivo. Restaurar una copia de seguridad forma parte de Pro.' },
            { q: '¿Qué idiomas admite Ritualist?', a: 'Inglés, alemán, español, francés, italiano y rumano.' },
            { q: '¿Puedo compartir mi progreso?', a: 'Sí. Los logros conseguidos se pueden compartir como tarjetas con tu racha, un día perfecto o tu resumen semanal, igual que el informe de un ayuno y tu arquetipo de Sobre ti. Las tarjetas llevan un código QR a Ritualist y nada privado.' },
          ],
        },
        { p: 'Para ayuda paso a paso con cada función, consulta la [Guía de usuario](/user-guide).' },
      ],
    },
  ],
};

export default doc;
