import React from "react";
import "./app.scss";
import Index from "./components/Intro/Index";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs";
import Contact from "./components/Contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <Index />
      <Skills />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
