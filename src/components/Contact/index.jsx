import React from "react";
import Section from "../shared/Section";
import "./style.scss";
import ContactInfo from "./contact-info";
import Form from "./form";
export default function Contact() {
  return (
    <Section
      id="contact"
      title="Any question? Feel free to ask"
      background="light"
    >
      <div className="contact-content-wrapper">
        <ContactInfo />
        <Form />
      </div>
    </Section>
  );
}
