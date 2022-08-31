type loginTypes = {
  email: string;
  name?: string;
  password: string;
  confirmPassword?: string;
};

export type LoginFormInputDetails = {
  placeholder: string;
  type: string;
  name: "email" | "password";
  rules: any;
};

export default loginTypes;
