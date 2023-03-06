import React from "react";

import "../styles/Map.css";

import { content } from "../content/languages";

const Map = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="contact" id="contact">
      <div className="map">
        <div className="google-map-iframe">
          <iframe
            title="google map"
            className="iframe-google"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=place%20de%20l'arche%2073440%20Val%20Thorens&t=&z=17&ie=UTF8&iwloc=&output=embed"
          />
        </div>
        <div className="divider" />
      </div>
      <div className="contact-text hidden-mobile">
        <h3>CONTACT</h3>
        <p>{languageToUse.contactText}</p>
      </div>
    </div>
  );
};

export default Map;
