import { TextSecundary, TitleSecondary } from "@/components/atoms/Text";
import { KnowledgeCard } from "@/components/molecules/Card";
import { knowledge } from "@/utils/const";
import React from "react";

const Knowledge = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center mx-auto">
        <TitleSecondary title="Mi conocimiento"></TitleSecondary>
        <div className="w-96 pt-4 pb-10">
          <TextSecundary text="Soy una apasionada del desarrollo creativo y tecnológico, con un enfoque en la creación de soluciones innovadoras. Me motiva la combinación de diseño y tecnología para construir experiencias impactantes y funcionales, siempre buscando mejorar y aprender en cada proyecto." />
        </div>

        <div className="flex items-center justify-center">
          <ul className="flex flex-row">
            {knowledge.map((el) => (
              <li key={el.title} className="h-80 w-1/3 mx-2">
                <KnowledgeCard icon={el.icon} title={el.title} text={el.text} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
