"use client";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import trData from "../../data/data.tr.json";
import enData from "../../data/data.en.json";

function ProfileInfo({ data }) {
  const { language } = useLanguage();
  const dictionary = language === "tr" ? trData : enData;
  const profile = data.profile;

  const infoItems = [
    { label: dictionary.profileLabels.birthdate, value: profile.birthdate },
    { label: dictionary.profileLabels.location, value: profile.location },
    { label: dictionary.profileLabels.education, value: profile.education },
    { label: dictionary.profileLabels.role, value: profile.role },
  ];

  return (
    <section>
      <h2 className="mb-10 text-3xl font-medium leading-7 text-indigo-700 max-sm:text-2xl">
        {profile.infoTitle}
      </h2>

      <div className="flex gap-6 max-sm:flex-col max-sm:gap-3">
        {/* Sol Sütun: Etiketler */}
        <div className="text-lg font-semibold tracking-normal leading-9 text-black dark:text-white max-sm:text-base">
          {infoItems.map((item, index) => (
            <div key={`label-${index}`}>{item.label}</div>
          ))}
        </div>

        {/* Sağ Sütun: Değerler */}
        <div className="text-lg tracking-normal leading-9 text-gray-700 dark:text-gray-300 max-sm:text-base">
          {infoItems.map((item, index) => (
            <div key={`value-${index}`}>
              {Array.isArray(item.value) ? (
                <>
                  <span>{item.value[0]}</span>
                  <br />
                  <span>{item.value[1]}</span>
                </>
              ) : (
                item.value
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
