import React from "react";

import "../styles/Activities.css";
import { content } from "../content/languages";

const Activities = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="activities">
      <div className="activity activity-1">
        <h2>BOWLING</h2>
        <div className="activity-description activity-description-1">
          <p>{languageToUse.activity1Description1}</p>
          <p>{languageToUse.activity1Description2}</p>
          <p>{languageToUse.activity1Description3}</p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
