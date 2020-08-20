import React from "react";
import styled from "styled-components";
import { markdownUrl } from "../regex";



const StringWithLinks = ({ children: receivedString }) => {
  const matches = receivedString.matchAll(markdownUrl);
  let descriptionComponents = [];
  let pivot = 0;
  for (const match of matches) {
    descriptionComponents.push(
      <SimpleText>{receivedString.substring(pivot, match.index)}</SimpleText>
    );
    descriptionComponents.push(
      <Hyperlink href={match[2]}>{match[1]}</Hyperlink>
    );
    pivot = match.index + match[0].length;
  }
  return <>{descriptionComponents}</>;
};

const SimpleText = styled.div`
  display: inline;
  white-space: pre-line;
`;
const Hyperlink = styled.a`
  display: inline;
`;

export default StringWithLinks;
