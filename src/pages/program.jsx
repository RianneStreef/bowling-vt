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

  let today = new Date();

  const [saturdayDate, setSaturdayDate] = useState(new Date());
  const [sundayDate, setSundayDate] = useState(new Date());
  const [mondayDate, setMondayDate] = useState(new Date());
  const [tuesdayDate, setTuesdayDate] = useState(new Date());
  const [wednesdayDate, setWednesdayDate] = useState(new Date());
  const [thursdayDate, setThursdayDate] = useState(new Date());
  const [fridayDate, setFridayDate] = useState(new Date());
  console.log(saturdayDate);
  console.log(sundayDate);

  const [daysFromSaturday, setDaysFromSaturday] = useState(0);

  const [saturdayTotal, setSaturdayTotal] = useState();
  const [sundayTotal, setSundayTotal] = useState();
  const [mondayTotal, setMondayTotal] = useState();
  const [tuesdayTotal, setTuesdayTotal] = useState();
  const [wednesdayTotal, setWednesdayTotal] = useState();
  const [thursdayTotal, setThursdayTotal] = useState();
  const [fridayTotal, setFridayTotal] = useState();

  const [saturdayDay, setSaturdayDay] = useState();
  const [sundayDay, setSundayDay] = useState();
  const [mondayDay, setMondayDay] = useState();
  const [tuesdayDay, setTuesdayDay] = useState();
  const [wednesdayDay, setWednesdayDay] = useState();
  const [thursdayDay, setThursdayDay] = useState();
  const [fridayDay, setFridayDay] = useState();

  const [newSaturdayMonth, setNewSaturdayMonth] = useState();
  const [newSundayMonth, setNewSundayMonth] = useState();
  const [newMondayMonth, setNewMondayMonth] = useState();
  const [newTuesdayMonth, setNewTuesdayMonth] = useState();
  const [newWednesdayMonth, setNewWednesdayMonth] = useState();
  const [newThursdayMonth, setNewThursdayMonth] = useState();
  const [newFridayMonth, setNewFridayMonth] = useState();

  let firstSaturday = "2023-06-03";
  let lastFriday = "20230-07-07";

  useEffect(() => {
    weekday === 0 ? setDaysFromSaturday(1) : null;
    weekday === 1 ? setDaysFromSaturday(2) : null;
    weekday === 2 ? setDaysFromSaturday(3) : null;
    weekday === 3 ? setDaysFromSaturday(4) : null;
    weekday === 4 ? setDaysFromSaturday(5) : null;
    weekday === 5 ? setDaysFromSaturday(6) : null;
    weekday === 6 ? setDaysFromSaturday(0) : null;

    let saturdayDateCalcul = today.getDate() - daysFromSaturday;
    let sundayDateCalcul = today.getDate() - daysFromSaturday + 1;
    let mondayDateCalcul = today.getDate() - daysFromSaturday + 2;
    let tuesdayDateCalcul = today.getDate() - daysFromSaturday + 3;
    let wednesdayDateCalcul = today.getDate() - daysFromSaturday + 4;
    let thursdayDateCalcul = today.getDate() - daysFromSaturday + 5;
    let fridayDateCalcul = today.getDate() - daysFromSaturday + 6;

    saturdayDate.setDate(saturdayDateCalcul);
    sundayDate.setDate(sundayDateCalcul);
    mondayDate.setDate(mondayDateCalcul);
    tuesdayDate.setDate(tuesdayDateCalcul);
    wednesdayDate.setDate(wednesdayDateCalcul);
    thursdayDate.setDate(thursdayDateCalcul);
    fridayDate.setDate(fridayDateCalcul);

    setSaturdayDay(("0" + saturdayDate.getDate()).slice(-2));
    setSundayDay(("0" + sundayDate.getDate()).slice(-2));
    setMondayDay(("0" + mondayDate.getDate()).slice(-2));
    setTuesdayDay(("0" + tuesdayDate.getDate()).slice(-2));
    setWednesdayDay(("0" + wednesdayDate.getDate()).slice(-2));
    setThursdayDay(("0" + thursdayDate.getDate()).slice(-2));
    setFridayDay(("0" + fridayDate.getDate()).slice(-2));

    let saturdayMonth = saturdayDate.getMonth() + 1;

    setNewSaturdayMonth(
      saturdayMonth.length !== 2 ? "0" + saturdayMonth : saturdayMonth
    );

    console.log(saturdayMonth);

    saturdayMonth === 2 ? setNewSaturdayMonth("02") : null;
    saturdayMonth === 3 ? setNewSaturdayMonth("03") : null;
    saturdayMonth === 4 ? setNewSaturdayMonth("04") : null;
    saturdayMonth === 5 ? setNewSaturdayMonth("05") : null;
    saturdayMonth === 6 ? setNewSaturdayMonth("06") : null;
    saturdayMonth === 7 ? setNewSaturdayMonth("07") : null;
    saturdayMonth === 8 ? setNewSaturdayMonth("08") : null;
    saturdayMonth === 9 ? setNewSaturdayMonth("09") : null;
    saturdayMonth === 10 ? setNewSaturdayMonth("10") : null;
    saturdayMonth === 11 ? setNewSaturdayMonth("11") : null;
    saturdayMonth === 12 ? setNewSaturdayMonth("12") : null;

    let sundayMonth = sundayDate.getMonth() + 1;
    console.log(sundayMonth);

    sundayMonth === 1 ? setNewSundayMonth("01") : null;
    sundayMonth === 2 ? setNewSundayMonth("02") : null;
    sundayMonth === 3 ? setNewSundayMonth("03") : null;
    sundayMonth === 4 ? setNewSundayMonth("04") : null;
    sundayMonth === 5 ? setNewSundayMonth("05") : null;
    sundayMonth === 6 ? setNewSundayMonth("06") : null;
    sundayMonth === 7 ? setNewSundayMonth("07") : null;
    sundayMonth === 8 ? setNewSundayMonth("08") : null;
    sundayMonth === 9 ? setNewSundayMonth("09") : null;
    sundayMonth === 10 ? setNewSundayMonth("10") : null;
    sundayMonth === 11 ? setNewSundayMonth("11") : null;
    sundayMonth === 12 ? setNewSundayMonth("12") : null;

    let mondayMonth = mondayDate.getMonth() + 1;

    mondayMonth === 1 ? setNewMondayMonth("01") : null;
    mondayMonth === 2 ? setNewMondayMonth("02") : null;
    mondayMonth === 3 ? setNewMondayMonth("03") : null;
    mondayMonth === 4 ? setNewMondayMonth("04") : null;
    mondayMonth === 5 ? setNewMondayMonth("05") : null;
    mondayMonth === 6 ? setNewMondayMonth("06") : null;
    mondayMonth === 7 ? setNewMondayMonth("07") : null;
    mondayMonth === 8 ? setNewMondayMonth("08") : null;
    mondayMonth === 9 ? setNewMondayMonth("09") : null;
    mondayMonth === 10 ? setNewMondayMonth("10") : null;
    mondayMonth === 11 ? setNewMondayMonth("11") : null;
    mondayMonth === 12 ? setNewMondayMonth("12") : null;

    let tuesdayMonth = tuesdayDate.getMonth() + 1;
    tuesdayMonth === 1 ? setNewTuesdayMonth("01") : null;
    tuesdayMonth === 2 ? setNewTuesdayMonth("02") : null;
    tuesdayMonth === 3 ? setNewTuesdayMonth("03") : null;
    tuesdayMonth === 4 ? setNewTuesdayMonth("04") : null;
    tuesdayMonth === 5 ? setNewTuesdayMonth("05") : null;
    tuesdayMonth === 6 ? setNewTuesdayMonth("06") : null;
    tuesdayMonth === 7 ? setNewTuesdayMonth("07") : null;
    tuesdayMonth === 8 ? setNewTuesdayMonth("08") : null;
    tuesdayMonth === 9 ? setNewTuesdayMonth("09") : null;
    tuesdayMonth === 10 ? setNewTuesdayMonth("10") : null;
    tuesdayMonth === 11 ? setNewTuesdayMonth("11") : null;
    tuesdayMonth === 12 ? setNewTuesdayMonth("12") : null;

    let wednesdayMonth = wednesdayDate.getMonth() + 1;
    wednesdayMonth === 1 ? setNewWednesdayMonth("01") : null;
    wednesdayMonth === 2 ? setNewWednesdayMonth("02") : null;
    wednesdayMonth === 3 ? setNewWednesdayMonth("03") : null;
    wednesdayMonth === 4 ? setNewWednesdayMonth("04") : null;
    wednesdayMonth === 5 ? setNewWednesdayMonth("05") : null;
    wednesdayMonth === 6 ? setNewWednesdayMonth("06") : null;
    wednesdayMonth === 7 ? setNewWednesdayMonth("07") : null;
    wednesdayMonth === 8 ? setNewWednesdayMonth("08") : null;
    wednesdayMonth === 9 ? setNewWednesdayMonth("09") : null;
    wednesdayMonth === 10 ? setNewWednesdayMonth("10") : null;
    wednesdayMonth === 11 ? setNewWednesdayMonth("11") : null;
    wednesdayMonth === 12 ? setNewWednesdayMonth("12") : null;

    let thursdayMonth = thursdayDate.getMonth() + 1;
    thursdayMonth === 1 ? setNewThursdayMonth("01") : null;
    thursdayMonth === 2 ? setNewThursdayMonth("02") : null;
    thursdayMonth === 3 ? setNewThursdayMonth("03") : null;
    thursdayMonth === 4 ? setNewThursdayMonth("04") : null;
    thursdayMonth === 5 ? setNewThursdayMonth("05") : null;
    thursdayMonth === 6 ? setNewThursdayMonth("06") : null;
    thursdayMonth === 7 ? setNewThursdayMonth("07") : null;
    thursdayMonth === 8 ? setNewThursdayMonth("08") : null;
    thursdayMonth === 9 ? setNewThursdayMonth("09") : null;
    thursdayMonth === 10 ? setNewThursdayMonth("10") : null;
    thursdayMonth === 11 ? setNewThursdayMonth("11") : null;
    thursdayMonth === 12 ? setNewThursdayMonth("12") : null;

    let fridayMonth = fridayDate.getMonth() + 1;
    fridayMonth === 1 ? setNewFridayMonth("01") : null;
    fridayMonth === 2 ? setNewFridayMonth("02") : null;
    fridayMonth === 3 ? setNewFridayMonth("03") : null;
    fridayMonth === 4 ? setNewFridayMonth("04") : null;
    fridayMonth === 5 ? setNewFridayMonth("05") : null;
    fridayMonth === 6 ? setNewFridayMonth("06") : null;
    fridayMonth === 7 ? setNewFridayMonth("07") : null;
    fridayMonth === 8 ? setNewFridayMonth("08") : null;
    fridayMonth === 9 ? setNewFridayMonth("09") : null;
    fridayMonth === 10 ? setNewFridayMonth("10") : null;
    fridayMonth === 11 ? setNewFridayMonth("11") : null;
    fridayMonth === 12 ? setNewFridayMonth("12") : null;

    let saturdayYear = JSON.stringify(saturdayDate.getYear() + 1900);
    let sundayYear = JSON.stringify(sundayDate.getYear() + 1900);
    let mondayYear = JSON.stringify(mondayDate.getYear() + 1900);
    let tuesdayYear = JSON.stringify(tuesdayDate.getYear() + 1900);
    let wednesdayYear = JSON.stringify(wednesdayDate.getYear() + 1900);
    let thursdayYear = JSON.stringify(thursdayDate.getYear() + 1900);
    let fridayYear = JSON.stringify(fridayDate.getYear() + 1900);

    setSaturdayTotal(`${saturdayYear}-${newSaturdayMonth}-${saturdayDay}`);
    setSundayTotal(`${sundayYear}-${newSundayMonth}-${sundayDay}`);
    setMondayTotal(`${mondayYear}-${newMondayMonth}-${mondayDay}`);
    setTuesdayTotal(`${tuesdayYear}-${newTuesdayMonth}-${tuesdayDay}`);
    setWednesdayTotal(`${wednesdayYear}-${newWednesdayMonth}-${wednesdayDay}`);
    setThursdayTotal(`${thursdayYear}-${newThursdayMonth}-${thursdayDay}`);
    setFridayTotal(`${fridayYear}-${newFridayMonth}-${fridayDay}`);

    console.log(saturdayYear);
    console.log(typeof saturdayYear);
    console.log(newSaturdayMonth);
    console.log(typeof newSaturdayMonth);
    console.log(saturdayDay);
    console.log(typeof saturdayDay);
    console.log(saturdayTotal);
    console.log(sundayTotal);

    let element = document.getElementById("live");
    element.classList.remove("scale-in");
    const timer = setTimeout(() => {
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [day, weekday, newMonth, year, pathname, daysFromSaturday, saturdayDate]);

  function setPreviousWeek() {
    let previousSaturday = saturdayDate.getDate() - 7;
    console.log(previousSaturday);
    saturdayDate.setDate(previousSaturday);
    setSaturdayDate(saturdayDate);
    console.log(saturdayDate);
    let previousSunday = sundayDate.getDate() - 7;
    sundayDate.setDate(previousSunday);
    setSundayDate(sundayDate);
    console.log(sundayDate);
    let previousMonday = mondayDate.getDate() - 7;
    mondayDate.setDate(previousMonday);
    setMondayDate(mondayDate);
    let previousTuesday = tuesdayDate.getDate() - 7;
    tuesdayDate.setDate(previousTuesday);
    setTuesdayDate(tuesdayDate);
    let previousWednesday = wednesdayDate.getDate() - 7;
    wednesdayDate.setDate(previousWednesday);
    setWednesdayDate(wednesdayDate);
    let previousThursday = thursdayDate.getDate() - 7;
    thursdayDate.setDate(previousThursday);
    setThursdayDate(thursdayDate);
    let previousFriday = fridayDate.getDate() - 7;
    fridayDate.setDate(previousFriday);
    setFridayDate(fridayDate);
  }

  function setNextWeek() {
    console.log("next week");
  }

  const programSaturday = matches
    .filter((match) => match.dateTime === saturdayTotal)
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
    .filter((match) => match.dateTime === sundayTotal)
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
  const programMonday = matches
    .filter((match) => match.dateTime === mondayTotal)
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
  const programTuesday = matches
    .filter((match) => match.dateTime === tuesdayTotal)
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
  const programWednesday = matches
    .filter((match) => match.dateTime === wednesdayTotal)
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
  const programThursday = matches
    .filter((match) => match.dateTime === thursdayTotal)
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
  const programFriday = matches
    .filter((match) => match.dateTime === fridayTotal)
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
            className={`button ${
              saturdayTotal === firstSaturday ? "disabled-button" : null
            }`}
            disabled={saturdayTotal === firstSaturday}
            onClick={() => setPreviousWeek()}
          >
            &lt;
          </button>

          <span>
            {saturdayDay}
            {newSaturdayMonth === "01" ? (
              <span>{languageToUse.jan}</span>
            ) : null}
            {newSaturdayMonth === "02" ? (
              <span>{languageToUse.feb}</span>
            ) : null}
            {newSaturdayMonth === "03" ? (
              <span>{languageToUse.mar}</span>
            ) : null}
            {newSaturdayMonth === "04" ? (
              <span>{languageToUse.apr}</span>
            ) : null}
            {newSaturdayMonth === "05" ? (
              <span>{languageToUse.may}</span>
            ) : null}
            {newSaturdayMonth === "06" ? (
              <span>{languageToUse.june}</span>
            ) : null}
            {newSaturdayMonth === "07" ? (
              <span>{languageToUse.july}</span>
            ) : null}
            {newSaturdayMonth === "08" ? (
              <span>{languageToUse.aug}</span>
            ) : null}
            {newSaturdayMonth === "09" ? (
              <span>{languageToUse.sept}</span>
            ) : null}
            {newSaturdayMonth === "10" ? (
              <span>{languageToUse.oct}</span>
            ) : null}
            {newSaturdayMonth === "11" ? (
              <span>{languageToUse.nov}</span>
            ) : null}
            {newSaturdayMonth === "12" ? (
              <span>{languageToUse.dec}</span>
            ) : null}
            - {fridayDay}
            {newSaturdayMonth === "01" ? (
              <span>{languageToUse.jan}</span>
            ) : null}
            {newSaturdayMonth === "02" ? (
              <span>{languageToUse.feb}</span>
            ) : null}
            {newSaturdayMonth === "03" ? (
              <span>{languageToUse.mar}</span>
            ) : null}
            {newSaturdayMonth === "04" ? (
              <span>{languageToUse.apr}</span>
            ) : null}
            {newSaturdayMonth === "05" ? (
              <span>{languageToUse.may}</span>
            ) : null}
            {newSaturdayMonth === "06" ? (
              <span>{languageToUse.june}</span>
            ) : null}
            {newSaturdayMonth === "07" ? (
              <span>{languageToUse.july}</span>
            ) : null}
            {newSaturdayMonth === "08" ? (
              <span>{languageToUse.aug}</span>
            ) : null}
            {newSaturdayMonth === "09" ? (
              <span>{languageToUse.sept}</span>
            ) : null}
            {newSaturdayMonth === "10" ? (
              <span>{languageToUse.oct}</span>
            ) : null}
            {newSaturdayMonth === "11" ? (
              <span>{languageToUse.nov}</span>
            ) : null}
            {newSaturdayMonth === "12" ? (
              <span>{languageToUse.dec}</span>
            ) : null}
          </span>

          <button
            className={`button ${
              fridayTotal === lastFriday ? "disabled-button" : null
            }`}
            disabled={fridayTotal === lastFriday}
            onClick={() => setNextWeek()}
          >
            &gt;
          </button>
        </div>
        <div className="program program-coded" id="live">
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{saturdayDay}</p>
                <p className="month">
                  {newSaturdayMonth === "01" ? (
                    <span>{languageToUse.jan}</span>
                  ) : null}
                  {newSaturdayMonth === "02" ? (
                    <span>{languageToUse.feb}</span>
                  ) : null}
                  {newSaturdayMonth === "03" ? (
                    <span>{languageToUse.mar}</span>
                  ) : null}
                  {newSaturdayMonth === "04" ? (
                    <span>{languageToUse.apr}</span>
                  ) : null}
                  {newSaturdayMonth === "05" ? (
                    <span>{languageToUse.may}</span>
                  ) : null}
                  {newSaturdayMonth === "06" ? (
                    <span>{languageToUse.june}</span>
                  ) : null}
                  {newSaturdayMonth === "07" ? (
                    <span>{languageToUse.july}</span>
                  ) : null}
                  {newSaturdayMonth === "08" ? (
                    <span>{languageToUse.aug}</span>
                  ) : null}
                  {newSaturdayMonth === "09" ? (
                    <span>{languageToUse.sept}</span>
                  ) : null}
                  {newSaturdayMonth === "10" ? (
                    <span>{languageToUse.oct}</span>
                  ) : null}
                  {newSaturdayMonth === "11" ? (
                    <span>{languageToUse.nov}</span>
                  ) : null}
                  {newSaturdayMonth === "12" ? (
                    <span>{languageToUse.dec}</span>
                  ) : null}
                </p>
              </div>
              <div className="match-details">{programSaturday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{sundayDay}</p>
                <p className="month">
                  {newSaturdayMonth === "01" ? (
                    <span>{languageToUse.jan}</span>
                  ) : null}
                  {newSaturdayMonth === "02" ? (
                    <span>{languageToUse.feb}</span>
                  ) : null}
                  {newSaturdayMonth === "03" ? (
                    <span>{languageToUse.mar}</span>
                  ) : null}
                  {newSaturdayMonth === "04" ? (
                    <span>{languageToUse.apr}</span>
                  ) : null}
                  {newSaturdayMonth === "05" ? (
                    <span>{languageToUse.may}</span>
                  ) : null}
                  {newSaturdayMonth === "06" ? (
                    <span>{languageToUse.june}</span>
                  ) : null}
                  {newSaturdayMonth === "07" ? (
                    <span>{languageToUse.july}</span>
                  ) : null}
                  {newSaturdayMonth === "08" ? (
                    <span>{languageToUse.aug}</span>
                  ) : null}
                  {newSaturdayMonth === "09" ? (
                    <span>{languageToUse.sept}</span>
                  ) : null}
                  {newSaturdayMonth === "10" ? (
                    <span>{languageToUse.oct}</span>
                  ) : null}
                  {newSaturdayMonth === "11" ? (
                    <span>{languageToUse.nov}</span>
                  ) : null}
                  {newSaturdayMonth === "12" ? (
                    <span>{languageToUse.dec}</span>
                  ) : null}
                </p>
              </div>
              <div className="match-details">{programSunday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{mondayDay}</p>
                <p className="month">
                  {newSaturdayMonth === "01" ? (
                    <span>{languageToUse.jan}</span>
                  ) : null}
                  {newSaturdayMonth === "02" ? (
                    <span>{languageToUse.feb}</span>
                  ) : null}
                  {newSaturdayMonth === "03" ? (
                    <span>{languageToUse.mar}</span>
                  ) : null}
                  {newSaturdayMonth === "04" ? (
                    <span>{languageToUse.apr}</span>
                  ) : null}
                  {newSaturdayMonth === "05" ? (
                    <span>{languageToUse.may}</span>
                  ) : null}
                  {newSaturdayMonth === "06" ? (
                    <span>{languageToUse.june}</span>
                  ) : null}
                  {newSaturdayMonth === "07" ? (
                    <span>{languageToUse.july}</span>
                  ) : null}
                  {newSaturdayMonth === "08" ? (
                    <span>{languageToUse.aug}</span>
                  ) : null}
                  {newSaturdayMonth === "09" ? (
                    <span>{languageToUse.sept}</span>
                  ) : null}
                  {newSaturdayMonth === "10" ? (
                    <span>{languageToUse.oct}</span>
                  ) : null}
                  {newSaturdayMonth === "11" ? (
                    <span>{languageToUse.nov}</span>
                  ) : null}
                  {newSaturdayMonth === "12" ? (
                    <span>{languageToUse.dec}</span>
                  ) : null}
                </p>
              </div>
              <div className="match-details">{programMonday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{tuesdayDay}</p>
                <p className="month">
                  {newSaturdayMonth === "01" ? (
                    <span>{languageToUse.jan}</span>
                  ) : null}
                  {newSaturdayMonth === "02" ? (
                    <span>{languageToUse.feb}</span>
                  ) : null}
                  {newSaturdayMonth === "03" ? (
                    <span>{languageToUse.mar}</span>
                  ) : null}
                  {newSaturdayMonth === "04" ? (
                    <span>{languageToUse.apr}</span>
                  ) : null}
                  {newSaturdayMonth === "05" ? (
                    <span>{languageToUse.may}</span>
                  ) : null}
                  {newSaturdayMonth === "06" ? (
                    <span>{languageToUse.june}</span>
                  ) : null}
                  {newSaturdayMonth === "07" ? (
                    <span>{languageToUse.july}</span>
                  ) : null}
                  {newSaturdayMonth === "08" ? (
                    <span>{languageToUse.aug}</span>
                  ) : null}
                  {newSaturdayMonth === "09" ? (
                    <span>{languageToUse.sept}</span>
                  ) : null}
                  {newSaturdayMonth === "10" ? (
                    <span>{languageToUse.oct}</span>
                  ) : null}
                  {newSaturdayMonth === "11" ? (
                    <span>{languageToUse.nov}</span>
                  ) : null}
                  {newSaturdayMonth === "12" ? (
                    <span>{languageToUse.dec}</span>
                  ) : null}
                </p>
              </div>
              <div className="match-details">{programTuesday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{wednesdayDay}</p>
                <p className="month">
                  {newSaturdayMonth === "01" ? (
                    <span>{languageToUse.jan}</span>
                  ) : null}
                  {newSaturdayMonth === "02" ? (
                    <span>{languageToUse.feb}</span>
                  ) : null}
                  {newSaturdayMonth === "03" ? (
                    <span>{languageToUse.mar}</span>
                  ) : null}
                  {newSaturdayMonth === "04" ? (
                    <span>{languageToUse.apr}</span>
                  ) : null}
                  {newSaturdayMonth === "05" ? (
                    <span>{languageToUse.may}</span>
                  ) : null}
                  {newSaturdayMonth === "06" ? (
                    <span>{languageToUse.june}</span>
                  ) : null}
                  {newSaturdayMonth === "07" ? (
                    <span>{languageToUse.july}</span>
                  ) : null}
                  {newSaturdayMonth === "08" ? (
                    <span>{languageToUse.aug}</span>
                  ) : null}
                  {newSaturdayMonth === "09" ? (
                    <span>{languageToUse.sept}</span>
                  ) : null}
                  {newSaturdayMonth === "10" ? (
                    <span>{languageToUse.oct}</span>
                  ) : null}
                  {newSaturdayMonth === "11" ? (
                    <span>{languageToUse.nov}</span>
                  ) : null}
                  {newSaturdayMonth === "12" ? (
                    <span>{languageToUse.dec}</span>
                  ) : null}
                </p>
              </div>
              <div className="match-details">{programWednesday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{thursdayDay}</p>
                <p className="month">
                  {newSaturdayMonth === "01" ? (
                    <span>{languageToUse.jan}</span>
                  ) : null}
                  {newSaturdayMonth === "02" ? (
                    <span>{languageToUse.feb}</span>
                  ) : null}
                  {newSaturdayMonth === "03" ? (
                    <span>{languageToUse.mar}</span>
                  ) : null}
                  {newSaturdayMonth === "04" ? (
                    <span>{languageToUse.apr}</span>
                  ) : null}
                  {newSaturdayMonth === "05" ? (
                    <span>{languageToUse.may}</span>
                  ) : null}
                  {newSaturdayMonth === "06" ? (
                    <span>{languageToUse.june}</span>
                  ) : null}
                  {newSaturdayMonth === "07" ? (
                    <span>{languageToUse.july}</span>
                  ) : null}
                  {newSaturdayMonth === "08" ? (
                    <span>{languageToUse.aug}</span>
                  ) : null}
                  {newSaturdayMonth === "09" ? (
                    <span>{languageToUse.sept}</span>
                  ) : null}
                  {newSaturdayMonth === "10" ? (
                    <span>{languageToUse.oct}</span>
                  ) : null}
                  {newSaturdayMonth === "11" ? (
                    <span>{languageToUse.nov}</span>
                  ) : null}
                  {newSaturdayMonth === "12" ? (
                    <span>{languageToUse.dec}</span>
                  ) : null}
                </p>
              </div>
              <div className="match-details">{programThursday}</div>
            </div>
          </div>
          <div className="program-info">
            <div className="flex-container">
              <div className="date-container">
                <p className="date">{fridayDay}</p>
                <p className="month">
                  {newSaturdayMonth === "01" ? (
                    <span>{languageToUse.jan}</span>
                  ) : null}
                  {newSaturdayMonth === "02" ? (
                    <span>{languageToUse.feb}</span>
                  ) : null}
                  {newSaturdayMonth === "03" ? (
                    <span>{languageToUse.mar}</span>
                  ) : null}
                  {newSaturdayMonth === "04" ? (
                    <span>{languageToUse.apr}</span>
                  ) : null}
                  {newSaturdayMonth === "05" ? (
                    <span>{languageToUse.may}</span>
                  ) : null}
                  {newSaturdayMonth === "06" ? (
                    <span>{languageToUse.june}</span>
                  ) : null}
                  {newSaturdayMonth === "07" ? (
                    <span>{languageToUse.july}</span>
                  ) : null}
                  {newSaturdayMonth === "08" ? (
                    <span>{languageToUse.aug}</span>
                  ) : null}
                  {newSaturdayMonth === "09" ? (
                    <span>{languageToUse.sept}</span>
                  ) : null}
                  {newSaturdayMonth === "10" ? (
                    <span>{languageToUse.oct}</span>
                  ) : null}
                  {newSaturdayMonth === "11" ? (
                    <span>{languageToUse.nov}</span>
                  ) : null}
                  {newSaturdayMonth === "12" ? (
                    <span>{languageToUse.dec}</span>
                  ) : null}
                </p>
              </div>
              <div className="match-details">{programFriday}</div>
            </div>
          </div>
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
