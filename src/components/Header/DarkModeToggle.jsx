import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import trData from "../../data/data.tr.json";
import enData from "../../data/data.en.json";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language } = useLanguage();
  const dictionary = language === "tr" ? trData : enData;

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-white rounded-full text-sm font-medium flex items-center gap-1 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:bg-indigo-200 dark:hover:bg-indigo-700"
    >
      
      <span role="img" aria-label={isDarkMode ? "sun" : "moon"}>
        {isDarkMode ? "🌞" : "🌙"}
      </span>
      {isDarkMode ? dictionary.toggle.light : dictionary.toggle.dark}
    </button>
  );
}

export default DarkModeToggle;
