import React from "react";
import styled from "styled-components";

import { TITLE_COLOR } from "../constants";

const Separator = ({ title }) => (
  <SeparatorWrapper>
    <Line width={20} />
    <Title>{title.toUpperCase()}</Title>
    <Line width={35} />
  </SeparatorWrapper>
);

const SeparatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
`;

const Title = styled.div`
  color: ${TITLE_COLOR};
  font-size: 24px;
`;

const Line = styled.div`
  height: 2px;
  width: ${props => props.width}vw;
  background-color: ${TITLE_COLOR};
`;

export default Separator;
