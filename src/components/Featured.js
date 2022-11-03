import React from "react";
import "../css/Featured.css";
import dictionary from "../assets/dictionary-mockup2.jpg";
import travelGU from "../assets/travel-guam-mockup.jpg";
import Gallery from "./Gallery";

export default function Featured() {
  return (
    <div className="Featured">
      <section>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section
        className="featured-main"
        id="featured"
      >
        <h3>FEATURED WORK</h3>

        <section className="grid grid-2col">
          <div className="featured-project">
            <h4>dictionary</h4>
            <p>REACT | JSX | API | RESPONSIVE</p>
            <img
              src={dictionary}
              alt=""
            />
            <a
              href="https://dictionary-devtiara.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Launch Project
            </a>
          </div>

          <div className="featured-project">
            <h4>travel to guam </h4>
            <p>HTML | PURE CSS | RESPONSIVE</p>
            <img
              src={travelGU}
              alt=""
            />
            <a
              href="https://travelguam-devtiara.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Launch Project
            </a>
          </div>
        </section>
        <a href="/">View All Projects</a>
      </section>
      <Gallery />
    </div>
  );
}
