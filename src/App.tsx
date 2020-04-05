import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Test } from "./Components/Pages/Test/Test";
import { Navigation } from "./Components/Navigation/Navigation";
import { Todo } from "./Components/Pages/Todo/Todo";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/test" component={Test} />
          <Route path="/" render={() => <h3>Home</h3>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
