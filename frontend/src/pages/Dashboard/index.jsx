import React from "react";
import "./index.css";
import Header from "../../components/Header";

function Dashboard({ useMock = false }) {
  return (
    <section className="dashboard">
      {/* En-tête avec le prénom de l'utilisateur */}
      <Header userId={12} useMock={useMock} />

      <div className="dashboard-content">
        <div className="dashboard-left">
          {/* Contenu principal (graphique, infos...) à venir */}
          <p>Bloc de gauche (graphique, contenu principal...)</p>
        </div>

        <div className="dashboard-right">
          {/* Informations secondaires (cartes, résumé...) à venir */}
          <p>Bloc de droite (informations clés...)</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;