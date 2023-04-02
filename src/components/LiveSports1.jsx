import React, { useEffect } from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import program14 from "../content/programs/program14";
import program15 from "../content/programs/program15";

import "../styles/LiveSports.css";

const LiveSports1 = (props) => {
  let { language, languageToUse, pathname, currentWeek } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let day = new Date().getDate();
  let month = new Date().getMonth();
  let weekday = new Date().getDay();

  useEffect(() => {
    const timer = setTimeout(() => {
      let element = document.getElementById("live");
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [pathname]);

  // let programDate = program14.6.matches;

  // const todayProgram = programDate.map((match) => {
  //   return (
  //     <div>
  //       <p className="game-time">
  //         {match.hour} {match.category}
  //       </p>
  //       <p className="game-name">{match.game}</p>
  //     </div>
  //   );
  // });

  return (
    <>
      <div className="live-sports live-sports-coded">
        <h2>LIVE SPORTS TV</h2>
        <div className="program program-coded" id="live">
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
                {/* <div className="match-details">{todayProgram}</div> */}
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
