import React, { useState, InputHTMLAttributes, FC } from "react";

import styled from "styled-components";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  value?: string;
  variant?: "light" | "dark";
  label?: string;
  options: Array<{ title: string; value: string }>;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLSelectElement>) => void;
}

interface StyleProps {
  variant?: "light" | "dark";
}

const Select: FC<SelectProps> = ({
  placeholder,
  value,
  onChange,
  options,
  label,
  variant = "dark",
  ...props
}) => (
  <StyledSelectWrapper variant={variant || "dark"}>
    {label && <label htmlFor={value}>{label}</label>}
    <select
      name={value}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option key={option.title} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  </StyledSelectWrapper>
);
export default Select;

const StyledSelectWrapper = styled.div<StyleProps>`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 1.9rem;

  label {
    color: inherit;
    display: block;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fonts.sizes.label};
  }

  select {
    width: 100%;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fonts.sizes.placeholder};
    border: ${({ theme }) =>
      `${theme.border.width.light} solid ${theme.colors.grey}`};
    border-radius: ${({ theme }) => theme.border.radius.sm};
    transition: border ease-in-out 0.3s;
    outline: none;
    margin-bottom: 0 !important;
    border-right: 1rem solid transparent;

    option {
      padding: 1rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
