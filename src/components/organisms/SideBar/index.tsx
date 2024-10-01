import { Language, Programming } from "@/components/molecules/Ability";
import Profile from "@/components/molecules/Profile";
import React from "react";

const SideBar = () => {
  return (
    <div className="bg-white pb-5">
      <Profile />
      <hr className="m-5" />
      <Language />
      <hr className="m-5" />
      <Programming />
    </div>
  );
};

export default SideBar;
