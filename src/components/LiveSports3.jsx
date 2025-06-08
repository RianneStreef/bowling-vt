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
        <h2>{languageToUse.instaTitle}</h2>
        <div>
          <div
            class="elfsight-app-5d0dc641-523b-4576-84f7-31216c74c37c"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
      <div id="activities" />
    </>
  );
};

export default LiveSports1;
