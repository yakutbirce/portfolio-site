import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import trData from "../../data/data.tr.json";
import enData from "../../data/data.en.json";

function ProfileInfo({ data }) {
  const { language } = useLanguage();
  const dictionary = language === "tr" ? trData : enData;
  const profile = data.profile;

  return (
    <section>
      <h2 className="mb-10 text-3xl font-medium leading-7 text-indigo-700 max-sm:text-2xl">
        {profile.infoTitle}
      </h2>

      <div className="flex gap-6 max-sm:flex-col max-sm:gap-3">
        {/* Sol Sütun */}
        <div className="text-lg font-semibold tracking-normal leading-9 text-black dark:text-white max-sm:text-base">
          <div>{dictionary.profileLabels.birthdate}</div>
          <div>{dictionary.profileLabels.location}</div>
          <div>{dictionary.profileLabels.education}</div>
          <div>{dictionary.profileLabels.role}</div>
        </div>

        {/* Sağ Sütun */}
        <div className="text-lg tracking-normal leading-9 text-gray-700 dark:text-gray-300 max-sm:text-base">
          <div>{profile.birthdate}</div>
          <div>{profile.location}</div>
          <div>
            {Array.isArray(profile.education) ? (
              <>
                <span>{profile.education[0]}</span>,{" "}
                <span>{profile.education[1]}</span>
              </>
            ) : (
              profile.education
            )}
          </div>
          <div>{profile.role}</div>
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
