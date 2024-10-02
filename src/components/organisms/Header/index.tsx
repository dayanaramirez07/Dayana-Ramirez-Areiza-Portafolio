// ----------------------------------------------------------------------------------
// El componente Header presenta una sección introductoria:
//
// - Contiene un título principal utilizando el componente TitlePrincipal.
// - Después, se muestra una segunda línea con tres títulos, para establecer el segundo
//   con un color distinto.
// - Un párrafo resume la experiencia, utilizando el componente TextPrincipal y
//   mencionando varias tecnologías.
// - Finalmente, el componente Button se incluye para agregar un botón interactivo.
// ----------------------------------------------------------------------------------

import Button from "@/components/atoms/Button";
import { TextPrincipal, TitlePrincipal, TitlePrincipalColor } from "@/components/atoms/Text";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center h-[470px] space-x-4 bg-white px-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <TitlePrincipal title="Soy Dayana Ramírez Areiza" />
          <div className="flex space-x-4">
            <TitlePrincipal title="Desarrolladora" />
            <TitlePrincipalColor title="Front-end" />
            <TitlePrincipal title="Junior" />
          </div>
        </div>
        <div className="w-5/6">
          <TextPrincipal text="Tengo experiencia en la construcción de aplicaciones web utilizando tecnologías modernas como Angular, React, Next Js, TypeScript, Bootstrap, Bulma y Tailwind." />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Header;
