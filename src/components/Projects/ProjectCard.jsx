import React from "react";

function ProjectCard({
  image,
  altText = "Project preview",
  title,
  description,
  tags,
  githubLink,
  siteLink,
}) {
  return (
    <article className="flex flex-col gap-3 w-full h-full p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-[1.015] max-w-[360px] mx-auto">

  {/* Görsel Kutusu*/}
  <div className="w-full aspect-[4/3] overflow-hidden rounded-md flex justify-center items-center bg-gray-100 dark:bg-gray-700">
      <img
          src={image}
          alt={altText}
          className="h-full object-contain"
      />
  </div>

  {/* Başlık */}
  <h3 className="text-xl font-semibold leading-6 text-indigo-700 dark:text-indigo-400">
    {title}
  </h3>

  {/* Açıklama */}
  <p className="text-sm leading-5 text-gray-500 dark:text-gray-300 flex-1">
    {description}
  </p>

  {/* Etiketler */}
  <div className="flex flex-wrap gap-1.5 mt-auto">
    {tags.map((tag, index) => (
      <span
      key={index}
      className="px-2 py-0.5 text-xs font-medium tracking-tight leading-4 
                 text-indigo-800 dark:text-indigo-300 
                 bg-white dark:bg-gray-700 
                 border border-indigo-800 dark:border-indigo-400 
                 rounded"
    >
      {tag}
    </span>
    
    ))}
  </div>

  {/* Linkler */}
  <div className="flex justify-between w-full text-indigo-800 mt-1">
    <a
      href={githubLink}
      className="text-xs font-medium underline hover:opacity-80"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </a>
    <a
      href={siteLink}
      className="text-xs font-medium underline hover:opacity-80"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Site
    </a>
  </div>

</article>

  );
}

export default ProjectCard;
