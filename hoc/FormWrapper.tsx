import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Button from "../components/button";

interface FormWrapperProps extends PropsWithChildren {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  btnLabel?: string;
}

const FormWrapper = ({
  onSubmit,
  loading,
  children,
  btnLabel = "Submit",
}: FormWrapperProps) => (
  <Form
    onSubmit={(e) => {
      e.preventDefault();
      if (onSubmit) onSubmit(e);
    }}
  >
    {children}
    <Button isLoading={loading} text={btnLabel} type="submit" />
  </Form>
);

export default FormWrapper;

const Form = styled.form`
  width: 100%;
`;
