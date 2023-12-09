import React, { useEffect, useState } from "react";

import { content } from "../content/languages";
import { weeks } from "../content/weeks";

import { useSwipeable } from "react-swipeable";

const WeekProgram2 = (props) => {
  let { language, languageToUse, matches, day, newMonth, year } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let firstWeek = 0;
  let lastWeek = 24;

  if ((day = 1)) {
    day = "01";
  }
  if ((day = 2)) {
    day = "02";
  }
  if ((day = 3)) {
    day = "03";
  }
  if ((day = 4)) {
    day = "04";
  }
  if ((day = 5)) {
    day = "05";
  }
  if ((day = 6)) {
    day = "06";
  }
  if ((day = 7)) {
    day = "07";
  }
  if ((day = 8)) {
    day = "08";
  }
  if ((day = 9)) {
    day = "09";
  }

  let date = `${year}-${newMonth}-${day}`;

  console.log(matches);

  const [currentWeek, setCurrentWeek] = useState(0);

  function findThisWeek() {
    if (weeks.zero.includes(date)) {
      setCurrentWeek(0);
    }
    if (weeks.one.includes(date)) {
      setCurrentWeek(1);
    }
    if (weeks.two.includes(date)) {
      setCurrentWeek(2);
    }
    if (weeks.three.includes(date)) {
      setCurrentWeek(3);
    }
    if (weeks.four.includes(date)) {
      setCurrentWeek(4);
    }
    if (weeks.five.includes(date)) {
      setCurrentWeek(5);
    }
    if (weeks.six.includes(date)) {
      setCurrentWeek(6);
    }
    if (weeks.seven.includes(date)) {
      setCurrentWeek(7);
    }
    if (weeks.eight.includes(date)) {
      setCurrentWeek(8);
    }
    if (weeks.nine.includes(date)) {
      setCurrentWeek(9);
    }
    if (weeks.ten.includes(date)) {
      setCurrentWeek(10);
    }
    if (weeks.eleven.includes(date)) {
      setCurrentWeek(11);
    }
    if (weeks.twelve.includes(date)) {
      setCurrentWeek(12);
    }
    if (weeks.thirteen.includes(date)) {
      setCurrentWeek(13);
    }
    if (weeks.fourteen.includes(date)) {
      setCurrentWeek(14);
    }
    if (weeks.fifteen.includes(date)) {
      setCurrentWeek(15);
    }
    if (weeks.sixteen.includes(date)) {
      setCurrentWeek(16);
    }
    if (weeks.seventeen.includes(date)) {
      setCurrentWeek(17);
    }
    if (weeks.eighteen.includes(date)) {
      setCurrentWeek(18);
    }
    if (weeks.nineteen.includes(date)) {
      setCurrentWeek(19);
    }
    if (weeks.twenty.includes(date)) {
      setCurrentWeek(20);
    }
    if (weeks.twentyOne.includes(date)) {
      setCurrentWeek(21);
    }
    if (weeks.twentyTwo.includes(date)) {
      setCurrentWeek(22);
    }
    if (weeks.twentyThree.includes(date)) {
      setCurrentWeek(23);
    }
    if (weeks.twentyFour.includes(date)) {
      setCurrentWeek(24);
    }
    console.log(currentWeek);
  }

  const [datesToUse, setDatesToUse] = useState(weeks.zero);

  useEffect(() => {
    findThisWeek();
    console.log(date);
    console.log(weeks.three[0]);
  }, []);

  useEffect(() => {
    // Calculate currentWeek here and set it using setThisWeek

    if (currentWeek === 0) {
      setDatesToUse(weeks.zero);
    }
    if (currentWeek === 1) {
      setDatesToUse(weeks.one);
    }
    if (currentWeek === 2) {
      setDatesToUse(weeks.two);
    }
    if (currentWeek === 3) {
      setDatesToUse(weeks.three);
    }
    if (currentWeek === 4) {
      setDatesToUse(weeks.four);
    }
    if (currentWeek === 5) {
      setDatesToUse(weeks.five);
    }
    if (currentWeek === 6) {
      setDatesToUse(weeks.six);
    }
    if (currentWeek === 7) {
      setDatesToUse(weeks.seven);
    }
    if (currentWeek === 8) {
      setDatesToUse(weeks.eight);
    }
    if (currentWeek === 9) {
      setDatesToUse(weeks.nine);
    }
    if (currentWeek === 10) {
      setDatesToUse(weeks.ten);
    }
    if (currentWeek === 11) {
      setDatesToUse(weeks.eleven);
    }
    if (currentWeek === 12) {
      setDatesToUse(weeks.twelve);
    }
    if (currentWeek === 13) {
      setDatesToUse(weeks.thirteen);
    }
    if (currentWeek === 14) {
      setDatesToUse(weeks.fourteen);
    }
    if (currentWeek === 15) {
      setDatesToUse(weeks.fifteen);
    }
    if (currentWeek === 16) {
      setDatesToUse(weeks.sixteen);
    }
    if (currentWeek === 17) {
      setDatesToUse(weeks.seventeen);
    }
    if (currentWeek === 18) {
      setDatesToUse(weeks.eighteen);
    }
    if (currentWeek === 19) {
      setDatesToUse(weeks.nineteen);
    }
    if (currentWeek === 20) {
      setDatesToUse(weeks.twentyOne);
    }
    if (currentWeek === 21) {
      setDatesToUse(weeks.twentyTwo);
    }
    if (currentWeek === 22) {
      setDatesToUse(weeks.twentyTwo);
    }
    if (currentWeek === 23) {
      setDatesToUse(weeks.twentyThree);
    }
    if (currentWeek === 24) {
      setDatesToUse(weeks.twentyFour);
    }

    let element = document.getElementById("live");
    element.classList.remove("scale-in");
    const timer = setTimeout(() => {
      element.classList.add("scale-in");
    }, 5);
    return () => clearTimeout(timer);
  }, [currentWeek, datesToUse]);

  function setPreviousWeek() {
    if (currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
    }
  }

  function setNextWeek() {
    if (currentWeek < 24) {
      setCurrentWeek(currentWeek + 1);
    }
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
      <div
        className="program program-coded"
        id="live"
        {...useSwipeable({
          onSwipedRight: () => setPreviousWeek(),
          onSwipedLeft: () => setNextWeek(),
          preventScrollOnSwipe: true,
        })}
      >
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
