import styled from "styled-components";
import { DefaultButton } from "office-ui-fabric-react";

export const HeroContainer = styled.div`
  display: flex;
  color: orange;
  justify-content: space-evenly;
  font-size: 3em;
  margin: 2em 2em;
  padding: 2px;
  & > a {
    font-size: 1em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: -1em 2em;
`;

export const HeroLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
`;
