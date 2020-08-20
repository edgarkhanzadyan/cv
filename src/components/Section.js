import React from "react";
import styled from "styled-components";

import StringWithLinks from "./StringWithLinks";

const educationMapFunction = (edu) => (
  <EduWrapper>
    <EduDetailsWrapper>
      <EduDetail>{edu.institution}</EduDetail>
      <EduDetail>{edu.institutionType}</EduDetail>
      <EduDetail>{edu.place}</EduDetail>
      <EduDetail>{edu.dates}</EduDetail>
    </EduDetailsWrapper>
    <EduBody>
      <StringWithLinks>{edu.description}</StringWithLinks>
    </EduBody>
  </EduWrapper>
);

const experienceMapFunction = (job) => {
  const jss =
    job.sections &&
    job.sections.map((sec) => (
      <SectionDataWrapper>
        <SectionTitle>{sec.name}</SectionTitle>
        {sec.sectionData.map((sd) => (
          <SectionData>
            <Dot />
            <SectionDataText>{sd}</SectionDataText>
          </SectionData>
        ))}
      </SectionDataWrapper>
    ));
  return (
    <JobWrapper>
      <JobDetailsWrapper>
        <JobDetail>{job.position}</JobDetail>
        <JobDetail>{job.company}</JobDetail>
        <JobDetail>{job.place}</JobDetail>
        <JobDetail>{job.dates}</JobDetail>
      </JobDetailsWrapper>
      <JobBody>
        <StringWithLinks>{job.description}</StringWithLinks>
        {jss}
      </JobBody>
    </JobWrapper>
  );
};

const chooseMapFunction = (type) => {
  switch (type) {
    case "experience":
      return experienceMapFunction;
    case "education":
      return educationMapFunction;
    default:
      throw new Error("Wrong map function type in Section");
  }
};

const Section = ({ dataArr, type }) => (
  <SectionWrapper>{dataArr.map(chooseMapFunction(type))}</SectionWrapper>
);

export default Section;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const TypeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  font-family: Ubuntu-Light;
`;
const TypeBody = styled.div``;
const TypeDetail = styled.div``;

const JobWrapper = styled(TypeWrapper)``;
const EduWrapper = styled(TypeWrapper)``;

const JobDetailsWrapper = styled(TypeDetailsWrapper)``;
const EduDetailsWrapper = styled(TypeDetailsWrapper)``;

const JobBody = styled(TypeBody)``;
const EduBody = styled(TypeBody)``;

const JobDetail = styled(TypeDetail)``;
const EduDetail = styled(TypeDetail)``;

const SectionDataWrapper = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
`;
const SectionTitle = styled.div`
  font-weight: 800;
`;
const SectionData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0px;
`;
const SectionDataText = styled.div`
  margin-left: 10px;
`;

const Dot = styled.div`
  min-height: 8px;
  min-width: 8px;
  border-radius: 4px;
  background-color: black;
`;
