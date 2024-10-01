import React from "react";
import { Icon } from "@iconify/react";

const Index = ({ icon }: { icon: string }) => {
  return (
    <div className="h-8 w-8 rounded-full color-primary flex justify-center items-center shadow-2xl">
      <Icon className="h-4 w-4 text-white" icon={icon} />
    </div>
  );
};

export default Index;
