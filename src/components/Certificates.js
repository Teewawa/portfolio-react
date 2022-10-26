import React, { useState } from "react";
import "../css/Certificates.css";
import IntroToCode from "../assets/Introduction to Coding SheCodes Cert - Tiara Mendiola Apr 2022.png";
import WebDevelopment from "../assets/Web Development SheCodes Cert - Tiara Mendiola.png";
import Responsive from "../assets/Responsive Web Development SheCodes Cert - Tiara Mendiola.png";

export default function Certificates() {
  let [certificateImage, setCertificateImage] = useState(IntroToCode);
  const certificateList = [IntroToCode, WebDevelopment, Responsive];

  return (
    <div className="Certificates">
      <img
        src={certificateImage}
        alt=""
        className="certificate-lg"
      />
      <div className="grid grid-certificate-sm">
        {certificateList.map(function (certificate, index) {
          return (
            <div key={index}>
              <a href="/">
                <img
                  src={certificate}
                  alt=""
                  onClick={(e) => {
                    e.preventDefault();
                    setCertificateImage(certificate);
                  }}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
