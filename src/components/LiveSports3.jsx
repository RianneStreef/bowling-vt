import React from "react";

import { content } from "../content/languages";

import "../styles/LiveSports.css";

import program from "../images/program-w1.png";

const LiveSports1 = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <>
      <div className="insta">
        <div>
          <div
            className="insta-feed"
            data-mc-src="421b6f6d-e3df-4773-ac79-83a19f0692c2#instagram"
          ></div>
        </div>
      </div>
    </>
  );
};

export default LiveSports1;
