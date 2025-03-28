import React from "react";

function NavLinks() {
  return (
    <div className="flex gap-20 items-center max-md:gap-10 max-sm:hidden">
      <a
        href="#skills"
        className="text-lg font-medium leading-7 text-gray-500 hover:text-indigo-800 transition-colors"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="text-lg font-medium leading-7 text-gray-500 hover:text-indigo-800 transition-colors"
      >
        Projects
      </a>
      <button className="px-8 py-3 text-lg font-medium leading-7 text-indigo-800 bg-white rounded-md border border-indigo-800 hover:bg-indigo-50 transition-colors">
        Hire me
      </button>
    </div>
  );
}

export default NavLinks;
