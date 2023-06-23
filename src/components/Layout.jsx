import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";
  let languageInStorage = "";

  const [pathname, setPathname] = useState("/");

  let day = new Date().getDate();

  let weekday = new Date().getDay();
  let month = new Date().getMonth();

  let year = new Date().getYear() + 1900;

  let newMonth;

  month === 0 ? (newMonth = "01") : null;
  month === 1 ? (newMonth = "02") : null;
  month === 2 ? (newMonth = "03") : null;
  month === 3 ? (newMonth = "04") : null;
  month === 4 ? (newMonth = "05") : null;
  month === 5 ? (newMonth = "06") : null;
  month === 6 ? (newMonth = "07") : null;
  month === 7 ? (newMonth = "08") : null;
  month === 8 ? (newMonth = "09") : null;
  month === 9 ? (newMonth = "10") : null;
  month === 10 ? (newMonth = "11") : null;
  month === 11 ? (newMonth = "12") : null;

  // useEffect(() => {
  //   if (localStorage.getItem("languageInStorage")) {
  //     setLanguage(languageInStorage);
  //     console.log("language found");
  //     console.log(languageInStorage);
  //   }
  // }, []);

  useEffect(() => {
    // let days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));
    // let week = Math.ceil((currentDate.getDay() + 1 + days) / 7);

    setPathname(window.location.href);
  }, [day, weekday, month, year]);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
      pathname,
      day,
      weekday,
      newMonth,
      year,
    })
  );
  return (
    <div className="layout">
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <section className="main">{childrenWithProps}</section>

      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export default Layout;
