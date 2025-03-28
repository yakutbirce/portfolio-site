import React from "react";

function EmailLink({ email }) {
  return (
    <a href={`mailto:${email}`} className="flex gap-0.5 items-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a9d46578860258b4190b930eefbe4b3e097eeb3"
        className="h-6 w-[26px]"
        alt="pointer"
      />
      <span className="text-xl font-medium tracking-wider text-rose-700 dark:text-white underline max-sm:text-base">
        {email}
      </span>
    </a>
  );
}

export default EmailLink;
