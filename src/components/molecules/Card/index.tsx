import React from "react";
import { Icon } from "@iconify/react";
import { TextSecundary, TitleTertiary } from "@/components/atoms/Text";

const Card = ({ icon, title, text }: { icon: string; title: string; text: string }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white h-full p-8">
      <Icon className="text-primary w-16 h-16" icon={icon} />
      <TitleTertiary title={title} />
      <TextSecundary text={text} />
    </div>
  );
};

export default Card;
