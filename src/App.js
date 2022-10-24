import "./css/App.css";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TIARA MENDIOLA</h1>
        <h2>front end developer</h2>
      </header>
      <Portfolio />
      <footer>
        <p>This is the footer section</p>
      </footer>
    </div>
  );
}

export default App;
