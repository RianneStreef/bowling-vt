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
      <div className="live-sports">
        <h2>LIVE SPORTS TV</h2>
        <div className="program">
          <div
            className="insta-feed"
            data-mc-src="2c3225d5-e1dc-4731-8903-f833d4a97089#instagram"
          ></div>
        </div>
      </div>
    </>
  );
};

export default LiveSports1;
