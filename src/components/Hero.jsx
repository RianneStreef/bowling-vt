import React from "react";

import "../styles/Hero.css";
import { content } from "../content/languages";

import heroVideo from "../images/intro-movie.mp4";

const Hero = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="hero">
      <video id="background-video" autoPlay muted playsInline loop>
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
