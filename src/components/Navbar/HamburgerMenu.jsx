import React from "react";

function HamburgerMenu() {
  return (
    <button className="hidden max-sm:block" aria-label="Toggle menu">
      <i
        className="ti ti-menu-2 text-2xl text-gray-500"
        aria-hidden="true"
      ></i>
    </button>
  );
}

export default HamburgerMenu;
