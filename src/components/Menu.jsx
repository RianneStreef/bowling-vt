import React from "react";
import { Link } from "gatsby";

const Menu = (props) => {
  let { language, languageToUse, open, setOpen } = props;

  return (
    <>
      <li>
        <Link to="/" className="nav-link" onClick={() => setOpen(!open)}>
          Welcome
        </Link>
      </li>
      <li className="nav-link-dash">-</li>
      <li>
        <Link to="/#live" className="nav-link" onClick={() => setOpen(!open)}>
          Live
        </Link>
      </li>
      <li className="nav-link-dash ">-</li>
      <li>
        <Link
          to="/#activities"
          className="nav-link"
          onClick={() => setOpen(!open)}
        >
          Activities
        </Link>
      </li>
    </>
  );
};

export default Menu;
