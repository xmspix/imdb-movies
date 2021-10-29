import React from "react";
import store from "../store";
import svg from "../resources/sprite.svg"
import { observer } from 'mobx-react-lite'

const Menu = () => {
  return (
    <svg
      className="sidebar__links--icon menu"
      onClick={() => store.toggleMenu()}
      // htmlFor="navi-toggle"
    >
      <use xlinkHref={svg + "#icon-menu"}></use>
    </svg>
  );
};

export default observer(Menu);
