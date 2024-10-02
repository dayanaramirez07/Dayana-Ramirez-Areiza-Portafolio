// ----------------------------------------------------------------------------------
// Componente Knowledge:
//
// - Contiene un título con un ícono.
// - Se genera una lista horizontal de tarjetas (KnowledgeCard) usando el array knowledge del archivo de utilidades.
// - Cada tarjeta presenta un ícono, un título y una descripción relacionada con un área de conocimiento.
// ----------------------------------------------------------------------------------

import { TitleSecondary } from "@/components/atoms/Text";
import { KnowledgeCard } from "@/components/molecules/Card";
import { knowledge } from "@/utils/const";
import { Icon } from "@iconify/react";
import React from "react";

const Knowledge = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center mx-auto">
        <div className="flex items-center pb-10 space-x-1">
          <TitleSecondary title="Mi conocimiento"></TitleSecondary>
          <Icon icon="lets-icons:lamp" className="text-primary h-10 w-10" />
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex flex-row space-x-2">
            {knowledge.map((el) => (
              <li key={el.title} className="h-80 w-1/3">
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
