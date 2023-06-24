import React from "react";
import { graphql } from "gatsby";

import { Helmet } from "react-helmet";

import intakeInfo from "../content/intake";

import { content } from "../content/languages";

import phone from "../images/phone.png";

import WeekProgram from "../components/WeekProgram";

const Program = (props) => {
  let { language, languageToUse, pathname, day, newMonth, year, data } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let matches = data.allContentfulMatch.nodes;

  return (
    <>
      <Helmet>
        <title>{languageToUse.programTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <a href="tel:0033479222557" className="reservation-button">
        <img src={phone} alt="call button" className="phone-icon" />{" "}
        {languageToUse.reservation}
      </a>
      <WeekProgram
        day={day}
        matches={matches}
        language={language}
        languageToUse={languageToUse}
      />
    </>
  );
};

export const matchQuery = graphql`
  query matchesQuery {
    allContentfulMatch {
      nodes {
        category
        id
        match
        dateTime
        time
      }
    }
  }
`;

export default Program;
