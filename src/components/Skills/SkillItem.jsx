
import React from "react";

function SkillItem({ title, description }) {
  return (
    <article className="flex flex-col gap-7">
      <h3 className="text-3xl font-medium leading-7 text-indigo-700 max-md:text-2xl max-sm:text-2xl">
        {title}
      </h3>
      <p className="text-xs leading-4 text-gray-500 dark:text-gray-300">
        {description}
      </p>
    </article>
  );
}

export default SkillItem;
