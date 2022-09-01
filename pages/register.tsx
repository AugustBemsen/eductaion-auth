import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";

import Input from "../components/input";
import Select from "../components/select";
import FormWrapper from "../hoc/FormWrapper";
import AuthStyle from "../styles/AuthStyles";
import registerTypes from "../types/formTypes/registerValues";
import Axios from "../utils/Axios";

import { registerFormInputs } from "../utils/formInputs";

const Register: NextPage = () => {
  const { addToast } = useToasts();
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("student");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerTypes>({
    mode: "all",
    reValidateMode: "onChange",
  });

  const userOptions: { title: string; value: string }[] = [
    {
      title: "Student",
      value: "student",
    },
    {
      title: "Teacher",
      value: "teacher",
    },
  ];

  const onSubmit: SubmitHandler<registerTypes> = async (data) => {
    const formData = {
      ...data,
      userType: selectedRole,
    };
    setLoading(true);
    Axios.post("/user/create", formData)
      .then((res) => {
        const result = res.data;
        const firstName = result.fullName?.split(" ")[0];

        // eslint-disable-next-line no-underscore-dangle
        addToast(
          `Hello ${firstName}, your ${result?.userType} account has been created `,
          {
            appearance: "success",
            autoDismiss: true,
          }
        );
        setLoading(false);
        router.push("/login");
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
        btnLabel="Register"
        loading={isLoading}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="title">Register</h1>
        {registerFormInputs.map(({ placeholder, name, type, rules, label }) => (
          <Input
            key={name}
            id={`register-${name}`}
            placeholder={placeholder}
            type={type}
            label={label}
            name={name}
            register={register}
            rules={rules}
            errors={errors}
          />
        ))}
        <Select
          name="Select"
          label="Select Role"
          options={userOptions}
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        />
      </FormWrapper>
    </AuthStyle>
  );
};

export default Register;
