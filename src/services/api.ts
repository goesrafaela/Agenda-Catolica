// api.ts
import axios from "axios";

// Definir a URL da sua API
const API_URL = "mongodb+srv://goesrafaelasilva:MISgKXsfFTEOgwwG@dailyreadings.ziwor.mongodb.net/?retryWrites=true&w=majority&appName=dailyreadings"; // Substitua pela URL real da sua API

// Função para buscar as leituras diárias
export const fetchDailyReadings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao carregar as leituras diárias.");
  }
};
