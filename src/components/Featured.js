import React from "react";
import "../css/Featured.css";
import dictionary from "../assets/dictionary-mockup2.jpg";
import travelGU from "../assets/travel-guam-mockup.jpg";

export default function Featured() {
  return (
    <div
      className="Featured"
      id="featured"
    >
      <h3>FEATURED PROJECTS</h3>

      <section className="grid grid-2col">
        <div className="featured-project">
          <h4>simple dictionary</h4>
          <p>REACT | API</p>
          <img
            src={dictionary}
            alt=""
          />
          <a href="/">Launch Project</a>
        </div>

        <div className="featured-project">
          <h4>travel to guam </h4>
          <p>HTML | PURE CSS | RESPONSIVE</p>
          <img
            src={travelGU}
            alt=""
          />
          <a href="/">Launch Project</a>
        </div>
      </section>
      <a href="/">View All Projects</a>
    </div>
  );
}
