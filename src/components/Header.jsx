import React, { useState } from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import { content } from "../content/languages";

import Menu from "../components/Menu";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage } = props;

  const [open, setOpen] = useState(false);

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="header-container">
      <Link to="/" className="mobile-title">
        <p className="mobile-title-1">BOWLING - SPORT'S BAR</p>
        <p className="mobile-title-2">VAL THORENS</p>
      </Link>

      <div className="hidden-desktop-menu">
        <Burger
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
          open={open}
          setOpen={setOpen}
        />
      </div>
      <div className="header hidden-mobile-menu">
        <Menu
          open={open}
          setOpen={setOpen}
          language={language}
          languageToUse={languageToUse}
          setLanguage={setLanguage}
        />
      </div>
    </div>
  );
};

export default Header;
