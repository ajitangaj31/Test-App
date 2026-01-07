
import { GoogleGenAI } from "@google/genai";

/**
 * Service to handle AI-generated personalized meditations
 * This will be used for the "AI Guided Journeys" premium feature.
 */
export const generateGuidedMeditation = async (userIntent: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a 5-minute guided meditation script for: ${userIntent}. 
                 Include deep breathing cues and focus on spiritual growth.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating AI meditation:", error);
    return null;
  }
};
