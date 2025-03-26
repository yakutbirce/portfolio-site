import React from "react";

const NavBar = () => {
  return (
    <nav>
      {/* Mode Switch */}
      <div>
        <button>Dark Mode</button> | <button>Türkçeye Geç</button>
      </div>

      {/* Header with Logo (A harfi) and Nav Links */}
      <div >
        {/* Logo */}
        <div >
          A
        </div>

        {/* Nav Links */}
        <div >
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#hire-me">Hire me</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
