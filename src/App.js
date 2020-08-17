import React from "react";
import styled from "styled-components";

import Separator from "./components/Separator";
import KnowledgeDots from "./components/KnowledgeDots";

import { TITLE_COLOR } from "./constants";

const contactInfo = {
  website: "khnzed.com",
  mobile: "+374 (94) 049427",
  email: "edgar.khanzadian@gmail.com",
};

const jobs = [
  {
    position: "Front-end developer",
    company: "Better.gg",
    place: "Yerevan, Armenia",
    dates: "March 2020 - August 2020",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.`,
  },
  {
    position: "Front-end developer",
    company: "Better.gg",
    place: "Yerevan, Armenia",
    dates: "March 2020 - August 2020",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.`,
  },
];

const App = () => {
  const contactInfoComponents = Object.keys(contactInfo).map((contactTitle) => (
    <ContactInfoBox>
      <ContactInfoTitle>{contactTitle.toUpperCase()}</ContactInfoTitle>
      <ContactInfoValue>{contactInfo[contactTitle]}</ContactInfoValue>
    </ContactInfoBox>
  ));
  const jobComponents = jobs.map((job) => (
    <JobWrapper>
      <JobDetails>
        <JobPosition>{job.position.toUpperCase()}</JobPosition>
        <JobCompany>{job.company}</JobCompany>
        <JobPlace>{job.place}</JobPlace>
        <JobDates>{job.dates}</JobDates>
      </JobDetails>
      <JobBody>{job.description}</JobBody>
    </JobWrapper>
  ));
  return (
    <AppWrapper>
      <Header>
        <ContactInfoWrapper>{contactInfoComponents}</ContactInfoWrapper>
        <TitleDescriptionWrapper>
          <DeveloperName>Edgar Khanzadian</DeveloperName>
          <DeveloperDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DeveloperDescription>
        </TitleDescriptionWrapper>
      </Header>
      <Separator title="Experience" />
      <Section>{jobComponents}</Section>
      <Separator title="Education" />
      <Section>{jobComponents}</Section>
      <Separator title="Tech Stack" />
      <KnowledgeDots title="ReactJS" level={4} />
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
`;

const DeveloperDescription = styled.div``;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  font-family: Ubuntu-Light;
`;

const JobPosition = styled.div``;
const JobCompany = styled.div``;
const JobPlace = styled.div``;
const JobDates = styled.div``;

const JobBody = styled.div``;

export default App;
