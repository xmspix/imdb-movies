import React from "react";
import svg from "../assets/sprite.svg"

export const BtnRemove = ({ cb }:any) => {
  return (
    <button className="btn-sm-red" onClick={cb}>
      X
    </button>
  );
};

export const BtnCollection = ({ cb }:any) => {
  return (
    <button className="btn-sm-red" onClick={cb}>
      <svg className="icon">
        <use xlinkHref={svg + "#icon-heart-empty"}></use>
      </svg>
    </button>
  );
};
