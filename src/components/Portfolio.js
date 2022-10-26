import React from "react";
import "../css/Portfolio.css";
import Featured from "./Featured";
import Certificates from "./Certificates";
import Experience from "./Experience";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <main>
        <Featured />
        <Certificates />
        <Experience />
      </main>
    </div>
  );
}
