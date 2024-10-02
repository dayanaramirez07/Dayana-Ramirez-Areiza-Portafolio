// ----------------------------------------------------------------------------------
// Archivo que contiene la configuración de los datos estáticos para las secciones de conocimiento,
// educación, experiencia y proyectos del portafolio.
// Estos datos se utilizan para renderizar las tarjetas correspondientes en cada sección del sitio web.
// ----------------------------------------------------------------------------------

const knowledge = [
  {
    icon: "ph:devices-duotone",
    title: "Desarrollo Web",
    text: "Experiencia en sistemas ERP, desarrollo de Landing Pages, Portafolios personalizados y Dashboards interactivos.",
  },
  {
    icon: "icon-park-twotone:web-page",
    title: "Diseño UX/UI",
    text: "Diseño intuitivo y centrado en el usuario para sitios web, optimizando la experiencia de interacción.",
  },
  {
    icon: "iconoir:design-nib",
    title: "Diseño Gráfico",
    text: "Creación de identidades visuales: Logos, Banners, Flyers, Ilustraciones y Fondos personalizados.",
  },
];

const education = [
  {
    title1: "Universidad de Antioquia",
    title2: "Ingeniería de Sistemas",
    text1: "Estudiante",
    text2:
      "En mi trayectoria como estudiante de Ingeniería de Sistemas, he adquirido sólidos conocimientos en diversos aspectos del campo. Me he especializado en el desarrollo Front-end, así como en la implementación de algoritmos para el procesamiento de grandes volúmenes de datos (Big Data). He trabajado con lenguajes de programación como Java, Python, y tecnologías web como HTML, CSS y JavaScript. También tengo experiencia con frameworks y herramientas como React, Next.js, Spring Boot y bases de datos. Además, he podido explorar temas de seguridad informática en áreas como la protección de datos y la identificación de vulnerabilidades en aplicaciones web. He aplicado mis conocimientos en proyectos educativos y profesionales, donde he puesto en práctica mis habilidades de desarrollo y resolución de problemas.",
    date: "Noviembre 2019 - Actualidad",
  },
  {
    title1: "Institución Educativa de María",
    title2: "Bachiller Técnico en Informática",
    text1: "Egresada",
    text2:
      "El plan de estudios se basó en una concepción integradora y cultural, que me proporcionó una amplia gama de conocimientos y habilidades necesarias en el mundo de la tecnología. A lo largo de mi formación, me enfoqué en diversas áreas de especialidad, incluyendo el diseño de páginas web y el desarrollo de sistemas de información. Aprendí a utilizar el computador y el internet como herramientas fundamentales en la gestión automatizada de la información.",
    date: "Enero 2017 - Noviembre 2018",
  },
];

const experience = [
  {
    title1: "SIP Software S.A.S",
    title2: "Desarrolladora Front-end Junior",
    text: "Durante mi experiencia como Desarrolladora Frontend, me he destacado por mi compromiso con la creación de experiencias web excepcionales y altamente funcionales. He trabajado en 4 proyectos en el último año, enfocándome en la innovación, la estética visual y la usabilidad para garantizar la entrega de productos que no solo cumplan con los estándares técnicos, sino que también satisfagan las necesidades y expectativas de los usuarios.",
    date: "Julio 2023 - Actualidad",
  },
];

const projects = [
  {
    title: "ERP",
    imageUrl: "/image/ERP.png",
    details: "Sistema de gestión contable para clientes.",
  },
  {
    title: "Decora y Transforma",
    imageUrl: "/image/Decora.png",
    details: "Página web solicitada por un tercero para integrarla con el dashboard.",
  },
  {
    title: "Zolutti",
    imageUrl: "/image/Zolutti.png",
    details: "Dashboard para gestionar afiliaciones.",
  },
  {
    title: "Paz y Salvo Digital",
    imageUrl: "/image/PazSalvo.png",
    details: "Sistema para gestionar paz y salvo en la Arquidiócesis de Medellín.",
  },
];

export { knowledge, education, experience, projects };
