type loginTypes = {
  email: string;
  password: string;
};

export type LoginFormInputDetails = {
  placeholder: string;
  type: string;
  name: "email" | "password";
  label: string;
  rules: any;
};

export default loginTypes;
