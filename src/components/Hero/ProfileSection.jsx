import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileHeadline from "./ProfileHeadline";
import ProfileBio from "./ProfileBio";
import ActionButtons from "./ActionButtons";

function ProfileSection({ data }) {
  return (
    <section className="px-32 pt-32 pb-16 w-full bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-[screen] max-md:px-16 max-sm:px-5 max-sm:py-10">
      <div className="flex gap-16 justify-between items-start max-md:flex-col">
        <div className="flex flex-col max-w-[596px]">
          <ProfileHeader name="Birçe Yakut" />
          <ProfileHeadline title={data?.hero?.title} />
          <ProfileBio description={data?.hero?.description} />
          <ActionButtons buttons={data?.hero?.buttons} />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/03437a32abec877d9ba8605aaa08f7f32e329e5e?placeholderIfAbsent=true"
          alt="Profile"
          className="w-[476px] h-[375px] rounded-[18px] shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12),0px_18px_88px_-4px_rgba(24,39,75,0.14)] max-lg:w-full max-lg:h-auto"
        />
      </div>
    </section>
  );
}

export default ProfileSection;