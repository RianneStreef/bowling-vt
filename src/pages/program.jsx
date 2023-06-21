import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import { Helmet } from "react-helmet";

import intakeInfo from "../content/intake";

import { content } from "../content/languages";

import phone from "../images/phone.png";

const Program = (props) => {
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

  let matches = data.allContentfulMatch.nodes;
  console.log(matches);

  const [daysFromSaturday, setDaysFromSaturday] = useState(0);

  useEffect(() => {
    weekday === 0 ? setDaysFromSaturday(1) : null;
    weekday === 1 ? setDaysFromSaturday(2) : null;
    weekday === 2 ? setDaysFromSaturday(3) : null;
    weekday === 3 ? setDaysFromSaturday(4) : null;
    weekday === 4 ? setDaysFromSaturday(5) : null;
    weekday === 5 ? setDaysFromSaturday(6) : null;
    weekday === 6 ? setDaysFromSaturday(0) : null;

    let element = document.getElementById("live");
    element.classList.remove("scale-in");
    const timer = setTimeout(() => {
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [day, weekday, newMonth, year, pathname, daysFromSaturday]);

  let newDate = `${year}-${newMonth}-${day}`;
  let saturday = `${year}-${newMonth}-${day - daysFromSaturday}`;
  let sunday = `${year}-${newMonth}-${day - daysFromSaturday + 1}`;

  console.log(newDate);
  console.log(saturday);

  // let firstWeek = 1;
  // let lastWeek = 52;

  const programSaturday = matches
    .filter((match) => match.dateTime === saturday)
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

  const programSunday = matches
    .filter((match) => match.dateTime === sunday)
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
      <Helmet>
        <title>{languageToUse.programTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <a href="tel:0033479222557" className="reservation-button">
        <img src={phone} alt="call button" className="phone-icon" />{" "}
        {languageToUse.reservation}
      </a>
      <div className="live-sports live-sports-coded">
        <div className="header-placeholder-mobile" />

        <h2>LIVE SPORTS TV</h2>
        <div className="juggle-buttons">
          <button
            className="button"
            // disabled={week === firstWeek}
            // onClick={() => setWeek(week - 1)}
          >
            &lt;
          </button>

          <span>this week</span>

          <button
            className="button"
            // className={`button ${week === lastWeek ? "disabled-button" : null}`}
            // disabled={week === lastWeek}
            // onClick={() => setWeek(week + 1)}
          >
            &gt;
          </button>
        </div>
        <div className="program program-coded" id="live">
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{day - daysFromSaturday}</p>
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
              </div>
              <div className="match-details">{programSaturday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{day - daysFromSaturday}</p>
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
              </div>
              <div className="match-details">{programSunday}</div>
            </div>
          </div>
          {/* <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{weekToUse.sunday.day}</p>
                <p className="month">{weekToUse.sunday.monthText}</p>
              </div>
              <div className="match-details">{programSunday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{weekToUse.monday.day}</p>
                <p className="month">{weekToUse.monday.monthText}</p>
              </div>
              <div className="match-details">{programMonday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{weekToUse.tuesday.day}</p>
                <p className="month">{weekToUse.tuesday.monthText}</p>
              </div>
              <div className="match-details">{programTuesday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{weekToUse.wednesday.day}</p>
                <p className="month">{weekToUse.wednesday.monthText}</p>
              </div>
              <div className="match-details">{programWednesday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{weekToUse.thursday.day}</p>
                <p className="month">{weekToUse.thursday.monthText}</p>
              </div>
              <div className="match-details">{programThursday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{weekToUse.friday.day}</p>
                <p className="month">{weekToUse.friday.monthText}</p>
              </div>
              <div className="match-details">{programFriday}</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export const matchQuery = graphql`
  query matchesQuery {
    allContentfulMatch {
      nodes {
        category
        id
        match
        dateTime
        time
      }
    }
  }
`;

export default Program;
