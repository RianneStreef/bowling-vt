import React from "react";
import { Link } from "gatsby";

const Menu = (props) => {
  let { language, languageToUse, open, setOpen } = props;

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
    </ul>
  );
};

export default Menu;
