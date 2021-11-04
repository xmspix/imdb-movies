import { observer } from "mobx-react-lite";
import React from "react";
import MovieList from "../components/MoviesList";
import store from "../store";

const Collection = () => {
  if (store.collection.length === 0) {
    return <div className="center-screen">no collection</div>;
  } else {
    return (
      <div className="movies-list">
        <MovieList array={store.collection} buttons={true} />
      </div>
    );
  }
};

export default observer(Collection);
