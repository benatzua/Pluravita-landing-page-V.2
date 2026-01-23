
import React from 'react';

interface TeamProps {
  lang: 'en' | 'es' | 'de';
}

const translations = {
  en: {
    badge: "The Team",
    title: "Team",
    desc: "We are dedicated to making mental health an accessible priority through innovation and human connection.",
    pedroBio: "Focuses on the clinical integrity of the platform, ensuring every session provides a safe and transformative space.",
    benatBio: "Passionate about leveraging technology to create bridges between academic excellence and real-world emotional support.",
    role: "CO-FOUNDER"
  },
  es: {
    badge: "El Equipo",
    title: "Equipo",
    desc: "Nos dedicamos a hacer de la salud mental una prioridad accesible mediante la innovación y la conexión humana.",
    pedroBio: "Se enfoca en la integridad clínica de la plataforma, asegurando que cada sesión sea un espacio seguro y transformador.",
    benatBio: "Apasionado por usar la tecnología para tender puentes entre la excelencia académica y el apoyo emocional real.",
    role: "CO-FUNDADOR"
  },
  de: {
    badge: "Das Team",
    title: "Team",
    desc: "Wir setzen uns dafür ein, mentale Gesundheit durch Innovation und menschliche Verbindung zugänglich zu machen.",
    pedroBio: "Konzentriert sich auf die klinische Integrität, damit jede Sitzung ein sicherer und transformativer Raum ist.",
    benatBio: "Begeistert davon, Technologie zu nutzen, um Brücken zwischen akademischer Exzellenz und emotionaler Hilfe zu schlagen.",
    role: "MITGRÜNDER"
  }
};

const Team: React.FC<TeamProps> = ({ lang }) => {
  const t = translations[lang];

  const members = [
    {
      name: "Pedro San Miguel",
      role: t.role,
      image: "input_file_0.png", // Primera foto (Pedro)
      description: t.pedroBio
    },
    {
      name: "Beñat Zuazubizkar",
      role: t.role,
      image: "input_file_1.png", // Segunda foto (Beñat)
      description: t.benatBio
    }
  ];

  return (
    <section id="team" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-[#9a7b5c] bg-opacity-10 text-[#9a7b5c] rounded-full text-sm font-semibold mb-4 uppercase tracking-widest">
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-serif-logo italic">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <div key={index} className="group flex flex-col items-center md:items-start">
              {/* Frame Style from input_file_0.png */}
              <div className="relative w-full overflow-hidden rounded-[3.5rem] aspect-[1/1.1] bg-[#fbf9f6] shadow-sm transition-all duration-700 group-hover:shadow-xl group-hover:-translate-y-2 border border-[#f0ede8]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2621]/90 via-[#2d2621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-white text-base font-light leading-relaxed italic">
                    "{member.description}"
                  </p>
                </div>
              </div>

              {/* Name and Role Decoration */}
              <div className="mt-10 w-full px-2">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-12 h-[1px] bg-[#9a7b5c]/60"></span>
                  <p className="text-[#9a7b5c] font-semibold text-[0.7rem] uppercase tracking-[0.25em]">
                    {member.role}
                  </p>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-[#4a3728] font-serif-logo leading-tight">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
