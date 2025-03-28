import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import trData from "../data/data.tr.json";
import enData from "../data/data.en.json";

function Thanks() {
  const { language } = useLanguage();
  const dictionary = language === "tr" ? trData : enData;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">{dictionary.thanksPage.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{dictionary.thanksPage.message}</p>
      <Link to="/" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
        {dictionary.thanksPage.button}
      </Link>
    </div>
  );
}

export default Thanks;
