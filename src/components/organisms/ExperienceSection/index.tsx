import { TitleSecondary } from "@/components/atoms/Text";
import { ExperienceCard } from "@/components/molecules/Card";
import { experience } from "@/utils/const";
import { Icon } from "@iconify/react";
import React from "react";

const Experience = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center mx-auto">
        <div className="flex items-center pb-10 space-x-2">
          <TitleSecondary title="Experiencia laboral"></TitleSecondary>
          <Icon icon="fluent:briefcase-28-regular" className="text-primary h-10 w-10" />
        </div>
        <div className="flex items-center justify-center bg-white w-full px-10 py-8">
          <ul className="w-full">
            {experience.map((el, index) => (
              <li key={el.title1}>
                <ExperienceCard
                  title1={el.title1}
                  title2={el.title2}
                  text={el.text}
                  date={el.date}
                />
                {index !== experience.length - 1 && <hr className="my-5" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
