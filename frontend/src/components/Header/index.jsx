import React from 'react';
import { getUserData } from '../../services/api';
import { mockUserData } from '../../mocks/mockData'; // Mock pour le développement
import { formatUserData } from '../../utils/formatData'; // Standardisation des données
import useUserDataFetcher from '../../hooks/useUserDataFetcher';
import './index.css';

function Header({ useMock, userId }) {
  // Récupération des données utilisateur via le hook personnalisé
  const { data, error } = useUserDataFetcher({
    userId,
    useMock,
    fetchFn: getUserData,
    mockData: mockUserData,
    formatter: formatUserData,
  });

  // Gestion des erreurs
  if (error) {
    return (
      <header className="dashboard-header">
        <h1>Erreur</h1>
        <p>{error}</p>
      </header>
    );
  }

  // Gestion du chargement
  if (!data) {
    return (
      <header className="dashboard-header">
        <h1>Chargement...</h1>
      </header>
    );
  }

  // Affichage du prénom une fois récupéré
  return (
    <header className="dashboard-header">
      <h1>
        Bonjour <span className="user-name">{data.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

export default Header;