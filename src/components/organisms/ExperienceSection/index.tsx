import { TextSecundary, TitleSecondary } from "@/components/atoms/Text";
import { ExperienceCard } from "@/components/molecules/Card";
import { experience } from "@/utils/const";
import React from "react";

const Experience = () => {
  return (
    <div className="py-10 w-[70%]">
      <div className="flex flex-col items-center mx-auto">
        <TitleSecondary title="Experiencia laboral"></TitleSecondary>
        <div className="w-96 pt-4 pb-10">
          <TextSecundary text="He tenido la oportunidad de trabajar en proyectos desafiantes que me han permitido desarrollar y aplicar mis habilidades en Front-end. Mi experiencia incluye la colaboración en equipos multidisciplinarios, desarrollo de aplicaciones web funcionales y manejo de tecnologías modernas, siempre con un enfoque en la mejora continua y la calidad del producto." />
        </div>

        <div className="flex items-center justify-center bg-white w-full px-10 py-8">
          <ul className="w-full">
            {experience.map((el, index) => (
              <li key={el.title1}>
                <ExperienceCard
                  title1={el.title1}
                  title2={el.title2}
                  text={el.text}
                  date={el.date}
                />
                {index !== experience.length - 1 && <hr className="my-5" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
