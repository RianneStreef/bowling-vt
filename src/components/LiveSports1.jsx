import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { useSwipeable } from "react-swipeable";

import { content } from "../content/languages";

import "../styles/LiveSports.css";

const LiveSports1 = (props) => {
  let { language, languageToUse, pathname, day, newMonth, year, data } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let date = `${year}-${newMonth}-${day}`;

  console.log(props);

  const [tomorrow, setTomorrow] = useState(new Date());
  const [afterTomorrow, setafterTomorrow] = useState(new Date());

  console.log(tomorrow);
  const [tomorrowDay, setTomorrowDay] = useState("01");
  const [tomorrowNewMonth, setTomorrowNewMonth] = useState();

  const [afterTomorrowDay, setAfterTomorrowDay] = useState("01");
  const [afterTomorrowNewMonth, setAfterTomorrowNewMonth] = useState();

  useEffect(() => {
    let today = new Date().getDate();
    let tomorrowCalcul = today + 1;
    tomorrow.setDate(tomorrowCalcul);

    let afterTomorrowCalcul = today + 2;
    afterTomorrow.setDate(afterTomorrowCalcul);

    setTomorrowDay(("0" + tomorrow.getDate()).slice(-2));
    setAfterTomorrowDay(("0" + afterTomorrow.getDate()).slice(-2));

    let tomorrowMonth = tomorrow.getMonth() + 1;
    tomorrowMonth === 1 ? setTomorrowNewMonth("01") : null;
    tomorrowMonth === 2 ? setTomorrowNewMonth("02") : null;
    tomorrowMonth === 3 ? setTomorrowNewMonth("03") : null;
    tomorrowMonth === 4 ? setTomorrowNewMonth("04") : null;
    tomorrowMonth === 5 ? setTomorrowNewMonth("05") : null;
    tomorrowMonth === 6 ? setTomorrowNewMonth("06") : null;
    tomorrowMonth === 7 ? setTomorrowNewMonth("07") : null;
    tomorrowMonth === 8 ? setTomorrowNewMonth("08") : null;
    tomorrowMonth === 9 ? setTomorrowNewMonth("09") : null;
    tomorrowMonth === 10 ? setTomorrowNewMonth("10") : null;
    tomorrowMonth === 11 ? setTomorrowNewMonth("11") : null;
    tomorrowMonth === 12 ? setTomorrowNewMonth("12") : null;

    let afterTomorrowMonth = afterTomorrow.getMonth() + 1;
    afterTomorrowMonth === 1 ? setAfterTomorrowNewMonth("01") : null;
    afterTomorrowMonth === 2 ? setAfterTomorrowNewMonth("02") : null;
    afterTomorrowMonth === 3 ? setAfterTomorrowNewMonth("03") : null;
    afterTomorrowMonth === 4 ? setAfterTomorrowNewMonth("04") : null;
    afterTomorrowMonth === 5 ? setAfterTomorrowNewMonth("05") : null;
    afterTomorrowMonth === 6 ? setAfterTomorrowNewMonth("06") : null;
    afterTomorrowMonth === 7 ? setAfterTomorrowNewMonth("07") : null;
    afterTomorrowMonth === 8 ? setAfterTomorrowNewMonth("08") : null;
    afterTomorrowMonth === 9 ? setAfterTomorrowNewMonth("09") : null;
    afterTomorrowMonth === 10 ? setAfterTomorrowNewMonth("10") : null;
    afterTomorrowMonth === 11 ? setAfterTomorrowNewMonth("11") : null;
    afterTomorrowMonth === 12 ? setAfterTomorrowNewMonth("12") : null;

    return;
  }, [tomorrow, afterTomorrow]);

  let tomorrowYear = tomorrow.getYear() + 1900;
  let afterTomorrowYear = afterTomorrow.getYear() + 1900;

  let tomorrowDate = `${tomorrowYear}-${tomorrowNewMonth}-${tomorrowDay}`;
  console.log(tomorrowDate);
  let afterTomorrowDate = `${afterTomorrowYear}-${afterTomorrowNewMonth}-${afterTomorrowDay}`;
  console.log(afterTomorrowDate);

  let matches = data.allContentfulMatch.nodes;

  const [activeProgram, setActiveProgram] = useState(1);

  function handleClickLeft() {
    if (activeProgram === 1) {
      setActiveProgram(3);
    } else setActiveProgram(activeProgram - 1);
  }

  function handleClickRight() {
    if (activeProgram === 3) {
      setActiveProgram(1);
    } else setActiveProgram(activeProgram + 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      let element = document.getElementById("live");
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [pathname]);

  const programToday = matches
    .filter((match) => match.dateTime === date)
    .map((match) => {
      return (
        <div key={match.id}>
          <p className="game-time">
            {match.time} {match.category}
          </p>
          <p className="game-name">{match.match}</p>
        </div>
      );
    });

  const programTomorrow = matches
    .filter((match) => match.dateTime === tomorrowDate)
    .map((match) => {
      return (
        <div key={match.id}>
          <p className="game-time">
            {match.time} {match.category}
          </p>
          <p className="game-name">{match.match}</p>
        </div>
      );
    });

  const programAfterTomorrow = matches
    .filter((match) => match.dateTime === afterTomorrowDate)
    .map((match) => {
      return (
        <div key={match.id}>
          <p className="game-time">
            {match.time} {match.category}
          </p>
          <p className="game-name">{match.match}</p>
        </div>
      );
    });

  return (
    <>
      <div className="live-sports live-sports-coded">
        <h2>LIVE SPORTS TV</h2>
        <div
          className="program program-coded"
          id="live"
          {...useSwipeable({
            onSwipedRight: () => handleClickLeft(),
            onSwipedLeft: () => handleClickRight(),
            preventScrollOnSwipe: true,
          })}
        >
          <div className="program-outer-container">
            <div className="navigation-container">
              <div className="program-arrow-container program-arrow-container-left">
                <span onClick={() => handleClickLeft()}>&#60;</span>
              </div>
              <div className="dots-program">
                <span
                  className={`dot ${activeProgram === 1 ? "active-dot" : ""}
            }`}
                ></span>
                <span
                  className={`dot ${activeProgram === 2 ? "active-dot" : ""}
            }`}
                ></span>
                <span
                  className={`dot ${activeProgram === 3 ? "active-dot" : ""}
            }`}
                ></span>
              </div>
              <div className="program-arrow-container program-arrow-container-right">
                <span onClick={() => handleClickRight()}>&#62;</span>
              </div>
            </div>

            <div
              className={`program-container program-info ${
                activeProgram === 1 ? "active-program" : ""
              }
            `}
            >
              <p className="program-day">TODAY</p>

              <div className="flex-container">
                <div className="date-container">
                  <p className="date">{day}</p>

                  <p className="month">
                    {newMonth === "01" ? (
                      <span>{languageToUse.jan}</span>
                    ) : null}
                    {newMonth === "02" ? (
                      <span>{languageToUse.feb}</span>
                    ) : null}
                    {newMonth === "03" ? (
                      <span>{languageToUse.mar}</span>
                    ) : null}
                    {newMonth === "04" ? (
                      <span>{languageToUse.apr}</span>
                    ) : null}
                    {newMonth === "05" ? (
                      <span>{languageToUse.may}</span>
                    ) : null}
                    {newMonth === "06" ? (
                      <span>{languageToUse.june}</span>
                    ) : null}
                    {newMonth === "07" ? (
                      <span>{languageToUse.july}</span>
                    ) : null}
                    {newMonth === "08" ? (
                      <span>{languageToUse.aug}</span>
                    ) : null}
                    {newMonth === "09" ? (
                      <span>{languageToUse.sept}</span>
                    ) : null}
                    {newMonth === "10" ? (
                      <span>{languageToUse.oct}</span>
                    ) : null}
                    {newMonth === "11" ? (
                      <span>{languageToUse.nov}</span>
                    ) : null}
                    {newMonth === "12" ? (
                      <span>{languageToUse.dec}</span>
                    ) : null}
                  </p>
                </div>
                <div className="match-details">{programToday}</div>
              </div>
            </div>
            <div
              className={`program-container program-info ${
                activeProgram === 2 ? "active-program" : ""
              }
            `}
            >
              <p className="program-day">TOMORROW</p>

              <div className="flex-container">
                <div className="date-container">
                  <p className="date">{tomorrowDay}</p>

                  <p className="month">
                    {tomorrowNewMonth === "01" ? (
                      <span>{languageToUse.jan}</span>
                    ) : null}
                    {tomorrowNewMonth === "02" ? (
                      <span>{languageToUse.feb}</span>
                    ) : null}
                    {tomorrowNewMonth === "03" ? (
                      <span>{languageToUse.mar}</span>
                    ) : null}
                    {tomorrowNewMonth === "04" ? (
                      <span>{languageToUse.apr}</span>
                    ) : null}
                    {tomorrowNewMonth === "05" ? (
                      <span>{languageToUse.may}</span>
                    ) : null}
                    {tomorrowNewMonth === "06" ? (
                      <span>{languageToUse.june}</span>
                    ) : null}
                    {tomorrowNewMonth === "07" ? (
                      <span>{languageToUse.july}</span>
                    ) : null}
                    {tomorrowNewMonth === "08" ? (
                      <span>{languageToUse.aug}</span>
                    ) : null}
                    {tomorrowNewMonth === "09" ? (
                      <span>{languageToUse.sept}</span>
                    ) : null}
                    {tomorrowNewMonth === "10" ? (
                      <span>{languageToUse.oct}</span>
                    ) : null}
                    {tomorrowNewMonth === "11" ? (
                      <span>{languageToUse.nov}</span>
                    ) : null}
                    {tomorrowNewMonth === "12" ? (
                      <span>{languageToUse.dec}</span>
                    ) : null}
                  </p>
                </div>
                <div className="match-details">{programTomorrow}</div>
              </div>
            </div>
            <div
              className={`program-container program-info ${
                activeProgram === 3 ? "active-program" : ""
              }
            `}
            >
              <p className="program-day">
                {afterTomorrowDay}{" "}
                <span>
                  {afterTomorrowNewMonth === "01" ? (
                    <span>{languageToUse.jan}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "02" ? (
                    <span>{languageToUse.feb}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "03" ? (
                    <span>{languageToUse.mar}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "04" ? (
                    <span>{languageToUse.apr}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "05" ? (
                    <span>{languageToUse.may}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "06" ? (
                    <span>{languageToUse.june}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "07" ? (
                    <span>{languageToUse.july}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "08" ? (
                    <span>{languageToUse.aug}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "09" ? (
                    <span>{languageToUse.sept}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "10" ? (
                    <span>{languageToUse.oct}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "11" ? (
                    <span>{languageToUse.nov}</span>
                  ) : null}
                  {afterTomorrowNewMonth === "12" ? (
                    <span>{languageToUse.dec}</span>
                  ) : null}
                </span>
              </p>

              <div className="flex-container">
                <div className="date-container">
                  <p className="date">{afterTomorrowDay}</p>

                  <p className="month">
                    {afterTomorrowNewMonth === "01" ? (
                      <span>{languageToUse.jan}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "02" ? (
                      <span>{languageToUse.feb}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "03" ? (
                      <span>{languageToUse.mar}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "04" ? (
                      <span>{languageToUse.apr}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "05" ? (
                      <span>{languageToUse.may}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "06" ? (
                      <span>{languageToUse.june}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "07" ? (
                      <span>{languageToUse.july}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "08" ? (
                      <span>{languageToUse.aug}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "09" ? (
                      <span>{languageToUse.sept}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "10" ? (
                      <span>{languageToUse.oct}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "11" ? (
                      <span>{languageToUse.nov}</span>
                    ) : null}
                    {afterTomorrowNewMonth === "12" ? (
                      <span>{languageToUse.dec}</span>
                    ) : null}
                  </p>
                </div>
                <div className="match-details">{programAfterTomorrow}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Link to="/program" className="button">
            {languageToUse.weekProgram}
          </Link>
        </div>
      </div>
    </>
  );
};

export default LiveSports1;
