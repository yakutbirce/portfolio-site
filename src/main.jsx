import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <LanguageProvider>
        <ModalProvider> 
          <App />
        </ModalProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
