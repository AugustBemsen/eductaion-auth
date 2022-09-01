type registerTypes = {
  email: string;
  password: string;
  fullName: string;
  userType: "Student" | "Teacher";
};

export type RegisterFormInputDetails = {
  placeholder: string;
  type: string;
  name: "email" | "password" | "fullName";
  label: string;
  rules: any;
};

export default registerTypes;
