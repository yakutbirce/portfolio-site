import { useLanguage } from "../../context/LanguageContext";

function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  const isTurkish = language === "tr";

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition
        ${isTurkish ? "bg-gray-200 text-black" : "bg-indigo-500 text-white"}
      `}
    >
      <span className="mr-2">{isTurkish ? "🇹🇷" : "🇬🇧"}</span>
      {isTurkish ? "ENGLISH" : "TÜRKÇEYE GEÇ"}
    </button>
  );
}

export default LanguageSwitch;
