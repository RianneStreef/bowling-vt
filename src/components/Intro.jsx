import React from "react";

import { content } from "../content/languages";

import "../styles/Intro.css";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="intro" id="about">
      <h1>BOWLING - SPORT'S BAR </h1>
      <h2>VAL THORENS</h2>
      <div className="intro-text">
        <p>{languageToUse.introText1}</p>
        <p>{languageToUse.introText2}</p>
        <p id="live-sports">{languageToUse.openingHours}</p>
      </div>
    </div>
  );
};

export default Intro;
