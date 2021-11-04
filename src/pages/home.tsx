import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { createApiClient } from "../api";
import MoviesList from "../components/MoviesList";
import Spinner from "../components/Spinner";
import store from "../store";

const Home = () => {
  const api = createApiClient();

  useEffect(() => {
    api.featuredMovies().then((res) => {
      store.setMovies(res);
      console.log(res);
      
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!store.movies) {
    return <Spinner />;
  } else {
    return (
      <div className="movies-list">
        <MoviesList array={store.movies} />
      </div>
    );
  }
};

export default observer(Home);
