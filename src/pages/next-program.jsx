import React, { useEffect } from "react";
import { Link } from "gatsby";

import { Helmet } from "react-helmet";

import intakeInfo from "../content/intake";

import { content } from "../content/languages";
import { programDates } from "../content/next-program";
import { programMatchesSaturday } from "../content/next-program";
import { programMatchesSunday } from "../content/next-program";
import { programMatchesMonday } from "../content/next-program";
import { programMatchesTuesday } from "../content/next-program";
import { programMatchesWednesday } from "../content/next-program";
import { programMatchesThursday } from "../content/next-program";
import { programMatchesFriday } from "../content/next-program";

import phone from "../images/phone.png";

const Program = (props) => {
  let { language, languageToUse, pathname } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  console.log(programMatchesSaturday);

  useEffect(() => {
    const timer = setTimeout(() => {
      let element = document.getElementById("live");
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [pathname]);

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
          <Link to="/program">
            <button
              className={`button ${
                pathname === "http://localhost:8000/program/"
                  ? "disabled-button"
                  : null
              }`}
              disabled={pathname === "http://localhost:8000/program/" && true}
            >
              {languageToUse.lastWeek}
            </button>
          </Link>
          <Link to="/next-program">
            <button
              className={`button ${
                pathname === "http://localhost:8000/next-program/"
                  ? "disabled-button"
                  : null
              }`}
              disabled={
                pathname === "http://localhost:8000/next-program/" && true
              }
            >
              {languageToUse.nextWeek}
            </button>
          </Link>
        </div>
        <div className="program program-coded" id="live">
          <div className="program-container">
            <p className="program-day">{languageToUse.saturday}</p>

            <div className="program-info">
              <div className="date-container">
                <p className="date">{programDates.saturday.day}</p>
                <p className="month">{programDates.saturday.monthText}</p>
              </div>
              <table>{programMatchesSaturdayList}</table>
            </div>
          </div>
          <div className="program-container">
            <p className="program-day">{languageToUse.sunday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">{programDates.sunday.day}</p>
                <p className="month">{programDates.sunday.monthText}</p>
              </div>
              <table>{programMatchesSundayList}</table>
            </div>
          </div>
          <div className="program-container">
            <p className="program-day">{languageToUse.monday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">{programDates.monday.day}</p>
                <p className="month">{programDates.monday.monthText}</p>
              </div>
              <table>
                <table>{programMatchesMondayList}</table>
              </table>
            </div>
          </div>
          <div className="program-container">
            <p className="program-day">{languageToUse.tuesday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">{programDates.tuesday.day}</p>
                <p className="month">{programDates.tuesday.monthText}</p>
              </div>
              <table>{programMatchesTuesdayList}</table>
            </div>
          </div>
          <div className="program-container">
            <p className="program-day">{languageToUse.wednesday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">{programDates.wednesday.day}</p>
                <p className="month">{programDates.wednesday.monthText}</p>
              </div>
              <table>{programMatchesWednesdayList}</table>
            </div>
          </div>
          <div className="program-container">
            <p className="program-day">{languageToUse.thursday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">{programDates.thursday.day}</p>
                <p className="month">{programDates.thursday.monthText}</p>
              </div>
              <table>{programMatchesThursdayList}</table>
            </div>
          </div>
          <div className="program-container">
            <p className="program-day">{languageToUse.friday}</p>
            <div className="program-info">
              <div className="date-container">
                <p className="date">{programDates.friday.day}</p>
                <p className="month">{programDates.friday.monthText}</p>
              </div>
              <table>{programMatchesFridayList}</table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;