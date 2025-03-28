import React from "react";

function SocialLinks() {
  const links = [
    { name: "Personal Blog", url: "#", className: "text-gray-950 dark:text-white" },
    { name: "Github", url: "#", className: "text-emerald-600 dark:text-green-400" },
    { name: "Linkedin", url: "#", className: "text-sky-600 dark:text-blue-500" },
  ];

  return (
    <nav className="flex gap-5 max-md:mt-5 max-sm:flex-wrap max-sm:gap-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className={`text-lg font-medium tracking-normal leading-7 ${link.className} max-sm:text-base`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}

export default SocialLinks;
