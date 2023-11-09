import React from "react";
import hero from "./hero.png";
import "./App.css";
import "./index.css";
import Container from "react-bootstrap/Container";
import Navbar from "./Navbar.js";

function App() {
  return (
    <Container>
      <div className="App">
        <div className="container">
          <header className="App-header">
            <Navbar></Navbar>
          </header>
          <hero>
            <h1 className="App-h1">Resilience Peace Recovery</h1>
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
