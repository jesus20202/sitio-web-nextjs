export interface SectionConfig {
  id: string;
  name: string;
  logo: {
    image: string;
    title: string;
    subtitle: string;
  };
  navigation: Array<{
    label: string;
    items?: Array<{
      label: string;
      href: string;
    }>;
    href?: string;
  }>;
}

export const sectionConfigs: Record<string, SectionConfig> = {
  'york-rite': {
    id: 'york-rite',
    name: 'Grand York Rite',
    logo: {
      image: '/images/logos/logo4.png',
      title: 'Gran Rito de York',
      
    },
    navigation: [
      {
        label: '¿QUE ES EL RITO DE YORK?',
        items: [
          { label: '¿QUE ES EL RITO DE YORK?', href: '/about/overview' },
          { label: 'HISTORIA', href: '/about/royal-arch' },
          { label: 'CONÉCTATE CON NOSOTROS', href: '/about/cryptic' },
          { label: 'LOCALIZADOR DE ORGANIZACIONES', href: '/about/knights-templar' },
          { label: 'OTRAS ORGANIACIONES MAZONICAS', href: '/about/requirements' }
        ]
      },
      {
        label: 'UBICACIONES',
        items: [
          { label: 'LOCALIZADOR', href: '/locations/chapters' },
          { label: 'CUIDADES', href: '/locations/cities' }
          
        ]
      },
      {
        label: 'EVENTOS',
        items: [
          { label: 'CALENDARIO', href: '/events/calendar' },
          { label: 'CONFERENCIA DE OFICIALES', href: '/events/officers-conference' },
          { label: 'SESIONES DEL RITO DEL GRAN YORK', href: '/events/grand-sessions' },
          { label: 'FORMULARIO DE SOLICITUD DE EVENTO/VISITA', href: '/events/form-event' }
        ]
      },
      {
        label: 'NOTICIAS',
        items: [
          { label: 'NOTICIA', href: '/news/newsContent' },
          { label: 'EL OBRERO', href: '/news/workman' },
          { label: 'ESPADA Y PALETA', href: '/news/swordtrowel' },
          { label: 'CRUZ Y CORONA', href: '/news/crosscrown' }
        ]
      },
      {
        label: 'CONTACTO',
        items: [
          { label: 'CONTACTO', href: '/contact/general' }
          
        ]
      }
    ]
  },
  'chapter': {
    id: 'chapter',
    name: 'Grand Chapter',
    logo: {
      image: 'chapter-logo.png',
      title: 'Grand Chapter',
      subtitle: 'Royal Arch Masons'
    },
    navigation: [
      {
        label: 'CAPÍTULOS',
        items: [
          { label: 'Encontrar un Capítulo', href: '/chapter/find' },
          { label: 'Lista de Capítulos', href: '/chapter/list' },
          { label: 'Nuevos Capítulos', href: '/chapter/new' }
        ]
      },
      {
        label: 'GRADOS',
        items: [
          { label: 'Mark Master Mason', href: '/chapter/degrees/mark-master' },
          { label: 'Past Master', href: '/chapter/degrees/past-master' },
          { label: 'Most Excellent Master', href: '/chapter/degrees/excellent-master' },
          { label: 'Royal Arch Mason', href: '/chapter/degrees/royal-arch' }
        ]
      },
      {
        label: 'OFICIALES',
        items: [
          { label: 'Gran Sumo Sacerdote', href: '/chapter/officers/high-priest' },
          { label: 'Oficiales del Gran Capítulo', href: '/chapter/officers/grand' },
          { label: 'Oficiales de Capítulo', href: '/chapter/officers/chapter' }
        ]
      },
      {
        label: 'EVENTOS',
        items: [
          { label: 'Convocación Anual', href: '/chapter/events/convocation' },
          { label: 'Ceremonias de Grado', href: '/chapter/events/degrees' }
        ]
      },
      {
        label: 'RECURSOS',
        items: [
          { label: 'Rituales', href: '/chapter/resources/rituals' },
          { label: 'Formularios', href: '/chapter/resources/forms' },
          { label: 'Documentos', href: '/chapter/resources/documents' }
        ]
      }
    ]
  },
  'council': {
    id: 'council',
    name: 'Grand Council',
    logo: {
      image: 'council-logo.png',
      title: 'Grand Council',
      subtitle: 'Cryptic Masons'
    },
    navigation: [
      {
        label: 'CONSEJOS',
        items: [
          { label: 'Encontrar un Consejo', href: '/council/find' },
          { label: 'Lista de Consejos', href: '/council/list' },
          { label: 'Nuevos Consejos', href: '/council/new' }
        ]
      },
      {
        label: 'GRADOS CRÍPTICOS',
        items: [
          { label: 'Royal Master', href: '/council/degrees/royal-master' },
          { label: 'Select Master', href: '/council/degrees/select-master' },
          { label: 'Super Excellent Master', href: '/council/degrees/super-excellent' }
        ]
      },
      {
        label: 'OFICIALES',
        items: [
          { label: 'Gran Maestro Ilustre', href: '/council/officers/illustrious-master' },
          { label: 'Oficiales del Gran Consejo', href: '/council/officers/grand' },
          { label: 'Oficiales de Consejo', href: '/council/officers/council' }
        ]
      },
      {
        label: 'EVENTOS',
        items: [
          { label: 'Asamblea Anual', href: '/council/events/assembly' },
          { label: 'Ceremonias de Grado', href: '/council/events/degrees' }
        ]
      },
      {
        label: 'RECURSOS',
        items: [
          { label: 'Rituales Crípticos', href: '/council/resources/rituals' },
          { label: 'Historia Críptica', href: '/council/resources/history' }
        ]
      }
    ]
  },
  'commandery': {
    id: 'commandery',
    name: 'Grand Commandery',
    logo: {
      image: 'commandery-logo.png',
      title: 'Grand Commandery',
      subtitle: 'Knights Templar'
    },
    navigation: [
      {
        label: 'COMANDANCIAS',
        items: [
          { label: 'Encontrar una Comandancia', href: '/commandery/find' },
          { label: 'Lista de Comandancias', href: '/commandery/list' },
          { label: 'Nuevas Comandancias', href: '/commandery/new' }
        ]
      },
      {
        label: 'ÓRDENES',
        items: [
          { label: 'Orden de la Cruz Roja', href: '/commandery/orders/red-cross' },
          { label: 'Orden de Malta', href: '/commandery/orders/malta' },
          { label: 'Orden del Temple', href: '/commandery/orders/temple' }
        ]
      },
      {
        label: 'OFICIALES',
        items: [
          { label: 'Gran Comandante', href: '/commandery/officers/grand-commander' },
          { label: 'Oficiales de la Gran Comandancia', href: '/commandery/officers/grand' },
          { label: 'Oficiales de Comandancia', href: '/commandery/officers/commandery' }
        ]
      },
      {
        label: 'EVENTOS',
        items: [
          { label: 'Conclave Anual', href: '/commandery/events/conclave' },
          { label: 'Ceremonias de Orden', href: '/commandery/events/orders' },
          { label: 'Desfiles Templarios', href: '/commandery/events/parades' }
        ]
      },
      {
        label: 'TRADICIÓN',
        items: [
          { label: 'Historia Templaria', href: '/commandery/tradition/history' },
          { label: 'Símbolos y Regalia', href: '/commandery/tradition/symbols' },
          { label: 'Código Caballeresco', href: '/commandery/tradition/code' }
        ]
      }
    ]
  },
  'history': {
    id: 'history',
    name: 'History',
    logo: {
      image: 'history-logo.png',
      title: 'Masonic History',
      subtitle: 'of California'
    },
    navigation: [
      {
        label: 'GRAN CAPÍTULO',
        href: '/history/chapter'
      },
      {
        label: 'GRAN CONSEJO',
        href: '/history/council'
      },
      {
        label: 'GRAN COMANDANCIA',
        href: '/history/commandery',
        items: [
          { label: 'JOYAS DE CALIFORNIA MALTA', href: '/history/founding' },
          { label: 'MEDALLAS DE LA TRIENAL DE CALIFORNIA', href: '/history/events' },
          
        ]
      }
      
    ]
  },
  'sessions-2025': {
    id: 'sessions-2025',
    name: 'Grand Sessions 2025',
    logo: {
      image: 'sessions-logo.png',
      title: 'Grand Sessions 2025',
      subtitle: 'Annual Convocations'
    },
    navigation: [
      {
        label: 'INFORMACIÓN GENERAL',
        items: [
          { label: 'Fechas y Horarios', href: '/sessions/info/schedule' },
          { label: 'Ubicación y Mapas', href: '/sessions/info/location' },
          { label: 'Alojamiento', href: '/sessions/info/hotels' },
          { label: 'Transporte', href: '/sessions/info/transport' }
        ]
      },
      {
        label: 'REGISTRO',
        items: [
          { label: 'Registro de Delegados', href: '/sessions/registration/delegates' },
          { label: 'Registro de Visitantes', href: '/sessions/registration/visitors' },
          { label: 'Tarifas', href: '/sessions/registration/fees' },
          { label: 'Cancelaciones', href: '/sessions/registration/cancellation' }
        ]
      },
      {
        label: 'PROGRAMA',
        items: [
          { label: 'Agenda Completa', href: '/sessions/program/agenda' },
          { label: 'Sesiones de Trabajo', href: '/sessions/program/business' },
          { label: 'Ceremonias', href: '/sessions/program/ceremonies' },
          { label: 'Eventos Sociales', href: '/sessions/program/social' }
        ]
      },
      {
        label: 'BANQUETES',
        items: [
          { label: 'Banquete del Gran Capítulo', href: '/sessions/banquets/chapter' },
          { label: 'Banquete del Gran Consejo', href: '/sessions/banquets/council' },
          { label: 'Banquete de la Gran Comandancia', href: '/sessions/banquets/commandery' }
        ]
      },
      {
        label: 'RECURSOS',
        items: [
          { label: 'Formularios', href: '/sessions/resources/forms' },
          { label: 'Contactos', href: '/sessions/resources/contacts' },
          { label: 'Preguntas Frecuentes', href: '/sessions/resources/faq' }
        ]
      }
    ]
  }
};