import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useLanguage } from "../../context/LanguageContext";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

function GeminiChatbot() {
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false); // ✨ typing state
  const messagesEndRef = useRef(null);
  const { language } = useLanguage();

  // Başlangıç mesajı
  const introMessage = language === "tr"
    ? "Merhaba! Ben frontend ve backend web geliştirme konularında yardımcı olan bir yapay zeka asistanıyım. Sor bakalım ne merak ediyorsun? 💻"
    : "Hi! I'm an AI assistant focused on frontend and backend web development. What would you like to ask? 💻";

  // İlk yüklemede intro mesajı
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ sender: "bot", text: introMessage }]);
    }
  }, [language]);

  // Her mesaj sonrası scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      const instruction = language === "tr"
        ? `Sen sadece frontend ve backend web geliştirme konularında yardımcı olan bir yapay zeka asistanısın. Web geliştirme dışındaki konularda cevap vermezsin. Sorulara kısa, açıklayıcı, samimi ve motive edici cevaplar ver. Geliştiricinin özellikle HTML, CSS, JavaScript, React, Node.js ve diğer modern teknolojilerde çalıştığını belirtmekten çekinme. Gerektiğinde basit kod örnekleriyle açıklama yap.`
        : `You are an AI assistant specialized only in frontend and backend web development. You do not answer questions unrelated to web development. Provide short, clear, friendly, and motivating answers. Do not hesitate to mention that the developer works with technologies like HTML, CSS, JavaScript, React, Node.js, and other modern tools. Provide simple code examples when needed.`;

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: input }] }],
        systemInstruction: { role: "system", parts: [{ text: instruction }] },
      });

      const response = await result.response;
      const text = await response.text();

      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setIsTyping(false);
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: language === "tr"
            ? "Bir hata oluştu. Lütfen tekrar dene."
            : "Oops! Something went wrong. Please try again.",
        },
      ]);
      setIsTyping(false);
    }
  };

  return (
<div className={`fixed bottom-6 ${showChat ? "right-24" : "right-24 max-sm:right-8"} z-50`}>


      {/* Buton */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-full shadow-lg animate-bounce text-sm sm:text-base"
        >
          💬
        </button>
      )}

      {/* Chat Kutusu */}
      {showChat && (
        <div className="w-[90vw] max-w-[320px] h-[80vh] max-h-[450px] flex flex-col justify-between bg-white dark:bg-gray-900 text-black dark:text-white shadow-xl rounded-xl overflow-hidden animate-fade-in-up">

          <div className="p-3 sm:p-4 bg-indigo-600 text-white text-base sm:text-lg font-bold flex justify-between items-center">
            Gemini Chatbot
            <button onClick={() => setShowChat(false)} className="text-white text-xl">
              ✕
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg w-fit max-w-[80%] whitespace-pre-wrap ${
                  msg.sender === "bot"
                    ? "bg-gray-200 dark:bg-gray-700 text-left"
                    : "bg-indigo-100 dark:bg-indigo-600 ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="p-2 rounded-lg w-fit bg-gray-200 dark:bg-gray-700 text-left text-sm text-gray-500 animate-pulse">
                <TypingDots language={language} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center p-2 border-t dark:border-gray-700 gap-2">
            <input
              type="text"
              className="flex-1 p-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
              placeholder={language === "tr" ? "Bir şeyler yazın..." : "Type your question..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700 text-sm"
            >
              {language === "tr" ? "Gönder" : "Send"}
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

// ✨ Loading Effect Component
function TypingDots({ language }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {language === "tr" ? "Yazıyor" : "Typing"}{dots}
    </span>
  );
}

export default GeminiChatbot;
