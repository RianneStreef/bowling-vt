import React from "react";
import { Link } from "gatsby";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

const Menu = (props) => {
  let { language, setLanguage, languageToUse, open, setOpen } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  function handleSetLanguage(language) {
    setLanguage(language);
    // localStorage.setItem("languageInStorage", language);
  }

  return (
    <ul className="links">
      <li>
        <Link
          to={language === "french" ? "/" : "/en/"}
          className="nav-link"
          onClick={() => setOpen(!open)}
        >
          {languageToUse.welcome}
        </Link>
      </li>
      <li>
        <Link
          to={language === "french" ? "/#live-sports" : "/en/#live-sports"}
          className="nav-link"
          onClick={() => setOpen(!open)}
        >
          Live Sports
        </Link>
      </li>
      <li>
        <Link
          to={language === "french" ? "/#activities" : "/en/#activities"}
          className="nav-link"
          onClick={() => setOpen(!open)}
        >
          {languageToUse.activities}
        </Link>
      </li>
      <li>
        <Link
          to={language === "french" ? "/#contact" : "/en/#contact"}
          className="nav-link"
          onClick={() => setOpen(!open)}
        >
          Contact
        </Link>
      </li>
      <div className="set-language">
        <Link
          to="/en/"
          onClick={() => handleSetLanguage("english")}
          className="invisible-button"
        >
          <img
            src={flagEn}
            alt="english"
            className={`flag ${language === "english" ? "opaque" : "fade"} `}
          />
        </Link>
        <Link
          to="/"
          onClick={() => handleSetLanguage("french")}
          className="invisible-button"
        >
          <img
            src={flagFr}
            alt="français"
            className={`flag ${language === "french" ? "opaque" : "fade"} `}
          />
        </Link>
      </div>
    </ul>
  );
};

export default Menu;
