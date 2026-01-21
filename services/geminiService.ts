
import { GoogleGenAI } from "@google/genai";

// Acceso seguro a la API Key para evitar errores de referencia inmediatos
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

export const getSupportiveResponse = async (userMessage: string) => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    console.warn("Pluravita: No se encontró la API Key de Gemini. Usando respuestas de respaldo.");
    return "Estoy aquí para escucharte. Parece que las cosas son difíciles ahora mismo. ¿Te gustaría contarme más o quizás unirte a nuestra lista de espera para hablar con uno de nuestros estudiantes de psicología?";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are a gentle, empathetic AI assistant for Pluravita. Pluravita is a platform connecting senior psychology students (4th year/Master's) with people who need a safe space. Your goal is to listen, validate feelings, and encourage them to join the waitlist to talk to a human student therapist. Keep responses brief, warm, and supportive. Do not provide medical advice or therapy yourself.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error en Gemini:", error);
    return "Lo siento, estoy teniendo problemas para conectar ahora mismo. Pero recuerda que no estás solo/a y estamos aquí para apoyarte.";
  }
};
