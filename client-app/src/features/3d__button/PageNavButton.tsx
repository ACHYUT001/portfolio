import React from "react";

import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  target: string;
  name: string;
}

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-width: 2px;
  border-color: black;
  color: black;
  cursor: pointer;
  border-radius: 290486px;
  font-size: 1.8rem;
  font-family: "europa", sans-serif;
  font-weight: 400;
  padding: 1em 1em;
  width: 20ch;
  margin: 1em 1em;

  transition: all 0.5s;

  &:hover {
    background-color: black;
    border-color: transparent;

    color: white;
  }

  & span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.1s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }

  @media (max-width: 530px) {
    font-size: 1.5rem;
  }
`;

const PageNavButton: React.FC<IProps> = ({ target, name }) => {
  return (
    <Link to={target}>
      <Button>
        <span>{name}</span>
      </Button>
    </Link>
  );
};

export default PageNavButton;
