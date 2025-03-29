import React from "react";

function SocialButton({ type, label }) {
  const icons = {
    github: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    linkedin: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  };

  const links = {
    github: "https://github.com/yakutbirce",
    linkedin: "https://www.linkedin.com/in/birceyakut/",
  };

  return (
    <a
      href={links[type] || "#"}
      className="px-6 py-3 border border-indigo-800 rounded-md flex items-center gap-3 hover:bg-indigo-50 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icons[type]} alt={`${type} icon`} className="w-5 h-5" />
      <span className="text-indigo-800 font-medium">{label}</span>
    </a>
  );
}

export default SocialButton;
