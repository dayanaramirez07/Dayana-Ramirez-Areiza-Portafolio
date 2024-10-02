// ----------------------------------------------------------------------------------
// El componente Profile muestra una tarjeta de perfil centrada con la siguiente información:
//
// - Una imagen circular de perfil, que se carga mediante el componente Image de Next.js.
// - Un título que muestra el nombre y un texto que indica el rol.
// - Dos íconos que actúan como enlaces a los perfiles de GitHub y LinkedIn.
// ----------------------------------------------------------------------------------

import { TextPrincipal, TitleTertiary } from "@/components/atoms/Text";
import Image from "next/image";
import React from "react";
import Icon from "@/components/atoms/Icon";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-5">
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
        <Icon icon="akar-icons:github-fill" href="https://github.com/dayanaramirez07" />
        <Icon
          icon="akar-icons:linkedin-fill"
          href="https://www.linkedin.com/in/dayana-ram%C3%ADrez-areiza-4525b7317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        />
      </div>
    </div>
  );
};

export default Profile;
