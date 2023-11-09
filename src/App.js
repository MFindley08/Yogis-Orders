import hero from "./hero.png";
import logo from "./logo.png";
import alternate from "./logoSmall.png";
import "./App.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <div className="App">
        <div className="container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img
              src={alternate}
              className="Small-logo img-fluid"
              alt="small logo"
            />
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
    </Container>
  );
}

export default App;
