// ----------------------------------------------------------------------------------
// Este archivo define tres componentes de tarjetas: KnowledgeCard, EducationCard y ExperienceCard.
//
// - KnowledgeCard: Muestra una tarjeta con un ícono, un título centrado y un texto descriptivo.
//   Se utiliza para representar conocimientos o habilidades.
//
// - EducationCard: Muestra información educativa en dos columnas. La primera columna incluye
//   un título, texto y la fecha correspondiente. La segunda columna contiene un título adicional
//   y un texto descriptivo sobre la formación o estudios.
//
// - ExperienceCard: Similar a EducationCard, pero diseñado para mostrar la experiencia laboral.
//   Incluye un título, fecha, y detalles sobre la experiencia en dos columnas.
// ----------------------------------------------------------------------------------

import React from "react";
import { Icon } from "@iconify/react";
import {
  TextPrincipal,
  TextSecundary,
  TextTertiary,
  TitleTertiary,
  TitleTertiaryCenter,
} from "@/components/atoms/Text";

const KnowledgeCard = ({ icon, title, text }: { icon: string; title: string; text: string }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white h-full p-8">
      <Icon className="text-primary w-16 h-16" icon={icon} />
      <TitleTertiaryCenter title={title} />
      <TextSecundary text={text} />
    </div>
  );
};

const EducationCard = ({
  title1,
  title2,
  text1,
  text2,
  date,
}: {
  title1: string;
  title2: string;
  text1: string;
  text2: string;
  date: string;
}) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-5 w-2/5">
        <TitleTertiary title={title1} />
        <div className="flex flex-row space-x-4 items-center">
          <TextPrincipal text={text1} />
          <div className="color-primary py-1 px-3">
            <TextTertiary text={date} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-3/5">
        <TitleTertiary title={title2} />
        <TextPrincipal text={text2} />
      </div>
    </div>
  );
};

const ExperienceCard = ({
  title1,
  title2,
  text,
  date,
}: {
  title1: string;
  title2: string;
  text: string;
  date: string;
}) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-5 w-2/5">
        <TitleTertiary title={title1} />
        <div className="color-primary py-1 px-3 max-w-max">
          <TextTertiary text={date} />
        </div>
      </div>
      <div className="flex flex-col gap-5 w-3/5">
        <TitleTertiary title={title2} />
        <TextPrincipal text={text} />
      </div>
    </div>
  );
};

export { KnowledgeCard, EducationCard, ExperienceCard };
