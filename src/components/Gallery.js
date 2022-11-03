import React from "react";
import "../css/Gallery.css";

export default function Gallery() {
  return (
    <div className="Gallery">
      <div className="featured-box">
        <h4>
          <a
            href="https://travelguam-devtiara.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            travel
          </a>
        </h4>
        <h4>
          <a
            href="https://dictionary-devtiara.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            dictionary
          </a>
        </h4>
        <h4>weather</h4>
        <div className="img-box"></div>
      </div>
    </div>
  );
}
