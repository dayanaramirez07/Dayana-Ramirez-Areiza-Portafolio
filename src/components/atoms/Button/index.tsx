import React, { useState } from "react";
import { Icon } from "@iconify/react";
import CustomIcon from "@/components/atoms/Icon";
import { TextSecundary, TitleTertiaryCenter } from "../Text";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="color-primary py-5 px-8 w-64 text-white font-bold text-lg rounded-md shadow-xl hover:opacity-70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
        onClick={toggleDialog}
      >
        ¡CONTÁCTAME!
        <Icon icon="majesticons:arrow-right" className="ms-2" />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="flex flex-col bg-white p-8 rounded-md shadow-lg max-w-md w-full gap-4">
            <TitleTertiaryCenter title="¡Gracias por visitarme!" />
            <TextSecundary text="Si tienes alguna duda o quieres contactarme, puedes enviarme un mensaje o encontrarme en mis redes sociales. ¡Estaré encantada de ayudarte!" />
            <div className="flex space-x-1 justify-center">
              <CustomIcon icon="mdi:gmail" href="mailto:dayanaramirezareiza@gmail.com" />
              <CustomIcon
                icon="akar-icons:linkedin-fill"
                href="https://www.linkedin.com/in/dayana-ram%C3%ADrez-areiza-4525b7317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              />
            </div>
            <button
              onClick={toggleDialog}
              className="py-2 px-4 bg-primary text-white rounded-md"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
