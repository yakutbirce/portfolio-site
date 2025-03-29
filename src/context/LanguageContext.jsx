import { createContext, useContext, useReducer } from "react";

// 1. Context oluşturuluyor
const LanguageContext = createContext();

// 2. Başlangıç durumu
const initialState = {
  language: localStorage.getItem("lang") || "tr",
};

// 3. Reducer fonksiyonu
function languageReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LANGUAGE": {
      const newLang = state.language === "tr" ? "en" : "tr";
      localStorage.setItem("lang", newLang);
      return { ...state, language: newLang };
    }
    default:
      return state;
  }
}


// 4. Provider bileşeni
export function LanguageProvider({ children }) {
  const [state, dispatch] = useReducer(languageReducer, initialState);

  const toggleLanguage = () => {
    dispatch({ type: "TOGGLE_LANGUAGE" });
  };

  return (
    <LanguageContext.Provider
      value={{
        language: state.language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// 5. Custom hook
export function useLanguage() {
  return useContext(LanguageContext);
}
