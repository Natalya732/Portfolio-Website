import React from "react";
import "./style.scss";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/Section";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
export default function index() {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={TechIcons} alt="Js, React, HTML, CSS" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            porro, natus quos quibusdam eveniet unde, atque praesentium, veniam
            ipsam quisquam accusantium minus sapiente. Officia iste deleniti
            reprehenderit error, voluptate necessitatibus sint quibusdam
            accusantium distinctio iusto est, accusamus sit? Eaque, eos repellat
            quo ab aspernatur architecto.
          </p>
          <CallToAction text="Download CV" icon={<AiOutlineCloudDownload />} />
        </div>
      </div>
    </Section>
  );
}
