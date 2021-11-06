import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Template from "./templates";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Collection from "./pages/Collection";
import Trending from "./pages/Trending";

const App = () => {
  return (
    <BrowserRouter basename="imdb-movies">
      <Switch>
        <Template>
          <Route path="/" component={Home} exact />
          {/* <Route path="/movie/:id/:title" component={Movie} exact /> */}
          <Route path="/movie/:title" component={Movie} exact />
          <Route path="/collection" component={Collection} exact />
          <Route path="/trending" component={Trending} exact />
        </Template>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
