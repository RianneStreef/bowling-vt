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
          <img
            src={program}
            alt={languageToUse.weekProgram}
            className="week-program"
          />
        </div>
      </div>
      <div className="divider" />
    </>
  );
};

export default LiveSports1;
