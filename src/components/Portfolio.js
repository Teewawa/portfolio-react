import React from "react";
import "../css/Portfolio.css";
import About from "./About";
import Featured from "./Featured";
import Certificates from "./Certificates";
import Experience from "./Experience";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <main>
        <About />
        <Featured />
        <Certificates />
        <Experience />
      </main>
    </div>
  );
}
