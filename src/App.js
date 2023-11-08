import hero from "./hero.png";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <hero>
          <h1 className="App-h1">Injury and Illness Recovery</h1>
          <img
            src={hero}
            className="App-hero img-fluid"
            alt="yoga balanced in nature hero"
          />
        </hero>
      </div>
    </div>
  );
}

export default App;
