import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import { createApiClient } from "../api";
import MoviesList from "../components/movies-list";
import Spinner from "../components/spinner";
import store from "../store";

const Home = () => {
  const [state, setState] = useState({
    movies: [],
    redirect: false,
    isLoaded: false
  });

  const api = createApiClient();

  useEffect(() => {
    let isCancelled = false;

    api.featuredMovies().then(res => {
      console.log(res);
        setState({ ...state, movies: res, isLoaded: true });
        store.setMovies(res)
    })

    return () => {
      isCancelled = true;
    };
  }, []);

  if (!state.isLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className="movies-list">
        <MoviesList array={state.movies} />
      </div>
    );
  }
};

export default observer(Home);
