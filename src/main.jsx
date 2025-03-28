import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx"; // 💜 ekleyeceğiz


ReactDOM.createRoot(document.getElementById("root")).render(
 
    <LanguageProvider>
      <ModalProvider> 
        <App />
      </ModalProvider>
    </LanguageProvider>
 
);
