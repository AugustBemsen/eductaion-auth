import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import styled from "styled-components";

type FormInputProps<TFormValues extends FieldValues> = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  type: string;
  id?: string;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  placeholder?: string;
  value?: string;
  variant?: "light" | "dark";
  isError?: boolean;
  errorMessage?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

interface StyleProps {
  variant?: "light" | "dark";
  isError?: boolean;
}

const Input = <TFormValues extends Record<string, unknown>>(
  props: FormInputProps<TFormValues>
) => {
  const {
    id,
    name,
    register,
    rules,
    placeholder,
    errors,
    variant,
    label,
    type,
    ...otherProps
  } = props;
  return (
    <StyledInputWrapper variant={variant || "dark"}>
      {label && <label htmlFor={otherProps.value}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...otherProps}
        {...(register && register(name, rules))}
      />

      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <div className="error">{message}</div>}
      />
    </StyledInputWrapper>
  );
};

export default Input;

const StyledInputWrapper = styled.div<StyleProps>`
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

  input {
    width: 100%;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fonts.sizes.placeholder};
    border: ${({ theme, isError }) =>
      isError
        ? `${theme.border.width.normal} solid ${theme.colors.error}`
        : `${theme.border.width.light} solid ${theme.colors.grey}`};
    border-radius: ${({ theme }) => theme.border.radius.sm};
    transition: border ease-in-out 0.3s;
    outline: none;
    margin-bottom: 0 !important;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  .error {
    font-size: ${({ theme }) => theme.fonts.sizes.label};
    color: ${({ theme }) => theme.colors.error};
    margin-top: 0.2rem;
    font-weight: ${({ theme }) => theme.fonts.weights.regular};
    width: 100%;
    text-align: left;
    padding-left: 0.5rem;
  }
`;
