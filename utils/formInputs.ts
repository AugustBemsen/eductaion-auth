import { LoginFormInputDetails } from "../types/formTypes/loginValues";

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

export default loginFormInputs;
