import "./css/App.css";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <header>
        <h2>front end developer</h2>
        <h1>tiara mendiola</h1>
        <span className="nav">
          <a href="#featured">FEATURED</a> |{" "}
          <a href="#certificates">CERTIFICATES</a> |{" "}
          <a href="#experience">EXPERIENCE</a> | <a href="#contact">CONTACT</a>
        </span>
      </header>
      <Portfolio />
      <footer id="contact">
        <section>this is about the page</section>
        <section>this is anchor links to sections</section>
        <section>this is contact information and socials</section>
      </footer>
    </div>
  );
}

export default App;
