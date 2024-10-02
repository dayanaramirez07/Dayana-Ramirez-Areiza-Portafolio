// ----------------------------------------------------------------------------------
// Este componente es un ícono personalizado que recibe un ícono y un enlace (href).
// Al hacer clic en el ícono, redirige al usuario a la URL especificada en una nueva
// pestaña. El ícono está dentro de un contenedor circular estilizado con clases de Tailwind.
// ----------------------------------------------------------------------------------

import React from "react";
import { Icon } from "@iconify/react";

const Index = ({ icon, href }: { icon: string; href: string }) => {
  return (
    <div className="h-8 w-8 rounded-full color-primary flex justify-center items-center shadow-2xl">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="h-4 w-4 text-white" icon={icon} />
      </a>
    </div>
  );
};

export default Index;
