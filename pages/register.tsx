import type { NextPage } from "next";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/input";
import FormWrapper from "../hoc/FormWrapper";
import AuthStyle from "../styles/AuthStyles";
import registerTypes from "../types/formTypes/registerValues";

import { registerFormInputs } from "../utils/formInputs";

const Register: NextPage = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerTypes>({
    mode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<registerTypes> = async (data) => {};

  return (
    <AuthStyle>
      <FormWrapper
        btnLabel="Register"
        loading={isLoading}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="title">Register</h1>
        {registerFormInputs.map(({ placeholder, name, type, rules, label }) => (
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

export default Register;
