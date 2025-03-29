import * as React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar({ navData }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-gray-900 transition-colors duration-300">

      <nav className="max-w-[1140px] mx-auto px-7 flex justify-between items-center flex-wrap gap-4">

        {/* Sol taraf: Logo */}
        <Logo />

        {/* Sağ taraf: Menü linkleri */}
        <div className="flex-1 flex justify-end">
          <NavLinks nav={navData?.nav} />
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
