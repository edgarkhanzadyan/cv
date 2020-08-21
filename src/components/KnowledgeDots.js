import React from "react";
import styled from "styled-components";

import { GREEN, DARK_GREEN } from "../constants";

const KnowledgeDots = ({ title, level }) => {
  const circleComponents = new Array(5)
    .fill(undefined)
    .map((_, i) => i < level)
    .map((shouldFill) => <KnowledgeCircle fill={shouldFill} />);

  return (
    <KnowledgeWrapper>
      <KnowledgeTitle>{title.toUpperCase()}</KnowledgeTitle>
      <KnowledgeCircleWrapper>{circleComponents}</KnowledgeCircleWrapper>
    </KnowledgeWrapper>
  );
};

const KnowledgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;
`;
const KnowledgeTitle = styled.div`
  min-width: 10vw;
  font-size: 20px;
`;
const KnowledgeCircleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const KnowledgeCircle = styled.div`
  background-color: ${(props) => (props.fill ? GREEN : DARK_GREEN)};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 0px 4px;
`;

export default KnowledgeDots;
