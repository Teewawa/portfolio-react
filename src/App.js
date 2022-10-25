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
        <section>this is about the page</section>
        <section>this is anchor links to sections</section>
        <section>this is contact information and socials</section>
      </footer>
    </div>
  );
}

export default App;
