import axios from 'axios'

/**
 * Axios client for the Doctor Aramis backend.
 * Configure NEXT_PUBLIC_API_BASE_URL in your environment.
 */
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
})

// Attach auth token if present (client-side only).
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('aramis_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

export interface EcgResult {
  diagnosis: string
  confidence: number
  heartRate: number
  riskLevel: 'low' | 'moderate' | 'high'
  summary: string
}

export interface EcgHistoryItem {
  id: string
  date: string
  diagnosis: string
  confidence: number
  heartRate: number
  riskLevel: 'low' | 'moderate' | 'high'
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
}

/** POST /api/ecg/analyze/ */
export async function analyzeEcg(file: File): Promise<EcgResult> {
  const form = new FormData()
  form.append('image', file)
  const { data } = await api.post<EcgResult>('/ecg/analyze/', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return data
}

/** GET /api/ecg/history/ */
export async function getEcgHistory(): Promise<EcgHistoryItem[]> {
  const { data } = await api.get<EcgHistoryItem[]>('/ecg/history/')
  return data
}

/** POST /api/chatbot/ */
export async function sendChatMessage(
  message: string,
  history: ChatMessage[],
): Promise<{ reply: string }> {
  const { data } = await api.post<{ reply: string }>('/chatbot/', {
    message,
    history,
  })
  return data
}

/** POST /api/auth/login/ */
export async function login(email: string, password: string) {
  const { data } = await api.post('/auth/login/', { email, password })
  return data
}

/** POST /api/auth/register/ */
export async function register(payload: {
  name: string
  email: string
  password: string
}) {
  const { data } = await api.post('/auth/register/', payload)
  return data
}
