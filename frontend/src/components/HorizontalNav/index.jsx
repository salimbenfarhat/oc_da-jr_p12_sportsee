import React from "react";
import "./index.css";
import logo from "../../assets/images/logo.png";

function HorizontalNav() {
  return (
    <>
      <nav className="horizontal-nav">
        {/* Logo à gauche */}
        <img src={logo} alt="SportSee Logo" className="horizontal-nav-logo" />
        {/* Liens de navigation */}
        <div className="horizontal-nav-links">
          <a href="/">Accueil</a>
          <a href="/profil">Profil</a>
          <a href="/reglage">Réglage</a>
          <a href="/communaute">Communauté</a>
        </div>
      </nav>
    </>
  );
}

export default HorizontalNav;
