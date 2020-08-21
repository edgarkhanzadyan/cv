import React from "react";
import styled from "styled-components";

import Section from "./components/Section";
import Separator from "./components/Separator";
import KnowledgeDots from "./components/KnowledgeDots";
import StringWithLinks from "./components/StringWithLinks";

import { TITLE_COLOR, GREEN, DARK_GREEN } from "./constants";
import { EXPERIENCE, EDUCATION } from "./data";
import { markdownUrl } from "./regex";
const contactInfo = {
  website: "[khnzed.com](http://khnzed.com)",
  mobile: "[+374 (94) 049427](tel:+37494049427)",
  email: "[edgar.khanzadian@gmail.com](mailto:edgar.khanzadian@gmail.com)",
};
const App = () => {
  const contactInfoComponents = Object.keys(contactInfo).map((contactTitle) => (
    <ContactInfoBox>
      <ContactInfoTitle>{contactTitle.toUpperCase()}</ContactInfoTitle>
      <ContactInfoValue>
        <StringWithLinks>{contactInfo[contactTitle]}</StringWithLinks>
      </ContactInfoValue>
    </ContactInfoBox>
  ));

  return (
    <AppWrapper>
      <Header>
        <ContactInfoWrapper>{contactInfoComponents}</ContactInfoWrapper>
        <TitleDescriptionWrapper>
          <DeveloperName>Edgar Khanzadian</DeveloperName>
          <DeveloperDescription>
            I am a motivated developer with a huge desire to contribute to
            Armenian tech industry! In love with functional programming. Trying
            to read as many programming books and articles as possible. I lived
            in Russia for 18 years and then I moved to Armenia. I am a student
            of American University of Armenia (2016 - 2020).
          </DeveloperDescription>
        </TitleDescriptionWrapper>
      </Header>
      <Separator title="Experience" />
      <Section type="experience" dataArr={EXPERIENCE} />
      <Separator title="Education" />
      <Section type="education" dataArr={EDUCATION} />
      <Separator title="Tech Stack" />
      <KnowledgeDots title="ReactJS" level={4} />
      <KnowledgeDots title="React Native" level={4} />
      <KnowledgeDots title="GraphQL" level={4} />
      <KnowledgeDots title="NodeJS" level={3} />
      <Separator title="Language" />
      <KnowledgeDots title="Russian" level={5} />
      <KnowledgeDots title="English" level={4} />
      <KnowledgeDots title="Armenian" level={4} />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 7vw 14vw;
  box-sizing: border-box;

  a {
    color: ${DARK_GREEN};
    &:visited {
      color: ${GREEN};
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContactInfoWrapper = styled.div`
  min-width: 20vw;
`;
const ContactInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const ContactInfoTitle = styled.div`
  color: ${TITLE_COLOR};
  font-size: 20px;
`;
const ContactInfoValue = styled.div`
  font-size: 16px;
`;

const TitleDescriptionWrapper = styled.div``;

const DeveloperName = styled.div`
  color: ${TITLE_COLOR};
  font-size: 30px;
  margin-bottom: 20px;
`;

const DeveloperDescription = styled.div`
  line-height: 1.5;
`;

export default App;
