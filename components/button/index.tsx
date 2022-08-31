// import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import styled from "styled-components";
import Spinner from "../spinner";

interface Props {
  text?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: FC<Props> = ({ text, isLoading, onClick, type = "button" }) => (
  <ButtonStyles
    onClick={onClick}
    type={type}
    className={isLoading ? "loading" : ""}
    disabled={isLoading}
  >
    {isLoading ? <Spinner /> : text}
  </ButtonStyles>
);

export default Button;
const ButtonStyles = styled.button<Props>`
  &.loading {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
