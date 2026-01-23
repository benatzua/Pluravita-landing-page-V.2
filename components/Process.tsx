
import React from 'react';
import { Step } from '../types';

interface ProcessProps {
  lang: 'en' | 'es' | 'de';
}

const translations = {
  en: {
    badge: "The Process",
    title: "How it works",
    desc: "Your path to emotional wellbeing is paved with simplicity. Four steps to finding your safe space.",
    steps: [
      { id: 1, title: "Choose Your Topic", description: "Select the area where you feel you need support—whether it's loneliness, academic pressure, or just needing someone to listen.", icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" },
      { id: 2, title: "Select Your Therapist", description: "Browse through our network of advanced psychology students and find the one whose background resonates with your story.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
      { id: 3, title: "Pick Your Time", description: "Our flexible scheduling system allows you to find a slot that perfectly fits your daily routine without any stress.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { id: 4, title: "Enjoy Your Session", description: "Secure your session with a simple payment and enter your safe space. No complex paperwork, just meaningful conversation.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }
    ]
  },
  es: {
    badge: "El Proceso",
    title: "Cómo funciona",
    desc: "Tu camino hacia el bienestar emocional es sencillo. Cuatro pasos para encontrar tu espacio seguro.",
    steps: [
      { id: 1, title: "Elige tu tema", description: "Selecciona el área donde necesitas apoyo, ya sea soledad, presión académica o simplemente alguien que escuche.", icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" },
      { id: 2, title: "Elige a tu terapeuta", description: "Explora nuestra red de estudiantes avanzados de psicología y encuentra a alguien que conecte con tu historia.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
      { id: 3, title: "Elige la hora", description: "Nuestro sistema flexible te permite encontrar un horario que se adapte perfectamente a tu rutina diaria sin estrés.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { id: 4, title: "Disfruta tu sesión", description: "Asegura tu sesión con un pago sencillo y entra en tu espacio seguro. Sin trámites complejos, solo conversación real.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }
    ]
  },
  de: {
    badge: "Der Ablauf",
    title: "So funktioniert's",
    desc: "Ihr Weg zum emotionalen Wohlbefinden ist einfach. In vier Schritten zu Ihrem sicheren Raum.",
    steps: [
      { id: 1, title: "Thema wählen", description: "Wählen Sie den Bereich, in dem Sie Unterstützung benötigen – egal ob Einsamkeit, Leistungsdruck oder einfach Redebedarf.", icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" },
      { id: 2, title: "Therapeut wählen", description: "Durchsuchen Sie unser Netzwerk von Psychologiestudenten und finden Sie jemanden, der zu Ihrer Geschichte passt.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
      { id: 3, title: "Termin buchen", description: "Unser flexibles System ermöglicht es Ihnen, stressfrei einen Slot zu finden, der perfekt in Ihren Alltag passt.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { id: 4, title: "Sitzung genießen", description: "Sichern Sie Ihre Sitzung mit einer einfachen Zahlung. Keine Bürokratie, nur ein wertvolles Gespräch.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }
    ]
  }
};

const Process: React.FC<ProcessProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#9a7b5c] bg-opacity-10 text-[#9a7b5c] rounded-full text-sm font-semibold mb-4 uppercase tracking-widest">
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-serif-logo">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step) => (
            <div key={step.id} className="flex flex-col h-full bg-[#f9f6f2] rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#9a7b5c]/20 transition-all duration-500 group relative">
              <div className="absolute top-6 right-8 text-7xl font-serif-logo text-[#9a7b5c] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none select-none">
                0{step.id}
              </div>

              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#9a7b5c] shadow-sm border border-gray-50 group-hover:bg-[#9a7b5c] group-hover:text-white transition-all duration-300 transform group-hover:scale-110 relative z-10">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon} />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif-logo leading-tight relative z-10">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm font-light relative z-10">
                {step.description}
              </p>

              {step.id < 4 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-200 group-hover:text-[#9a7b5c] group-hover:opacity-30 transition-all">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
