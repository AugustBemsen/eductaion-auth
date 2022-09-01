import type { NextPage } from "next";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToasts } from "react-toast-notifications";
import Cookies from "universal-cookie";

import Input from "../components/input";
import FormWrapper from "../hoc/FormWrapper";
import AuthStyle from "../styles/AuthStyles";
import loginTypes from "../types/formTypes/loginValues";
import Axios from "../utils/Axios";
import { loginFormInputs } from "../utils/formInputs";

const Login: NextPage = () => {
  const { addToast } = useToasts();
  const cookies = new Cookies();

  const [isLoading, setLoading] = useState(false);

  // handle validations
  const inputSchema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(8),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginTypes>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(inputSchema),
  });

  const onSubmit: SubmitHandler<loginTypes> = async (data) => {
    setLoading(true);
    Axios.post("/user/login", data)
      .then((res) => {
        const result = res.data;
        const firstName = result.fullName?.split(" ")[0];
        // eslint-disable-next-line no-underscore-dangle
        const userID = result?._id;
        addToast(`Logged in as ${firstName} `, {
          appearance: "success",
          autoDismiss: true,
        });
        cookies.set("eduUser", userID, { path: "/login" });
        setLoading(false);
      })
      .catch((err) => {
        addToast(
          err.response?.data?.message ||
            "Something went wrong, please try again",
          {
            appearance: "error",
            autoDismiss: true,
          }
        );
        setLoading(false);
      });
  };

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
