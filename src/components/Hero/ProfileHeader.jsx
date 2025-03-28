import React from "react";

function ProfileHeader({ name }) {
  return (
    <header className="flex gap-2.5 items-center mb-10">
      <div className="h-px bg-indigo-800 w-[102px]" aria-hidden="true" />
      <h2 className="text-xl font-medium leading-7 text-indigo-700">{name}</h2>
    </header>
  );
}

export default ProfileHeader;