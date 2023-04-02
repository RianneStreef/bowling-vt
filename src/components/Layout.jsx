import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";
  let languageInStorage = "";

  const [pathname, setPathname] = useState("/");
  const [currentWeek, setCurrentWeek] = useState(14);

  // useEffect(() => {
  //   if (localStorage.getItem("languageInStorage")) {
  //     setLanguage(languageInStorage);
  //     console.log("language found");
  //     console.log(languageInStorage);
  //   }
  // }, []);

  useEffect(() => {
    let currentDate = new Date();
    let year = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));
    let week = Math.ceil((currentDate.getDay() + 1 + days) / 7);
    console.log(
      "Week Number of the current date (" + currentDate + ") is : " + week
    );

    setPathname(window.location.href);
    setCurrentWeek(week);
  });

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
      pathname,
      currentWeek,
      setCurrentWeek,
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
