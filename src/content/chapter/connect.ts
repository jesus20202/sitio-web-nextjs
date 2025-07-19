export const chapterConnectContent = {
  title: "Conéctate con un capítulo",
  description:
    "Ya sea que seas completamente nuevo en la masonería, un Maestro Masón en busca de un nuevo viaje o un Hermano/Compañero/Señor Caballero de visita, te tenemos cubierto. Por favor, rellene el siguiente formulario y uno de nuestros Oficiales o Miembros se pondrá en contacto con usted en breve.",
  form: {
    fields: [
      { label: "Nombre", name: "name", type: "text" },
      { label: "Correo electrónico", name: "email", type: "email" },
      { label: "Teléfono", name: "phone", type: "text" },
      { label: "Ciudad", name: "city", type: "text" }
    ],
    subject: {
      label: "Asunto",
      options: ["Membresía", "Visitación", "Otro"]
    },
    message: { label: "Tu mensaje (opcional)", name: "message" },
    submit: "Enviar"
  }
};