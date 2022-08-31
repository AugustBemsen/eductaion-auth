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
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) =>
    `${theme.border.width.light} solid ${theme.colors.primary}`};
  font-size: ${({ theme }) => theme.fonts.sizes.p};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius.md};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.65;
  }

  &.loading {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
