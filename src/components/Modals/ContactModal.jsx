import React, { useState } from "react";
import { useModal } from "../../context/ModalContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext"; // 💜 dil bilgisi için eklendi

function ContactModal() {
  const { isModalOpen, closeModal } = useModal();
  const navigate = useNavigate();
  const { language } = useLanguage(); // 💜 dili alıyoruz

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  if (!isModalOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // 🟣 Dile göre toast
    if(language === "tr"){
      toast.success("Mesaj başarıyla gönderildi! 🚀");
    } else {
      toast.success("Message sent successfully! 🚀");
    }

    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      closeModal();
      navigate("/thanks");
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <ToastContainer />
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md relative transition-all duration-300 ease-in-out scale-100">

        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-indigo-600 transition-colors text-2xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-400 tracking-tight">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`p-3 border rounded-lg bg-white dark:bg-gray-800 ${errors.name && 'border-red-500'}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`p-3 border rounded-lg bg-white dark:bg-gray-800 ${errors.email && 'border-red-500'}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              className={`p-3 border rounded-lg bg-white dark:bg-gray-800 resize-none ${errors.message && 'border-red-500'}`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default ContactModal;
