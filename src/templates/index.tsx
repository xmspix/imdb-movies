import React from "react";

import SideBar from "../components/SideBar";
import Search from "../components/Search";
import Menu from "../components/Menu";

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
