import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function SocialLinks() {
  const { language } = useLanguage();

  const links = [
    {
      name: language === "tr" ? "Blog" : "Personal Blog",
      url: "https://medium.com/@yakutbirce",
      base: "text-gray-950 dark:text-white",
      hover: "hover:text-indigo-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.24 4.76a5.5 5.5 0 00-7.78 0L5 12.22V19h6.78l7.46-7.46a5.5 5.5 0 000-7.78z" />
        </svg>
      )
    },
    {
      name: "Github",
      url: "https://github.com/yakutbirce",
      base: "text-emerald-600 dark:text-green-400",
      hover: "hover:text-emerald-700 dark:hover:text-green-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.422c.6.112.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.731.083-.731 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.11-.775.42-1.304.763-1.603-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.47-2.38 1.236-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.005-.404c1.02.005 2.046.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.874.117 3.176.77.841 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.431.372.815 1.103.815 2.222v3.293c0 .322.218.694.825.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/birceyakut/",
      base: "text-sky-600 dark:text-blue-500",
      hover: "hover:text-sky-700 dark:hover:text-blue-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452H17.21v-5.568c0-1.328-.025-3.036-1.85-3.036-1.853 0-2.136 1.445-2.136 2.938v5.666H9.08V9h3.104v1.561h.043c.433-.82 1.492-1.683 3.068-1.683 3.282 0 3.89 2.161 3.89 4.971v6.603zM5.337 7.433a1.804 1.804 0 11.001-3.608 1.804 1.804 0 01-.001 3.608zm1.638 13.019H3.699V9h3.276v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      )
    }
  ];

  return (
    <nav className="flex gap-5 max-md:mt-5 max-sm:flex-wrap max-sm:gap-4">
      {links.map((link, index) => (
        <a
        key={index}
        href={link.url}
        target="_blank" 
        rel="noopener noreferrer" 
        className={`flex items-center gap-1 text-lg font-medium tracking-normal leading-7 ${link.base} ${link.hover} transition-all duration-300 hover:scale-[1.05] hover:underline max-sm:text-base`}
      >
        {link.icon}
        {link.name}
      </a>
      
      ))}
    </nav>
  );
}

export default SocialLinks;
