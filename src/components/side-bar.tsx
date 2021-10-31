import React from "react";
import { NavLink } from "react-router-dom";
import store from "../store";
import profilePic from "../resources/me.png"
import svg from "../resources/sprite.svg"
import { observer } from "mobx-react-lite";

const SideBar = () => {

  const Notification = observer(() => {
    if ( store.collection.length === 0) {
      return null;
    } else {
      return (
        <span className="notification">{store.collection.length}</span>
      );
    }
  });

  const Navigation = () => {
    const nav = [
      {
        text: "Featured Movies",
        icon: "icon-videocam",
        link: "/"
      },
      {
        text: "Trending Movies",
        icon: "icon-trending-up",
        link: "/trending"
      },
      {
        text: "My Collection",
        icon: "icon-heart-empty",
        link: "/collection",
        notification: true
      }
      // {
      //   text: "Subscription",
      //   icon: "icon-card",
      //   link: "#"
      // },
      // {
      //   text: "Watch Later",
      //   icon: "icon-time",
      //   link: "#"
      // }
    ];

    return <ul>
      {nav.map((itm, x) => (
        <li className="sidebar__links--item" key={x}>
          <NavLink to={itm.link} className="sidebar__links--link">
            <svg className="sidebar__links--icon">
              <use xlinkHref={svg + '#' + itm.icon}></use>
            </svg>
            <span>{itm.text}</span>
            {itm.notification && <Notification />}
          </NavLink>
        </li>
      ))}
    </ul>
  }


  return (
    <div className={store.menu ? "sidebar active" : "sidebar hide"}>
      <div className="sidebar__user-profile">
        <img
          src={profilePic}
          alt="Mark Stoler"
          className="sidebar__user-profile--image"
        />
        <div className="sidebar__user-info">
          <div className="sidebar__user-info--name">Hi Mark</div>
          <div className="sidebar__user-info--status">Premium Member</div>
        </div>
      </div>
      <div className="sidebar__links">
        <Navigation />
      </div>
    </div>
  );
};

export default observer(SideBar);
