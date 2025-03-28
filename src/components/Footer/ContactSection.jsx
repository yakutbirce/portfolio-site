import React from "react";
import EmailLink from "./EmailLink";
import SocialLinks from "./SocialLinks";

function ContactSection() {
  return (
    <section className="px-32 pt-20 pb-64 mx-auto w-full max-w-none bg-stone-50 dark:bg-gray-800 min-h-[409px] max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm">
      <h2 className="mb-16 text-5xl font-semibold text-gray-800 dark:text-white leading-[52.5px] max-w-[540px] max-md:mb-10 max-md:text-4xl max-sm:mb-8 max-sm:text-3xl">
        Let's work together on your next product.
      </h2>
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-8 max-md:items-start">
        <EmailLink email="almilasucode@gmail.com" />
        <SocialLinks />
      </div>
    </section>
  );
}

export default ContactSection;
