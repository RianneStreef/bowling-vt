import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Hero from "../components/Hero";
import Intro from "../components/Intro";
import LiveSports1 from "../components/LiveSports1";
import LiveSports2 from "../components/LiveSports2";
import LiveSports3 from "../components/LiveSports3";
import Activities from "../components/Activities";
import Map from "../components/Map";

const IndexPage = function (props) {
  let { language, languageToUse } = props;

  languageToUse = content.french;

  return (
    <div>
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        ></script>
      </Helmet>
      <div className="header-placeholder" />
      <Hero language={language} languageToUse={languageToUse} />
      <Intro language={language} languageToUse={languageToUse} />
      <LiveSports1 language={language} languageToUse={languageToUse} />
      <LiveSports2 language={language} languageToUse={languageToUse} />
      <LiveSports3 language={language} languageToUse={languageToUse} />
      <Activities language={language} languageToUse={languageToUse} />
      <Map />
    </div>
  );
};

export default IndexPage;
