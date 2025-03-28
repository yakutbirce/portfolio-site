import { useEffect, useState } from "react";
import { useLanguage } from "./context/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import ProfileSection from "./components/Hero/ProfileSection";
import Skills from "./components/Skills/Skills"; 
import ProfilePage from "./components/Profile/ProfilePage";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ContactSection from "./components/Footer/ContactSection";
import HeaderActions from "./components/Header/HeaderActions";


function App() {
  const { language } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
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
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Sabit Header Alanı (toggle + navbar) */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-sm px-32 py-4 flex flex-col gap-4">
        <div className="flex justify-end mr-2">
          <HeaderActions />
        </div>
        <Navbar navData={data} />
      </div>
  
      {/* Tüm sayfa içeriği aşağıdan başlasın */}
      <div className="pt-[160px]">
        <ProfileSection data={data} />
        <Skills data={data.skills} /> 
        <ProfilePage data={data} />
        <ProjectsSection data={data} />
        <ContactSection />
      </div>
    </div>
  );
  
  
}

export default App;
