import React from "react";
import "./style.scss";
import Arrow from "../arrow";

export default function index({ text, action, icon }) {
  return (
    <div className="call-to-action">
      <span className="text">{text}</span>
      {icon ? <div className="icon">{icon}</div> : <Arrow />}
    </div>
  );
}
