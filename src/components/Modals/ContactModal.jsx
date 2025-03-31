import React from "react";
import { useModal } from "../../context/ModalContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLanguage } from "../../context/LanguageContext";
import trData from "../../data/data.tr.json";
import enData from "../../data/data.en.json";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from './../../api/axiosInstance';

function ContactModal() {
  const { isModalOpen, closeModal } = useModal();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const dictionary = language === "tr" ? trData : enData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
console.log("Form Data:", data); 
    try {
    
      await axiosInstance.post("workintech", data);

      toast.success(dictionary.contactModal.success);
      reset();

      setTimeout(() => {
        closeModal();
        navigate("/thanks");
      }, 3000);
    } catch (error) {
      console.error("POST Error:", error);
      toast.error(
        language === "tr"
          ? "Mesaj gönderilirken bir hata oluştu."
          : "An error occurred while sending the message."
      );
    }
  };

  if (!isModalOpen) return null;

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
          {dictionary.contactModal.title}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* NAME */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">
              {dictionary.contactModal.labels.name}
            </label>
            <input
              type="text"
              id="name"
              placeholder={dictionary.contactModal.placeholders.name}
              {...register("name", { required: dictionary.contactModal.errors.name })}
              className={`p-3 border rounded-lg bg-white dark:bg-gray-800 ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              {dictionary.contactModal.labels.email}
            </label>
            <input
              type="email"
              id="email"
              placeholder={dictionary.contactModal.placeholders.email}
              {...register("email", {
                required: dictionary.contactModal.errors.emailRequired,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: dictionary.contactModal.errors.emailInvalid,
                },
              })}
              className={`p-3 border rounded-lg bg-white dark:bg-gray-800 ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium">
              {dictionary.contactModal.labels.message}
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder={dictionary.contactModal.placeholders.message}
              {...register("message", { required: dictionary.contactModal.errors.message })}
              className={`p-3 border rounded-lg bg-white dark:bg-gray-800 resize-none ${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium"
          >
            {dictionary.contactModal.send}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
