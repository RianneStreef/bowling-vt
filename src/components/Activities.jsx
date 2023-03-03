import React, { useState } from "react";

import "../styles/Activities.css";
import { content } from "../content/languages";

import bowlingImg from "../images/bowling-background.jpg";
import barImg from "../images/bar-background.jpg";
import billardImg from "../images/billard-background.jpg";
import jeuxImg from "../images/jeux-background.jpg";

const Activities = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  const [activeSheet, setActiveSheet] = useState(1);

  function handleClickLeft() {
    if (activeSheet === 1) {
      setActiveSheet(4);
    } else setActiveSheet(activeSheet - 1);
  }

  function handleClickRight() {
    if (activeSheet === 4) {
      setActiveSheet(1);
    } else setActiveSheet(activeSheet + 1);
  }

  return (
    <>
      {/* <div className="header-placeholder" /> */}
      <div className="activities" id="activities">
        <div className="arrow-container">
          <span onClick={() => handleClickLeft()}>&#60;</span>
        </div>
        <div>
          <div className="activities-container">
            <div className="activity-placeholder hidden-desktop" />
            <div
              className={`activity ${activeSheet === 1 ? "active-activity" : ""}
`}
            >
              <h2>BOWLING</h2>
              <div className="activity-description activity-description-1">
                <p>{languageToUse.activity1Description1}</p>
                <p>{languageToUse.activity1Description2}</p>
                <p>{languageToUse.activity1Description3}</p>
                <p className="p-no-margin">{languageToUse.activity1Price1}</p>
                <p className="p-no-margin">{languageToUse.activity1Price2}</p>
              </div>
            </div>
            <img
              src={bowlingImg}
              alt="bowling"
              className="activity-image hidden-mobile"
            />
            <img
              src={barImg}
              alt="bar"
              className="activity-image hidden-mobile"
            />

            <div
              className={`activity ${activeSheet === 2 ? "active-activity" : ""}
`}
            >
              <h2>BAR</h2>
              <div className="activity-description activity-description-2">
                <p>{languageToUse.activity2Description1}</p>
                <p>{languageToUse.activity2Description2}</p>
                <p>{languageToUse.activity2Description3}</p>
                <p className="p-no-margin">{languageToUse.activity2Price1}</p>
                <p className="p-no-margin">{languageToUse.activity2Price2}</p>
              </div>
            </div>
            <div
              className={`activity ${activeSheet === 3 ? "active-activity" : ""}
`}
            >
              <h2>BILLARDS</h2>
              <div className="activity-description activity-description-3">
                <p>{languageToUse.activity3Description1}</p>
                <p>{languageToUse.activity3Description2}</p>
                <p>{languageToUse.activity3Description3}</p>
                <p className="p-no-margin">{languageToUse.activity3Price1}</p>
                <p className="p-no-margin">{languageToUse.activity3Price2}</p>
              </div>
            </div>
            <img
              src={billardImg}
              alt="billard"
              className="activity-image hidden-mobile"
            />
            <img
              src={jeuxImg}
              alt="salle de jeux"
              className="activity-image hidden-mobile"
            />
            <div
              className={`activity ${activeSheet === 4 ? "active-activity" : ""}
`}
            >
              <h2>SALLE DE JEUX</h2>
              <div className="activity-description activity-description-4">
                <p>{languageToUse.activity4Description1}</p>
                <p>{languageToUse.activity4Description2}</p>
                <p>{languageToUse.activity4Description3}</p>
                <p className="p-no-margin">{languageToUse.activity4Price1}</p>
                <p className="p-no-margin">{languageToUse.activity4Price2}</p>
              </div>
            </div>
          </div>
          <div className="dots">
            <span
              className={`dot ${activeSheet === 1 ? "active-dot" : ""}
            }`}
            ></span>
            <span
              className={`dot ${activeSheet === 2 ? "active-dot" : ""}
            }`}
            ></span>
            <span
              className={`dot ${activeSheet === 3 ? "active-dot" : ""}
            }`}
            ></span>
            <span
              className={`dot ${activeSheet === 4 ? "active-dot" : ""}
            }`}
            ></span>
          </div>
        </div>
        <div className="arrow-container">
          <span onClick={() => handleClickRight()}>&#62;</span>
        </div>
      </div>
    </>
  );
};

export default Activities;
