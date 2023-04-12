import React from "react";
import "./style.scss";
function Section({ children, id, title, className, background }) {
  return (
    <div
      id={id || ""}
      className={`section $ {className ? className : ""} ${
        background === "dark" ? "dark" : "light"
      }`}
    >
      <div className="content">
        {title && (
          <div className="section-title">
            <h2>{title}</h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default Section;
