import { LoginFormInputDetails } from "../types/formTypes/loginValues";

// Login form input details
const loginFormInputs: LoginFormInputDetails[] = [
  {
    placeholder: "Email or Username",
    type: "text",
    name: "email",
    rules: {
      required: "Email Field is required.",
    },
  },
  {
    placeholder: "Password",
    type: "password",
    name: "password",
    rules: {
      required: "Password Field is required.",
    },
  },
];

export default loginFormInputs;
