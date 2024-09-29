import React from "react";
import { Icon } from "@iconify/react";

const Button = () => {
  return (
    <button className="color-primary py-5 px-8 w-64 text-white font-bold text-lg rounded-md shadow-xl hover:opacity-70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
      ¡CONTÁCTAME!
      <Icon icon="majesticons:arrow-right" className="ms-2" />
    </button>
  );
};

export default Button;
