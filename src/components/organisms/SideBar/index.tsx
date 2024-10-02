import { Language, Programming } from "@/components/molecules/Ability";
import Contact from "@/components/molecules/Contact";
import Profile from "@/components/molecules/Profile";
import React from "react";

const SideBar = () => {
  return (
    <div className="bg-white pb-5">
      <div className="sticky top-0 bg-white">
        <Profile />
      </div>
      <hr className="m-5 mt-0" />
      <Contact />
      <hr className="m-5" />
      <Language />
      <hr className="m-5" />
      <Programming />
    </div>
  );
};

export default SideBar;
