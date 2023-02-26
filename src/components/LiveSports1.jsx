import React from "react";

import { content } from "../content/languages";

import "../styles/LiveSports.css";

const LiveSports1 = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <>
      <div className="live-sports">
        <h2>LIVE SPORTS TV</h2>
        <div className="program">
          <p className="program-day">{languageToUse.saturday}</p>
          <div className="program-info">
            <table>
              <tr>
                <th>15h00</th>
                <th>FOOT</th>
                <th>TOTTENHAM - CHELSEA</th>
              </tr>
              <tr>
                <td>20h00</td>
                <td>VI NATIONS</td>
                <td>FRANCE - SCOTLAND</td>
              </tr>
            </table>
          </div>
          <p className="program-day">{languageToUse.sunday}</p>
          <div className="program-info">
            <table>
              <tr>
                <th>15h00</th>
                <th>FOOT</th>
                <th>TOTTENHAM - CHELSEA</th>
              </tr>
              <tr>
                <td>20h00</td>
                <td>VI NATIONS</td>
                <td>FRANCE - SCOTLAND</td>
              </tr>
            </table>
          </div>
          <p className="program-day">{languageToUse.monday}</p>
          <div className="program-info">
            <table>
              <tr>
                <th>15h00</th>
                <th>FOOT</th>
                <th>TOTTENHAM - CHELSEA</th>
              </tr>
              <tr>
                <td>20h00</td>
                <td>VI NATIONS</td>
                <td>FRANCE - SCOTLAND</td>
              </tr>
            </table>
          </div>
          <p className="program-day">{languageToUse.tuesday}</p>
          <div className="program-info">
            <table>
              <tr>
                <th>15h00</th>
                <th>FOOT</th>
                <th>TOTTENHAM - CHELSEA</th>
              </tr>
              <tr>
                <td>20h00</td>
                <td>VI NATIONS</td>
                <td>FRANCE - SCOTLAND</td>
              </tr>
            </table>
          </div>
          <p className="program-day">{languageToUse.wednesday}</p>
          <div className="program-info">
            <table>
              <tr>
                <th>15h00</th>
                <th>FOOT</th>
                <th>TOTTENHAM - CHELSEA</th>
              </tr>
              <tr>
                <td>20h00</td>
                <td>VI NATIONS</td>
                <td>FRANCE - SCOTLAND</td>
              </tr>
            </table>
          </div>
          <p className="program-day">{languageToUse.thursday}</p>
          <div className="program-info">
            <table>
              <tr>
                <th>15h00</th>
                <th>FOOT</th>
                <th>TOTTENHAM - CHELSEA</th>
              </tr>
              <tr>
                <td>20h00</td>
                <td>VI NATIONS</td>
                <td>FRANCE - SCOTLAND</td>
              </tr>
            </table>
          </div>
          <p className="program-day">{languageToUse.friday}</p>
          <div className="program-info">
            <table>
              <tr>
                <th>15h00</th>
                <th>FOOT</th>
                <th>TOTTENHAM - CHELSEA</th>
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
      <div className="divider" />
    </>
  );
};

export default LiveSports1;
