import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-between items-center p-8">
      {/* Sol Kısım (Başlık ve açıklama) */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold">
          Creative thinker <br /> Minimalism lover
        </h1>
        <p className="my-4">
          Hi, I'm Almila. I'm a full-stack developer. If you are looking for a
          Developer who crafts solid and scalable frontend products with great
          user experiences. Let's shake hands with me.
        </p>
        <div className="flex space-x-4">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            Hire me
          </button>
          <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded">
            Github
          </button>
          <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded">
            Linkedin
          </button>
        </div>
      </div>

      {/* Sağ Kısım (Profil Fotoğrafı) */}
      <div className="flex-1">
        <img
          src="path_to_your_image.jpg"
          alt="Almila Su"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
