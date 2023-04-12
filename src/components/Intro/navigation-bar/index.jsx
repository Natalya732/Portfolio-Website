import React from "react";
import "./style.scss";
import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";
export default function index() {
  return (
    <div className="top-navigation-bar">
      <div className="top-logo">
        <img src={logo} alt="Js Dev" />
      </div>
      <div className="navigation">
        <span className="navigation-item">Skills</span>
        <span className="navigation-item">Portfolio</span>
        <span className="navigation-item">Blogs & Items</span>
        <CallToAction text="Contact Me" />
      </div>
    </div>
  );
}
