import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Test } from "./Components/Test";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Route exact={true} path="/" render={() => <h3>Home</h3>} />
        <Route path="/Test" component={Test} />
      </div>
    </Router>
  );
}

export default App;
