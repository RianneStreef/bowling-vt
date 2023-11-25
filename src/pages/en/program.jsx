import React from "react";
import { graphql } from "gatsby";

import { Helmet } from "react-helmet";

import intakeInfo from "../../content/intake";

import { content } from "../../content/languages";

import phone from "../../images/phone.png";

import WeekProgram2 from "../../components/WeekProgram2";
import Consent from "../../components/Consent";

const Program = (props) => {
  let { language, languageToUse, pathname, day, newMonth, year, data } = props;

  languageToUse = content.english;

  let matches = data.allContentfulMatch.nodes;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>{languageToUse.programTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Consent language={language} languageToUse={languageToUse} />

      <a href="tel:0033479222557" className="reservation-button">
        <img src={phone} alt="call button" className="phone-icon" />{" "}
        {languageToUse.reservation}
      </a>
      <WeekProgram2
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
    allContentfulMatch(sort: { time: ASC }) {
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
