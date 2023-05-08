import React, { useEffect } from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import { program } from "../content/programs/program";

import "../styles/LiveSports.css";

const LiveSports1 = (props) => {
  let { language, languageToUse, pathname, currentWeek } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let day = new Date().getDate();
  let month = new Date().getMonth();
  let weekday = new Date().getDay();

  let weekToUse;

  currentWeek === 14 ? (weekToUse = program.program14) : null;
  currentWeek === 15 ? (weekToUse = program.program15) : null;
  currentWeek === 16 ? (weekToUse = program.program15) : null;
  currentWeek === 17 ? (weekToUse = program.program15) : null;
  currentWeek === 18 ? (weekToUse = program.program15) : null;
  currentWeek === 19 ? (weekToUse = program.program15) : null;
  currentWeek === 20 ? (weekToUse = program.program15) : null;
  currentWeek === 21 ? (weekToUse = program.program15) : null;
  currentWeek === 22 ? (weekToUse = program.program15) : null;
  currentWeek === 23 ? (weekToUse = program.program15) : null;
  currentWeek === 24 ? (weekToUse = program.program15) : null;
  currentWeek === 25 ? (weekToUse = program.program15) : null;
  currentWeek === 26 ? (weekToUse = program.program15) : null;

  console.log(weekToUse);

  let dayToUse;

  weekday === 0 ? (dayToUse = weekToUse.sunday.matches) : null;
  weekday === 1 ? (dayToUse = weekToUse.monday.matches) : null;
  weekday === 2 ? (dayToUse = weekToUse.tuesday.matches) : null;
  weekday === 3 ? (dayToUse = weekToUse.wednesday.matches) : null;
  weekday === 4 ? (dayToUse = weekToUse.thursday.matches) : null;
  weekday === 5 ? (dayToUse = weekToUse.friday.matches) : null;
  weekday === 6 ? (dayToUse = weekToUse.saturday.matches) : null;

  useEffect(() => {
    const timer = setTimeout(() => {
      let element = document.getElementById("live");
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [pathname]);

  const programToday = dayToUse.map((match) => {
    return (
      <div key={match.index}>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
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
                <p className="month">
                  {month === 0 ? <span>JAN</span> : null}
                  {month === 1 ? <span>FEB</span> : null}
                  {month === 2 ? <span> MAR</span> : null}
                  {month === 3 ? <span>APR</span> : null}
                  {month === 4 ? <span>MAY</span> : null}
                  {month === 5 ? <span>JUN</span> : null}
                  {month === 6 ? <span>JUL</span> : null}
                  {month === 7 ? <span>AUG</span> : null}
                  {month === 8 ? <span>SEP</span> : null}
                  {month === 9 ? <span>OCT</span> : null}
                  {month === 10 ? <span>NOV</span> : null}
                  {month === 11 ? <span>DEC</span> : null}
                </p>
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
