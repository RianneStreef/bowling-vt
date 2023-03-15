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
        <Link to="/" className="nav-link" onClick={() => setOpen(!open)}>
          Accueil
        </Link>
      </li>
      <li>
        <Link to="/#live" className="nav-link" onClick={() => setOpen(!open)}>
          Live Sports
        </Link>
      </li>
      <li>
        <Link
          to="/#activities"
          className="nav-link"
          onClick={() => setOpen(!open)}
        >
          Activitées
        </Link>
      </li>
      <li>
        <Link
          to="/#contact"
          className="nav-link"
          onClick={() => setOpen(!open)}
        >
          Contact
        </Link>
      </li>
      <div className="set-language">
        <button
          onClick={() => handleSetLanguage("english")}
          className="invisible-button"
        >
          <img
            src={flagEn}
            alt="english"
            className={`flag ${language === "english" ? "opaque" : "fade"} `}
          />
        </button>
        <button
          onClick={() => handleSetLanguage("french")}
          className="invisible-button"
        >
          <img
            src={flagFr}
            alt="français"
            className={`flag ${language === "french" ? "opaque" : "fade"} `}
          />
        </button>
      </div>
    </ul>
  );
};

export default Menu;
