import React, { useState, useEffect } from "react";
import store from "../store";
import Spinner from "../components/spinner";
import svg from "../resources/sprite.svg";
import { createApiClient } from "../api";
import { observer } from "mobx-react-lite";

const Movie = ({ match: { params } }: any) => {
  const [trailer, setTrailer]: any = useState();

  const movie: any = store.movies.filter((movie) => movie.title?.toLowerCase().match(/[a-z0-9]+/gi).join("-") === params.title)[0];

  const api = createApiClient();

  useEffect(() => {
    api.trailer(movie.id).then((trailer) => setTrailer(trailer));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Trailer = () => {
    let t = trailer.filter(
      (itm: any) =>
        itm.definition === "1080p" ||
        itm.definition === "720p" ||
        itm.definition === "480p"
    )[0];

    return (
      <video id="backgroundvid" poster={movie.poster} autoPlay controls playsInline>
        <source src={t.url} type={t.mimeType} />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>
    );
  };

  let hover = false;

  const isCollected = store.collection.filter((e) => e.title === movie.title)[0] ? true : false;

  return (
    <div className="movie-container">
      <div className="movie-container__header">
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-container__header--poster"
        />

        <div className="movie-container__header--info">
          <div className="movie-container__header--info-title">
            <h1>{movie.title}</h1>
            <svg className={`movie-container__header--info-title--icon ${isCollected ? "icon-active" : null}`}
              onClick={() => !isCollected ? store.addToCollection(movie) : null}
              onMouseOver={() => (hover = true)}
              onMouseLeave={() => (hover = false)}
            >
              {hover || isCollected 
                ? (<use xlinkHref={svg + "#icon-heart-full"}></use>) 
                : (<use xlinkHref={svg + "#icon-heart-empty"}></use>)}
            </svg>
          </div>
          <p className="movie-container__header--description">{movie.intro}</p>
        </div>
      </div>
      <div className="movie-container__trailer">
        {trailer ? <Trailer /> : <Spinner />}
      </div>
    </div>
  );
};

export default observer(Movie);
