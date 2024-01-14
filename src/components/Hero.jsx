import React from "react";

import "../styles/Hero.css";
import { content } from "../content/languages";

const Hero = (props) => {
  let { language, languageToUse, data } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let video = data.allContentfulVideo.edges[0].node.video.url;

  console.log(data.allContentfulVideo.edges[0].node.video.url);

  return (
    <div className="hero">
      <video id="background-video" autoPlay muted playsInline loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
