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

export { KnowledgeCard, EducationCard };
