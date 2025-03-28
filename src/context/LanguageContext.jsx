import { createContext, useContext, useState } from "react";

// 1. Context oluşturuluyor
const LanguageContext = createContext();

// 2. Provider bileşeni
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("tr"); // varsayılan Türkçe

  const toggleLanguage = () => {
    const newLang = language === "tr" ? "en" : "tr";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang); // ✅ Doğru olan bu!
  };
  

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Context hook'u
export function useLanguage() {
  return useContext(LanguageContext);
}
