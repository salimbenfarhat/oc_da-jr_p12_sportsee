import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HorizontalNav from "./components/HorizontalNav";
import VerticalNav from "./components/VerticalNav";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  // Vérifie la taille de l'écran
  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 1024 || window.innerHeight < 780;
      setIsScreenSmall(isSmall);
    };

    checkScreenSize(); // Vérifie la taille d'écran lors du chargement
    window.addEventListener("resize", checkScreenSize); // Surveille les changements de taille
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Si l'écran est trop petit, affiche un message couvrant toute la page
  if (isScreenSmall) {
    return (
      <div className="screen-too-small">
        <p>
          Veuillez utiliser un écran avec une résolution de 1024x780 pixels ou
          plus.
        </p>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <header>
          <HorizontalNav />
        </header>
        <main className="main-content">
          <aside>
            <VerticalNav />
          </aside>
          <section className="dashboard-section">
            <Routes>
              <Route path="/dashboard/:id" element={<Dashboard />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
