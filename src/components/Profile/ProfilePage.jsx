import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import AboutMe from "./AboutMe";

function ProfilePage({ data }) {
  return (
    <section className="px-32 pt-20 pb-32 w-full max-md:px-16 max-md:pt-12 max-sm:px-5 max-sm:pt-8 max-sm:pb-16">
      <ProfileHeader title={data?.profile?.title} />

      <div className="flex gap-14 max-md:flex-col max-md:gap-10">
        <ProfileInfo data={data} />
        <AboutMe
  title={data.profile.aboutTitle}
  paragraphs={data.profile.aboutMe}
/>

      </div>
    </section>
  );
}

export default ProfilePage;
