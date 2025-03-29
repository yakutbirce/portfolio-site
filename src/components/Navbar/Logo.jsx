import React from "react";

// Smooth scroll fonksiyonu
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function Logo() {
  return (
    <div 
      className="logo cursor-pointer" 
      onClick={() => scrollToSection("profile")} // 💜 Hedef profile
    >
     <svg
        width="52"
        height="36"
        viewBox="0 0 64 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[40px] h-[38px]"
      >
        <ellipse cx="31.8378" cy="31" rx="31.8378" ry="31" fill="#EEEBFF" />
        <text
          transform="matrix(0.871703 0.490034 -0.510033 0.860155 32.8649 13)"
          fill="#7B61FF"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize="24"
          fontWeight="600"
          letterSpacing="0em"
        >
          <tspan x="0" y="24.7273">B</tspan>
        </text>
      </svg>
    </div>
  );
}

export default Logo;
