import React from "react";
// import { Counter } from "./Components/Lib/Counter";
// import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Test } from "./Components/Test";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navigation /> */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Test">Test</Link>
            </li>
          </ul>
        </nav>
        <Route exact={true} path="/" render={() => <h3>Home</h3>} />
        <Route path="/Test" component={Test} />

        {/* <Counter>
        {({count, setCount}) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter> */}
      </div>
    </Router>
  );
}

export default App;
