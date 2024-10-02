// ----------------------------------------------------------------------------------
// Este archivo define varios componentes de texto y títulos estilizados utilizando clases
// de Tailwind. Los títulos varían en tamaño, alineación y color, mientras que los textos
// tienen diferentes estilos y alineaciones para adaptarse a diversas secciones de la UI.
//
// - TitlePrincipal: Título principal, grande y en negro.
// - TitlePrincipalColor: Igual que TitlePrincipal, pero con un color personalizado.
// - TitleSecondary: Título secundario centrado y de tamaño mediano.
// - TitleTertiary: Título terciario más pequeño alineado a la izquierda.
// - TitleTertiaryCenter: Título terciario centrado.
// - TextPrincipal: Texto de tamaño base alineado a la izquierda.
// - TextSecundary: Texto de tamaño base centrado.
// - TextTertiary: Texto pequeño alineado a la izquierda y en blanco.
// ----------------------------------------------------------------------------------

import React from "react";

const TitlePrincipal = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-5xl text-left text-black">{title}</h1>;
};

const TitlePrincipalColor = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-5xl text-left text-primary">{title}</h1>;
};

const TitleSecondary = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-2xl text-center text-black">{title}</h1>;
};

const TitleTertiary = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-left text-black text-lg">{title}</h1>;
};

const TitleTertiaryCenter = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-center text-black text-lg">{title}</h1>;
};

const TextPrincipal = ({ text }: { text: string }) => {
  return <p className="text-appGray text-left text-base">{text}</p>;
};

const TextSecundary = ({ text }: { text: string }) => {
  return <p className="text-appGray text-center text-base">{text}</p>;
};

const TextTertiary = ({ text }: { text: string }) => {
  return <h1 className="text-left text-white text-sm">{text}</h1>;
};

export {
  TitlePrincipal,
  TitlePrincipalColor,
  TitleSecondary,
  TitleTertiary,
  TitleTertiaryCenter,
  TextPrincipal,
  TextSecundary,
  TextTertiary,
};
