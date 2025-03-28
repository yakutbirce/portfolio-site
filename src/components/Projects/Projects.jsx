import React from "react";
import ProjectCard from "./ProjectCard";
import Divider from "./Divider";
import { useLanguage } from "../../context/LanguageContext";
import trData from "../../data/data.tr.json";
import enData from "../../data/data.en.json";

function Projects({ data }) {
  const { language } = useLanguage();
  const dictionary = language === "tr" ? trData : enData;

  return (
    <section className="px-32 pt-0 pb-32 w-full max-md:px-16 max-md:pb-20 max-sm:px-5 max-sm:pb-16">
      {/* Divider - mor çizgi */}
      <div className="mt-[-48px]">
        <Divider />
      </div>

      {/* Başlık */}
      <h2 className="mb-20 text-5xl font-semibold leading-10 text-gray-800 dark:text-white max-md:mb-12 max-md:text-4xl max-sm:text-3xl">
        {dictionary.sections.projects}
      </h2>

      {/* Proje kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
