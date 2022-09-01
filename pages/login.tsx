import type { NextPage } from "next";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/input";
import FormWrapper from "../hoc/FormWrapper";
import AuthStyle from "../styles/AuthStyles";
import loginTypes from "../types/formTypes/loginValues";
import { loginFormInputs } from "../utils/formInputs";

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
        <h1 className="title">Login</h1>
        {loginFormInputs.map(({ placeholder, name, type, rules, label }) => (
          <Input
            key={name}
            id={`login-${name}`}
            placeholder={placeholder}
            type={type}
            label={label}
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
