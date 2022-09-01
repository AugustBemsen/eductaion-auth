import { LoginFormInputDetails } from "../types/formTypes/loginValues";
import { RegisterFormInputDetails } from "../types/formTypes/registerValues";

// Login form input details
const loginFormInputs: LoginFormInputDetails[] = [
  {
    placeholder: "Enter your email address",
    type: "text",
    name: "email",
    label: "Email Address",
    rules: {
      required: "Email Field is required.",
    },
  },
  {
    placeholder: "Enter your password",
    type: "password",
    name: "password",
    label: "Password",
    rules: {
      required: "Password Field is required.",
    },
  },
];

// register form inputs
const registerFormInputs: RegisterFormInputDetails[] = [
  {
    placeholder: "Enter your email address",
    type: "text",
    name: "email",
    label: "Email Address",
    rules: {
      required: "Email is required.",
    },
  },
  {
    placeholder: "Enter your password",
    type: "password",
    name: "password",
    label: "Password",
    rules: {
      required: "Password is required.",
    },
  },
  {
    placeholder: "e.g Daniel Bemsen Akosu",
    type: "text",
    name: "fullName",
    label: "Full Name",
    rules: {
      required: "Full Name is required.",
    },
  },
];

export { loginFormInputs, registerFormInputs };
