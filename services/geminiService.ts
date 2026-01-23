
import { GoogleGenAI } from "@google/genai";

export const getSupportiveResponse = async (userMessage: string) => {
  const apiKey = process.env.API_KEY;

  if (!apiKey || apiKey === "") {
    console.warn("API Key is missing or empty. Using fallback message.");
    return "I'm here for you. It sounds like things are tough right now. Our student therapists are ready to listen whenever you're ready to join the waitlist.";
  }

  try {
    // Correct initialization as per Google GenAI SDK rules
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are a gentle, empathetic AI assistant for Pluravita. Pluravita is a platform connecting senior psychology students with people who need a safe space. Your goal is to listen, validate feelings, and encourage them to join the waitlist to talk to a human student therapist. Keep responses brief, warm, and supportive. Do not provide medical advice or therapy yourself.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm here for you. It sounds like things are tough right now. Feel free to explore our platform or join our waitlist to talk with one of our human student therapists.";
  }
};
