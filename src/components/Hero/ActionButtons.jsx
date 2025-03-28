import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import SocialButton from "./SocialButton";

function ActionButtons() {
  const { language } = useLanguage();

  // Buton metni dile göre ayarlanıyor
  const hireMeText = language === "tr" ? "İletişim" : "Hire me";

  return (
    <div className="flex gap-3 items-center max-sm:flex-col max-sm:w-full">
      <button className="px-8 py-3 text-lg font-medium leading-7 text-white bg-indigo-800 rounded-md cursor-pointer">
        {hireMeText}
      </button>
      <SocialButton type="github" label="Github" />
      <SocialButton type="linkedin" label="LinkedIn" />
    </div>
  );
}

export default ActionButtons;
