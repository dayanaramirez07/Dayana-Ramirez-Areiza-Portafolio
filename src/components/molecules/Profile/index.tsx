import { TextPrincipal, TitleTertiary } from "@/components/atoms/Text";
import Image from "next/image";
import React from "react";
import Icon from "@/components/atoms/Icon";

const Profile = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center gap-2">
        <div className="flex justify-center items-center w-40 h-40 bg-primary rounded-full">
          <div className="h-[168px] mb-2">
            <Image
              src="/image/Avatar.png"
              alt="Dayana Ramírez Areiza"
              width={200}
              height={200}
              className="rounded-full h-full"
            />
          </div>
        </div>
        <TitleTertiary title="Dayana Ramírez Areiza" />
        <TextPrincipal text="Desarrolladora Fron-end" />
        <div className="flex space-x-1">
          <Icon icon="akar-icons:github-fill" />
          <Icon icon="akar-icons:linkedin-fill" />
        </div>
      </div>
      <hr className="my-5" />
      <div>
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
            <TextPrincipal text="Contacto:" />
          </div>
          <div className="flex items-end">
            <TextPrincipal text="300 3043859" />
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
        <div className="flex w-full justify-between">
          <div className="flex items-start">
            <TextPrincipal text="Dirección:" />
          </div>
          <div className="flex items-end">
            <TextPrincipal text="Robledo, Aures" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
