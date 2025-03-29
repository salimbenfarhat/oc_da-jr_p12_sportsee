// Formatte les données utilisateur
export const formatUserData = (data) => {
  return {
    id: data.id,
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
    score: data.todayScore || data.score,
    keyData: data.keyData,
  };
};

// Formatte les données d'activité
export const formatUserActivity = (data) => {
  return data.sessions.map((session) => ({
    day: session.day,
    kilogram: session.kilogram,
    calories: session.calories,
  }));
};

// Formatte les données des sessions moyennes
export const formatUserAverageSessions = (data) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return data.sessions.map((session) => ({
    day: days[session.day - 1], // Convertit le numéro en lettre (par exemple, 1 devient "L" pour lundi)
    sessionLength: session.sessionLength,
  }));
};

// Dictionnaire de traduction des types d'activité
const PERFORMANCE_KIND_TRANSLATIONS = {
  cardio: "Cardio",
  energy: "Énergie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

// Formatte les performances utilisateur
export const formatUserPerformance = (data) => {
  return data.data.map((item) => ({
    value: item.value,
    kind: PERFORMANCE_KIND_TRANSLATIONS[data.kind[item.kind]] || data.kind[item.kind],
  }));
};