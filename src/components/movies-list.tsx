import React from "react";
import store from "../store";
import { Link } from "react-router-dom";

import { BtnRemove, BtnCollection } from "./buttons";
import { observer } from "mobx-react-lite";

const MoviesList = ({ array, buttons }:any) => {

  const isCollected = (id:string) => {
    return store.collection.filter((itm:any) => itm.id === id)[0]
      ? true
      : false;
  };

  return array.map((itm:any, x:number) => (
    <div className="movie-card" key={x}>
      <Link to={`/movie/${itm.title.toLowerCase().match(/[a-z0-9]+/gi).join('-')}`}>
        <div className="movie-card__poster">
          <img
            src={itm.poster.replace("_V1_", "_V1_UX400_CR0,0,_AL_")}
            alt={itm.title}
            className="movie-card__poster--image"
          />
          <div className="overlay">
            <span className=" overlay--info">Year: {itm.year}</span>
            <span className=" overlay--info">Runtime: {itm.runtime}</span>
            <span className=" overlay--info">
              Genre: {itm.genre.replace(/,/g, ", ")}
            </span>
            <span className=" overlay--info">
              Director: {itm.director.replace(/,/g, ", ")}
            </span>
          </div>
        </div>
        <div className="movie-card__poster--info">
          {itm.title} ({itm.year})
        </div>
      </Link>
      {buttons ? (
        <BtnRemove cb={() => store.removeFromCollection(itm.id)} />
      ) : (
        !isCollected(itm.id) && (
          <BtnCollection cb={() => store.addToCollection(itm)} />
        )
      )}
    </div>
  ));
};

export default observer(MoviesList);
