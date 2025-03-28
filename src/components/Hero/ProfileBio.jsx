import React from "react";

function ProfileBio({ description }) {
  return (
    <p className="mb-10 text-lg leading-7 text-gray-500 dark:text-gray-300">
      {description}
    </p>
  );
}

export default ProfileBio;