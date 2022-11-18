import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email")
    .required("Please Enter Your Email"),
  password: Yup.string().required("Please Enter Your Password"),
});

export default loginSchema;
