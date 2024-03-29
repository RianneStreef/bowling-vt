import React from "react";

import "../styles/Map.css";

import { content } from "../content/languages";

import location from "../images/location.png";
import telephone from "../images/telephone.png";
import whatsapp from "../images/whatsapp.png";
import email from "../images/at.png";

const Map = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="contact" id="contact">
      <h2>{languageToUse.contactTitle}</h2>
      <div className="contact-container">
        <div className="map">
          <div className="google-map-iframe">
            <iframe
              title="google map"
              className="iframe-google"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=place%20de%20l'arche%2073440%20Val%20Thorens&t=&z=17&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
        <div className="contact-text hidden-mobile">
          <div className="contact-block">
            <img src={location} alt="" className="contact-icon" />

            <p className="address">Place de l'Arche</p>
            <p className="address">Grand Rue</p>
            <p className="address"> Val Thorens</p>
          </div>
          <div className="contact-block">
            <img src={whatsapp} alt="" className="contact-icon" />
            <br />
            <p className="address">+33 7 89 63 06 87</p>
          </div>

          {/* <p>
            <img src={email} alt="" className="contact-icon" />
            <br />
            <a href="mailto:bowling.valthorens@orange.fr">
              bowling.valthorens@orange.fr
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Map;
