import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/Home";
import TherapyListScreen from "./screens/Therapy/List";
import TherapyShowScreen from "./screens/Therapy/Show";

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/therapies" component={TherapyListScreen} />
    <Route exact path="/therapies/page=:page" component={TherapyListScreen} />
    <Route exact path="/:category/" component={TherapyListScreen} />
    <Route exact path="/:category/page=:page" component={TherapyListScreen} />
    <Route exact path="/:category/:id" component={TherapyShowScreen} />
  </Switch>
);

export default App;
