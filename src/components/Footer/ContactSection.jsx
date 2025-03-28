import React from "react";
import EmailLink from "./EmailLink";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "../../context/LanguageContext";
import trData from "../../data/data.tr.json";
import enData from "../../data/data.en.json";

function ContactSection() {
  const { language } = useLanguage();
  const dictionary = language === "tr" ? trData : enData;

  return (
    <section className="px-32 pt-20 pb-20 mx-auto w-full max-w-none bg-stone-50 dark:bg-gray-800 max-md:px-10 max-md:py-14 max-md:max-w-[991px] max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm">
      <h2 className="mb-12 text-5xl font-semibold text-gray-800 dark:text-white leading-[52.5px] max-w-[540px] max-md:mb-8 max-md:text-4xl max-sm:mb-6 max-sm:text-3xl">
        {dictionary.footer.contact}
      </h2>
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-8 max-md:items-start">
        <EmailLink email="yakutbirce@gmail.com" />
        <SocialLinks />
      </div>
    </section>
  );
}

export default ContactSection;
