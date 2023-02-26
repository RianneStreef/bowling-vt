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
          <p className="program-info">
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
          </p>
          <p className="program-day">{languageToUse.sunday}</p>
          <p className="program-info">
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
          </p>
          <p className="program-day">{languageToUse.monday}</p>
          <p className="program-info">
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
          </p>
          <p className="program-day">{languageToUse.tuesday}</p>
          <p className="program-info">
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
          </p>
          <p className="program-day">{languageToUse.wednesday}</p>
          <p className="program-info">
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
          </p>
          <p className="program-day">{languageToUse.thursday}</p>
          <p className="program-info">
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
          </p>
          <p className="program-day">{languageToUse.friday}</p>
          <p className="program-info">
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
          </p>
        </div>
      </div>
      <div className="divider" />
    </>
  );
};

export default LiveSports1;
