
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface SuccessStoryProps {
  lang: 'en' | 'es' | 'de';
}

const translations = {
  en: {
    badge: "Proven Excellence",
    title: "Inspired by the Finnish Model",
    desc: "Pluravita isn't just an idea—it's inspired by a highly successful initiative in Finland. By connecting students with those in need, the model reduced wait times drastically.",
    stat1: "Reduction in Wait Time",
    stat2: "More Sessions Yearly",
    chartTitle: "Impact on Wait Times",
    chartLabel1: "Before System",
    chartLabel2: "After System",
    disclaimer: "*Data based on Finnish mental health reports."
  },
  es: {
    badge: "Excelencia Probada",
    title: "Inspirado en el Modelo Finlandés",
    desc: "Pluravita se inspira en una iniciativa de gran éxito en Finlandia. Al conectar estudiantes con personas necesitadas, el modelo redujo los tiempos de espera drásticamente.",
    stat1: "Reducción de Esperas",
    stat2: "Sesiones Anuales Extra",
    chartTitle: "Impacto en Tiempos de Espera",
    chartLabel1: "Antes del Sistema",
    chartLabel2: "Después del Sistema",
    disclaimer: "*Datos basados en informes de salud mental de Finlandia."
  },
  de: {
    badge: "Bewährte Exzellenz",
    title: "Inspiriert vom finnischen Modell",
    desc: "Pluravita ist von einer erfolgreichen Initiative in Finnland inspiriert. Durch die Einbindung von Studenten konnten die Wartezeiten drastisch reduziert werden.",
    stat1: "Kürzere Wartezeit",
    stat2: "Mehr Sitzungen jährlich",
    chartTitle: "Einfluss auf Wartezeiten",
    chartLabel1: "Vor dem System",
    chartLabel2: "Nach dem System",
    disclaimer: "*Daten basierend auf finnischen Gesundheitsberichten."
  }
};

const SuccessStory: React.FC<SuccessStoryProps> = ({ lang }) => {
  const t = translations[lang];

  const chartData = [
    { name: t.chartLabel1, waitTime: 100, color: '#e5d3b3' },
    { name: t.chartLabel2, waitTime: 65, color: '#ffffff' },
  ];

  return (
    <section className="py-24 bg-[#9a7b5c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6">
              {t.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-serif-logo">
              {t.title}
            </h2>
            <p className="text-lg text-white text-opacity-80 mb-8 leading-relaxed font-light">
              {t.desc}
            </p>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-4xl md:text-6xl font-bold mb-1">35%</div>
                <div className="text-sm uppercase tracking-wider text-white text-opacity-60">{t.stat1}</div>
              </div>
              <div className="h-12 w-px bg-white bg-opacity-20"></div>
              <div>
                <div className="text-4xl md:text-6xl font-bold mb-1">Thousands</div>
                <div className="text-sm uppercase tracking-wider text-white text-opacity-60">{t.stat2}</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-[#fdfaf6] rounded-3xl p-8 shadow-2xl h-[400px] w-full border border-white/20">
            <h4 className="text-[#4a3728] font-bold mb-8 text-center text-xl font-serif-logo">{t.chartTitle}</h4>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9a7b5c'}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-2 shadow-lg rounded border border-gray-100">
                          <p className="text-[#4a3728] font-bold">{`${payload[0].value}% relative time`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="waitTime" radius={[10, 10, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color === '#ffffff' ? '#9a7b5c' : '#d2b48c'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-gray-400 text-sm text-center mt-4 italic">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
