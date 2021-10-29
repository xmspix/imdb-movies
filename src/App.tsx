import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Template from "./templates/main";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Collection from "./pages/collection";
import Trending from "./pages/trending";

const App = () => {
  return (
    <BrowserRouter>
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
