import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import SocialButton from "./SocialButton";
import { useModal } from "../../context/ModalContext";

function ActionButtons() {
  const { language } = useLanguage();
  const { openModal } = useModal();
  const hireMeText = language === "tr" ? "İletişim" : "Hire me";

  return (
    <div className="flex gap-3 items-center max-sm:flex-col max-sm:w-full">
      <button
        onClick={openModal}
        className="px-8 py-3 text-lg font-medium leading-7 text-white bg-indigo-800 rounded-md cursor-pointer"
      >
        {hireMeText}
      </button>
      <SocialButton type="github" label="Github" />
      <SocialButton type="linkedin" label="LinkedIn" />
    </div>
  );
}

export default ActionButtons;
