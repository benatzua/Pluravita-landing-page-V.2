
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getSupportiveResponse } from '../services/geminiService';

interface SupportChatProps {
  lang: 'en' | 'es' | 'de';
}

const translations = {
  en: {
    welcome: "Hello, I'm your Pluravita guide. I'm here to listen. How are you feeling today?",
    title: "Safe Space Chat",
    placeholder: "Type your message...",
    badge: "Talk to someone"
  },
  es: {
    welcome: "Hola, soy tu guía de Pluravita. Estoy aquí para escucharte. ¿Cómo te sientes hoy?",
    title: "Chat Espacio Seguro",
    placeholder: "Escribe tu mensaje...",
    badge: "Habla con alguien"
  },
  de: {
    welcome: "Hallo, ich bin dein Pluravita-Guide. Ich bin hier, um zuzuhören. Wie fühlst du dich heute?",
    title: "Sicherer Raum Chat",
    placeholder: "Nachricht schreiben...",
    badge: "Mit jemandem reden"
  }
};

const SupportChat: React.FC<SupportChatProps> = ({ lang }) => {
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: t.welcome }]);
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await getSupportiveResponse(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "I'm here for you." }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#9a7b5c] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="font-semibold">{t.title}</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 bg-[#f9f6f2] space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#9a7b5c] text-white rounded-br-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-50 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-400 p-3 rounded-2xl shadow-sm border border-gray-50 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder={t.placeholder}
                className="flex-1 bg-gray-50 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-[#9a7b5c] outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="bg-[#9a7b5c] text-white p-2 rounded-full hover:bg-opacity-90 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#9a7b5c] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">{t.badge}</span>
        </button>
      )}
    </div>
  );
};

export default SupportChat;
