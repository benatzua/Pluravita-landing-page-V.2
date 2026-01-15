
import { GoogleGenAI } from "@google/genai";

// Always use process.env.API_KEY directly without fallback as per @google/genai guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSupportiveResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are a gentle, empathetic AI assistant for Pluravita. Pluravita is a platform connecting senior psychology students (4th year/Master's) with people who need a safe space. Your goal is to listen, validate feelings, and encourage them to join the waitlist to talk to a human student therapist. Keep responses brief, warm, and supportive. Do not provide medical advice or therapy yourself.",
        temperature: 0.7,
      },
    });
    // The response.text is a property, not a method.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm here for you. It sounds like things are tough right now. Would you like to tell me more, or perhaps join our waitlist to talk with one of our human student therapists?";
  }
};
