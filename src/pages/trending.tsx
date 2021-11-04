import React, { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList";
import Spinner from "../components/Spinner";

const Tranding = () => {
  const [state, setState] = useState({
    movies: [],
    redirect: false,
    isLoaded: false
  });

  useEffect(() => {

    fetch("http://localhost:3001/api/trending")
      .then(res => res.json())
      .then(data => {
        setState({ ...state, movies: data, isLoaded: true });
      });

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default Tranding;
