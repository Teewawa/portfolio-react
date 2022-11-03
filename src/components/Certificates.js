import React, { useState } from "react";
import "../css/Certificates.css";
import introToCode from "../assets/intro-coding-cert.png";
import webDev from "../assets/webdev-cert.png";
import responsive from "../assets/responsive-cert.png";
import webDevAddOn from "../assets/intro-webdev-addon-cert.png";
import advResponsive from "../assets/adv-responsive-cert.png";
import advReact from "../assets/adv-react-cert.png";

export default function Certificates() {
  const certificateList = [
    {
      cert: advReact,
      altTxt: "Advance React Development Certificate from SheCodes React",
      src: "https://www.shecodes.io/certificates/a13ab44558ad3415fc3807c46c4e9b9c",
    },
    {
      cert: advResponsive,
      altTxt:
        "Advance Responsive Web Development Certificate from SheCodes Responsive Add-on",
      src: "https://www.shecodes.io/certificates/96601ac7bc0b8dea60ec5528b2f4d858",
    },
    {
      cert: webDevAddOn,
      altTxt:
        "Introduction to Web Development Certificate from SheCodes Basics Add-on:",
      src: "https://www.shecodes.io/certificates/62923bd98d5bbcb7c8bcc808f71445a0",
    },
    {
      cert: responsive,
      altTxt: "Responsive Web Development Certificate from SheCodes Responsive",
      src: "https://www.shecodes.io/certificates/c2f144c8c5dca56a0ce79e977a281ebb",
    },
    {
      cert: webDev,
      altTxt: "Introduction to Web Development Certificate from SheCodes Plus ",
      src: "https://www.shecodes.io/certificates/9817a1da109c827ce37863f14ead6671",
    },
    {
      cert: introToCode,
      altTxt: "Introduction to Coding Certificate from SheCodes Basics",
      src: "https://www.shecodes.io/certificates/0405d751b173f9c5211bffc895aae7f3",
    },
  ];

  let [certificateImage, setCertificateImage] = useState(advReact);
  let [altText, setAltText] = useState("Advance React Development");
  let [srcLink, setSrcLink] = useState(
    "https://www.shecodes.io/certificates/a13ab44558ad3415fc3807c46c4e9b9c"
  );

  function updateCert(certificate) {
    console.log(certificate);
    setCertificateImage(certificate.cert);
    setAltText(certificate.altTxt);
    setSrcLink(certificate.src);
  }

  return (
    <div
      className="Certificates"
      id="certificates"
    >
      <h3>CERTIFICATES</h3>
      <h2>front end development</h2>

      <section className="main-display">
        <a
          href={srcLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={certificateImage}
            alt={altText}
            className="certificate-lg"
          />
        </a>
      </section>

      <div className="grid grid-certificate-sm">
        {certificateList.map(function (certificate, index) {
          console.log(certificate);
          return (
            <div key={index}>
              <a href="/">
                <img
                  src={certificate.cert}
                  alt={certificate.altTxt}
                  onClick={(e) => {
                    updateCert(certificate);
                    e.preventDefault();
                  }}
                />
              </a>
            </div>
          );
        })}
      </div>
      <a
        href="https://www.shecodes.io/graduates/38922-tiara-mendiola"
        target="_blank"
        rel="noreferrer"
      >
        View SheCodes profile
      </a>
      <section>
        <h3>University of Guam</h3>{" "}
        <h2>bachelors of science in computer science</h2>
        <br />
      </section>
    </div>
  );
}
