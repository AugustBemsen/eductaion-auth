type registerTypes = {
  email: string;
  password: string;
  fullName: string;
  userType: "student" | "teacher";
};

export type RegisterFormInputDetails = {
  placeholder: string;
  type: string;
  name: "email" | "password" | "fullName";
  label: string;
  rules: any;
};

export default registerTypes;
