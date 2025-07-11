// src/content/contact/general.ts
export const contactGeneralContent = {
  title: "CONTACTO",
  description: "Si tienes preguntas sobre nuestra organización, membresía o historia de algún miembro de familia, por favor escribe a uno de nuestros Secretarios Generales listados abajo o completa el formulario de contacto.",
  contacts: [
    {
      title: "Gran Capítulo Masones del Real Arco de California",
      name: "Richard W. Bullard",
      role: "Gran Secretario",
      address: "8015 La Mesa Blvd, Suite 1, La Mesa, CA 91942-0630"
    },
    {
      title: "Gran Consejo Masones Crípticos de California",
      name: "Philip Hardiman",
      role: "Gran Registrador",
      address: "1123 J St, Sacramento, CA 95814-2809"
    },
    {
      title: "Gran Comandancia Caballeros Templarios de California",
      name: "Howard W. 'Bud' Ramsey Jr.",
      role: "Gran Registrador",
      address: "2460 N. Murrieta Blvd, Livermore, CA 94551-8855"
    }
  ],
  form: {
    fields: [
      { label: "Nombre", name: "name", type: "text" },
      { label: "Correo electrónico", name: "email", type: "email" },
      { label: "Teléfono", name: "phone", type: "text" },
      { label: "Asunto", name: "subject", type: "text" }
    ],
    message: { label: "Tu mensaje (opcional)", name: "message" },
    submit: "Enviar"
  },
  recaptcha: {
    text: "Este sitio está protegido por reCAPTCHA y por la",
    privacy: "Política de Privacidad",
    terms: "Términos del Servicio"
  }
};
