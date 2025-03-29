import * as React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar({ navData }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav className="max-w-[1140px] mx-auto px-7 flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 sm:gap-0">

        {/* Sol taraf: Logo */}
        <div className="order-1 sm:order-none w-full sm:w-auto flex justify-between items-center">
          <Logo />
          
          {/* Mobil menü butonu */}
          <button className="block sm:hidden" aria-label="Toggle menu">
            <i className="ti ti-menu-2 text-2xl text-gray-500" />
          </button>
        </div>

        {/* Sağ taraf: Menü linkleri */}
        <div className="w-full sm:w-auto order-2">
          <NavLinks nav={navData?.nav} />
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
