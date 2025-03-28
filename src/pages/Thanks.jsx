import React from "react";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Teşekkürler!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Mesajın başarıyla iletildi. En kısa sürede sana dönüş yapacağım.
      </p>
      <Link to="/" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
        Anasayfaya Dön
      </Link>
    </div>
  );
}

export default Thanks;
