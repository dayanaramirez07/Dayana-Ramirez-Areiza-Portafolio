import Button from "@/components/atoms/Button";
import { TextPrincipal, TitlePrincipal, TitlePrincipalColor } from "@/components/atoms/Text";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center h-[470px] space-x-4 bg-white px-12">
      <div className="flex flex-col gap-8 w-3/4">
        <div className="flex flex-col gap-2">
          <TitlePrincipal title="Soy Dayana Ramírez" />
          <div className="flex space-x-4">
            <TitlePrincipal title="Desarrolladora" />
            <TitlePrincipalColor title="Front-end" />
          </div>
        </div>
        <div className="w-5/6">
          <TextPrincipal text="Soy una Desarrolladora Front-end Junior con experiencia en la construcción de aplicaciones web utilizando tecnologías modernas como Angular, React, Next, TypeScript, Bootstrap, Bulma y Tailwind." />
        </div>
        <Button />
      </div>
      <div className="w-1/4">
        <Image
          src="/image/CVPhoto.png"
          alt="Dayana Ramírez Areiza"
          width={250}
          height={450}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
