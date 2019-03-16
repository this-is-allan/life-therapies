import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/Home";

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeScreen} />
  </Switch>
);

export default App;
