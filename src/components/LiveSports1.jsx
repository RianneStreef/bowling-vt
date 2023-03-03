import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/LiveSports.css";

const LiveSports1 = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let day = new Date().getDate();
  let month = new Date().getMonth();

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
              <table>
                <tr>
                  <td>15h00</td>
                  <td>FOOT</td>
                  <td>TOTTENHAM - CHELSEA</td>
                </tr>

                <tr>
                  <td>20h00</td>
                  <td>VI NATIONS</td>
                  <td>FRANCE - SCOTLAND</td>
                </tr>
              </table>
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
