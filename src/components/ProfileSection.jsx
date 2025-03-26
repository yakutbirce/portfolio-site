import React from "react";

const Profile = () => {
  return (
    <section id="profile" className="py-16">
      {/* Profile Heading */}
      <h2 className="text-4xl font-bold text-center mb-8">Profile</h2>

      {/* Profile Information */}
      <div className="flex justify-between px-12">
        {/* Profile Left: Profile Info */}
        <div className="flex flex-col space-y-4">
          <p className="text-lg font-semibold">
            <span className="font-bold">Doğum Tarihi:</span> 24.03.1996
          </p>
          <p className="text-lg font-semibold">
            <span className="font-bold">İkamet Şehri:</span> Ankara
          </p>
          <p className="text-lg font-semibold">
            <span className="font-bold">Eğitim Durumu:</span> Hacettepe Univ. - Biyoloji
          </p>
          <p className="text-lg font-semibold">
            <span className="font-bold">Tercih Ettiği Rol:</span> Frontend, UI
          </p>
        </div>

        {/* About Me Right: About Me Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold text-purple-500">About Me</h3>
          <p className="text-lg text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipiscing elit. Veniam aut, citi laborum aliquam volutpat nisi mollitia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
