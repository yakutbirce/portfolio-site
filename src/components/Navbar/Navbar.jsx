import * as React from "react";
import Logo from "./Logo";

function Navbar({ navData }) {
  const nav = navData?.nav;

  return (
    <header className="sticky top-[48px] z-40 w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav className="max-w-[1140px] mx-auto px-6 py-2 flex justify-between items-center">

        {/* Sol taraf: Logo */}
        <Logo />

        {/* Sağ taraf: Menü linkleri */}
        <div className="flex gap-6 items-center max-sm:hidden">
          <a
            href="#skills"
            className="text-base font-medium text-gray-500 hover:text-indigo-800 transition-colors"
          >
            {nav?.skills || "Skills"}
          </a>
          <a
            href="#projects"
            className="text-base font-medium text-gray-500 hover:text-indigo-800 transition-colors"
          >
            {nav?.projects || "Projects"}
          </a>
          <button className="px-5 py-1.5 text-sm font-medium text-indigo-800 bg-white border border-indigo-800 rounded-md hover:bg-indigo-50 transition-colors">
            {nav?.hireMe || "Hire Me"}
          </button>
        </div>

        {/* Mobil menü butonu */}
        <button className="block sm:hidden" aria-label="Toggle menu">
          <i className="ti ti-menu-2 text-2xl text-gray-500" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
