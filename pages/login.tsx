import type { NextPage } from "next";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../components/input";
import FormWrapper from "../hoc/FormWrapper";
import loginTypes from "../types/formTypes/loginValues";
import loginFormInputs from "../utils/formInputs";

const Login: NextPage = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginTypes>({
    mode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<loginTypes> = async (data) => {};

  return (
    <AuthStyle>
      <FormWrapper
        btnLabel="Login"
        loading={isLoading}
        onSubmit={handleSubmit(onSubmit)}
      >
        {loginFormInputs.map(({ placeholder, name, type, rules }) => (
          <Input
            key={name}
            id={`login-${name}`}
            placeholder={placeholder}
            type={type}
            name={name}
            register={register}
            rules={rules}
            errors={errors}
          />
        ))}
      </FormWrapper>
    </AuthStyle>
  );
};

export default Login;

const AuthStyle = styled.div``;
