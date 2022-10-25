import React from "react";
import "../css/Portfolio.css";
import Featured from "./Featured";
import Certificates from "./Certificates";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <main>
        <h3>FEATURED PROJECTS</h3>
        <p>based off my most recent work </p>
        <Featured />
        <a href="/">View All Projects</a>
        <Certificates />
      </main>
    </div>
  );
}
