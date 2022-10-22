import "./css/App.css";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Hello World I'm</h2>
        <h1>Tiara Mendiola</h1>
        <h2>Front End Developer originally from Guam</h2>
      </header>
      <Portfolio />
      <footer>
        <p>This is the footer section</p>
      </footer>
    </div>
  );
}

export default App;
