
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface WaitlistModalProps {
  lang: 'en' | 'es' | 'de';
  isOpen: boolean;
  onClose: () => void;
}

const translations = {
  en: {
    badge: "Exclusive Welcome Gift",
    title: "Start your journey",
    discount: "50%",
    discountLabel: "OFF",
    subTitle: "YOUR FIRST SESSION",
    desc: "Join our community and get professional emotional support at half the price. We connect you with senior psychology students in a safe space.",
    placeholder: "Your email address",
    button: "Redeem My Voucher",
    loading: "Verifying...",
    thanksTitle: "Voucher Active!",
    thanksDesc: "Check your inbox. We've sent you a confirmation and your unique discount code.",
    privacy: "Confidential & Secure"
  },
  es: {
    badge: "Regalo de Bienvenida",
    title: "Empieza tu camino",
    discount: "50%",
    discountLabel: "DTO",
    subTitle: "EN TU PRIMERA SESIÓN",
    desc: "Únete a nuestra comunidad y recibe apoyo emocional profesional a mitad de precio. Te conectamos con estudiantes avanzados de psicología.",
    placeholder: "Tu correo electrónico",
    button: "Canjear mi Cupón",
    loading: "Verificando...",
    thanksTitle: "¡Cupón Activado!",
    thanksDesc: "Revisa tu bandeja de entrada. Te hemos enviado la confirmación y tu código exclusivo.",
    privacy: "Confidencial y Seguro"
  },
  de: {
    badge: "Willkommensgeschenk",
    title: "Beginnen Sie Ihre Reise",
    discount: "50%",
    discountLabel: "RABATT",
    subTitle: "AUF DIE ERSTE SITZUNG",
    desc: "Treten Sie unserer Community bei und erhalten Sie professionelle Unterstützung zum halben Preis. Wir verbinden Sie mit erfahrenen Psychologiestudenten.",
    placeholder: "Ihre E-Mail-Adresse",
    button: "Gutschein Einlösen",
    loading: "Prüfung...",
    thanksTitle: "Gutschein Aktiv!",
    thanksDesc: "Prüfen Sie Ihren Posteingang. Wir haben Ihnen eine Bestätigung und Ihren persönlichen Code gesendet.",
    privacy: "Vertraulich & Sicher"
  }
};

const WaitlistModal: React.FC<WaitlistModalProps> = ({ lang, isOpen, onClose }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('pluravita_modal_v4_shown')) {
        setInternalOpen(true);
        sessionStorage.setItem('pluravita_modal_v4_shown', 'true');
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const active = isOpen || internalOpen;

  const handleClose = () => {
    setInternalOpen(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/xldqwnej', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ email: email, offer: 'BOXED_50_OFF_CERTIFICATE', source: 'Boxed Offer Modal' })
        });
        
        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => handleClose(), 4000);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-[#2d2621]/90 backdrop-blur-xl animate-in fade-in duration-500">
      <div className="bg-white rounded-[3rem] shadow-2xl max-w-2xl w-full relative overflow-hidden flex flex-col md:flex-row border border-white/20">
        
        {/* Left Side: The BOXED Offer */}
        <div className="md:w-2/5 bg-[#fbf9f6] p-10 flex flex-col items-center justify-center text-center relative">
          <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-dashed bg-[#9a7b5c]/20 hidden md:block"></div>
          
          <div className="bg-[#9a7b5c] text-white w-full aspect-square rounded-[2rem] flex flex-col items-center justify-center shadow-[0_20px_40px_-10px_rgba(154,123,92,0.5)] transform -rotate-3 mb-6 relative">
            <div className="absolute -top-3 -right-3 bg-[#4a3728] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
              Valid
            </div>
            <span className="text-6xl font-black font-serif-logo leading-none mb-1">{t.discount}</span>
            <span className="text-sm font-bold tracking-[0.25em]">{t.discountLabel}</span>
          </div>
          
          <p className="text-[#9a7b5c] font-bold text-[10px] tracking-[0.3em] uppercase mb-1">{t.badge}</p>
          <p className="text-[#4a3728] font-serif-logo italic text-sm">{t.subTitle}</p>
        </div>

        {/* Right Side: Actionable Content */}
        <div className="md:w-3/5 p-10 relative">
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-300 hover:text-[#9a7b5c] transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!submitted ? (
            <div className="animate-in slide-in-from-right-4 duration-500">
              <h3 className="text-3xl font-black text-[#4a3728] mb-4 font-serif-logo leading-tight">
                {t.title}
              </h3>
              <p className="text-gray-500 mb-10 font-light text-base leading-relaxed">
                {t.desc}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.placeholder}
                  className="w-full px-8 py-5 bg-[#fcfaf7] border border-[#f0ede8] rounded-2xl focus:ring-4 focus:ring-[#9a7b5c]/10 focus:bg-white outline-none transition font-medium text-lg shadow-inner"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#4a3728] hover:bg-[#2d2621] text-white font-bold py-5 rounded-2xl transition transform hover:-translate-y-1 active:scale-95 shadow-2xl flex items-center justify-center text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : t.button}
                </button>
                
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-6">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {t.privacy}
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-16 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-[#9a7b5c] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#4a3728] mb-4 font-serif-logo">{t.thanksTitle}</h3>
              <p className="text-gray-500 font-light text-lg">{t.thanksDesc}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
