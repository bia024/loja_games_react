import axios from 'axios'

const BASE_URL = 'https://lojagames-nest.onrender.com'

export const api = axios.create({ baseURL: BASE_URL })

export const listar = async (url: string) => {
  const response = await api.get(url)
  return response.data
}

export const cadastrar = async <T>(url: string, dados: T) => {
  const response = await api.post(url, dados)
  return response.data
}

export const atualizar = async <T>(url: string, dados: T) => {
  const response = await api.put(url, dados)
  return response.data
}

export const deletar = async (url: string) => {
  const response = await api.delete(url)
  return response.data
}
