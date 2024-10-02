// ----------------------------------------------------------------------------------
// El componente Education muestra una sección de educación organizada con tarjetas de información:
//
// - La sección incluye un título junto con un ícono, utilizando el componente TitleSecondary para el título
//   y el ícono de "@iconify/react".
// - Muestra una lista de elementos, donde cada uno es una tarjeta educativa (EducationCard)
//   que contiene información sobre títulos, instituciones, descripciones y fechas.
// - El componente Education utiliza un mapeo sobre la constante 'education', recorriendo cada
//   entrada para generar una EducationCard. Además, se inserta un separador <hr> entre cada
//   tarjeta, excepto la última.
// ----------------------------------------------------------------------------------

import { TitleSecondary } from "@/components/atoms/Text";
import { EducationCard } from "@/components/molecules/Card";
import { education } from "@/utils/const";
import { Icon } from "@iconify/react";
import React from "react";

const Education = () => {
  return (
    <div>
      <div className="flex flex-col items-center mx-auto">
        <div className="flex items-center pb-10 space-x-2">
          <TitleSecondary title="Educación"></TitleSecondary>
          <Icon icon="heroicons-outline:academic-cap" className="text-primary h-10 w-10" />
        </div>
        <div className="flex items-center justify-center bg-white w-full px-10 py-8">
          <ul className="w-full">
            {education.map((el, index) => (
              <li key={el.title1}>
                <EducationCard
                  title1={el.title1}
                  title2={el.title2}
                  text1={el.text1}
                  text2={el.text2}
                  date={el.date}
                />
                {index !== education.length - 1 && <hr className="my-5" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
