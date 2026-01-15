
import React, { useState } from 'react';
import WaitlistModal from './components/WaitlistModal';
import Process from './components/Process';
import SuccessStory from './components/SuccessStory';
import Logo from './components/Logo';
import Team from './components/Team';
import LegalModal from './components/LegalModals';

type Language = 'en' | 'es' | 'de';

const translations = {
  en: {
    nav: { about: "How it works", process: "Ablauf", team: "Team", join: "Join Waitlist" },
    hero: {
      badge: "Mental wellbeing, redefined",
      titleStart: "Your mental wellbeing shouldn't be a",
      titleItalic: "waiting game",
      description: "Meaningful support shouldn't be a luxury. We connect you with senior psychology students who provide a compassionate, safe space for your story, inspired by proven global models.",
      priceSub: "Per Session",
      badgeTitle: "Your space to talk",
      badgeSub: "By senior psychology students"
    },
    features: {
      badge: "The Pluravita Way",
      title: "How Pluravita Works",
      subtitle: "We've built a bridge between academic excellence and those who need to be heard. No bureaucracy, just human connection.",
      students: "Fresh Expertise, Real Empathy",
      studentsDesc: "Our therapists are Master's or final-year students. They bring the latest clinical knowledge and, above all, the time and energy to truly listen to your story.",
      pricing: "Therapy That Respects Your Pocket",
      pricingDesc: "Quality mental healthcare often costs €80+. We’ve fixed that. By empowering students, we offer a high-standard alternative that everyone can afford.",
      pricingSub: "/ session",
      speed: "Zero Friction, Immediate Space",
      speedDesc: "Stop waiting 20 weeks. We bypass the system's bottlenecks to offer you a safe space when you need it—which is usually right now."
    },
    cta: {
      title: "Ready to talk?",
      desc: "Be the first to know when a therapist becomes available. We are slowly opening slots to ensure the best care for everyone.",
      placeholder: "Your email address",
      button: "Join the Waitlist",
      loading: "Joining...",
      thanks: "Thank you! We'll be in touch soon.",
      disclaimer: "By joining, you agree to receive updates. You can unsubscribe at any time."
    },
    footer: {
      desc: "Redefining mental healthcare accessibility through a sustainable bridge between education and emotional support.",
      copyright: "Pluravita Project. All rights reserved. In case of emergency, contact your local crisis hotline.",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  es: {
    nav: { about: "Cómo funciona", process: "Proceso", team: "Equipo", join: "Lista de espera" },
    hero: {
      badge: "Redefiniendo el bienestar mental",
      titleStart: "Tu bienestar mental no debería ser una",
      titleItalic: "lista de espera",
      description: "El apoyo emocional no debería ser un lujo. Te conectamos con estudiantes avanzados de psicología que ofrecen un espacio seguro y compasivo para tu historia.",
      priceSub: "Por sesión",
      badgeTitle: "Tu espacio para hablar",
      badgeSub: "Con estudiantes de último año"
    },
    features: {
      badge: "El Efecto Pluravita",
      title: "Cómo funciona Pluravita",
      subtitle: "Hemos construido un puente entre la excelencia académica y quienes necesitan ser escuchados. Sin burocracia, solo conexión humana.",
      students: "Conocimiento fresco, Empatía real",
      studentsDesc: "Nuestros terapeutas son estudiantes de Máster o 4º curso. Aportan los últimos conocimientos clínicos y, sobre todo, el tiempo y la energía para escuchar de verdad.",
      pricing: "Terapia que respeta tu bolsillo",
      pricingDesc: "La salud mental de calidad suele costar más de 80€. Lo hemos cambiado. Empoderando a estudiantes, ofrecemos una alternativa de alto nivel para todos.",
      pricingSub: "/ sesión",
      speed: "Cero fricción, Espacio inmediato",
      speedDesc: "Deja de esperar 20 semanas. Evitamos los cuellos de botella del sistema para ofrecerte un lugar seguro cuando más lo necesitas: ahora mismo."
    },
    cta: {
      title: "¿Necesitas hablar?",
      desc: "Sé el primero en saber cuándo hay un terapeuta disponible. Abrimos plazas gradualmente para garantizar la mejor atención.",
      placeholder: "Tu correo electrónico",
      button: "Unirse a la lista",
      loading: "Uniéndote...",
      thanks: "¡Gracias! Nos pondremos en contacto pronto.",
      disclaimer: "Al unirte, aceptas recibir actualizaciones. Puedes darte de baja en cualquier momento."
    },
    footer: {
      desc: "Redefiniendo el acceso a la salud mental mediante un puente sostenible entre la formación y el apoyo emocional.",
      copyright: "Proyecto Pluravita. Todos los derechos reservados. En caso de emergencia, contacte con emergencias.",
      legal: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos del Servicio"
    }
  },
  de: {
    nav: { about: "Wie es funktioniert", process: "Ablauf", team: "Team", join: "Warteliste" },
    hero: {
      badge: "Mentale Gesundheit neu gedacht",
      titleStart: "Deine mentale Gesundheit sollte kein",
      titleItalic: "Wartespiel sein",
      description: "Sinnvolle Unterstützung sollte kein Luxus sein. Wir verbinden Sie mit Psychologiestudenten im Master, die einen sicheren Raum für Ihre Geschichte bieten.",
      priceSub: "Pro Sitzung",
      badgeTitle: "Dein Raum zum Reden",
      badgeSub: "Von fortgeschrittenen Studenten"
    },
    features: {
      badge: "Der Pluravita-Weg",
      title: "Wie Pluravita funktioniert",
      subtitle: "Wir haben eine Brücke zwischen akademischer Exzellenz und denjenigen geschlagen, die gehört werden müssen.",
      students: "Frisches Wissen, Echte Empathie",
      studentsDesc: "Unsere Therapeuten sind Master-Studenten. Sie bringen aktuelles klinisches Wissen und vor allem die Zeit mit, Ihnen wirklich zuzuhören.",
      pricing: "Therapie, die Ihr Budget schont",
      pricingDesc: "Qualitativ hochwertige Hilfe kostet oft 80€+. Wir haben das geändert. Durch die Einbindung von Studenten bieten wir eine bezahlbare Alternative.",
      pricingSub: "/ Sitzung",
      speed: "Keine Wartezeit, Sofortige Hilfe",
      speedDesc: "Warten Sie nicht 20 Wochen. Wir bieten Hilfe, wenn Sie sie am dringendsten brauchen – und das ist meistens jetzt."
    },
    cta: {
      title: "Bereit zu reden?",
      desc: "Erfahren Sie als Erster, wenn ein Therapieplatz frei wird. Wir öffnen Plätze schrittweise, um beste Qualität zu garantieren.",
      placeholder: "Deine E-Mail-Adresse",
      button: "Auf die Warteliste",
      loading: "Wird beigefügt...",
      thanks: "Danke! Wir melden uns bald.",
      disclaimer: "Mit Ihrer Anmeldung erklären Sie sich mit Updates einverstanden. Abmeldung jederzeit möglich."
    },
    footer: {
      desc: "Wir machen mentale Gesundheit zugänglich durch eine nachhaltige Brücke zwischen Ausbildung und emotionaler Hilfe.",
      copyright: "Pluravita Projekt. Alle Rechte vorbehalten. In Notfällen wenden Sie sich an den Krisendienst.",
      legal: "Rechtliches",
      privacy: "Datenschutz",
      terms: "AGB"
    }
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [bottomEmail, setBottomEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({ isOpen: false, type: 'privacy' });

  const t = translations[lang];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (bottomEmail && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/xldqwnej', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ email: bottomEmail, source: 'Footer Lead collector' })
        });
        
        if (response.ok) {
          setSubscribed(true);
          setBottomEmail('');
        }
      } catch (error) {
        console.error("Error submitting bottom form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openLegal = (type: 'privacy' | 'terms') => {
    setLegalModal({ isOpen: true, type });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#9a7b5c]/30">
      <WaitlistModal lang={lang} isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
      <LegalModal 
        lang={lang} 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={() => setLegalModal(prev => ({ ...prev, isOpen: false }))} 
      />
      
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <Logo />
            </div>
            
            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex items-center gap-6">
                <button onClick={() => scrollTo('how-it-works')} className="text-gray-600 hover:text-[#9a7b5c] transition font-medium">{t.nav.about}</button>
                <button onClick={() => scrollTo('process')} className="text-gray-600 hover:text-[#9a7b5c] transition font-medium">{t.nav.process}</button>
                <button onClick={() => scrollTo('team')} className="text-gray-600 hover:text-[#9a7b5c] transition font-medium">{t.nav.team}</button>
              </div>
              
              <div className="flex bg-gray-100 p-1 rounded-full text-xs font-bold">
                {(['en', 'es', 'de'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1 rounded-full transition-colors uppercase ${lang === l ? 'bg-white text-[#9a7b5c] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setIsWaitlistModalOpen(true)}
                className="hidden sm:block bg-[#9a7b5c] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition shadow-sm"
              >
                {t.nav.join}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-36 pb-20 md:pt-52 md:pb-32 px-4 bg-[#f9f6f2]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#9a7b5c] bg-opacity-10 text-[#9a7b5c] rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#4a3728] mb-8 leading-[1.1] font-serif-logo">
              {t.hero.titleStart} <span className="text-[#9a7b5c] italic font-serif-logo font-normal">{t.hero.titleItalic}.</span>
            </h1>
            
            <div className="space-y-8 mb-4">
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                {t.hero.description}
              </p>
              
              <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-1 bg-white rounded-3xl border border-[#9a7b5c]/10 shadow-sm pr-8">
                <div className="bg-[#9a7b5c] text-white px-8 py-4 rounded-[22px] flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold font-serif-logo">20€</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">{t.hero.priceSub}</span>
                </div>
                <div className="text-left py-2">
                  <p className="text-[#4a3728] font-medium text-lg leading-tight italic font-serif-logo">{t.hero.badgeTitle}</p>
                  <p className="text-gray-500 text-sm italic font-light">{t.hero.badgeSub}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1000&auto=format&fit=crop" alt="Healing space" className="w-full h-auto grayscale-[20%] sepia-[10%] opacity-90" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#9a7b5c] bg-opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#9a7b5c] bg-opacity-10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </header>

      {/* How it Works Section (Catchy Upgrade) */}
      <section id="how-it-works" className="py-24 bg-white border-y border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#9a7b5c] bg-opacity-10 text-[#9a7b5c] rounded-full text-sm font-semibold mb-4 uppercase tracking-widest">
              {t.features.badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#4a3728] font-serif-logo italic">{t.features.title}</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-10 rounded-[2.5rem] bg-[#fdfaf6] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#9a7b5c] shadow-sm group-hover:bg-[#9a7b5c] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a3728] font-serif-logo leading-tight">{t.features.students}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{t.features.studentsDesc}</p>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="text-xs font-bold text-[#9a7b5c] uppercase tracking-widest">Pillar 01</span>
              </div>
            </div>
            
            <div className="relative p-10 rounded-[2.5rem] bg-[#fdfaf6] border border-[#9a7b5c]/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group scale-105 z-10">
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#9a7b5c] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Valued</div>
              <div className="w-16 h-16 bg-[#9a7b5c] rounded-2xl flex items-center justify-center mb-8 text-white shadow-md transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a3728] font-serif-logo leading-tight">{t.features.pricing}</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">{t.features.pricingDesc}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-[#9a7b5c] font-serif-logo">20€</span>
                <span className="text-sm font-normal text-gray-400 uppercase tracking-widest">{t.features.pricingSub}</span>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="text-xs font-bold text-[#9a7b5c] uppercase tracking-widest">Pillar 02</span>
              </div>
            </div>

            <div className="relative p-10 rounded-[2.5rem] bg-[#fdfaf6] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#9a7b5c] shadow-sm group-hover:bg-[#9a7b5c] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a3728] font-serif-logo leading-tight">{t.features.speed}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{t.features.speedDesc}</p>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="text-xs font-bold text-[#9a7b5c] uppercase tracking-widest">Pillar 03</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process lang={lang} />
      <SuccessStory lang={lang} />
      <Team lang={lang} />

      {/* Bottom Lead Collector */}
      <section id="join" className="py-24 bg-[#f9f6f2] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4a3728] mb-6 font-serif-logo italic">{t.cta.title}</h2>
          <p className="text-lg text-gray-600 mb-10 font-light">{t.cta.desc}</p>
          
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                name="email"
                required
                placeholder={t.cta.placeholder}
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-[#9a7b5c] outline-none shadow-sm"
                value={bottomEmail}
                onChange={(e) => setBottomEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#9a7b5c] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#86694e] transition transform hover:-translate-y-1 flex items-center justify-center min-w-[180px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.cta.loading}
                  </>
                ) : t.cta.button}
              </button>
            </form>
          ) : (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#9a7b5c]/20 inline-block">
              <div className="flex items-center gap-3 text-[#9a7b5c] font-semibold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{t.cta.thanks}</span>
              </div>
            </div>
          )}
          <p className="mt-6 text-gray-400 text-xs italic">{t.cta.disclaimer}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2621] text-white py-20 px-4 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-8 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <Logo isLight className="scale-125 origin-left" />
              </div>
              <p className="text-gray-400 max-w-sm mb-6 leading-relaxed font-light">{t.footer.desc}</p>
            </div>
            {/* Simple footer links */}
            <div>
              <h4 className="font-bold mb-6 text-[#9a7b5c] uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4 text-gray-400 font-light text-sm">
                <li><button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition">About</button></li>
                <li><button onClick={() => scrollTo('process')} className="hover:text-white transition">How it works</button></li>
                <li><button onClick={() => scrollTo('team')} className="hover:text-white transition">Team</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#9a7b5c] uppercase tracking-widest text-xs">{t.footer.legal}</h4>
              <ul className="space-y-4 text-gray-400 font-light text-sm">
                <li><button onClick={() => openLegal('privacy')} className="hover:text-white transition">{t.footer.privacy}</button></li>
                <li><button onClick={() => openLegal('terms')} className="hover:text-white transition">{t.footer.terms}</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p className="font-light">&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
