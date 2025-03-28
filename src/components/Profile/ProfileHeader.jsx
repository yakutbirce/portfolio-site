"use client";
import React from "react";
import Divider from "./Divider";

function ProfileHeader({ title }) {
  return (
    <header className="mb-16">
      <Divider />
      <h1 className="mt-6 text-5xl font-semibold leading-10 text-gray-800 dark:text-white max-sm:text-4xl">
        {title}
      </h1>
    </header>
  );
}

export default ProfileHeader;
