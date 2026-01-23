
import React, { useState } from 'react';
import WaitlistModal from './components/WaitlistModal';
import Process from './components/Process';
import SuccessStory from './components/SuccessStory';
import Logo from './components/Logo';
import Team from './components/Team';
import LegalModal from './components/LegalModals';
import SupportChat from './components/SupportChat';

type Language = 'en' | 'es' | 'de';

const translations = {
  en: {
    nav: { about: "How it works", process: "Process", team: "Team", join: "Join Waitlist" },
    hero: {
      badge: "Mental wellbeing, redefined",
      titleStart: "Your mind deserves to be heard",
      titleItalic: "right now",
      description: "Meaningful support shouldn't be a luxury. We connect you with senior psychology students who provide a compassionate, safe space for your story.",
      inputPlaceholder: "Your email address",
      ctaButton: "Join & Apply Discount",
      offerBoxTitle: "EXCLUSIVE VOUCHER",
      offerBoxDiscount: "50% OFF",
      offerBoxSub: "ON YOUR FIRST SESSION",
      thanks: "Reserved! Check your email soon.",
      social: "Join 500+ people seeking a safer space."
    },
    features: {
      badge: "The Pluravita Way",
      title: "How Pluravita Works",
      subtitle: "We've built a bridge between academic excellence and those who need to be heard. No bureaucracy, just human connection.",
      students: "Fresh Expertise, Real Empathy",
      studentsDesc: "Our therapists are Master's or final-year students. They bring the latest clinical knowledge and, above all, the time and energy to truly listen to your story.",
      pricing: "Therapy That Respects Your Pocket",
      pricingDesc: "Quality mental healthcare often costs €80+. We’ve fixed that. By empowering students, we offer a high-standard alternative that everyone can afford.",
      pricingTag: "Affordable Care",
      speed: "Zero Friction, Immediate Space",
      speedDesc: "Stop waiting 20 weeks. We bypass the system's bottlenecks to offer you a safe space when you need it—which is usually right now."
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
      titleStart: "Tu mente merece ser escuchada",
      titleItalic: "hoy mismo",
      description: "El apoyo emocional no debería ser un lujo. Te conectamos con estudiantes avanzados de psicología que ofrecen un espacio seguro y compasivo para tu historia.",
      inputPlaceholder: "Tu correo electrónico",
      ctaButton: "Unirme y aplicar descuento",
      offerBoxTitle: "CUPÓN EXCLUSIVO",
      offerBoxDiscount: "50% DTO",
      offerBoxSub: "EN TU PRIMERA SESIÓN",
      thanks: "¡Reservado! Revisa tu email.",
      social: "Únete a +500 personas buscando un espacio seguro."
    },
    features: {
      badge: "El Efecto Pluravita",
      title: "Cómo funciona Pluravita",
      subtitle: "Hemos construido un puente entre la excelencia académica y quienes necesitan ser escuchados. Sin burocracia, solo conexión humana.",
      students: "Conocimiento fresco, Empatía real",
      studentsDesc: "Nuestros terapeutas son estudiantes de Máster o 4º curso. Aportan los últimos conocimientos clínicos y, sobre todo, el tiempo y la energía para escuchar de verdad.",
      pricing: "Terapia que respeta tu bolsillo",
      pricingDesc: "La salud mental de calidad suele costar más de 80€. Lo hemos cambiado. Empoderando a estudiantes, ofrecemos una alternativa de alto nivel para todos.",
      pricingTag: "Coste accesible",
      speed: "Cero fricción, Espacio inmediato",
      speedDesc: "Deja de esperar 20 semanas. Evitamos los cuellos de botella del sistema para ofrecerte un lugar seguro cuando más lo necesitas: ahora mismo."
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
      titleStart: "Dein Geist verdient es, gehört zu werden",
      titleItalic: "und zwar jetzt",
      description: "Sinnvolle Unterstützung sollte kein Luxus sein. Wir verbinden Sie mit Psychologiestudenten im Master, die einen sicheren Raum für Ihre Geschichte bieten.",
      inputPlaceholder: "Deine E-Mail-Adresse",
      ctaButton: "Beitreten & Rabatt anwenden",
      offerBoxTitle: "EXKLUSIVER GUTSCHEIN",
      offerBoxDiscount: "50% RABATT",
      offerBoxSub: "AUF DIE ERSTE SITZUNG",
      thanks: "Reserviert! Prüfen Sie Ihre E-Mails.",
      social: "Schließen Sie sich über 500 Personen an."
    },
    features: {
      badge: "Der Pluravita-Weg",
      title: "Wie Pluravita funktioniert",
      subtitle: "Wir haben eine Brücke zwischen akademischer Exzellenz und denjenigen geschlagen, die gehört werden müssen.",
      students: "Frisches Wissen, Echte Empathie",
      studentsDesc: "Unsere Therapeuten sind Master-Studenten. Sie bringen aktuelles klinisches Wissen und vor allem die Zeit mit, Ihnen wirklich zuzuhören.",
      pricing: "Therapie, die Ihr Budget schont",
      pricingDesc: "Qualitativ hochwertige Hilfe kostet oft 80€+. Wir haben das geändert. Durch die Einbindung von Studenten bieten wir eine bezahlbare Alternative.",
      pricingTag: "Bezahlbare Hilfe",
      speed: "Keine Wartezeit, Sofortige Hilfe",
      speedDesc: "Warten Sie nicht 20 Wochen. Wir bieten Hilfe, wenn Sie sie am dringendsten brauchen – und das ist meistens jetzt."
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
  const [lang, setLang] = useState<Language>('es');
  const [heroEmail, setHeroEmail] = useState('');
  const [heroSubscribed, setHeroSubscribed] = useState(false);
  const [isSubmittingHero, setIsSubmittingHero] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({ isOpen: false, type: 'privacy' });

  const t = translations[lang];

  const handleHeroSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (heroEmail && !isSubmittingHero) {
      setIsSubmittingHero(true);
      try {
        const response = await fetch('https://formspree.io/f/xldqwnej', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ email: heroEmail, source: 'Hero Striking Title' })
        });

        if (response.ok) {
          setHeroSubscribed(true);
          setHeroEmail('');
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsSubmittingHero(false);
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
      <nav className="fixed w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
                className="hidden sm:block bg-[#9a7b5c] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#86694e] transition shadow-md active:scale-95"
              >
                {t.nav.join}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-36 pb-20 md:pt-52 md:pb-32 px-4 bg-[#f9f6f2]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#9a7b5c] bg-opacity-10 text-[#9a7b5c] rounded-full text-xs font-bold mb-6 uppercase tracking-[0.2em]">
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#4a3728] mb-8 leading-[1.1] font-serif-logo">
              {t.hero.titleStart} <span className="text-[#9a7b5c] italic font-serif-logo font-normal">{t.hero.titleItalic}.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light mb-12">
              {t.hero.description}
            </p>

            {/* BOXED VOUCHER CALLOUT */}
            <div className="max-w-xl mx-auto lg:mx-0 mb-8 relative">
              {!heroSubscribed ? (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                  {/* The Voucher Box */}
                  <div className="bg-[#fcfaf7] border-2 border-dashed border-[#9a7b5c]/30 p-6 rounded-[2rem] mb-6 flex items-center gap-6 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#9a7b5c]/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                    <div className="bg-[#9a7b5c] text-white px-6 py-4 rounded-2xl flex flex-col items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <span className="text-3xl font-black font-serif-logo leading-none">{t.hero.offerBoxDiscount.split(' ')[0]}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{t.hero.offerBoxDiscount.split(' ')[1]}</span>
                    </div>
                    <div className="text-left">
                      <p className="text-[#9a7b5c] text-[10px] font-bold uppercase tracking-[0.3em] mb-1">{t.hero.offerBoxTitle}</p>
                      <p className="text-[#4a3728] font-bold text-xl font-serif-logo italic">{t.hero.offerBoxSub}</p>
                    </div>
                  </div>

                  {/* Main Form */}
                  <form onSubmit={handleHeroSubscribe} className="flex flex-col sm:flex-row gap-3 bg-white p-3 rounded-[2.5rem] shadow-2xl border border-white focus-within:ring-4 focus-within:ring-[#9a7b5c]/10 transition-all duration-500">
                    <input
                      type="email"
                      required
                      placeholder={t.hero.inputPlaceholder}
                      className="flex-1 px-8 py-4 bg-transparent outline-none text-gray-700 font-medium text-lg placeholder:text-gray-300"
                      value={heroEmail}
                      onChange={(e) => setHeroEmail(e.target.value)}
                      disabled={isSubmittingHero}
                    />
                    <button
                      type="submit"
                      disabled={isSubmittingHero}
                      className="bg-[#4a3728] hover:bg-[#2d2621] text-white px-10 py-5 rounded-[2rem] font-bold shadow-lg transition-all flex items-center justify-center whitespace-nowrap active:scale-95 text-lg"
                    >
                      {isSubmittingHero ? (
                        <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : t.hero.ctaButton}
                    </button>
                  </form>
                  <p className="mt-4 text-gray-400 text-sm font-medium italic lg:px-6">
                    ✨ {t.hero.social}
                  </p>
                </div>
              ) : (
                <div className="bg-white px-10 py-8 rounded-[3rem] border-2 border-[#9a7b5c]/20 text-[#9a7b5c] font-bold flex items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-xl">
                  <div className="bg-[#9a7b5c] text-white rounded-full p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xl">{t.hero.thanks}</span>
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-2/5 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(74,55,40,0.3)] border-[12px] border-white aspect-video bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/a6AtqACERTo?rel=0&modestbranding=1"
                title="¿QUE ES PLURAVITA?"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#9a7b5c] bg-opacity-10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#9a7b5c] bg-opacity-10 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <section id="how-it-works" className="py-24 bg-white border-y border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#9a7b5c] bg-opacity-10 text-[#9a7b5c] rounded-full text-xs font-bold mb-4 uppercase tracking-[0.2em]">
              {t.features.badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#4a3728] font-serif-logo italic">{t.features.title}</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-10 rounded-[3rem] bg-[#fdfaf6] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#9a7b5c] shadow-sm group-hover:bg-[#9a7b5c] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a3728] font-serif-logo leading-tight">{t.features.students}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{t.features.studentsDesc}</p>
            </div>

            <div className="relative p-10 rounded-[3rem] bg-[#fdfaf6] border border-[#9a7b5c]/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group scale-105 z-10">
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#9a7b5c] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">Most Valued</div>
              <div className="w-16 h-16 bg-[#9a7b5c] rounded-2xl flex items-center justify-center mb-8 text-white shadow-md transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a3728] font-serif-logo leading-tight">{t.features.pricing}</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">{t.features.pricingDesc}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#9a7b5c] font-serif-logo">{t.features.pricingTag}</span>
              </div>
            </div>

            <div className="relative p-10 rounded-[3rem] bg-[#fdfaf6] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#9a7b5c] shadow-sm group-hover:bg-[#9a7b5c] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a3728] font-serif-logo leading-tight">{t.features.speed}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{t.features.speedDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <Process lang={lang} />
      <SuccessStory lang={lang} />
      <Team lang={lang} />

      <SupportChat lang={lang} />

      {/* Footer */}
      <footer className="bg-[#2d2621] text-white py-24 px-4 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-8 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Logo isLight className="scale-150 origin-left" />
              </div>
              <p className="text-gray-400 max-w-sm mb-6 leading-relaxed font-light text-sm">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-[#9a7b5c] uppercase tracking-[0.25em] text-xs">Platform</h4>
              <ul className="space-y-5 text-gray-400 font-light text-sm">
                <li><button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollTo('process')} className="hover:text-white transition-colors">How it works</button></li>
                <li><button onClick={() => scrollTo('team')} className="hover:text-white transition-colors">Team</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-[#9a7b5c] uppercase tracking-[0.25em] text-xs">{t.footer.legal}</h4>
              <ul className="space-y-5 text-gray-400 font-light text-sm">
                <li><button onClick={() => openLegal('privacy')} className="hover:text-white transition-colors">{t.footer.privacy}</button></li>
                <li><button onClick={() => openLegal('terms')} className="hover:text-white transition-colors">{t.footer.terms}</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-xs tracking-widest uppercase font-medium">
            <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
