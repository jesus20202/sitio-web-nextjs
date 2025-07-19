
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
      title: 'Rito York Perú',
      
    },
    navigation: [
      {
        label: '¿QUE ES EL RITO DE YORK?',
        items: [
          { label: '¿QUE ES EL RITO DE YORK?', href: '/about/overview' },
          //{ label: 'HISTORIA', href: '/about/royal-arch' },
          { label: 'CONÉCTATE CON NOSOTROS', href: '/about/cryptic' },
          //{ label: 'LOCALIZADOR DE ORGANIZACIONES', href: '/about/knights-templar' },
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
      image: '/images/logos/logo1.png',
      title: 'Real Arco'
    },
    navigation: [
      {
        label: '¿QUE ES EL REAL ARCO?',
        items: [
          { label: '¿QUE ES EL REAL ARCO?', href: '/chapter/royal-arch' },
          { label: 'CONÉCTATE CON UN CAPÍTULO', href: '/chapter/connect' },
          //{ label: 'LOCALIZADOR DE CAPÍTULOS', href: '/chapter/locator' },
          {label: 'EDUCACIÓN DEL REAL ARCO',href:'/chapter/education'}
        ]
      },
      {
        label: 'LIDERAZGO',
        items: [
          { label: 'BIOGRAFIA DEL GRAN SUMO SACERDOTE', href: '/chapter/biografia' },
          { label: 'GRANDES OFICIALES', href: '/chapter/degrees/oficiales' },
          { label: 'OFICIALES DEL DEPARTAMENTO', href: '/chapter/degrees/departamento' },
          { label: 'COMITÉS', href: '/chapter/degrees/comites' },
          {label:'CARIDAD',href:'/chapter/degress/caridad'}
        ]
      },
      {
        label: 'UBICACIONES',
        href: '/chapter/locator',
        
      },
      {
        label: 'EVENTOS',
        items: [
          { label: 'EVENTOS', href: '/chapter/events/convocation' },
          { label: 'SOLICCITUD DE EVENTOS', href: '/chapter/events/degrees' }
        ]
      },
      {
        label: 'NOTICIA'
      },
      {
        label:'CONTACTO'

      }
    ]
  },
  'council': {
    id: 'council',
    name: 'Grand Council',
    logo: {
      image: '/images/logos/logo2.png',
      title: 'Masones Crípticos'
    },
    navigation: [
      {
        label: '¿POR QUÉ CRYPTIC?',
        items: [
          { label: '¿POR QUÉ CRYPTIC?', href: '/council/criptic' },
          { label: 'CONÉCTESE CON UN CONSEJO', href: '/council/list' },
          //{ label: 'LOCALIZADOR DE CONSEJOS', href: '/council/new' },
          { label: 'EDUCACIÓN CRÍPTICA', href: '/council/new' }
        ]
      },
      {
        label: 'LIDERAZGO',
        items: [
          { label: 'BIOGRAFÍA DEL GRAN MAESTRO', href: '/council/degrees/royal-master' },
          { label: 'GRANDES OFICIALES', href: '/council/degrees/select-master' },
          { label: 'OFICIALES DEL DEPARTAMENTO', href: '/council/degrees/super-excellent' },
          { label: 'COMITÉS', href: '/council/degrees/super-excellent' },
          { label: 'CARIDAD', href: '/council/degrees/super-excellent' },
          { label: 'EX GRANDES OFICIALES', href: '/council/degrees/super-excellent' }
        ]
      },
      {
        label: 'UBICACIÓNES'
      },
      {
        label: 'EVENTOS',
        items: [
          { label: 'EVENTOS', href: '/council/events/assembly' },
          { label: 'FORMULARIO DE SOLICITUD DE EVENTO', href: '/council/events/degrees' }
        ]
      },
      {
        label: 'NOTICIA',
        items: [
          { label: 'ARCHIVO DE SWORD&TROWEL', href: '/council/resources/rituals' }
        ]
      }
    ]
  },
  'commandery': {
    id: 'commandery',
    name: 'Grand Commandery',
    logo: {
      image: '/images/logos/logo3.png',
      title: 'Caballeros Templarios'
    },
    navigation: [
      {
        label: '¿QUE ES CABALLLEROS TEMPLARIOS?',
        items: [
          { label: '¿QUE ES CABALLLEROS TEMPLARIOS?', href: '/commandery/find' },
          { label: 'CONECTATE CON UNA COMANDANCIA', href: '/commandery/list' },
          //{ label: 'LOCALIZADOR DE COMANDANCIAS', href: '/commandery/new' }
        ]
      },
      {
        label: 'LIDERAZGO',
        items: [
          { label: 'BIOGRAFÍA DEL GRAN COMANDADOR', href: '/commandery/orders/red-cross' },
          { label: 'GRANDES OFICIALES', href: '/commandery/orders/malta' },
          { label: 'OFICIALES DE DEPARTAMENTO', href: '/commandery/orders/temple' },
          { label: 'CÓMITES', href: '/commandery/orders/temple' },
          { label: 'CARIDAD', href: '/commandery/orders/temple' },
          { label: 'EX GRANDES OFICIALES', href: '/commandery/orders/temple' },
        ]
      },
      {
        label: 'UBICACIONES',
        
      },
      {
        label: 'EVENTOS',
        items: [
          { label: 'EVENTOS', href: '/commandery/events/conclave' },
          { label: 'FORMULARIO DE SOLICITUD DEL EVENTO', href: '/commandery/events/orders' }
        ]
      },
      {
        label: 'NOTICIA',
        items: [
          { label: 'REVISTA DE CABALLEROS TEMPLARIOS', href: '/commandery/tradition/history' }
        ]
      }
    ]
  },
  'history': {
    id: 'history',
    name: 'History',
    logo: {
      image: '/images/logos/logo4.png',
      title: 'Historia de Rito York Perú',
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