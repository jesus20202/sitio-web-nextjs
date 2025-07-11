export const connectContent = {
  title: "CONECTA CON NOSOTROS",
  paragraphs: [
    "Ya sea que seas completamente nuevo en la masonería, un Maestro Masón buscando un nuevo camino, o un Hermano/Compañero/Caballero visitante, estamos para ayudarte. Por favor, completa el siguiente formulario y uno de nuestros Oficiales o Miembros se pondrá en contacto contigo pronto."
  ],
  form: {
    fields: [
      { label: "Nombre", type: "text", name: "name" },
      { label: "Correo electrónico", type: "email", name: "email" },
      { label: "Teléfono", type: "text", name: "phone" },
      { label: "Ciudad", type: "text", name: "city" }
    ],
    areasOfInterest: {
      label: "Área de interés",
      options: [
        "Masonería",
        "Real Arco",
        "Consejo Críptico",
        "Caballeros Templarios",
        "Otro"
      ]
    },
    subject: {
      label: "Asunto",
      options: [
        "Membresía",
        "Visita",
        "Otro"
      ]
    },
    message: {
      label: "Tu mensaje (opcional)",
      name: "message"
    },
    submit: "Enviar"
  },
  recaptcha: {
    text: "Este sitio está protegido por reCAPTCHA y la Política de Privacidad y los Términos de Servicio de Google aplican.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio"
  }
};