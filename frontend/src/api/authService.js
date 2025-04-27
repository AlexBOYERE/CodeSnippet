import axios from 'axios'

const API_AUTH_URL = import.meta.env.API_AUTH_URL;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_AUTH_URL}/login`, { email, password })
    return response.data
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erreur de connexion')
  }
}

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/register`, {
      name,
      email,
      password,
    })
    return response.data
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erreur de l\'inscription')
  }
}
