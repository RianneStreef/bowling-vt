import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";

import intakeInfo from "../content/intake";

import { content } from "../content/languages";

import { program } from "../content/programs/program";

import phone from "../images/phone.png";

const Program = (props) => {
  let { language, languageToUse, pathname, currentWeek } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  const [week, setWeek] = useState(currentWeek);

  let weekToUse;

  week === 14 ? (weekToUse = program.program14) : null;
  week === 15 ? (weekToUse = program.program15) : null;
  week === 16 ? (weekToUse = program.program15) : null;
  week === 17 ? (weekToUse = program.program15) : null;
  week === 18 ? (weekToUse = program.program15) : null;
  week === 18 ? (weekToUse = program.program15) : null;
  week === 19 ? (weekToUse = program.program15) : null;
  week === 20 ? (weekToUse = program.program15) : null;
  week === 21 ? (weekToUse = program.program15) : null;
  week === 22 ? (weekToUse = program.program15) : null;
  week === 23 ? (weekToUse = program.program15) : null;
  week === 24 ? (weekToUse = program.program15) : null;
  week === 25 ? (weekToUse = program.program15) : null;
  week === 26 ? (weekToUse = program.program15) : null;
  week === 27 ? (weekToUse = program.program15) : null;
  week === 28 ? (weekToUse = program.program15) : null;

  console.log(weekToUse);

  let firstWeek = 14;
  let lastWeek = 15;

  useEffect(() => {
    let element = document.getElementById("live");
    element.classList.remove("scale-in");
    const timer = setTimeout(() => {
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [pathname, week]);

  let currentWeekProgramSaturday = weekToUse.saturday.matches;
  let currentWeekProgramSunday = weekToUse.sunday.matches;
  let currentWeekProgramMonday = weekToUse.monday.matches;
  let currentWeekProgramTuesday = weekToUse.tuesday.matches;
  let currentWeekProgramWednesday = weekToUse.wednesday.matches;
  let currentWeekProgramThursday = weekToUse.thursday.matches;
  let currentWeekProgramFriday = weekToUse.friday.matches;

  const programSaturday = currentWeekProgramSaturday.map((match) => {
    return (
      <div key={match.id}>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programSunday = currentWeekProgramSunday.map((match) => {
    return (
      <div key={match.id}>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programMonday = currentWeekProgramMonday.map((match) => {
    return (
      <div key={match.id}>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programTuesday = currentWeekProgramTuesday.map((match) => {
    return (
      <div key={match.id}>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programWednesday = currentWeekProgramWednesday.map((match) => {
    return (
      <div key={match.id}>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programThursday = currentWeekProgramThursday.map((match) => {
    return (
      <div key={match.id}>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
      </div>
    );
  });
  const programFriday = currentWeekProgramFriday.map((match) => {
    return (
      <div key={match.id}>
        <p className="game-time">
          {match.hour} {match.category}
        </p>
        <p className="game-name">{match.game}</p>
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
            className={`button ${
              week === firstWeek ? "disabled-button" : null
            }`}
            disabled={week === firstWeek}
            onClick={() => setWeek(week - 1)}
          >
            &lt;
          </button>

          <span>{weekToUse.week}</span>

          <button
            className={`button ${week === lastWeek ? "disabled-button" : null}`}
            disabled={week === lastWeek}
            onClick={() => setWeek(week + 1)}
          >
            &gt;
          </button>
        </div>
        <div className="program program-coded" id="live">
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{weekToUse.saturday.day}</p>
                <p className="month">{weekToUse.saturday.monthText}</p>
              </div>
              <div className="match-details">{programSaturday}</div>
            </div>
          </div>
          <div className="program-info">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
