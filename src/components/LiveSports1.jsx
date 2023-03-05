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
      <tr>
        <td>{match.hour}</td>
        <td>{match.category}</td>
        <td>{match.game}</td>
      </tr>
    );
  });

  const programMatchesSundayList = programMatchesSunday.map((match) => {
    return (
      <tr>
        <td>{match.hour}</td>
        <td>{match.category}</td>
        <td>{match.game}</td>
      </tr>
    );
  });
  const programMatchesMondayList = programMatchesMonday.map((match) => {
    return (
      <tr>
        <td>{match.hour}</td>
        <td>{match.category}</td>
        <td>{match.game}</td>
      </tr>
    );
  });
  const programMatchesTuesdayList = programMatchesTuesday.map((match) => {
    return (
      <tr>
        <td>{match.hour}</td>
        <td>{match.category}</td>
        <td>{match.game}</td>
      </tr>
    );
  });
  const programMatchesWednesdayList = programMatchesWednesday.map((match) => {
    return (
      <tr>
        <td>{match.hour}</td>
        <td>{match.category}</td>
        <td>{match.game}</td>
      </tr>
    );
  });
  const programMatchesThursdayList = programMatchesThursday.map((match) => {
    return (
      <tr>
        <td>{match.hour}</td>
        <td>{match.category}</td>
        <td>{match.game}</td>
      </tr>
    );
  });
  const programMatchesFridayList = programMatchesFriday.map((match) => {
    return (
      <tr>
        <td>{match.hour}</td>
        <td>{match.category}</td>
        <td>{match.game}</td>
      </tr>
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
                  <table> {programMatchesSaturdayList} </table>
                ) : null}

                {weekday === 0 ? (
                  <table> {programMatchesSundayList} </table>
                ) : null}
                {weekday === 1 ? (
                  <table> {programMatchesMondayList} </table>
                ) : null}

                {weekday === 2 ? (
                  <table> {programMatchesTuesdayList} </table>
                ) : null}
                {weekday === 3 ? (
                  <table> {programMatchesWednesdayList} </table>
                ) : null}

                {weekday === 4 ? (
                  <table> {programMatchesThursdayList} </table>
                ) : null}
                {weekday === 5 ? (
                  <table> {programMatchesFridayList} </table>
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
      {/* <div className="divider" /> */}
    </>
  );
};

export default LiveSports1;
