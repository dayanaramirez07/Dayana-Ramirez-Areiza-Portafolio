// ----------------------------------------------------------------------------------
// Este archivo define dos secciones para mostrar habilidades mediante barras de progreso.
//
// - Language: Muestra el nivel de conocimiento en diferentes idiomas (Español, Inglés, Francés)
//   utilizando el componente ProgressBar.
//
// - Programming: Muestra las habilidades en lenguajes de programación y herramientas
//   (como Angular, React, HTML, etc.), también utilizando el componente ProgressBar para
//   reflejar el nivel de dominio de cada una.
// ----------------------------------------------------------------------------------

import ProgressBar from "@/components/atoms/ProgressBar";
import { TitleTertiary } from "@/components/atoms/Text";
import React from "react";

const Language = () => {
  return (
    <div className="flex flex-col px-5 gap-4">
      <TitleTertiary title="Idiomas" />
      <div className="flex flex-col gap-1">
        <ProgressBar text="Español" progress="100" />
        <ProgressBar text="Inglés" progress="60" />
        <ProgressBar text="Francés" progress="20" />
      </div>
    </div>
  );
};

const Programming = () => {
  return (
    <div className="flex flex-col px-5 gap-4">
      <TitleTertiary title="Lenguajes de Programación y Herramientas" />
      <div className="flex flex-col gap-1">
        <ProgressBar text="Angular" progress="90" />
        <ProgressBar text="React" progress="50" />
        <ProgressBar text="Next" progress="50" />
        <ProgressBar text="TypeScript" progress="80" />
        <ProgressBar text="HTML" progress="90" />
        <ProgressBar text="CSS" progress="90" />
        <ProgressBar text="Bootstrap" progress="90" />
        <ProgressBar text="Bulma" progress="70" />
        <ProgressBar text="Tailwind" progress="70" />
        <ProgressBar text="Postman" progress="80" />
        <ProgressBar text="Git" progress="70" />
        <ProgressBar text="GitHub" progress="70" />
        <ProgressBar text="BitBucket" progress="80" />
      </div>
    </div>
  );
};

export { Language, Programming };
