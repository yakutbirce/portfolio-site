import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function DarkModeLanguageToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-4">
      {/* DARK MODE */}
      <button
        onClick={toggleDarkMode}
        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-white rounded-full text-sm font-medium flex items-center gap-1 cursor-pointer"
      >
        <span role="img" aria-label="moon">🌙</span>
        DARK MODE
      </button>

      {/* DİKEY ÇİZGİ */}
      <span className="text-gray-400 font-semibold text-xl">|</span>

      {/* LANGUAGE */}
      <button
        onClick={toggleLanguage}
        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm font-medium rounded-full cursor-pointer flex items-center gap-1"
      >
        {language === "tr" ? (
          <span className="text-gray-800 dark:text-white uppercase">ENGLISH</span>
        ) : (
          <span>
            <span className="text-indigo-700 font-semibold">TÜRKÇE</span>
            <span className="text-black dark:text-white">YE GEÇ</span>
          </span>
        )}
      </button>
    </div>
  );
}

export default DarkModeLanguageToggle;
