import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/Home";
import TherapyListScreen from "./screens/Therapy/List";

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/:category" component={TherapyListScreen} />
  </Switch>
);

export default App;
