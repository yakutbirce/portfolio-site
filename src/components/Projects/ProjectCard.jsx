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
    <article className="flex flex-col gap-5 w-full">



      <img
        src={image || "https://via.placeholder.com/300x180.png?text=Preview"}
        alt={altText}
        className="w-full h-[180px] object-cover rounded-[4px]"
      />
      <h3 className="text-3xl font-medium leading-7 text-indigo-700">
        {title}
      </h3>
      <p className="text-sm leading-4 text-gray-500 dark:text-gray-300">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-5 py-1.5 text-sm font-medium tracking-tighter leading-4 text-indigo-800 bg-white border border-indigo-800 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between w-full text-indigo-800">
        <a
          href={githubLink}
          className="text-base font-medium underline hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href={siteLink}
          className="text-base font-medium underline hover:opacity-80"
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
