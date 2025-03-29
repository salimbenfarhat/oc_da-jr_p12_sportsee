import React from 'react';
import { getUserData } from '../../services/api';
import { formatUserData } from '../../utils/formatData';
import useUsersFetcher from '../../hooks/useUsersFetcher';
import { Link } from 'react-router-dom';
import "./index.css";

const userIds = [12, 18]; // On peut aussi les fetcher via une route dédiée si besoin

function Home() {
  // Récupération des données utilisateurs via le hook personnalisé
  const { users, error } = useUsersFetcher({
    userIds,
    useMock: false,
    fetchFn: getUserData,
    formatter: formatUserData,
  });

  // Gestion des erreurs
  if (error) {
    return (
      <div className="home-container">
        <h1>Erreur</h1>
        <p>{error}</p>
      </div>
    );
  }

  // Gestion du chargement
  if (!users.length) {
    return (
      <div className="home-container">
        <h1>Chargement...</h1>
      </div>
    );
  }

  // Affichage des utilisateurs sou forme de card une fois les données chargées
  return (
    <div className="home-container">
      <h1>Bienvenue sur SportSee</h1>
      <div className="card-grid">
        {users.map(user => (
          <Link key={user.id} to={`/dashboard/${user.id}`} className="user-card">
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Âge : {user.age}</p>
            <p>Score : {(user.score * 100).toFixed(0)}%</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;