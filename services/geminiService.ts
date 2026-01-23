
import { GoogleGenAI } from "@google/genai";

// Ensure process.env is safely accessible to prevent runtime errors during initialization
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
    console.warn("API Key is missing, returning default supportive message.");
    return "I'm here for you. It sounds like things are tough right now. Would you like to tell me more, or perhaps join our waitlist to talk with one of our human student therapists?";
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
    console.error("Gemini Error:", error);
    return "I'm here for you. It sounds like things are tough right now. Would you like to tell me more, or perhaps join our waitlist to talk with one of our human student therapists?";
  }
};
