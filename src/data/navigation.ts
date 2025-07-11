export const mainNavigation = [
  { id: 'york-rite', label: 'GRAN RITO DE YORK', href: '/', active: true },
  { id: 'chapter', label: 'GRAN CAPÍTULO', href: '/grand-chapter' },
  { id: 'council', label: 'GRAN CONSEJO', href: '/grand-council' },
  { id: 'commandery', label: 'GRAN COMANDANCIA', href: '/grand-commandery' },
  { id: 'history', label: 'HISTORIA', href: '/history' },
  { id: 'sessions', label: 'GRANDES SESIONES 2025', href: '/grand-sessions-2025' }
];

export const secondaryNavigation = [
  {
    label: '¿QUÉ ES YORK RITE?',
    items: [
      { label: 'Descripción General', href: '/about/overview' },
      { label: 'Masones del Real Arco', href: '/about/royal-arch' },
      { label: 'Masones Crípticos', href: '/about/cryptic' },
      { label: 'Caballeros Templarios', href: '/about/knights-templar' },
      { label: 'Requisitos de Membresía', href: '/about/requirements' }
    ]
  },
  {
    label: 'UBICACIONES',
    items: [
      { label: 'Encontrar un Capítulo', href: '/locations/chapters' },
      { label: 'Encontrar un Consejo', href: '/locations/councils' },
      { label: 'Encontrar una Comandancia', href: '/locations/commanderies' },
      { label: 'Horario de Reuniones', href: '/locations/schedule' }
    ]
  },
  {
    label: 'EVENTOS',
    items: [
      { label: 'Calendario de Eventos', href: '/events/calendar' },
      { label: 'Próximos Eventos', href: '/events/upcoming' },
      { label: 'Grandes Sesiones 2025', href: '/events/grand-sessions' },
      { label: 'Eventos Especiales', href: '/events/special' },
      { label: 'Conferencias', href: '/events/conferences' }
    ]
  },
  {
    label: 'NOTICIAS',
    items: [
      { label: 'Últimas Noticias', href: '/news/latest' },
      { label: 'Boletines', href: '/news/bulletins' },
      { label: 'Anuncios', href: '/news/announcements' },
      { label: 'Archivo de Noticias', href: '/news/archive' }
    ]
  },
  {
    label: 'CONTACTO',
    items: [
      { label: 'Información General', href: '/contact/general' },
      { label: 'Oficiales del Gran York Rite', href: '/contact/officers' },
      { label: 'Secretarios de Capítulo', href: '/contact/chapter-secretaries' },
      { label: 'Secretarios de Consejo', href: '/contact/council-secretaries' },
      { label: 'Comandantes', href: '/contact/commanders' },
      { label: 'Formulario de Contacto', href: '/contact/form' }
    ]
  }
];