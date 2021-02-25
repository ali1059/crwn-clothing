import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ item }) => {
  return (
    <div className={`${item.size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{item.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
