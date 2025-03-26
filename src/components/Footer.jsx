import React from "react";

const Footer = () => {
  return (
    <footer className="p-8 bg-gray-100">
      <div className="flex justify-between items-center">
        {/* Left Side: Text */}
        <div>
          <p className="text-xl font-semibold">
            Let's work together on your next product.
          </p>
          <p className="text-lg text-blue-600 mt-2">
            <a href="mailto:almilasucode@gmail.com">📧 almilasucode@gmail.com</a>
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="space-x-6">
          <a
          href="#"
            className="text-lg text-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal Blog
          </a>
          <a
           href="#"
            className="text-lg text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="#"
            className="text-lg text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
