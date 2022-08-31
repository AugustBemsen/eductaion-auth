type loginTypes = {
  email: string;
  name?: string;
  password: string;
  label: string;
};

export type LoginFormInputDetails = {
  placeholder: string;
  type: string;
  name: "email" | "password";
  label: string;
  rules: any;
};

export default loginTypes;
