import React from "react";

function ProfileHeadline({ title }) {
  return (
    <h1 className="mb-10 text-7xl font-bold text-gray-800 dark:text-white leading-[72px] max-md:text-6xl max-md:leading-[60px] max-sm:text-4xl max-sm:leading-10">
      {title}
    </h1>
  );
}

export default ProfileHeadline;
