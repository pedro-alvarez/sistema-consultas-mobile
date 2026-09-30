import axios, { AxiosError } from "axios";

// =============================================================================
// 🔧 CONFIGURAÇÃO DO AMBIENTE - TROQUE AQUI CONFORME O CENÁRIO
//
//  LOCAL (backend no seu computador):
//    const BASE_URL = "http://localhost:8080";
//
//  CELULAR FÍSICO → backend local na mesma rede Wi-Fi:
//    const BASE_URL = "http://192.168.x.x:8080";
//
//  APK com backend publicado no Render:
//    const BASE_URL = "https://SEU-SERVICO.onrender.com";
//
// =============================================================================
const BASE_URL = "https://backend-consultas-4aru.onrender.com"; // backend publicado no Render

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000, // 15s - suficiente para o cold start do Render free tier
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

export function isNetworkError(error: unknown): boolean {
  if (error instanceof AxiosError) {
    return !error.response;
  }
  return false;
}

export async function healthCheck(): Promise<boolean> {
  try {
    await axios.get(`${BASE_URL}/health`, { timeout: 8000 });
    return true;
  } catch {
    return false;
  }
}
