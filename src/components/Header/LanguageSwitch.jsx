import { useLanguage } from "../../context/LanguageContext";

function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const isTurkish = language === "tr";

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-md
        ${isTurkish ? "bg-indigo-500 hover:bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-black dark:text-white"}
      `}
    >
      {!isTurkish ? ( // dil İngilizce ise Türkçeye geç seçeneğini göster
        <span>
          <span className="text-indigo-600 font-semibold">TÜRKÇE</span>{' '}
          <span className="text-gray-600 dark:text-white font-medium">YE GEÇ</span>
        </span>
      ) : (
        <span>ENGLISH</span> // dil Türkçe ise İngilizce'ye geç yaz
      )}
    </button>
  );
}

export default LanguageSwitch;
