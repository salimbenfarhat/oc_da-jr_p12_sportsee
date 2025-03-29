import axios from 'axios';

// Configurer une instance axios
const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour récupérer les données utilisateur
export const getUserData = async (userId) => {
  try {
    const response = await apiClient.get(`/user/${userId}`);
    return response.data.data; // Retourne uniquement les données utiles
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur :', error);
    throw error; // Propager l'erreur pour gestion dans les composants
  }
};

// Fonction pour récupérer les données d'activité quotidienne
export const getUserActivity = async (userId) => {
  try {
    const response = await apiClient.get(`/user/${userId}/activity`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données d’activité :', error);
    throw error;
  }
};

// Fonction pour récupérer les données de sessions moyennes
export const getUserAverageSessions = async (userId) => {
  try {
    const response = await apiClient.get(`/user/${userId}/average-sessions`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des sessions moyennes :', error);
    throw error;
  }
};

// Fonction pour récupérer les données de performances
export const getUserPerformance = async (userId) => {
  try {
    const response = await apiClient.get(`/user/${userId}/performance`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des performances :', error);
    throw error;
  }
};
