"use client";
import React from "react";

function AboutMe({ title, paragraphs }) {
  return (
    <section>
      <h2 className="mb-10 text-3xl font-medium leading-7 text-indigo-700 max-sm:text-2xl">
        {title}
      </h2>

      <article className="text-lg leading-7 text-gray-500 dark:text-gray-300 max-w-[558px] max-md:max-w-full max-sm:text-base">
        {paragraphs.map((text, index) => (
          <p key={index} className="mb-4">
            {text}
          </p>
        ))}
      </article>
    </section>
  );
}

export default AboutMe;
