import styled from "styled-components";
import { DefaultButton } from "office-ui-fabric-react";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3em;
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 2px;
  & > a {
    font-size: 1em;
  }
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 720px) {
    font-size: 2.5em;
    margin-left: 1em;
    margin-right: 1em;
  }

  @media (max-width: 615px) {
    font-size: 1.8em;
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
  margin-left: 0.7em;
  margin-righ: 0.7m;
`;

export const PageBody = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 2em 2em;
  width: 80%;
  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Side = styled.aside``;

export const Heading = styled.h1``;

export const Para = styled.p`
  text-align: left;
`;

export const VerticalLine = styled.div`
  border-left: 6px black;
  height: 200px;
`;

export const HorizontalLine = styled.hr`
  border: 0.5px solid #ddd;
  width: 60ch;
`;

export const Section = styled.section`
  text-align: left;
`;

export const Com = styled.span`
  color: gray;
  font-weight: 3;
`;
