import React from "react";
import SkillItem from "./SkillItem";
import { useLanguage } from "../../context/LanguageContext";
import trData from "../../data/data.tr.json";
import enData from "../../data/data.en.json";
import { useQuery } from "@tanstack/react-query";

const Skills = () => {
  const { language } = useLanguage();

  const { data, isLoading, error } = useQuery({
    queryKey: ["skills", language],
    queryFn: () => language === "tr" ? trData.skills : enData.skills,
  });

  if (isLoading) return <p className="text-center text-indigo-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Bir hata oluştu...</p>;

  return (
    <section
      id="skills"
      className="scroll-mt-24 px-32 pt-20 pb-16 w-full max-md:px-16 max-md:pt-12 max-md:pb-12 max-sm:px-5 max-sm:pt-8 max-sm:pb-10"
    >
      <h2 className="mb-20 text-5xl font-semibold leading-10 text-gray-800 dark:text-white max-md:mb-12 max-md:text-4xl max-sm:text-3xl">
        {language === "tr" ? trData.sections.skills : enData.sections.skills}
      </h2>

      <div className="flex gap-32 justify-between items-start max-md:gap-16 max-sm:flex-col max-sm:gap-10">
        {data.map((skill, index) => (
          <SkillItem
            key={index}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
