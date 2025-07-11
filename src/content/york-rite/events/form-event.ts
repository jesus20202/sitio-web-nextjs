export const formEventFormContent = {
  title: "FORMULARIO DE SOLICITUD DE EVENTO/VISITA",
  paragraphs: [
    "Por favor, ingresa la información de tu evento a continuación. Tu solicitud será revisada antes de ser publicada en el calendario. Un representante del Gran Consejo se pondrá en contacto para más detalles a medida que se acerque la fecha del evento."
  ],
  form: {
    fields: [
      { label: "Nombre de contacto", type: "text", name: "contactName" },
      { label: "Correo electrónico de contacto", type: "email", name: "contactEmail" },
      { label: "Teléfono de contacto", type: "text", name: "contactPhone" },
      { label: "Título del evento", type: "text", name: "eventTitle" },
      { label: "Fecha del evento", type: "date", name: "eventDate" },
      { label: "Nombre del lugar", type: "text", name: "locationName" },
      { label: "Dirección del lugar", type: "text", name: "locationAddress" }
    ],
    eventType: {
      label: "Tipo de evento",
      options: [
        "Ceremonia",
        "Reunión",
        "Banquete",
        "Visita oficial",
        "Otro"
      ]
    },
    hostedBy: { label: "Organizador", name: "hostedBy" },
    department: { label: "Departamento o Distrito", name: "department" },
    invited: {
      label: "Invitados",
      options: [
        "Oficiales del Gran Consejo",
        "Masones",
        "Público",
        "Cónyuges y familiares",
        "Otra institución o registro"
      ]
    },
    attire: {
      label: "Vestimenta",
      options: [
        "Formal / Etiqueta",
        "Negocios",
        "Casual de negocios",
        "Diurna (Colores claros)",
        "Casual",
        "Temática",
        "Otra"
      ]
    },
    mealCost: { label: "Costo de comida", name: "mealCost" },
    itinerary: { label: "Detalles del itinerario", name: "itinerary" },
    notes: { label: "Notas para el revisor", name: "notes" },
    submit: "Enviar"
  },
  recaptcha: {
    text: "Este formulario usa reCAPTCHA para reducir el spam.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio"
  }
};