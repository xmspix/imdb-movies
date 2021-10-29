import React from "react";

import SideBar from "../components/side-bar";
import Search from "../components/search";
import Menu from "../components/menu";

const Template = (props:any) => {
  return (
    <div className="container">
      <SideBar />
      <div className="main-section">
        <div className="topbar">
          <Menu />
          <Search />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Template;
