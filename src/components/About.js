import React from "react";
import "../css/About.css";
import gameOfTech from "../assets/TiaraMendiola-GameOfTech.jpg";
/*import profilePicture from "../assets/TiaraMendiola-Profile-.jpg";
import profileHoodie from "../assets/TiaraMendiola-Profile2.jpg";*/

export default function About() {
  return (
    <div className="About">
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

      <section className="grid grid-2col">
        <div>
          <h4>hello world</h4>
          <h5>I'M ON A SECRET MISSION</h5>
          <h6>and decided to take the scenic route</h6>
          <p>
            I grew up in the early 90s, meaning I saw & experienced the
            evolution of today's technology. So it was only a matter of time
            before I graduated with a Bachelors in Computer Science and started
            climbing ladders, running lines, and repairing computers with a
            small IT Team. Now I write words that will turn into 1's and 0's
            (machine language). When I'm not entering the matrix, you'll
            probably find me cooking something I've never made before, watching
            movies, anime, history & wildlife, or playing an old video game with
            considerations on live streaming. I love learning, building, and
            trying new things because it keeps the sparkles in my eyes & the
            fire alive.
          </p>
        </div>

        <div className="about-img-container">
          <div className="about-img">
            <img
              src={gameOfTech}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
