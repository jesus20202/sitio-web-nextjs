export const locatorContent = {
  title: "UBICACIONES",
  paragraphs: [
    "Encuentra Capítulos, Crípticos y Comandancias de Caballería Templaria en Perú. Utiliza el buscador para filtrar por ciudad, código postal o categoría."
  ],
  locator: {
    filters: {
      cityOrZip: "Ciudad o Código Postal",
      radius: "Radio",
      radiusOptions: ["10 mi", "25 mi", "50 mi", "100 mi"],
      results: "Resultados",
      resultsOptions: ["6", "12", "24", "48"],
      category: "Categoría",
      categoryOptions: ["Cualquiera", "Capítulo", "Consejo", "Comandancia"],
      search: "Buscar"
    },
    exampleResults: [
    {
      name: "Capítulo Lima No. 1",
      address: "Av. Arequipa 1234, Lima, Perú",
      meeting: "Reuniones: Primer viernes de cada mes, 7:00 PM",
      moreInfo: "Más información",
      distance: "2.1 km",
      directions: "Direcciones",
      lat: -12.0464,
      lng: -77.0428
    },
    {
      name: "Consejo Arequipa No. 2",
      address: "Calle Mercaderes 567, Arequipa, Perú",
      meeting: "Reuniones: Segundo jueves de cada mes, 7:30 PM",
      moreInfo: "Más información",
      distance: "1000 km",
      directions: "Direcciones",
      lat: -16.4090,
      lng: -71.5375
    }
  ]
  },
  map: {
    image: "/mapa.png",
    alt: "Mapa de ubicaciones Rito York de Perú",
    center: [-9.19, -75.0152], // Centro de Perú
    zoom: 5
  }
};