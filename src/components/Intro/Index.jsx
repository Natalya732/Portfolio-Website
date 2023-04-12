import React from "react";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
import Navigation from "./navigation-bar";
import IntroContent from "./intro-content";
import "./style.scss";
export default function Index() {
  return (
    <div className="intro-section">
      <div className="vector-bg" id="parallax"></div>
      <img src={cloud} alt="" className="cloud" />
      <img src={cloudSoft} alt="" className="cloud-soft" />
      <div className="content">
        <Navigation />
        <IntroContent />
      </div>
    </div>
  );
}
