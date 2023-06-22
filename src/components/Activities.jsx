import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

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
      <div
        {...useSwipeable({
          onSwipedRight: () => handleClickLeft(),
          onSwipedLeft: () => handleClickRight(),
          preventScrollOnSwipe: true,
        })}
        className="activities"
      >
        <div className="arrow-container arrow-container-left">
          <span onClick={() => handleClickLeft()}>&#60;</span>
        </div>
        <div
          className={`dots-container 
              ${activeSheet === 1 ? "activity-description-1" : ""}   
              ${activeSheet === 2 ? "activity-description-2" : ""}
              ${activeSheet === 3 ? "activity-description-3" : ""}
              ${activeSheet === 4 ? "activity-description-4" : ""}
                       `}
        >
          {" "}
          <div className="activities-container">
            <div className="activity-placeholder hidden-desktop" />
            <div
              className={`activity activity-1 ${
                activeSheet === 1 ? "active-activity" : ""
              }
            
            `}
            >
              <h2>BOWLING</h2>
              <div className="activity-description ">
                <p>{languageToUse.activity1Description1}</p>
                <p>{languageToUse.activity1Description2}</p>
                <p>{languageToUse.activity1Description3}</p>
                <p className="p-no-margin">{languageToUse.activity1Price1}</p>
                <p className="p-no-margin">{languageToUse.activity1Price2}</p>
              </div>
            </div>
            <div className="bowling-image hidden-mobile" />
            <div className="bar-image hidden-mobile" />

            <div
              className={`activity activity-2 ${
                activeSheet === 2 ? "active-activity" : ""
              }
              `}
            >
              <h2>BAR</h2>
              <div className="activity-description ">
                <p>{languageToUse.activity2Description1}</p>
                <p>{languageToUse.activity2Description2}</p>
                <p>{languageToUse.activity2Description3}</p>
                <p className="p-no-margin">{languageToUse.activity2Price1}</p>
                <p className="p-no-margin">{languageToUse.activity2Price2}</p>
              </div>
            </div>
            <div
              className={`activity activity-3 ${
                activeSheet === 3 ? "active-activity" : ""
              }
              `}
            >
              <h2>BILLARDS</h2>
              <div className="activity-description ">
                <p>{languageToUse.activity3Description1}</p>
                <p>{languageToUse.activity3Description2}</p>
                <p>{languageToUse.activity3Description3}</p>
                <p className="p-no-margin">{languageToUse.activity3Price1}</p>
                <p className="p-no-margin">{languageToUse.activity3Price2}</p>
              </div>
            </div>
            <div className="billard-image hidden-mobile" />
            <div className="jeux-image hidden-mobile" />
            <div
              className={`activity activity-4 ${
                activeSheet === 4 ? "active-activity" : ""
              }
              `}
            >
              <h2>SALLE DE JEUX</h2>
              <div className="activity-description ">
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
        <div className="arrow-container arrow-container-right">
          <span onClick={() => handleClickRight()}>&#62;</span>
        </div>
      </div>
    </>
  );
};

export default Activities;
