import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { createApiClient } from "../api";

const Search = () => {
  const [state, setState]: any = useState([]);
  const searchBox: any = useRef<HTMLDivElement>(null);

  const api = createApiClient();

  const handleSearch = async () => {
    api.search(searchBox.current.value).then((res) => {
      setState(res.d);
    });
  };

  const Results = () => {
    const filter = state.filter((itm: any) => itm.q === "feature");
    return filter.map((itm: any) => (
      <div className="item-container" key={itm.id}>
          <Link to={`/movie/${itm.l.toLowerCase().match(/[a-z0-9]+/gi).join('-')+'-'+itm.id}`}>
          <figure className="item">
            {itm.i && <img src={itm.i.imageUrl} alt={itm.l} />}
            <div className="info">
              <span className="title">
                {itm.l} ({itm.y})
              </span>
              <span className="actors">{itm.s}</span>
            </div>
          </figure>
        </Link>
      </div>
    ));
  };

  return (
    <div className="autocomplete">
      <input type="text" placeholder="Search..." className="search" ref={searchBox} onChange={() => handleSearch()}/>
      {state ? (<div className="autocomplete-items"><Results /></div>) : null}
    </div>
  );
};

export default Search;
