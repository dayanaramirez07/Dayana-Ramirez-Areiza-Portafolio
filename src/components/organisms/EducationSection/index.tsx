import { TextSecundary, TitleSecondary } from "@/components/atoms/Text";
import { EducationCard } from "@/components/molecules/Card";
import { education } from "@/utils/const";
import React from "react";

const Education = () => {
  return (
    <div className="w-[70%]">
      <div className="flex flex-col items-center mx-auto">
        <TitleSecondary title="Educación"></TitleSecondary>
        <div className="w-96 pt-4 pb-10">
          <TextSecundary text="Mi formación académica refleja un enfoque sólido en el área de la tecnología y el desarrollo de software, con un énfasis en la Ingeniería de Sistemas y una base técnica en informática. A lo largo de mi trayectoria, he adquirido habilidades esenciales que complementan mi crecimiento profesional como Desarrolladora Front-end." />
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
