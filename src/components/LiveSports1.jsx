import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import { programMatchesSaturday } from "../content/program";
import { programMatchesSunday } from "../content/program";
import { programMatchesMonday } from "../content/program";
import { programMatchesTuesday } from "../content/program";
import { programMatchesWednesday } from "../content/program";
import { programMatchesThursday } from "../content/program";
import { programMatchesFriday } from "../content/program";

import "../styles/LiveSports.css";

const LiveSports1 = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let day = new Date().getDate();
  let month = new Date().getMonth();
  let weekday = new Date().getDay();

  const programMatchesSaturdayList = programMatchesSaturday.map((match) => {
    return (
      <div>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });

  const programMatchesSundayList = programMatchesSunday.map((match) => {
    return (
      <div>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programMatchesMondayList = programMatchesMonday.map((match) => {
    return (
      <div>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programMatchesTuesdayList = programMatchesTuesday.map((match) => {
    return (
      <div>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programMatchesWednesdayList = programMatchesWednesday.map((match) => {
    return (
      <div>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programMatchesThursdayList = programMatchesThursday.map((match) => {
    return (
      <div>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programMatchesFridayList = programMatchesFriday.map((match) => {
    return (
      <div>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });

  return (
    <>
      <div className="live-sports live-sports-coded" id="live">
        {/* <div className="header-placeholder" /> */}

        <h2>LIVE SPORTS TV</h2>
        <div className="program program-coded">
          <div className="program-container">
            <p className="program-day">TODAY</p>

            <div className="program-info">
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
              <div>
                {weekday === 6 ? (
                  <div className="match-details">
                    {programMatchesSaturdayList}{" "}
                  </div>
                ) : null}

                {weekday === 0 ? (
                  <div className="match-details">
                    {programMatchesSundayList}{" "}
                  </div>
                ) : null}
                {weekday === 1 ? (
                  <div className="match-details">
                    {programMatchesMondayList}{" "}
                  </div>
                ) : null}

                {weekday === 2 ? (
                  <div className="match-details">
                    {programMatchesTuesdayList}{" "}
                  </div>
                ) : null}
                {weekday === 3 ? (
                  <div className="match-details">
                    {programMatchesWednesdayList}
                  </div>
                ) : null}

                {weekday === 4 ? (
                  <div className="match-details">
                    {programMatchesThursdayList}{" "}
                  </div>
                ) : null}
                {weekday === 5 ? (
                  <div className="match-details">
                    {programMatchesFridayList}{" "}
                  </div>
                ) : null}
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
