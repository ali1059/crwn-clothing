import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => <h1>HATS PAGE</h1>;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
