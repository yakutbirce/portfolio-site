import * as React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar({ navData }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav className="max-w-[1140px] mx-auto px-4 sm:px-7 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 py-2">
        {/* Sol taraf: Logo */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Logo />
        </div>

        {/* Sağ taraf: Menü linkleri */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <NavLinks nav={navData?.nav} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
