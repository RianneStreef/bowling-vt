import React from "react";

import { content } from "../content/languages";

import "../styles/LiveSports.css";

const LiveSports1 = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <>
      <div className="live-sports live-sports-coded" id="live">
        {/* <div className="header-placeholder" /> */}

        <h2>LIVE SPORTS TV</h2>
        <div className="program program-coded">
          <div className="program-container">
            <p className="program-day">{languageToUse.saturday}</p>

            <div className="program-info">
              <div className="date-container">
                <p className="date">02</p>
                <p className="month">MAR</p>
              </div>
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
          <div className="program-container">
            <p className="program-day">{languageToUse.sunday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">03</p>
                <p className="month">MAR</p>
              </div>
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
          <div className="program-container">
            <p className="program-day">{languageToUse.monday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">04</p>
                <p className="month">MAR</p>
              </div>
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
          <div className="program-container">
            <p className="program-day">{languageToUse.tuesday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">05</p>
                <p className="month">MAR</p>
              </div>
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
          <div className="program-container">
            <p className="program-day">{languageToUse.wednesday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">06</p>
                <p className="month">MAR</p>
              </div>
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
          <div className="program-container">
            <p className="program-day">{languageToUse.thursday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">07</p>
                <p className="month">MAR</p>
              </div>
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
          <div className="program-container">
            <p className="program-day">{languageToUse.friday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">08</p>
                <p className="month">MAR</p>
              </div>
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
                <tr>
                  <th>15h00</th>
                  <th>FOOT</th>
                  <th>TOTTENHAM - CHELSEA</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="divider" /> */}
    </>
  );
};

export default LiveSports1;
