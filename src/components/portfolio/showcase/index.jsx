import React from "react";

import Arrow from "../../shared/arrow";
import "./style.scss";
export default function Showcase({ data, transition }) {
  return (
    <div className="projects-showcase">
      {data.map((item) => (
        <div
          className={`showcase-item ${
            transition === "zoomout"
              ? "zoomout"
              : transition === "zoomin"
              ? "zoomin"
              : ""
          }`}
          key={item.id}
        >
          <div className="meta-content">
            <h3>{item.name}</h3>
            <div className="go-to-cta">
              <span className="text">Project Details</span>
              <Arrow />
            </div>
          </div>
          <img src={item.media.thumbnail} />
        </div>
      ))}
    </div>
  );
}
