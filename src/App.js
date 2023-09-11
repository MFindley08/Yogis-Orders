import hero from "./hero.png";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <hero>
          <img src={hero} className="App-hero" alt="yoga balanced in nature" />
          <h1>
            Injury and Illness Recovery
          </h1>
        </hero>
      </div>
    </div>
  );
}

export default App;
