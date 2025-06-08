import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import "../../styles/global.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import LiveSports1 from "../../components/LiveSports1";
import LiveSports3 from "../../components/LiveSports3";
import Activities from "../../components/Activities";
import Map from "../../components/Map";

import Consent from "../../components/Consent";

import phone from "../../images/phone.png";

const IndexPage = function (props) {
  let { language, languageToUse, currentWeek, day, weekday, newMonth, year } =
    props;

  languageToUse = content.english;

  const { data } = props;

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <link rel="canonical" href={intakeInfo.domainName} />
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
      </Helmet>
      <Consent language={language} languageToUse={languageToUse} />

      <a href="tel:0033479222557" className="reservation-button">
        <img src={phone} alt="call button" className="phone-icon" />{" "}
        {languageToUse.reservation}
      </a>
      <div className="header-placeholder-mobile" />
      <Hero language={language} languageToUse={languageToUse} data={data} />
      <Intro language={language} languageToUse={languageToUse} />
      <LiveSports1
        language={language}
        languageToUse={languageToUse}
        currentWeek={currentWeek}
        data={data}
        day={day}
        weekday={weekday}
        newMonth={newMonth}
        year={year}
      />
      {/* <LiveSports2 language={language} languageToUse={languageToUse} /> */}
      <LiveSports3 language={language} languageToUse={languageToUse} />
      <Activities language={language} languageToUse={languageToUse} />
      <Map language={language} languageToUse={languageToUse} />
    </div>
  );
};

export const matchQuery = graphql`
  query matchQuery {
    allContentfulMatch(sort: { time: ASC }) {
      nodes {
        category
        id
        match
        dateTime
        time
      }
    }
    allContentfulVideo {
      edges {
        node {
          video {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
