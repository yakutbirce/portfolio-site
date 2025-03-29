import * as React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar({ navData }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-gray-900 transition-colors duration-300">

      <nav className="max-w-[1140px] mx-auto px-7 flex justify-between items-center">

        {/* Sol taraf: Logo */}
        <Logo />

        {/* Sağ taraf: Menü linkleri */}
        <NavLinks nav={navData?.nav} />

        {/* Mobil menü butonu */}
        <button className="block sm:hidden" aria-label="Toggle menu">
          <i className="ti ti-menu-2 text-2xl text-gray-500" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
