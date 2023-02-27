import React, { useState } from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import logo from "../images/icon.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

import Menu from "../components/Menu";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage } = props;

  const [open, setOpen] = useState(false);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="header">
      <ul className="links hidden-mobile">
        <li>
          <div className="set-language">
            <button
              onClick={() => handleSetLanguage("english")}
              className="invisible-button"
            >
              <img
                src={flagEn}
                alt="english"
                className={`flag ${
                  languageToUse.language === "english" ? "opaque" : "fade"
                } `}
              />
            </button>
            <button
              onClick={() => handleSetLanguage("french")}
              className="invisible-button"
            >
              <img
                src={flagFr}
                alt="français"
                className={`flag ${
                  languageToUse.language === "french" ? "opaque" : "fade"
                } `}
              />
            </button>
          </div>
        </li>
        <Menu open={open} setOpen={setOpen} />
      </ul>
      <ul className="hidden-mobile">
        <Link to="/" className="logo-link hidden-mobile">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </ul>
      <Link to="/" className="hidden-desktop mobile-title">
        <p>BOWLING - SPORT'S BAR</p>
        <p>VAL THORENS</p>
      </Link>

      <div className="hidden-desktop">
        <Burger
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
};

export default Header;
