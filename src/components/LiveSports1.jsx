import React, { useEffect } from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/LiveSports.css";

const LiveSports1 = (props) => {
  let {
    language,
    languageToUse,
    pathname,
    day,
    weekday,
    newMonth,
    year,
    data,
  } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let date = `${year}-${newMonth}-${day}`;

  let matches = data.allContentfulMatch.nodes;

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

  return (
    <>
      <div className="live-sports live-sports-coded">
        <h2>LIVE SPORTS TV</h2>
        <div className="program program-coded" id="live">
          <div className="program-container program-info">
            <p className="program-day">TODAY</p>

            <div className="flex-container">
              <div className="date-container">
                <p className="date">{day}</p>
                {language === "french" ? (
                  <p className="month">
                    {newMonth === "01" ? <span>JAN</span> : null}
                    {newMonth === "02" ? <span>FEV</span> : null}
                    {newMonth === "03" ? <span>MAR</span> : null}
                    {newMonth === "04" ? <span>AVR</span> : null}
                    {newMonth === "05" ? <span>MAI</span> : null}
                    {newMonth === "06" ? <span>JUIN</span> : null}
                    {newMonth === "07" ? <span>JUL</span> : null}
                    {newMonth === "08" ? <span>AOUT</span> : null}
                    {newMonth === "09" ? <span>SEP</span> : null}
                    {newMonth === "10" ? <span>OCT</span> : null}
                    {newMonth === "11" ? <span>NOV</span> : null}
                    {newMonth === "12" ? <span>DEC</span> : null}
                  </p>
                ) : (
                  <p className="month">
                    {newMonth === "01" ? <span>JAN</span> : null}
                    {newMonth === "02" ? <span>FEB</span> : null}
                    {newMonth === "03" ? <span> MAR</span> : null}
                    {newMonth === "04" ? <span>APR</span> : null}
                    {newMonth === "05" ? <span>MAY</span> : null}
                    {newMonth === "06" ? <span>JUN</span> : null}
                    {newMonth === "07" ? <span>JUL</span> : null}
                    {newMonth === "08" ? <span>AUG</span> : null}
                    {newMonth === "09" ? <span>SEP</span> : null}
                    {newMonth === "10" ? <span>OCT</span> : null}
                    {newMonth === "11" ? <span>NOV</span> : null}
                    {newMonth === "12" ? <span>DEC</span> : null}
                  </p>
                )}
              </div>
              <div className="match-details">{programToday}</div>
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
