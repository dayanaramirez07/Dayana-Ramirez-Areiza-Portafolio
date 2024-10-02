// ----------------------------------------------------------------------------------
// Archivo de configuración de Tailwind CSS para personalizar los estilos de la aplicación.
// Define los paths para la búsqueda de clases de Tailwind y extiende el tema con colores personalizados.
// ----------------------------------------------------------------------------------

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c03c37",
        appGray: "#9596A5",
      },
    },
  },
  plugins: [],
};
export default config;
