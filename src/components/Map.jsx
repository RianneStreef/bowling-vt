import React from "react";

import "../styles/Map.css";

const Map = () => {
  return (
    <div className="contact">
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
      <div className="contact-text hidden-mobile">CONTACT</div>
    </div>
  );
};

export default Map;
