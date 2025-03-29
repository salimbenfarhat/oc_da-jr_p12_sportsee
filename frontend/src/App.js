import HorizontalNav from "./components/HorizontalNav";
import VerticalNav from "./components/VerticalNav";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <HorizontalNav />
      </header>
      <main className="main-content">
        <aside>
          <VerticalNav />
        </aside>
      </main>
    </div>
  );
}

export default App;
