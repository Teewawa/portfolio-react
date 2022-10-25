import React from "react";
import "../css/Portfolio.css";
import dictionary from "../assets/dictionary-mockup2.jpg";
import travelGU from "../assets/travel-guam-mockup.jpg";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <main>
        <h3>FEATURED PROJECTS</h3>
        <p>based off my most recent work </p>
        <section className="grid grid-2col">
          <section>
            <h4>Simple Dictionary</h4>
            <p>Web Technologies: React, API</p>
            <img
              src={dictionary}
              alt=""
            />
          </section>

          <section>
            <h4>Travel to Guam </h4>
            <p>HTML, CSS, Advance Responsive Design</p>
            <img
              src={travelGU}
              alt=""
            />
          </section>
        </section>

        <a href="/">View All Projects</a>
      </main>
    </div>
  );
}
