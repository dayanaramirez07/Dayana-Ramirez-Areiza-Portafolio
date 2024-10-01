import { TextPrincipal } from "@/components/atoms/Text";
import { Language, Programming } from "@/components/molecules/Ability";
import Profile from "@/components/molecules/Profile";
import React from "react";

const SideBar = () => {
  return (
    <div className="bg-white pb-5">
      <div className="sticky top-0 bg-white">
        <Profile />
      </div>
      <hr className="m-5 mt-0" />
      <div className="mx-5">
        <div className="flex w-full justify-between">
          <div className="flex items-start">
            <TextPrincipal text="Correo:" />
          </div>
          <div className="flex items-end">
            <TextPrincipal text="dayanaramirezareiza@gmail.com" />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex items-start">
            <TextPrincipal text="Ciudad:" />
          </div>
          <div className="flex items-end">
            <TextPrincipal text="Medellín, Colombia" />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex items-start">
            <TextPrincipal text="Edad:" />
          </div>
          <div className="flex items-end">
            <TextPrincipal text="23 años" />
          </div>
        </div>
      </div>
      <hr className="m-5" />
      <Language />
      <hr className="m-5" />
      <Programming />
    </div>
  );
};

export default SideBar;
