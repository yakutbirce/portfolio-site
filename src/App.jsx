import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import ProfileSection from "./components/Hero/ProfileSection";
import Skills from "./components/Skills/Skills"; 
import ProfilePage from "./components/Profile/ProfilePage";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ContactSection from "./components/Footer/ContactSection";
import HeaderActions from "./components/Header/HeaderActions";
import ContactModal from "./components/Modals/ContactModal"; 
import { ModalProvider } from "./context/ModalContext"; 
import Thanks from "./pages/Thanks"; 
import { BrowserRouter as Router } from "react-router-dom";
import ScrollllToTopButton from "./components/ScrollToTopButton";
import GeminiChatbot from "./components/Gemini/GeminiChatbot";


function App() {
  const { language } = useLanguage();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const module = await import(`./data/data.${language}.json`);
        setData(module.default);
      } catch (err) {
        console.error("Veri çekilemedi:", err);
      }
    };

    fetchData();
  }, [language]);

  if (!data) return <p className="text-center mt-20">Yükleniyor...</p>;

  return (
    <Router>
      <ModalProvider>
        <Routes>

          {/* Ana Sayfa */}
          <Route path="/" element={
            <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
              <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-sm px-32 py-4 flex flex-col gap-4">
                <div className="flex justify-end mr-2">
                  <HeaderActions />
                </div>
                <Navbar navData={data} />
              </div>

              <div className="pt-[160px]">
                <ProfileSection data={data} />
                <Skills data={data.skills} />
                <ProfilePage data={data} />
                <ProjectsSection data={data} />
                <ContactSection />
              </div>

              <ContactModal />
              <GeminiChatbot />
              <ScrollllToTopButton />
            </div>
          } />

          {/* Thanks Sayfası */}
          <Route path="/thanks" element={<Thanks />} />

        </Routes>
      </ModalProvider>
    </Router>
  );
}

export default App;
