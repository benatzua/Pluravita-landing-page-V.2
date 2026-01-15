
import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
  lang: 'en' | 'es' | 'de';
}

const content = {
  en: {
    privacy: {
      title: "Privacy Policy",
      body: `
        <p class="mb-4">At Pluravita, we take your privacy seriously. This policy describes how we collect and use your data.</p>
        <h4 class="font-bold mt-4 mb-2">1. Data Collection</h4>
        <p class="mb-4">We collect your email address solely for the purpose of our waitlist and to notify you of service availability. If you choose to book a session, we collect basic contact information.</p>
        <h4 class="font-bold mt-4 mb-2">2. Confidentiality</h4>
        <p class="mb-4">Conversations between you and our student therapists are strictly confidential, within the limits of the law and academic supervision. All students are bound by a professional code of ethics.</p>
        <h4 class="font-bold mt-4 mb-2">3. Data Security</h4>
        <p class="mb-4">We use industry-standard encryption to protect your data. We do not sell or share your personal information with third parties for marketing purposes.</p>
        <h4 class="font-bold mt-4 mb-2">4. Your Rights</h4>
        <p class="mb-4">You have the right to access, rectify, or delete your data at any time by contacting us at support@pluravita.com.</p>
      `
    },
    terms: {
      title: "Terms of Service",
      body: `
        <p class="mb-4">Please read these terms carefully before using the Pluravita platform.</p>
        <h4 class="font-bold mt-4 mb-2">1. Educational Nature of Service</h4>
        <p class="mb-4 text-red-600 font-semibold">Important: Pluravita is a platform that connects you with senior psychology students. These individuals are NOT yet licensed psychologists. The service is educational and supportive in nature.</p>
        <h4 class="font-bold mt-4 mb-2">2. Emergency Situations</h4>
        <p class="mb-4">Pluravita is not a crisis service. If you are experiencing a life-threatening emergency or thoughts of self-harm, please contact your local emergency services (e.g., 911, 112) or a crisis hotline immediately.</p>
        <h4 class="font-bold mt-4 mb-2">3. Fees and Payments</h4>
        <p class="mb-4">Sessions are priced at 20€ per session. Payments are processed securely via our platform. Refunds are handled on a case-by-case basis according to our cancellation policy.</p>
        <h4 class="font-bold mt-4 mb-2">4. User Conduct</h4>
        <p class="mb-4">Users agree to treat student therapists with respect. We reserve the right to terminate service for any abusive behavior.</p>
      `
    }
  },
  es: {
    privacy: {
      title: "Política de Privacidad",
      body: `
        <p class="mb-4">En Pluravita, nos tomamos muy en serio tu privacidad. Esta política describe cómo recopilamos y usamos tus datos.</p>
        <h4 class="font-bold mt-4 mb-2">1. Recopilación de Datos</h4>
        <p class="mb-4">Recopilamos tu dirección de correo electrónico únicamente con el fin de nuestra lista de espera y para notificarte sobre la disponibilidad del servicio.</p>
        <h4 class="font-bold mt-4 mb-2">2. Confidencialidad</h4>
        <p class="mb-4">Las conversaciones entre tú y nuestros terapeutas en formación son estrictamente confidenciales, dentro de los límites de la ley y la supervisión académica.</p>
        <h4 class="font-bold mt-4 mb-2">3. Seguridad</h4>
        <p class="mb-4">Utilizamos cifrado estándar de la industria para proteger tus datos. No vendemos ni compartimos tu información personal con terceros.</p>
      `
    },
    terms: {
      title: "Términos del Servicio",
      body: `
        <p class="mb-4">Por favor, lee estos términos detenidamente antes de usar la plataforma Pluravita.</p>
        <h4 class="font-bold mt-4 mb-2">1. Naturaleza Educativa del Servicio</h4>
        <p class="mb-4 text-red-600 font-semibold">Importante: Pluravita te conecta con estudiantes de psicología de último año o máster. Estas personas NO son aún psicólogos colegiados.</p>
        <h4 class="font-bold mt-4 mb-2">2. Situaciones de Emergencia</h4>
        <p class="mb-4">Pluravita no es un servicio de crisis. Si te encuentras en una situación de riesgo vital, contacta inmediatamente con el 112 o servicios de emergencia locales.</p>
        <h4 class="font-bold mt-4 mb-2">3. Tarifas</h4>
        <p class="mb-4">Las sesiones tienen un coste de 20€. Los pagos se realizan de forma segura a través de la plataforma.</p>
      `
    }
  },
  de: {
    privacy: {
      title: "Datenschutzerklärung",
      body: `
        <p class="mb-4">Bei Pluravita nehmen wir den Schutz Ihrer persönlichen Daten sehr ernst.</p>
        <h4 class="font-bold mt-4 mb-2">1. Datenerhebung</h4>
        <p class="mb-4">Wir erheben Ihre E-Mail-Adresse ausschließlich für unsere Warteliste.</p>
        <h4 class="font-bold mt-4 mb-2">2. Vertraulichkeit</h4>
        <p class="mb-4">Gespräche sind streng vertraulich im Rahmen der gesetzlichen Bestimmungen und akademischen Supervision.</p>
      `
    },
    terms: {
      title: "Nutzungsbedingungen",
      body: `
        <p class="mb-4">Bitte lesen Sie diese Bedingungen sorgfältig durch.</p>
        <h4 class="font-bold mt-4 mb-2">1. Ausbildungscharakter</h4>
        <p class="mb-4 text-red-600 font-semibold">Wichtig: Pluravita verbindet Sie mit Psychologiestudenten im fortgeschrittenen Studium. Diese sind noch KEINE approbierten Psychotherapeuten.</p>
        <h4 class="font-bold mt-4 mb-2">2. Notfälle</h4>
        <p class="mb-4">Pluravita ist kein Notfalldienst. In akuten Krisen wenden Sie sich bitte an den Notruf (112).</p>
      `
    }
  }
};

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type, lang }) => {
  if (!isOpen) return null;

  const t = content[lang][type];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col relative overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-[#f9f6f2]">
          <h3 className="text-2xl font-bold text-[#4a3728] font-serif-logo italic">{t.title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div 
          className="p-8 overflow-y-auto text-gray-700 leading-relaxed font-light text-sm"
          dangerouslySetInnerHTML={{ __html: t.body }}
        />
        <div className="p-6 bg-gray-50 text-right border-t border-gray-100">
          <button 
            onClick={onClose}
            className="bg-[#9a7b5c] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition shadow-sm"
          >
            {lang === 'es' ? 'Cerrar' : lang === 'de' ? 'Schließen' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
