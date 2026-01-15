
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface WaitlistModalProps {
  lang: 'en' | 'es' | 'de';
  isOpen: boolean;
  onClose: () => void;
}

const translations = {
  en: {
    title: "Feeling overwhelmed?",
    desc: "Join our exclusive waitlist and be the first to know when we open new slots with our compassionate student therapists.",
    placeholder: "Enter your email address",
    button: "Join Waitlist",
    thanksTitle: "You're on the list!",
    thanksDesc: "We'll reach out to you as soon as a safe space is ready for you.",
    privacy: "We promise to keep your data safe and private."
  },
  es: {
    title: "¿Te sientes abrumado?",
    desc: "Únete a nuestra lista de espera exclusiva y sé el primero en saber cuándo abrimos nuevas plazas con nuestros terapeutas en formación.",
    placeholder: "Introduce tu correo electrónico",
    button: "Unirse a la lista",
    thanksTitle: "¡Ya estás en la lista!",
    thanksDesc: "Nos pondremos en contacto contigo en cuanto un espacio seguro esté listo para ti.",
    privacy: "Prometemos mantener tus datos seguros y privados."
  },
  de: {
    title: "Fühlen Sie sich überfordert?",
    desc: "Tragen Sie sich in unsere exklusive Warteliste ein und erfahren Sie als Erster, wenn wir neue Plätze bei unseren engagierten Studenten eröffnen.",
    placeholder: "E-Mail-Adresse eingeben",
    button: "Warteliste beitreten",
    thanksTitle: "Du bist auf der Liste!",
    thanksDesc: "Wir melden uns bei dir, sobald ein Platz für dich frei wird.",
    privacy: "Wir versprechen, deine Daten sicher und privat zu halten."
  }
};

const WaitlistModal: React.FC<WaitlistModalProps> = ({ lang, isOpen, onClose }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = translations[lang];

  // Auto-open effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setInternalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Sync internal state with external prop
  const active = isOpen || internalOpen;

  const handleClose = () => {
    setInternalOpen(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => handleClose(), 2500);
    }
  };

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div className="text-center">
            <div className="mb-6">
              <Logo className="scale-125" />
            </div>
            <h3 className="text-2xl font-bold text-[#4a3728] mb-2 font-serif-logo">{t.title}</h3>
            <p className="text-gray-600 mb-8 font-light">{t.desc}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder={t.placeholder}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9a7b5c] focus:border-transparent outline-none transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-[#9a7b5c] text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition transform hover:-translate-y-1 shadow-lg"
              >
                {t.button}
              </button>
              <p className="text-xs text-gray-400 italic">{t.privacy}</p>
            </form>
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="text-[#9a7b5c] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#4a3728] mb-2 font-serif-logo">{t.thanksTitle}</h3>
            <p className="text-gray-600 font-light">{t.thanksDesc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
