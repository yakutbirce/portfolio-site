import React from "react";
import { useModal } from "../../context/ModalContext";

function NavLinks({ nav }) {
  const { openModal } = useModal();

  // 🟣 Smooth scroll fonksiyonu
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex gap-6 items-center max-sm:hidden">
      <button
        onClick={() => scrollToSection("skills")}
        className="text-base font-medium text-gray-500 hover:text-indigo-800 transition-colors"
      >
        {nav?.skills || "Skills"}
      </button>

      <button
        onClick={() => scrollToSection("projects")}
        className="text-base font-medium text-gray-500 hover:text-indigo-800 transition-colors"
      >
        {nav?.projects || "Projects"}
      </button>

      <button
        onClick={openModal}
        className="px-5 py-1.5 text-sm font-medium text-indigo-800 bg-white border border-indigo-800 rounded-md hover:bg-indigo-50 transition-colors"
      >
        {nav?.hireMe || "Hire Me"}
      </button>
    </div>
  );
}

export default NavLinks;
