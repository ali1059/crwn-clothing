import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ item, history, match }) => {
  console.log(
    "In MenuItem history = ",
    history,
    "match==================",
    match
  );
  return (
    <div
      className={`${item.size} menu-item`}
      onClick={() => history.push(`${match.url}${item.linkUrl}`)}
    >
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

export default withRouter(MenuItem);
