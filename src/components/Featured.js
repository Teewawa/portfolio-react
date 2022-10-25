import React from "react";
import "../css/Featured.css";
import dictionary from "../assets/dictionary-mockup2.jpg";
import travelGU from "../assets/travel-guam-mockup.jpg";

export default function Featured() {
  return (
    <div className="Featured">
      <section className="grid grid-2col">
        <section>
          <h4>Simple Dictionary</h4>
          <p>Web Technologies: React, API</p>
          <img
            src={dictionary}
            alt=""
          />
          <a href="/">Launch Project</a>
        </section>

        <section>
          <h4>Travel to Guam </h4>
          <p>HTML, CSS, Advance Responsive Design</p>

          <img
            src={travelGU}
            alt=""
          />
          <a href="/">Launch Project</a>
        </section>
      </section>
    </div>
  );
}
