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
  return <h1 className="font-bold text-center text-black text-lg">{title}</h1>;
};

const TextPrincipal = ({ text }: { text: string }) => {
  return <p className="text-appGray text-left text-base">{text}</p>;
};

const TextSecundary = ({ text }: { text: string }) => {
  return <p className="text-appGray text-center text-base">{text}</p>;
};

export {
  TitlePrincipal,
  TitlePrincipalColor,
  TitleSecondary,
  TitleTertiary,
  TextPrincipal,
  TextSecundary,
};
