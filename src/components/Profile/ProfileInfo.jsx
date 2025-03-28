"use client";
import React from "react";

function ProfileInfo({ data }) {
  const profile = data.profile;

  const infoItems = [
    { label: profile?.infoTitle || "Profil Bilgileri", key: "infoTitle", isTitle: true },
    { label: "Doğum tarihi", value: profile.birthdate },
    { label: "İkamet Şehri", value: profile.location },
    { label: "Eğitim Durumu", value: profile.education },
    { label: "Tercih Ettiği Rol", value: profile.role },
  ];

  return (
    <section>
      <h2 className="mb-10 text-3xl font-medium leading-7 text-indigo-700 max-sm:text-2xl">
        {profile.infoTitle}
      </h2>

      <div className="flex gap-6 max-sm:flex-col max-sm:gap-3">
        {/* Sol Sütun: Etiketler */}
        <div className="text-lg font-semibold tracking-normal leading-9 text-black dark:text-white max-sm:text-base">
          {infoItems.slice(1).map((item, index) => (
            <div key={`label-${index}`}>{item.label}</div>
          ))}
        </div>

        {/* Sağ Sütun: Değerler */}
        <div className="text-lg tracking-normal leading-9 text-gray-700 dark:text-gray-300 max-sm:text-base">
          {infoItems.slice(1).map((item, index) => (
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
