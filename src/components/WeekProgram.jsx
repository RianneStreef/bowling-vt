import React, { useEffect, useState } from "react";

import { content } from "../content/languages";

const WeekProgram = (props) => {
  let { language, languageToUse, matches } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  const [today, setToday] = useState(new Date());
  console.log("today");
  console.log(today);

  const [weekday, setWeekday] = useState(new Date().getDay());

  const [saturdayDate, setSaturdayDate] = useState(new Date());
  const [sundayDate, setSundayDate] = useState(new Date());
  const [mondayDate, setMondayDate] = useState(new Date());
  const [tuesdayDate, setTuesdayDate] = useState(new Date());
  const [wednesdayDate, setWednesdayDate] = useState(new Date());
  const [thursdayDate, setThursdayDate] = useState(new Date());
  const [fridayDate, setFridayDate] = useState(new Date());
  console.log("saturdayDate");
  console.log(saturdayDate);
  // console.log(sundayDate);
  // console.log(mondayDate);
  // console.log(tuesdayDate);
  // console.log(wednesdayDate);
  // console.log(thursdayDate);
  // console.log(fridayDate);

  const [daysFromSaturday, setDaysFromSaturday] = useState(0);

  const [saturdayTotal, setSaturdayTotal] = useState();
  const [sundayTotal, setSundayTotal] = useState();
  const [mondayTotal, setMondayTotal] = useState();
  const [tuesdayTotal, setTuesdayTotal] = useState();
  const [wednesdayTotal, setWednesdayTotal] = useState();
  const [thursdayTotal, setThursdayTotal] = useState();
  const [fridayTotal, setFridayTotal] = useState();

  console.log("saturdayTotal");
  console.log(saturdayTotal);
  // console.log(sundayTotal);

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

  let firstSaturday = "2023-06-10";
  let lastFriday = "2023-07-07";

  console.log("saturdayTotal === firstSaturday");
  console.log(saturdayTotal === firstSaturday);

  useEffect(() => {
    console.log("useEffect running");

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

    console.log(saturdayDate);

    setSaturdayDay(("0" + saturdayDate.getDate()).slice(-2));
    setSundayDay(("0" + sundayDate.getDate()).slice(-2));
    setMondayDay(("0" + mondayDate.getDate()).slice(-2));
    setTuesdayDay(("0" + tuesdayDate.getDate()).slice(-2));
    setWednesdayDay(("0" + wednesdayDate.getDate()).slice(-2));
    setThursdayDay(("0" + thursdayDate.getDate()).slice(-2));
    setFridayDay(("0" + fridayDate.getDate()).slice(-2));

    let saturdayMonth = saturdayDate.getMonth() + 1;
    // setNewSaturdayMonth(
    //   saturdayMonth.length !== 2 ? "0" + saturdayMonth : saturdayMonth
    // );

    saturdayMonth === 1 ? setNewSaturdayMonth("01") : null;
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

    console.log("saturdayMonth");
    console.log(newSaturdayMonth);

    let sundayMonth = sundayDate.getMonth() + 1;
    setNewSundayMonth(
      sundayMonth.length !== 2 ? "0" + sundayMonth : sundayMonth
    );

    let mondayMonth = mondayDate.getMonth() + 1;
    setNewMondayMonth(
      mondayMonth.length !== 2 ? "0" + mondayMonth : mondayMonth
    );

    let tuesdayMonth = tuesdayDate.getMonth() + 1;
    setNewTuesdayMonth(
      tuesdayMonth.length !== 2 ? "0" + tuesdayMonth : tuesdayMonth
    );

    let wednesdayMonth = wednesdayDate.getMonth() + 1;
    setNewWednesdayMonth(
      wednesdayMonth.length !== 2 ? "0" + wednesdayMonth : wednesdayMonth``
    );

    let thursdayMonth = thursdayDate.getMonth() + 1;
    setNewThursdayMonth(
      thursdayMonth.length !== 2 ? "0" + thursdayMonth : thursdayMonth
    );

    let fridayMonth = fridayDate.getMonth() + 1;
    setNewFridayMonth(
      fridayMonth.length !== 2 ? "0" + fridayMonth : fridayMonth
    );

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

    // console.log(saturdayYear);
    // console.log(typeof saturdayYear);
    // console.log(newSaturdayMonth);
    // console.log(typeof newSaturdayMonth);
    // console.log(saturdayDay);
    // console.log(typeof saturdayDay);
    console.log("saturdayTotal");
    console.log(saturdayTotal);
    // console.log(sundayTotal);
    // console.log(mondayTotal);
    // console.log(tuesdayTotal);
    // console.log(wednesdayTotal);
    // console.log(thursdayTotal);
    // console.log(fridayTotal);
    let element = document.getElementById("live");
    element.classList.remove("scale-in");
    const timer = setTimeout(() => {
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [today]);

  const newToday = new Date();

  function setPreviousWeek() {
    console.log("setting previous week");

    let todayDate = today.getDate();
    let todayLastweekCalcul = todayDate - 7;

    newToday.setDate(todayLastweekCalcul);

    setToday(newToday);

    console.log("today");
    console.log(today);
  }

  function setNextWeek() {
    console.log("setting previous week");

    let todayDate = today.getDate();
    let todayNextweekCalcul = todayDate + 7;

    newToday.setDate(todayNextweekCalcul);

    setToday(newToday);

    console.log("today");
    console.log(today);
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
    <div>
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
            {saturdayDay}{" "}
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
            ) : null}{" "}
            - {fridayDay}{" "}
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
          <div className="week-program-info">
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
          <div className="week-program-info">
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
          <div className="week-program-info">
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
          <div className="week-program-info">
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
          <div className="week-program-info">
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
          <div className="week-program-info">
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
          <div className="week-program-info">
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
    </div>
  );
};

export default WeekProgram;
