import React, { useEffect, useState } from "react";

import { content } from "../content/languages";

const WeekProgram2 = (props) => {
  let { language, languageToUse, matches } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let firstWeek = 24;
  let lastWeek = 27;

  let currentDate = new Date();
  let year = new Date(currentDate.getFullYear(), 0, 1);
  let days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));
  let week = Math.ceil((currentDate.getDay() + 1 + days) / 7);

  const [currentWeek, setCurrentWeek] = useState(week);
  const [datesToUse, setDatesToUse] = useState([
    "2023-06-10",
    "2023-06-11",
    "2023-06-12",
    "2023-06-13",
    "2023-06-14",
    "2023-06-15",
    "2023-06-16",
  ]);

  useEffect(() => {
    currentWeek === 24
      ? setDatesToUse([
          "2023-06-10",
          "2023-06-11",
          "2023-06-12",
          "2023-06-13",
          "2023-06-14",
          "2023-06-15",
          "2023-06-16",
        ])
      : null;

    currentWeek === 25
      ? setDatesToUse([
          "2023-06-17",
          "2023-06-18",
          "2023-06-19",
          "2023-06-20",
          "2023-06-21",
          "2023-06-22",
          "2023-06-23",
        ])
      : null;
    currentWeek === 25
      ? setDatesToUse([
          "2023-06-17",
          "2023-06-18",
          "2023-06-19",
          "2023-06-20",
          "2023-06-21",
          "2023-06-22",
          "2023-06-23",
        ])
      : null;

    currentWeek === 26
      ? setDatesToUse([
          "2023-06-24",
          "2023-06-25",
          "2023-06-26",
          "2023-06-27",
          "2023-06-28",
          "2023-06-29",
          "2023-06-30",
        ])
      : null;

    currentWeek === 27
      ? setDatesToUse([
          "2023-07-01",
          "2023-07-02",
          "2023-07-03",
          "2023-07-04",
          "2023-07-05",
          "2023-07-06",
          "2023-07-07",
        ])
      : null;

    let element = document.getElementById("live");
    element.classList.remove("scale-in");
    const timer = setTimeout(() => {
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [currentWeek]);

  console.log(datesToUse);
  console.log(currentWeek);

  function setPreviousWeek() {
    setCurrentWeek(currentWeek - 1);
    console.log(currentWeek);
  }

  function setNextWeek() {
    setCurrentWeek(currentWeek + 1);
    console.log(currentWeek);
  }

  const programSaturday = matches
    .filter((match) => match.dateTime === datesToUse[0])
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
    .filter((match) => match.dateTime === datesToUse[1])
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
    .filter((match) => match.dateTime === datesToUse[2])
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
    .filter((match) => match.dateTime === datesToUse[3])
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
    .filter((match) => match.dateTime === datesToUse[4])
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
    .filter((match) => match.dateTime === datesToUse[5])
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
    .filter((match) => match.dateTime === datesToUse[6])
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
    <div className="live-sports live-sports-coded">
      <div className="header-placeholder-mobile" />

      <h2>LIVE SPORTS TV</h2>
      <div className="juggle-buttons">
        <button
          className={`button ${
            currentWeek === firstWeek ? "disabled-button" : null
          }`}
          disabled={currentWeek === firstWeek}
          onClick={() => setPreviousWeek()}
        >
          &lt;
        </button>

        <span>
          {datesToUse[0].slice(8, 10)}{" "}
          {datesToUse[0].slice(5, 7) === "01" ? (
            <span>{languageToUse.jan}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "02" ? (
            <span>{languageToUse.feb}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "03" ? (
            <span>{languageToUse.mar}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "04" ? (
            <span>{languageToUse.apr}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "05" ? (
            <span>{languageToUse.may}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "06" ? (
            <span>{languageToUse.june}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "07" ? (
            <span>{languageToUse.july}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "08" ? (
            <span>{languageToUse.aug}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "09" ? (
            <span>{languageToUse.sept}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "10" ? (
            <span>{languageToUse.oct}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "11" ? (
            <span>{languageToUse.nov}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "12" ? (
            <span>{languageToUse.dec}</span>
          ) : null}{" "}
          - {datesToUse[6].slice(8, 10)}{" "}
          {datesToUse[0].slice(5, 7) === "01" ? (
            <span>{languageToUse.jan}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "02" ? (
            <span>{languageToUse.feb}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "03" ? (
            <span>{languageToUse.mar}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "04" ? (
            <span>{languageToUse.apr}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "05" ? (
            <span>{languageToUse.may}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "06" ? (
            <span>{languageToUse.june}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "07" ? (
            <span>{languageToUse.july}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "08" ? (
            <span>{languageToUse.aug}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "09" ? (
            <span>{languageToUse.sept}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "10" ? (
            <span>{languageToUse.oct}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "11" ? (
            <span>{languageToUse.nov}</span>
          ) : null}
          {datesToUse[0].slice(5, 7) === "12" ? (
            <span>{languageToUse.dec}</span>
          ) : null}
        </span>

        <button
          className={`button ${
            currentWeek === lastWeek ? "disabled-button" : null
          }`}
          disabled={currentWeek === lastWeek}
          onClick={() => setNextWeek()}
        >
          &gt;
        </button>
      </div>
      <div className="program program-coded" id="live">
        <div className="week-program-info">
          <div className="flex-container">
            <div className="date-container">
              <p className="date">{datesToUse[0].slice(8, 10)}</p>
              <p className="month">
                {datesToUse[0].slice(5, 7) === "01" ? (
                  <span>{languageToUse.jan}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "02" ? (
                  <span>{languageToUse.feb}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "03" ? (
                  <span>{languageToUse.mar}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "04" ? (
                  <span>{languageToUse.apr}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "05" ? (
                  <span>{languageToUse.may}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "06" ? (
                  <span>{languageToUse.june}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "07" ? (
                  <span>{languageToUse.july}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "08" ? (
                  <span>{languageToUse.aug}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "09" ? (
                  <span>{languageToUse.sept}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "10" ? (
                  <span>{languageToUse.oct}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "11" ? (
                  <span>{languageToUse.nov}</span>
                ) : null}
                {datesToUse[0].slice(5, 7) === "12" ? (
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
              <p className="date">{datesToUse[1].slice(8, 10)}</p>
              <p className="month">
                {datesToUse[1].slice(5, 7) === "01" ? (
                  <span>{languageToUse.jan}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "02" ? (
                  <span>{languageToUse.feb}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "03" ? (
                  <span>{languageToUse.mar}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "04" ? (
                  <span>{languageToUse.apr}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "05" ? (
                  <span>{languageToUse.may}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "06" ? (
                  <span>{languageToUse.june}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "07" ? (
                  <span>{languageToUse.july}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "08" ? (
                  <span>{languageToUse.aug}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "09" ? (
                  <span>{languageToUse.sept}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "10" ? (
                  <span>{languageToUse.oct}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "11" ? (
                  <span>{languageToUse.nov}</span>
                ) : null}
                {datesToUse[1].slice(5, 7) === "12" ? (
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
              <p className="date">{datesToUse[2].slice(8, 10)}</p>
              <p className="month">
                {datesToUse[2].slice(5, 7) === "01" ? (
                  <span>{languageToUse.jan}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "02" ? (
                  <span>{languageToUse.feb}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "03" ? (
                  <span>{languageToUse.mar}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "04" ? (
                  <span>{languageToUse.apr}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "05" ? (
                  <span>{languageToUse.may}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "06" ? (
                  <span>{languageToUse.june}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "07" ? (
                  <span>{languageToUse.july}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "08" ? (
                  <span>{languageToUse.aug}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "09" ? (
                  <span>{languageToUse.sept}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "10" ? (
                  <span>{languageToUse.oct}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "11" ? (
                  <span>{languageToUse.nov}</span>
                ) : null}
                {datesToUse[2].slice(5, 7) === "12" ? (
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
              <p className="date">{datesToUse[3].slice(8, 10)}</p>
              <p className="month">
                {datesToUse[3].slice(5, 7) === "01" ? (
                  <span>{languageToUse.jan}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "02" ? (
                  <span>{languageToUse.feb}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "03" ? (
                  <span>{languageToUse.mar}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "04" ? (
                  <span>{languageToUse.apr}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "05" ? (
                  <span>{languageToUse.may}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "06" ? (
                  <span>{languageToUse.june}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "07" ? (
                  <span>{languageToUse.july}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "08" ? (
                  <span>{languageToUse.aug}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "09" ? (
                  <span>{languageToUse.sept}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "10" ? (
                  <span>{languageToUse.oct}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "11" ? (
                  <span>{languageToUse.nov}</span>
                ) : null}
                {datesToUse[3].slice(5, 7) === "12" ? (
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
              <p className="date">{datesToUse[4].slice(8, 10)}</p>
              <p className="month">
                {datesToUse[4].slice(5, 7) === "01" ? (
                  <span>{languageToUse.jan}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "02" ? (
                  <span>{languageToUse.feb}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "03" ? (
                  <span>{languageToUse.mar}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "04" ? (
                  <span>{languageToUse.apr}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "05" ? (
                  <span>{languageToUse.may}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "06" ? (
                  <span>{languageToUse.june}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "07" ? (
                  <span>{languageToUse.july}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "08" ? (
                  <span>{languageToUse.aug}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "09" ? (
                  <span>{languageToUse.sept}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "10" ? (
                  <span>{languageToUse.oct}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "11" ? (
                  <span>{languageToUse.nov}</span>
                ) : null}
                {datesToUse[4].slice(5, 7) === "12" ? (
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
              <p className="date">{datesToUse[5].slice(8, 10)}</p>
              <p className="month">
                {datesToUse[5].slice(5, 7) === "01" ? (
                  <span>{languageToUse.jan}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "02" ? (
                  <span>{languageToUse.feb}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "03" ? (
                  <span>{languageToUse.mar}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "04" ? (
                  <span>{languageToUse.apr}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "05" ? (
                  <span>{languageToUse.may}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "06" ? (
                  <span>{languageToUse.june}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "07" ? (
                  <span>{languageToUse.july}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "08" ? (
                  <span>{languageToUse.aug}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "09" ? (
                  <span>{languageToUse.sept}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "10" ? (
                  <span>{languageToUse.oct}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "11" ? (
                  <span>{languageToUse.nov}</span>
                ) : null}
                {datesToUse[5].slice(5, 7) === "12" ? (
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
              <p className="date">{datesToUse[6].slice(8, 10)}</p>
              <p className="month">
                {datesToUse[6].slice(5, 7) === "01" ? (
                  <span>{languageToUse.jan}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "02" ? (
                  <span>{languageToUse.feb}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "03" ? (
                  <span>{languageToUse.mar}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "04" ? (
                  <span>{languageToUse.apr}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "05" ? (
                  <span>{languageToUse.may}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "06" ? (
                  <span>{languageToUse.june}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "07" ? (
                  <span>{languageToUse.july}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "08" ? (
                  <span>{languageToUse.aug}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "09" ? (
                  <span>{languageToUse.sept}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "10" ? (
                  <span>{languageToUse.oct}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "11" ? (
                  <span>{languageToUse.nov}</span>
                ) : null}
                {datesToUse[6].slice(5, 7) === "12" ? (
                  <span>{languageToUse.dec}</span>
                ) : null}
              </p>
            </div>
            <div className="match-details">{programFriday}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekProgram2;
