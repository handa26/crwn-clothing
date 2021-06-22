import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const About = () => {
  return <h1>About page</h1>;
};

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={About} />
    </Switch>
  );
}

export default App;
